#!/usr/bin/env python3
"""Extract text, embedded images, and rendered page regions from a NY Regents exam PDF.

This is the mechanical first stage of the regents-exam-quiz-builder pipeline. It does
not understand questions — it just gets every piece of source material off the PDF and
onto disk so the deck can be authored against real text and real images.

Usage
-----
    extract_pdf.py EXAM.pdf --out DIR
    extract_pdf.py EXAM.pdf --out DIR --render 18:76,98,522,342@3 --render 23@2

Outputs (under DIR)
-------------------
    text.txt          full text layer, one "===== PAGE n =====" banner per page
    raw/pNN-i.EXT     every embedded raster image, in PDF reading order
    render/pNN.png    page (or cropped region) renders requested via --render
    manifest.json     per-page summary: text length, embedded images, renders

--render SPEC
-------------
Vector figures (line graphs, maps drawn with strokes) are NOT embedded rasters, so
`raw/` will not contain them. Render the page — or a tight crop of it — instead.

    PAGE                      whole page at 2x
    PAGE@3                    whole page at 3x
    PAGE:x0,y0,x1,y1          crop (PDF points, origin top-left) at 2x
    PAGE:x0,y0,x1,y1@3        crop at 3x

Find crop coordinates by rendering the whole page once, eyeballing the figure box, and
reading points off it (PDF points = 1/72 inch; US Letter is 612x792).

Requires PyMuPDF:  pip install pymupdf
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path


def parse_render_spec(spec: str):
    """'18:76,98,522,342@3' -> (page1based, clip_or_None, scale)."""
    scale = 2.0
    if "@" in spec:
        spec, scale_s = spec.rsplit("@", 1)
        scale = float(scale_s)
    clip = None
    if ":" in spec:
        page_s, rect_s = spec.split(":", 1)
        nums = [float(n) for n in rect_s.split(",")]
        if len(nums) != 4:
            raise ValueError(f"--render crop needs 4 numbers, got {rect_s!r}")
        clip = nums
    else:
        page_s = spec
    return int(page_s), clip, scale


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("pdf", type=Path, help="path to the Regents exam PDF")
    ap.add_argument("--out", type=Path, required=True, help="output directory (created if absent)")
    ap.add_argument("--render", action="append", default=[], metavar="SPEC",
                    help="render a page or crop (repeatable); see --render docs")
    ap.add_argument("--min-image-bytes", type=int, default=2048,
                    help="skip embedded images smaller than this (rules, bullets); default 2048")
    args = ap.parse_args(argv)

    try:
        import fitz  # PyMuPDF
    except ImportError:
        sys.exit("PyMuPDF is required:  pip install pymupdf")

    if not args.pdf.exists():
        sys.exit(f"no such PDF: {args.pdf}")

    out = args.out
    (out / "raw").mkdir(parents=True, exist_ok=True)
    doc = fitz.open(args.pdf)

    manifest = {"pdf": str(args.pdf), "pages": len(doc), "text": "text.txt",
                "page_summary": [], "images": [], "renders": []}

    # text layer
    with (out / "text.txt").open("w", encoding="utf-8") as fh:
        for i, page in enumerate(doc, start=1):
            text = page.get_text()
            fh.write(f"\n===== PAGE {i} =====\n")
            fh.write(text)
            manifest["page_summary"].append(
                {"page": i, "text_chars": len(text.strip()),
                 "embedded_images": len(page.get_images(full=True))})

    # embedded raster images
    for i, page in enumerate(doc, start=1):
        for j, info in enumerate(page.get_images(full=True)):
            xref = info[0]
            img = doc.extract_image(xref)
            if len(img["image"]) < args.min_image_bytes:
                continue
            name = f"raw/p{i:02d}-{j}.{img['ext']}"
            (out / name).write_bytes(img["image"])
            manifest["images"].append(
                {"file": name, "page": i, "w": img["width"], "h": img["height"],
                 "bytes": len(img["image"])})
            print(f"image  {name:22s} {img['width']}x{img['height']}  {len(img['image'])//1024}KB")

    # requested renders (for vector figures)
    if args.render:
        (out / "render").mkdir(exist_ok=True)
    for spec in args.render:
        page1, clip, scale = parse_render_spec(spec)
        page = doc[page1 - 1]
        kw = {"matrix": fitz.Matrix(scale, scale)}
        if clip:
            kw["clip"] = fitz.Rect(*clip)
        pix = page.get_pixmap(**kw)
        name = f"render/p{page1:02d}.png"
        pix.save(out / name)
        manifest["renders"].append({"file": name, "page": page1, "clip": clip, "scale": scale,
                                    "w": pix.width, "h": pix.height})
        print(f"render {name:22s} {pix.width}x{pix.height}  (page {page1}, scale {scale})")

    (out / "manifest.json").write_text(json.dumps(manifest, indent=2))
    print(f"\n{len(doc)} pages, {len(manifest['images'])} images, "
          f"{len(manifest['renders'])} renders -> {out}")
    print(f"read {out / 'text.txt'} to map questions to their stimuli")


if __name__ == "__main__":
    main()

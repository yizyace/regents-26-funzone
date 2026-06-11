#!/usr/bin/env python3
"""Process raw extracted images into web-ready stimulus assets.

Turns the bulky originals from extract_pdf.py (and any page renders) into the
right-sized, right-format files the deck references under img/. The format rule
matters: halftone photos compress well as JPEG, but maps/cartoons/charts have fine
lines and small type that JPEG turns to mush, so they stay PNG.

Plan (JSON list)
----------------
    [
      {"src": "raw/p05-0.png", "out": "img/q07-homestead-certificate.jpg", "kind": "photo"},
      {"src": "raw/p23-0.png", "out": "img/q30-great-lakes-shipping.png",  "kind": "lineart"},
      {"src": "render/p18.png", "out": "img/q29-depression-graphs.png",     "kind": "as-is"}
    ]

kind:
    photo    JPEG, fit within `max` px (default 1600), quality `q` (default 86)
    lineart  PNG,  fit within `max` px (default 2000) -- maps, cartoons, charts;
             kept large because fine lines and small labels need the resolution
             and line art stays tiny as PNG regardless
    as-is    copied unchanged -- already a tight crop/render

Per-item "max" and "q" override the defaults.

Usage
-----
    process_images.py --plan plan.json --src-root EXTRACT_DIR --out-root REPO_DIR

Requires Pillow:  pip install pillow
"""
from __future__ import annotations

import argparse
import json
import shutil
import sys
from pathlib import Path

DEFAULTS = {"photo": {"max": 1600, "q": 86}, "lineart": {"max": 2000}, "as-is": {}}


def process(item, src_root: Path, out_root: Path):
    kind = item.get("kind", "photo")
    if kind not in DEFAULTS:
        sys.exit(f"unknown kind {kind!r} for {item['src']}")
    src = src_root / item["src"]
    dest = out_root / item["out"]
    dest.parent.mkdir(parents=True, exist_ok=True)

    if kind == "as-is":
        shutil.copyfile(src, dest)
        return f"{dest.name:36s} copied"

    from PIL import Image
    im = Image.open(src)
    cap = item.get("max", DEFAULTS[kind]["max"])
    if max(im.size) > cap:
        im.thumbnail((cap, cap), Image.LANCZOS)
    if kind == "photo":
        im.convert("RGB").save(dest, "JPEG", quality=item.get("q", DEFAULTS["photo"]["q"]),
                               optimize=True, progressive=True)
    else:  # lineart
        im.save(dest, "PNG", optimize=True)
    return f"{dest.name:36s} {kind:8s} {im.size[0]}x{im.size[1]}"


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--plan", type=Path, required=True, help="JSON list of image items")
    ap.add_argument("--src-root", type=Path, required=True, help="extract dir (holds raw/, render/)")
    ap.add_argument("--out-root", type=Path, required=True, help="repo dir (img/ written under it)")
    args = ap.parse_args(argv)

    plan = json.loads(args.plan.read_text())
    for item in plan:
        print(process(item, args.src_root, args.out_root))
    print(f"\n{len(plan)} images -> {args.out_root / 'img'}")


if __name__ == "__main__":
    main()

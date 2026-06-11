#!/usr/bin/env python3
"""Render the quiz-show / flash-card / landing templates for one subject.

Substitutes {{TOKEN}} placeholders in templates/*.tmpl.html from a subject config
and writes the finished HTML into a target directory. cards.js and img/ are produced
by the rest of the pipeline (extract -> author -> process) and are NOT touched here,
so this is safe to re-run when only the chrome (titles, intro, prizes) changes.

Usage
-----
    scaffold_app.py --config subject.json --templates DIR --out DIR

Each `foo.tmpl.html` becomes `foo.html` in --out. Every {{TOKEN}} must have a
matching lower-case key in the config or the run fails loudly — a missing token is
how you find a subject string you forgot to set, not a silent "U.S. History" leak.

See templates/subject.us-history.json for the full key set and references/subjects.md
for how to fill it in for a new subject.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

TOKEN = re.compile(r"\{\{(\w+)\}\}")


def render(template: str, config: dict) -> str:
    def sub(m):
        key = m.group(1).lower()
        if key not in config:
            raise KeyError(m.group(0))
        return str(config[key])
    return TOKEN.sub(sub, template)


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--config", type=Path, required=True, help="subject config JSON")
    ap.add_argument("--templates", type=Path, required=True, help="dir holding *.tmpl.html")
    ap.add_argument("--out", type=Path, required=True, help="target dir for finished HTML")
    args = ap.parse_args(argv)

    config = json.loads(args.config.read_text(encoding="utf-8"))
    args.out.mkdir(parents=True, exist_ok=True)

    templates = sorted(args.templates.glob("*.tmpl.html"))
    if not templates:
        sys.exit(f"no *.tmpl.html in {args.templates}")

    for tpl in templates:
        try:
            html = render(tpl.read_text(encoding="utf-8"), config)
        except KeyError as missing:
            sys.exit(f"{tpl.name}: no config value for {missing.args[0]}")
        leftover = TOKEN.findall(html)
        if leftover:
            sys.exit(f"{tpl.name}: unresolved tokens {leftover}")
        dest = args.out / tpl.name.replace(".tmpl.html", ".html")
        dest.write_text(html, encoding="utf-8")
        print(f"wrote {dest}")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Emit a per-session scaffold config for a Comprehensive Spanish Regents session.

    spanish_session_config.py --session jun2011 --mc 40 --self 3 [--out cfg.json]

Fills templates/subject.spanish.json's {SESSION_LONG}/{SESSION_SHORT}/{MC}/{SELF}/
{TOTAL}/{MC_MINUS_1} placeholders from the session slug and deck counts, drops the
_comment key, and prints (or writes) JSON ready for scaffold_app.py.
"""
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

MONTHS = {"jan": "January", "jun": "June", "aug": "August"}


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--session", required=True, help="slug like jun2011")
    ap.add_argument("--mc", type=int, required=True, help="mc card count")
    ap.add_argument("--self", dest="self_n", type=int, required=True, help="self card count")
    ap.add_argument("--base", type=Path, default=Path(__file__).parent.parent / "templates" / "subject.spanish.json")
    ap.add_argument("--out", type=Path, default=None)
    args = ap.parse_args(argv)

    m = re.fullmatch(r"(jan|jun|aug)(\d{4})", args.session)
    if not m:
        raise SystemExit(f"bad session slug: {args.session}")
    mon, yr = m.groups()
    subs = {
        "{SESSION_LONG}": f"{MONTHS[mon]} {yr}",
        "{SESSION_SHORT}": f"{MONTHS[mon][:3]} {yr}",
        "{MC}": str(args.mc),
        "{SELF}": str(args.self_n),
        "{TOTAL}": str(args.mc + args.self_n),
        "{MC_MINUS_1}": str(args.mc - 1),
    }
    cfg = json.loads(args.base.read_text(encoding="utf-8"))
    cfg.pop("_comment", None)
    out = {}
    for k, v in cfg.items():
        for a, b in subs.items():
            v = v.replace(a, b)
        out[k] = v
    text = json.dumps(out, ensure_ascii=False, indent=2) + "\n"
    if args.out:
        args.out.write_text(text, encoding="utf-8")
        print(f"wrote {args.out}")
    else:
        print(text, end="")


if __name__ == "__main__":
    main()

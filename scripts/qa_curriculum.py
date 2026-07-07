#!/usr/bin/env python3
"""
Structural QA checker for C1/C2 curriculum files.

Every real defect caught by hand across the C1/C2 build (rotation-order
bugs, domain-wording drift, a near-revived dropped domain, invented
simulator-pattern names) was mechanically checkable against the agreed
spec. This script encodes that spec once and checks any curriculum file
against it, so future edits (by Perplexity or anyone) get caught before
being saved, instead of relying on re-reading the whole file by hand.

Usage:
    python3 scripts/qa_curriculum.py docs/curriculum/c1-adults.md
    python3 scripts/qa_curriculum.py --all
    python3 scripts/qa_curriculum.py --print-spec c1-adults
"""

import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
CURRICULUM_DIR = REPO_ROOT / "docs" / "curriculum"

CANONICAL_PATTERNS = [
    "Timed Opinion Turn",
    "Rapid Reformulation",
    "Challenge & Pushback",
    "Negotiated Decision",
    "Mediation Brief",
]

SPEC = {
    "c1-adults.md": {
        "track": "Adults C1",
        "units": [
            {"n": 1, "domain": "Argument and Disagreement", "mode_order": ["Performance", "Model", "Output"]},
            {"n": 2, "domain": "Mediation and Synthesis", "mode_order": ["Model", "Output", "Performance"]},
            {"n": 3, "domain": "Professional and Formal Writing", "mode_order": ["Output", "Performance", "Model"]},
            {"n": 4, "domain": "Presentation and Briefing", "mode_order": ["Performance", "Model", "Output"]},
            {"n": 5, "domain": "Problem-Solving and Negotiation", "mode_order": ["Model", "Output", "Performance"]},
            {"n": 6, "domain": "Register, Nuance, and Diplomatic Control", "mode_order": ["Output", "Performance", "Model"]},
        ],
    },
    "c2-adults.md": {
        "track": "Adults C2",
        "units": [
            {"n": 1, "domain": "High-Stakes Argument and Rebuttal", "mode_order": ["Performance", "Model", "Output"]},
            {"n": 2, "domain": "Advanced Mediation and Synthesis", "mode_order": ["Model", "Output", "Performance"]},
            {"n": 3, "domain": "Executive Writing and Concise Professional Communication", "mode_order": ["Output", "Performance", "Model"]},
            {"n": 4, "domain": "High-Impact Presentation, Briefing, and Q&A", "mode_order": ["Performance", "Model", "Output"]},
            {"n": 5, "domain": "Strategic Diplomacy, Tone, and Stance Management", "mode_order": ["Model", "Output", "Performance"]},
        ],
    },
    "c1-teens.md": {
        "track": "Teens C1",
        "units": [
            {"n": 1, "domain": "Argument, Debate, and Respectful Disagreement", "mode_order": ["Performance", "Model", "Output"]},
            {"n": 2, "domain": "Mediation, Source Comparison, and Summaries", "mode_order": ["Model", "Output", "Performance"]},
            {"n": 3, "domain": "Presentations, School Talks, and Discussions", "mode_order": ["Output", "Performance", "Model"]},
            {"n": 4, "domain": "Register, Tone, and Audience Awareness", "mode_order": ["Performance", "Model", "Output"]},
            {"n": 5, "domain": "Peer Negotiation and Problem-Solving", "mode_order": ["Model", "Output", "Performance"]},
            {"n": 6, "domain": "Identity, Social Issues, and Self-Expression", "mode_order": ["Output", "Performance", "Model"]},
        ],
    },
}

UNIT_HEADER_RE = re.compile(r"^#\s*Unit\s+(\d+):\s*(.+?)\s*$")
MODE_ORDER_RE = re.compile(r"^###\s*Mode order:\s*(.+?)\s*$")
TABLE_ROW_RE = re.compile(r"^\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*(.+?)\s*\|$")


def parse_units(text):
    units = []
    current = None
    for raw_line in text.splitlines():
        line = raw_line.strip()

        m = UNIT_HEADER_RE.match(line)
        if m:
            if current:
                units.append(current)
            current = {
                "n": int(m.group(1)),
                "domain": m.group(2).strip(),
                "mode_order": None,
                "lessons": [],
            }
            continue

        m = MODE_ORDER_RE.match(line)
        if m and current is not None:
            current["mode_order"] = [s.strip() for s in m.group(1).split("→")]
            continue

        m = TABLE_ROW_RE.match(line)
        if m and current is not None:
            lesson_n = int(m.group(1))
            dominant_mode = m.group(2).strip()
            patterns = m.group(3).strip()
            current["lessons"].append({"n": lesson_n, "mode": dominant_mode, "patterns": patterns})
            continue

    if current:
        units.append(current)
    return units


def check_file(filename):
    path = CURRICULUM_DIR / filename
    errors = []
    warnings = []

    if filename not in SPEC:
        return [f"No spec registered for {filename} — add it to SPEC before QA-ing this file."], []

    spec = SPEC[filename]
    text = path.read_text()
    units = parse_units(text)

    expected_units = spec["units"]
    if len(units) != len(expected_units):
        errors.append(
            f"[{filename}] expected {len(expected_units)} units for {spec['track']}, found {len(units)}"
        )

    seen_domains = {}
    for actual, expected in zip(units, expected_units):
        label = f"[{filename}] Unit {expected['n']}"

        if actual["n"] != expected["n"]:
            errors.append(f"{label}: unit number in file is {actual['n']}, expected {expected['n']}")

        if actual["domain"] != expected["domain"]:
            errors.append(
                f"{label}: domain name mismatch — file has \"{actual['domain']}\", "
                f"spec has \"{expected['domain']}\""
            )

        if actual["domain"] in seen_domains:
            errors.append(
                f"{label}: domain \"{actual['domain']}\" is a duplicate of Unit {seen_domains[actual['domain']]} "
                f"— possible dropped/revived domain"
            )
        else:
            seen_domains[actual["domain"]] = actual["n"]

        if actual["mode_order"] != expected["mode_order"]:
            errors.append(
                f"{label}: '### Mode order' header says {actual['mode_order']}, "
                f"expected {expected['mode_order']}"
            )

        if len(actual["lessons"]) != 9:
            errors.append(f"{label}: found {len(actual['lessons'])} lesson rows, expected 9")

        lesson_numbers = [l["n"] for l in actual["lessons"]]
        if lesson_numbers != list(range(1, len(lesson_numbers) + 1)):
            errors.append(f"{label}: lesson numbers out of order/missing: {lesson_numbers}")

        for l in actual["lessons"]:
            block = (l["n"] - 1) // 3
            expected_mode = expected["mode_order"][block] if block < len(expected["mode_order"]) else None
            if expected_mode and l["mode"] != expected_mode:
                errors.append(
                    f"{label}, Lesson {l['n']}: dominant mode is \"{l['mode']}\", "
                    f"expected \"{expected_mode}\" per the {expected['mode_order']} rotation "
                    f"(this is the exact class of bug caught in Adults C1 Units 2/5)"
                )

            if not any(p in l["patterns"] for p in CANONICAL_PATTERNS):
                warnings.append(
                    f"{label}, Lesson {l['n']}: patterns field \"{l['patterns']}\" does not contain "
                    f"any of the five canonical Speaking Simulator patterns — check for an invented/renamed pattern"
                )

    return errors, warnings


def print_spec(track_key):
    filename = track_key if track_key.endswith(".md") else f"{track_key}.md"
    if filename not in SPEC:
        print(f"No spec for '{track_key}'. Known: {', '.join(k[:-3] for k in SPEC)}")
        return
    spec = SPEC[filename]
    print(f"## {spec['track']} — canonical unit/domain/mode-order table\n")
    print("| Unit | Domain | Mode order |")
    print("|---|---|---|")
    for u in spec["units"]:
        print(f"| {u['n']} | {u['domain']} | {' → '.join(u['mode_order'])} |")
    print(f"\nCanonical Speaking Simulator patterns: {', '.join(CANONICAL_PATTERNS)}")


def main():
    args = sys.argv[1:]

    if args and args[0] == "--print-spec":
        print_spec(args[1] if len(args) > 1 else "")
        return

    if args and args[0] == "--all":
        targets = list(SPEC.keys())
    elif args:
        targets = [Path(a).name for a in args]
    else:
        print(__doc__)
        sys.exit(1)

    total_errors = 0
    total_warnings = 0
    for filename in targets:
        errors, warnings = check_file(filename)
        if not errors and not warnings:
            print(f"OK  {filename}: all units, domains, mode-rotation, and lesson counts match spec.")
        for e in errors:
            print(f"ERROR  {e}")
        for w in warnings:
            print(f"WARN   {w}")
        total_errors += len(errors)
        total_warnings += len(warnings)

    print(f"\n{len(targets)} file(s) checked — {total_errors} error(s), {total_warnings} warning(s).")
    sys.exit(1 if total_errors else 0)


if __name__ == "__main__":
    main()

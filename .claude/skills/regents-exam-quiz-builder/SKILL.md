---
name: regents-exam-quiz-builder
description: >-
  Turn a New York State Regents exam PDF into (or extend) a subject-specific
  flash-card + quiz-show web app, with the exam's real passages, photos,
  cartoons, maps, and charts wired into each question. Use when given a Regents
  exam PDF and asked to build/import/extract its questions into a quiz or
  flashcard app, route a new subject (Earth Science, Living Environment, Global
  History, Algebra, …) to its own repo, or add an exam to an existing Regents
  quiz repo. Keywords: Regents, exam PDF, flashcards, quiz show, stimulus,
  document-based question.
---

# Regents exam → quiz-app builder

Produces a small, dependency-free study site from one Regents exam PDF: a money-ladder
**quiz show** (`quizshow.html`), a **flash-card** drill of the full deck
(`flashcards.html`), and a **landing page** (`index.html`), all sharing one `cards.js`
plus an `img/` folder of the exam's documents. The canonical reference build is
`regents-26-funzone` (Jan 2026 U.S. History).

The whole point is that **stimulus-based questions keep their stimulus.** A Regents item
that says "Base your answers on the cartoon below" is impossible to answer as a bare
stem — extracting the passages and images and wiring them to the right questions is the
job, not a nice-to-have.

## When to use

- A Regents exam PDF needs to become a playable quiz/flashcard app.
- A new subject should get its own repo (see `references/subjects.md` for routing).
- A new session should be added to an existing subject's repo.

Not for: non-Regents quizzes, or hand-authored decks with no source PDF (though the
`cards.js` schema and templates still apply).

## Pipeline

Work in a scratch dir for extraction; never commit it (`.gitignore` already excludes
`/extract-tmp/`).

**0. Identify and route.** Read PAGE 1 of the extracted text for subject + session.
Pick the target repo from `references/subjects.md` — extend it if it exists, else create
`regents-<slug>-funzone`.

**1. Extract.** 
```
scripts/extract_pdf.py EXAM.pdf --out extract-tmp
```
Gets the text layer (`text.txt`), every embedded raster (`raw/`), and a `manifest.json`.

**2. Map questions to stimuli.** Read `text.txt`. For each question, note its stem, the
four choices, and which document it depends on ("Base your answers to questions 7 and 8
on the certificate below"). Match `raw/` images to questions by page. Vector figures
(line graphs, stroked maps) are **not** in `raw/` — re-run with `--render PAGE:x0,y0,x1,y1@3`
to capture them.

**3. Process images.** Write an image plan (src → out → kind) and run:
```
scripts/process_images.py --plan plan.json --src-root extract-tmp --out-root .
```
`photo` for halftone photos/posters, `lineart` for maps/cartoons/charts, `as-is` for
crops you rendered. Name files `img/qNN-slug.ext` (NN = first question using it).

**4. Author `cards.js`.** Follow `references/card-schema.md`: a `STIMULI` map of
documents, then `ALL_CARDS` where each card spreads its stimulus (`...STIMULI.key`).
Restore the exam's real stems. **Verify every `answer` against the official scoring
key** — guessing teaches the wrong fact. `templates/cards.example.js` is a worked sample.

**5. Scaffold the apps.** For a new repo, copy the three templates' output:
```
scripts/scaffold_app.py --config subject.json --templates templates --out .
```
Fill `subject.json` from `templates/subject.us-history.json` (every `{{TOKEN}}` must be
set — a missing one fails the run rather than leaking "U.S. History"). Theme the
money-ladder `qs_prizes` to the subject. For an existing repo, just drop in the new
`cards.js` + `img/`.

**6. Verify in a browser — do not skip.** Serve the dir (`python3 -m http.server`) and
open the quiz. Confirm a media question actually renders its image (check an `<img>` has
`naturalWidth > 0`, not just that markup exists) and that correct answers score as
correct. This is the step that catches the original bug.

**7. Ship.** Commit atomically, push, open a PR, and merge per the user's workflow.
Optionally enable GitHub Pages (root) so it's playable at a URL.

## Files

- `scripts/extract_pdf.py` — text + image + vector-render extraction (PyMuPDF).
- `scripts/process_images.py` — raw images → sized web assets (Pillow).
- `scripts/scaffold_app.py` — fill templates from a subject config.
- `templates/*.tmpl.html` — the three apps, subject strings tokenized.
- `templates/subject.us-history.json` — worked config; regenerates the reference build
  byte-for-byte.
- `templates/cards.example.js` — worked deck sample.
- `references/card-schema.md` — the `cards.js` contract.
- `references/subjects.md` — exam identification, repo routing, question pools.

## Dependencies

`pip install pymupdf pillow`, ImageMagick optional for ad-hoc inspection, `gh` for repo
creation and PRs.

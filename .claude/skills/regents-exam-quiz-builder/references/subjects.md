# Subject identification and repo routing

## Identify the exam from page 1

The first page carries the subject and session, e.g.:

> REGENTS HIGH SCHOOL EXAMINATION · UNITED STATES HISTORY AND GOVERNMENT ·
> Wednesday, January 21, 2026

`extract_pdf.py` writes this to `text.txt` (PAGE 1). Read it; do not guess from the
filename.

## One repo per subject

Each subject gets its own repo so decks stay focused and a student can drill exactly
one Regents. Naming convention:

| Subject (Regents)                         | Repo slug                      |
|-------------------------------------------|--------------------------------|
| U.S. History & Government                  | `regents-ushistory-funzone` *  |
| Global History & Geography II              | `regents-globalhistory-funzone`|
| Living Environment (Biology)               | `regents-livingenv-funzone`    |
| Earth Science (Physical Setting)           | `regents-earthsci-funzone`     |
| Chemistry (Physical Setting)               | `regents-chemistry-funzone`    |
| Physics (Physical Setting)                 | `regents-physics-funzone`      |
| Algebra I / Geometry / Algebra II          | `regents-algebra1-funzone`, …  |
| English Language Arts                      | `regents-ela-funzone`          |

\* The first build of this project lives in `regents-26-funzone`; treat that repo as the
U.S. History home and the canonical template source. New subjects get a fresh repo.

**Routing decision:**
- Repo for this subject **exists** → add the exam as a session subdirectory
  (`<mon><yr>/`, e.g. `aug2025/`) holding its own scaffolded apps, `cards.js`, and
  `img/`, and link it from a root `index.html` hub. Keeps every earlier session playable
  at its original URL; never overwrite the root deck. See SKILL.md step 5.
- Repo **does not exist** → create `regents-<slug>-funzone` and scaffold from the
  templates.

## Where the question pools are

The extractor pulls everything; you decide what becomes a card. Typical structure — but
**confirm against the actual PDF's Part banners**, since formats drift between sessions
and subjects:

| Subject            | `type: "mc"` pool                 | `type: "self"` pool                              |
|--------------------|-----------------------------------|--------------------------------------------------|
| U.S. History & Gov | Part I — 28 MC                    | Part II 2 SEQ sets · Part III 6 short-answer + essay |
| Global History II  | Part I — 28 MC                    | Part II CRQ sets · Part III Enduring Issues essay |
| Living Environment | Part A + B-1 MC (~30–40)          | Part B-2 / C / D constructed response            |
| Earth Science      | Part A + B-1 MC (~50)             | Part B-2 / C constructed response (Lab test is separate, not in this PDF) |
| Chemistry / Physics| Part A + B-1 MC (~50)             | Part B-2 / C constructed response                |
| Algebra / Geometry | Part I — 24 MC                    | Parts II–IV constructed response                 |
| ELA                | (passage-based MC)                | source/argument/text-analysis essays             |

The science and math exams are MC-heavy with many embedded diagrams, charts, and maps —
expect `extract_pdf.py` to surface more images and more `--render` regions than the
history exams, and lean on the `lineart` image kind.

## Bootstrapping a new subject repo

1. `gh repo create regents-<slug>-funzone --private --clone` (private by default; it's
   coursework — make it public only on request).
2. Run the pipeline (see `SKILL.md`): extract → process images → author `cards.js` →
   `scaffold_app.py` with a subject config → verify in a browser.
3. Commit, push, open a PR, and merge per the user's workflow.
4. Optional: enable GitHub Pages (root) so the quiz is playable at a URL, matching
   `regents-26-funzone`.

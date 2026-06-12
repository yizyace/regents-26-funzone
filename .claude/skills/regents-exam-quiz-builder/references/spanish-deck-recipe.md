# Comprehensive Spanish session — worker recipe

You are building ONE session deck at `spanish/<sess>/` (e.g. `spanish/jun2011/`) from
the three committed PDFs in `raw-docs/nysedregents.org/spanish/<sess>/`:
`exam.pdf` (Parts 2–4 booklet), `tdc.pdf` (Teacher Dictation Copy — the listening
passages), `key.pdf` (scoring key / rating guide). General schema rules live in
`references/card-schema.md`; this file is the Spanish-specific delta. Read both.

**Write boundary: `spanish/<sess>/**` only.** Never touch the hub, templates,
other sessions, or raw-docs. MuPDF "ICC profile" stderr noise is non-fatal — ignore it.

## Exam anatomy (confirm against the actual Part banners — formats drift)

- Part 1 Speaking (24 cr) is not in the booklet — nothing to build.
- **Part 2 Listening, Q1–15 (30 cr).** Questions + choices are in `exam.pdf`; the
  passages the teacher reads are ONLY in `tdc.pdf` (each item = an English
  "background" line + a Spanish passage read twice + a spoken question). Subsections
  vary by era: (a) answers in English, (b) answers in Spanish, and in older admins
  (c) the four choices are PICTURES printed in the exam booklet.
- **Part 3 Reading, Q16–30 (30 cr).** (a) long Spanish passage → Q16–20 (Spanish
  choices); (b) realia — ads, notices, schedules, labels → usually one document per
  question (English choices); (c) cloze passage with numbered blanks → Q26–30.
- **Part 4 Writing (16 cr).** 2–4 prompts (notes/narratives/compositions, often
  pick-one options). Every distinct printed prompt becomes one `type:"self"` card.
- Expect exactly **30 official MC (Q1–Q30)**. If the actual exam numbers differ,
  build what is printed and FLAG the deviation in your report.

## Card contract (what "no content lost" means here)

1. **Listening cards Q1–15**: each card's stimulus = its TDC item, formatted as
   `passage` = the Spanish passage (verbatim, with diacritics) preceded by the
   English background line, e.g.
   `passage: \`[Background] Your friend calls about her trip...\n\n[La maestra lee] Acabo de regresar de Madrid...\``
   with `psource: "Teacher Dictation Copy, <Month Year> Comprehensive Spanish Regents"`.
   The spoken question becomes the card stem (restore the printed stem where the
   booklet shows it; otherwise transcribe the TDC question).
2. **Picture-choice items**: crop the exam booklet's 4-picture strip(s) as ONE image
   per question (`--render`), so the printed panel numbers (1)–(4) stay visible.
   `choices: ["Picture 1","Picture 2","Picture 3","Picture 4"]`; `back` names the
   right picture AND describes it ("(2) — the family eating at a restaurant...").
3. **Long passage**: one shared STIMULI entry spread by Q16–20 (and any S-cards on it).
4. **Realia Q21–25**: each question's document rides the card — image via `--render`
   (kind `lineart` for boxed text ads, `photo` for halftones) or, ONLY when the
   realia is plain text with no layout/art, a `passage` reproduction. When in doubt,
   image. Visually READ every processed image before committing it — reject blurry
   or mis-cropped output and re-render.
5. **Cloze Q26–30**: one shared stimulus whose `passage` reproduces the printed
   passage with its numbered blanks (`... me gusta __(26)__ mucho ...`); five cards
   spread it; stem = `"Q26. Which choice best completes blank (26)?"` with the four
   printed Spanish choices.
6. **Writing self cards** (`label` W1, W2, ...): `front` = the printed task verbatim
   (situation + word count + bullet requirements); `back` = a model answer in
   Spanish that would earn full credit, plus one line in English on what the rubric
   wants.
7. **Supplemental S1–S10** (exactly 10, `type:"mc"`, labels `S1`...`S10`, stems
   starting `"S1. "`): author NEW questions that cover content the official items
   skip — extra facts in listening passages, unprobed paragraphs of the long
   passage, other realia details, vocab-in-context from the cloze. Each S-card MUST
   spread a stimulus (passage or image) that makes it answerable on its own, and its
   `back` must explain the answer. Slight overlap with official questions is fine;
   losing content is not.
8. Deck order: Q1–Q30, then W*, then S1–S10. Total = 40 mc + 2–4 self.

## Answers — never guess

- `key.pdf` lists Part 2/3 credit answers. Set every official card's 0-based
  `answer` so `answer + 1 ==` the key digit. ALSO write `spanish/<sess>/key.json`:
  `{"Q1": 3, ..., "Q30": 2}` (ints 1–4, exactly the official digits).
- Scan-era keys (1998–Jan 2000) have no text layer: render the key page(s) at @3
  and read the digits visually. Transcribe carefully — these 30 digits are the
  ground truth the validator enforces.
- S-card answers: you wrote them; the `back` must justify them from the stimulus.

## Pinned pipeline (run from the repo root of YOUR worktree)

```bash
SK=.claude/skills/regents-exam-quiz-builder
RAW=raw-docs/nysedregents.org/spanish/<sess>
python3 $SK/scripts/extract_pdf.py $RAW/exam.pdf --out extract-tmp/exam
python3 $SK/scripts/extract_pdf.py $RAW/tdc.pdf  --out extract-tmp/tdc
python3 $SK/scripts/extract_pdf.py $RAW/key.pdf  --out extract-tmp/key
# read text.txt files; map every question to its stimulus; pick --render regions
python3 $SK/scripts/extract_pdf.py $RAW/exam.pdf --out extract-tmp/exam --render P:x0,y0,x1,y1@3 ...
# (scan-era: render full pages @2.5–3 and transcribe each page to
#  extract-tmp/transcript.txt IMMEDIATELY so re-reads are text, not vision)
# write plan.json; process into the session dir
python3 $SK/scripts/process_images.py --plan plan.json --src-root extract-tmp/exam --out-root spanish/<sess>
git add spanish/<sess>/img && git commit -m "chore(spanish/<sess>): exam image assets"
# author cards.js + key.json, then:
git add spanish/<sess>/cards.js spanish/<sess>/key.json && git commit -m "feat(spanish/<sess>): session deck"
python3 $SK/scripts/spanish_session_config.py --session <sess> --mc 40 --self <N> --out extract-tmp/cfg.json
python3 $SK/scripts/scaffold_app.py --config extract-tmp/cfg.json --templates $SK/templates --out spanish/<sess>
node $SK/scripts/validate_deck.mjs --min-mc 40 --min-total 42 --require-key --require-html spanish/<sess>
git add spanish/<sess> && git commit -m "feat(spanish/<sess>): scaffolded apps"
```

The validator MUST pass before your final commit. `extract-tmp/` is gitignored —
never commit it.

## Authoring gotchas

- cards.js passages use backtick template literals: escape any `` ` `` and `${`
  in source text (plain `$ 5.00` prices are fine).
- Preserve Spanish orthography exactly: ¿ ¡ á é í ó ú ñ ü. If the text layer
  garbles a diacritic, fix it from the rendered page image.
- Image files: `img/qNN-slug.ext`, NN = first question using it (`q01`, not `q1`).
- Every `imgs` entry needs `src`, `cap` (caption incl. source), `alt` (screen-reader).
- `stem` must start with the card's `label` + `". "`.

## Final report (returned to the parent — keep it factual)

Branch name; counts (mc/self/total, images); key.json digest (e.g. "Q1–30:
31424 13214 42313 24131 23414 41323"); part structure observed; any deviations,
illegible spots, or uncertain transcriptions. **Do NOT include passage bodies or
question text in the report.**

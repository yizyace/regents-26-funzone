# Card deck schema (`cards.js`)

Both apps load one shared `cards.js`. It defines two globals: a `STIMULI` map of
source documents, and an `ALL_CARDS` array of questions that pull those documents in
by spread. `quizshow.html` uses `ALL_CARDS.filter(c => c.type === 'mc')`;
`flashcards.html` uses the whole array.

## Shape

```js
const STIMULI = {
  robinson: {
    passage: `. . . whereas you are become a body politic [group of citizens] . . .`,
    psource: "John Robinson, Farewell Address to the Pilgrims, August 5, 1620 (adapted)"
  },
  homestead: {
    imgs: [
      { src: "img/q07-homestead-certificate.jpg",
        cap: "Homestead Certificate for Daniel Freeman, 1868",
        alt: "Homestead certificate for Daniel Freeman" }
    ]
  },
  // a stimulus can carry BOTH a passage and imgs (e.g. a doc with a chart)
};

const ALL_CARDS = [
  { ...STIMULI.robinson,                 // <- spread first; shared by Q1 and Q2
    type: "mc",
    label: "Q1",
    stem: "Q1. Based on this excerpt, what is the author's point of view . . .?",
    choices: ["...", "...", "...", "..."],
    answer: 2,                           // 0-based index of the correct choice
    back: "(3) The power to govern belongs to the people — Robinson says . . ."
  },
  { ...STIMULI.seqDepression,
    type: "self",
    label: "Q29",
    front: "Q29 (Part II, SEQ Set 1). Documents: . . . Task: . . .",
    back: "Model answer — Context: the Great Depression . . ."
  }
];
```

## Fields

**STIMULI entry** — keyed by a short camelCase name (`robinson`, `homestead`, `maine`):
- `passage` — verbatim document text. Keep the exam's `. . .` ellipses and `[bracketed
  glosses]`. Newlines are preserved (`white-space: pre-wrap`); use them to separate a
  titled header or multiple excerpts within one stimulus.
- `psource` — the "Source:" attribution line (rendered as `— …`, italic).
- `imgs` — array (one stimulus may show two images, e.g. the USS Maine pair). Each:
  - `src` — `img/qNN-slug.ext`, `NN` = the first question that uses it.
  - `cap` — caption under the image; fold the exam's Source line in here.
  - `alt` — screen-reader description (required; never reuse the caption verbatim if
    the caption is just a citation — describe what the image shows).

**Card** — one object per question:
- `...STIMULI.key` — spread the shared source in first. Paired questions ("Base your
  answers to questions 7 and 8 on …") spread the **same** key into both cards so each
  card stands alone.
- `type` — `"mc"` (Part I multiple choice) or `"self"` (self-graded constructed
  response: short-essay sets, civic-literacy short answers, essays).
- `label` — `"Q1"`; drives display and ordering.
- mc only: `stem` (prefix `"Q1. "`), `choices` (exactly 4), `answer` (0-based), `back`
  (explanation revealed after answering).
- self only: `front` (the task/prompt) and `back` (model answer or outline).

The render code reads `c.passage` / `c.psource` / `c.imgs` directly after the spread —
there is no resolver step, so the spread is what wires a card to its document.

## Rules that keep questions answerable

- **Every stimulus-based question must carry its stimulus.** If the exam says "Base
  your answers … on the passage/photograph/cartoon/map below," the card is unanswerable
  without it. This is the entire reason the skill exists — a deck of bare stems is the
  bug, not the product.
- **Restore the real exam stem.** Once the stimulus is present, the stem is the exam's
  actual wording ("Based on this excerpt, …"), not a paraphrase that smuggles the
  document into parentheses.
- **Verify `answer` against the official scoring key**, not your own reading. An
  off-by-one here silently teaches the wrong fact.

## Image processing (see `scripts/process_images.py`)

- **photo** → JPEG, ≤1600px, q86 — halftone photographs, posters.
- **lineart** → PNG, ≤2000px — maps, cartoons, charts, certificates with fine type.
- **as-is** → copy — page regions you rendered to a tight crop (e.g. vector graphs).

Vector figures (line graphs, stroked maps) are not embedded rasters; render the page
region with `extract_pdf.py --render` and bring them in as `as-is`.

## Per-subject chrome lives in the config, not here

The money-ladder prizes, titles, taglines, intro copy, and the flash-card filter counts
(`All cards (N)`, `Multiple choice only (M)`, `Short answer / essay only (K)`) are set in
the subject config consumed by `scaffold_app.py`. The ladder values themselves auto-scale
to the number of multiple-choice cards.

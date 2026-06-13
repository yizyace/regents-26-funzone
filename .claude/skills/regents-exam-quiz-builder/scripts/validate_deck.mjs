#!/usr/bin/env node
/**
 * Validate one or more session deck directories (cards.js + img/ + scaffolded HTML).
 *
 *   node validate_deck.mjs [flags] DIR [DIR...]
 *
 * Flags:
 *   --min-mc N        minimum "mc" card count          (default 0 = no floor)
 *   --min-total N     minimum total card count         (default 1)
 *   --require-key     DIR/key.json must exist: {"Q1":1..4,...} for every official
 *                     QN mc card, and card.answer+1 must equal the key digit
 *   --require-html    quizshow/flashcards/index.html must exist; flashcard filter
 *                     labels and quiz PRIZES tiers must match actual deck counts
 *
 * Exit 0 = all dirs pass (warnings allowed). Exit 1 = any error.
 */
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const flags = { minMc: 0, minTotal: 1, requireKey: false, requireHtml: false };
const dirs = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === "--min-mc") flags.minMc = parseInt(args[++i], 10);
  else if (a === "--min-total") flags.minTotal = parseInt(args[++i], 10);
  else if (a === "--require-key") flags.requireKey = true;
  else if (a === "--require-html") flags.requireHtml = true;
  else dirs.push(a);
}
if (!dirs.length) { console.error("usage: validate_deck.mjs [flags] DIR..."); process.exit(2); }

function pngSize(buf) {
  if (buf.length < 24 || buf.readUInt32BE(0) !== 0x89504e47) return null;
  return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
}
function jpegSize(buf) {
  if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let i = 2;
  while (i + 9 < buf.length) {
    if (buf[i] !== 0xff) { i++; continue; }
    const m = buf[i + 1];
    if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc)
      return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
    if (m === 0xd8 || (m >= 0xd0 && m <= 0xd9)) { i += 2; continue; }
    i += 2 + buf.readUInt16BE(i + 2);
  }
  return null;
}
function imgSize(file) {
  const buf = fs.readFileSync(file);
  return pngSize(buf) || jpegSize(buf);
}

let anyError = false;
for (const dir of dirs) {
  const errors = [], warnings = [];
  const E = (m) => errors.push(m), W = (m) => warnings.push(m);
  const cardsPath = path.join(dir, "cards.js");

  if (!fs.existsSync(cardsPath)) { E("cards.js missing"); report(dir, errors, warnings); continue; }
  const src = fs.readFileSync(cardsPath, "utf8");
  if (src.includes("�")) E("cards.js contains U+FFFD replacement chars (mojibake)");
  if (/Ã[©­¡³ºñ±]|Â[¿¡]/.test(src)) W("cards.js has utf8-as-latin1 looking sequences (Ã©/Â¿) — check diacritics");

  let STIMULI = null, ALL_CARDS = null;
  try {
    ({ STIMULI, ALL_CARDS } = new Function(
      src + ';return {STIMULI: (typeof STIMULI!=="undefined")?STIMULI:null, ALL_CARDS};'
    )());
  } catch (e) { E(`cards.js failed to evaluate: ${e.message}`); report(dir, errors, warnings); continue; }
  if (!Array.isArray(ALL_CARDS)) { E("ALL_CARDS is not an array"); report(dir, errors, warnings); continue; }

  const mc = ALL_CARDS.filter((c) => c.type === "mc");
  const self = ALL_CARDS.filter((c) => c.type === "self");
  if (mc.length + self.length !== ALL_CARDS.length)
    E(`cards with unknown type: ${ALL_CARDS.length - mc.length - self.length}`);
  if (ALL_CARDS.length < flags.minTotal) E(`only ${ALL_CARDS.length} cards (< ${flags.minTotal})`);
  if (mc.length < flags.minMc) E(`only ${mc.length} mc cards (< ${flags.minMc})`);

  const labels = new Set();
  const referenced = new Set();
  ALL_CARDS.forEach((c, idx) => {
    const id = c.label || `#${idx}`;
    if (!c.label || typeof c.label !== "string") E(`${id}: missing label`);
    else if (labels.has(c.label)) E(`${id}: duplicate label`);
    labels.add(c.label);

    if (c.type === "mc") {
      if (typeof c.stem !== "string" || !c.stem.trim()) E(`${id}: empty stem`);
      else if (c.label && !c.stem.startsWith(c.label + ".")) W(`${id}: stem does not start with "${c.label}."`);
      if (!Array.isArray(c.choices) || c.choices.length !== 4) E(`${id}: needs exactly 4 choices`);
      else c.choices.forEach((ch, j) => { if (typeof ch !== "string" || !ch.trim()) E(`${id}: choice ${j + 1} empty`); });
      if (!Number.isInteger(c.answer) || c.answer < 0 || c.answer > 3) E(`${id}: answer must be int 0..3`);
      if (typeof c.back !== "string" || !c.back.trim()) E(`${id}: empty back (explanation)`);
      if (/^S\d+$/.test(c.label || "") && !c.passage && !(Array.isArray(c.imgs) && c.imgs.length))
        E(`${id}: supplemental card carries no stimulus (passage or imgs)`);
    } else if (c.type === "self") {
      if (typeof c.front !== "string" || !c.front.trim()) E(`${id}: empty front`);
      if (typeof c.back !== "string" || !c.back.trim()) E(`${id}: empty back`);
    }

    if (c.imgs !== undefined) {
      if (!Array.isArray(c.imgs)) { E(`${id}: imgs not an array`); return; }
      c.imgs.forEach((im) => {
        if (!im.src || !/^img\//.test(im.src)) { E(`${id}: img src "${im.src}" must start with img/`); return; }
        referenced.add(im.src);
        const f = path.join(dir, im.src);
        if (!fs.existsSync(f)) { E(`${id}: image file missing: ${im.src}`); return; }
        if (!im.alt || !String(im.alt).trim()) W(`${id}: ${im.src} has no alt text`);
        const sz = imgSize(f);
        if (!sz) W(`${id}: ${im.src} not a parseable PNG/JPEG`);
        else {
          if (Math.max(sz.w, sz.h) < 400) W(`${id}: ${im.src} small (${sz.w}x${sz.h}) — check legibility`);
          if (Math.min(sz.w, sz.h) < 100) E(`${id}: ${im.src} tiny (${sz.w}x${sz.h})`);
        }
      });
    }
  });

  const imgDir = path.join(dir, "img");
  if (fs.existsSync(imgDir)) {
    for (const f of fs.readdirSync(imgDir)) {
      if (f.startsWith(".")) continue;
      if (!referenced.has("img/" + f)) E(`orphan image not referenced by any card: img/${f}`);
    }
  }

  const keyPath = path.join(dir, "key.json");
  if (flags.requireKey || fs.existsSync(keyPath)) {
    if (!fs.existsSync(keyPath)) E("key.json missing (--require-key)");
    else {
      let key;
      try { key = JSON.parse(fs.readFileSync(keyPath, "utf8")); } catch (e) { key = null; E(`key.json unparseable: ${e.message}`); }
      if (key) {
        const qs = Object.keys(key).filter((k) => /^Q\d+$/.test(k));
        if (qs.length !== Object.keys(key).length) E("key.json has non-QN keys");
        for (const [k, v] of Object.entries(key))
          if (!Number.isInteger(v) || v < 1 || v > 4) E(`key.json ${k}=${v} not in 1..4`);
        for (const c of mc) {
          if (!/^Q\d+$/.test(c.label || "")) continue;
          if (!(c.label in key)) E(`${c.label}: no key.json entry`);
          else if (c.answer + 1 !== key[c.label])
            E(`${c.label}: answer ${c.answer + 1} != official key ${key[c.label]}`);
        }
        for (const k of qs)
          if (!mc.some((c) => c.label === k)) W(`key.json ${k} has no matching mc card`);
      }
    }
  }

  if (flags.requireHtml) {
    for (const f of ["quizshow.html", "flashcards.html", "index.html"])
      if (!fs.existsSync(path.join(dir, f))) E(`${f} missing`);
    const fcPath = path.join(dir, "flashcards.html");
    if (fs.existsSync(fcPath)) {
      const fc = fs.readFileSync(fcPath, "utf8");
      const grab = (val) => {
        const m = fc.match(new RegExp(`value="${val}">[^<(]*\\((\\d+)\\)`));
        return m ? parseInt(m[1], 10) : null;
      };
      const all = grab("all"), mcN = grab("mc"), free = grab("free");
      if (all !== null && all !== ALL_CARDS.length) E(`flashcards "all" label says ${all}, deck has ${ALL_CARDS.length}`);
      if (mcN !== null && mcN !== mc.length) E(`flashcards "mc" label says ${mcN}, deck has ${mc.length}`);
      if (free !== null && free !== self.length) E(`flashcards "free" label says ${free}, deck has ${self.length}`);
    }
    const qsPath = path.join(dir, "quizshow.html");
    if (fs.existsSync(qsPath)) {
      const qs = fs.readFileSync(qsPath, "utf8");
      const pm = qs.match(/const PRIZES=\[([\s\S]*?)\];/);
      if (pm) {
        const ats = [...pm[1].matchAll(/at:\s*(\d+)/g)].map((m) => parseInt(m[1], 10));
        if (!ats.length) W("no PRIZES tiers found");
        else {
          if (Math.max(...ats) !== mc.length)
            E(`top prize tier at:${Math.max(...ats)} != mc count ${mc.length} (final trophy unreachable or early)`);
          for (const at of ats) if (at > mc.length) E(`prize tier at:${at} exceeds mc count ${mc.length}`);
        }
      }
    }
  }

  report(dir, errors, warnings, { total: ALL_CARDS.length, mc: mc.length, self: self.length, stimuli: STIMULI ? Object.keys(STIMULI).length : 0, images: referenced.size });
}

function report(dir, errors, warnings, stats) {
  const s = stats ? ` [${stats.total} cards: ${stats.mc} mc + ${stats.self} self · ${stats.stimuli} stimuli · ${stats.images} images]` : "";
  if (errors.length) { anyError = true; console.log(`FAIL ${dir}${s}`); errors.forEach((e) => console.log(`  ERROR ${e}`)); }
  else console.log(`PASS ${dir}${s}`);
  warnings.forEach((w) => console.log(`  warn  ${w}`));
}

process.exit(anyError ? 1 : 0);

// Verb Tenses course registry -- 12 tenses, each with a Discussion (A) and
// a Test/Application (B) lesson. One course under the Grammar category,
// not multiple tailored tracks like FORGE/ASCEND -- so this registry is
// flatter: just the 12 tenses in fixed teaching order, grouped into the 3
// source units (Present/Past/Future) for display.

import t1 from "./vtData1";
import t2 from "./vtData2";
import t3 from "./vtData3";
import t4 from "./vtData4";
import t5 from "./vtData5";
import t6 from "./vtData6";
import t7 from "./vtData7";
import t8 from "./vtData8";
import t9 from "./vtData9";
import t10 from "./vtData10";
import t11 from "./vtData11";
import t12 from "./vtData12";

const TENSES = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12];

export default TENSES;

export function getTense(number) {
  return TENSES.find((t) => t.number === Number(number)) || null;
}

// code like "1A", "7B", "12A"
export function getLessonByCode(code) {
  const match = /^(\d+)([AB])$/i.exec(String(code || "").trim());
  if (!match) return null;
  const tense = getTense(match[1]);
  if (!tense) return null;
  const lesson = match[2].toUpperCase() === "A" ? tense.lessonA : tense.lessonB;
  return { tense, lesson };
}

export function getGroups() {
  const order = ["Unit 1: Present Tenses", "Unit 2: Past Tenses", "Unit 3: Future Tenses"];
  return order.map((title) => ({
    title,
    tenses: TENSES.filter((t) => t.groupTitle === title),
  }));
}

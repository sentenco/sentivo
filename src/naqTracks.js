// Nouns, Articles & Quantifiers course registry -- 5 lessons, each a single
// deck that teaches, practices, and wraps up one rule in one sitting.

import n1 from "./naqData1";
import n2 from "./naqData2";
import n3 from "./naqData3";
import n4 from "./naqData4";
import n5 from "./naqData5";

const LESSONS = [n1, n2, n3, n4, n5];

export default LESSONS;

export function getLessonByCode(code) {
  return LESSONS.find((l) => l.code === String(code || "").trim()) || null;
}

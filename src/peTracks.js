// Punctuation Essentials course registry -- 5 lessons, each a single deck that
// teaches, practices, and wraps up one rule in one sitting.

import p1 from "./peData1";
import p2 from "./peData2";
import p3 from "./peData3";
import p4 from "./peData4";
import p5 from "./peData5";

const LESSONS = [p1, p2, p3, p4, p5];

export default LESSONS;

export function getLessonByCode(code) {
  return LESSONS.find((l) => l.code === String(code || "").trim()) || null;
}

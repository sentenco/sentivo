// Relative Clauses course registry -- 4 lessons, each a single deck that
// teaches, practices, and wraps up one rule in one sitting.

import r1 from "./rcData1";
import r2 from "./rcData2";
import r3 from "./rcData3";
import r4 from "./rcData4";

const LESSONS = [r1, r2, r3, r4];

export default LESSONS;

export function getLessonByCode(code) {
  return LESSONS.find((l) => l.code === String(code || "").trim()) || null;
}

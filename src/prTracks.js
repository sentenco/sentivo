// Prepositions course registry -- 6 lessons, each a single deck that teaches,
// practices, and wraps up one rule in one sitting.

import p1 from "./prData1";
import p2 from "./prData2";
import p3 from "./prData3";
import p4 from "./prData4";
import p5 from "./prData5";
import p6 from "./prData6";

const LESSONS = [p1, p2, p3, p4, p5, p6];

export default LESSONS;

export function getLessonByCode(code) {
  return LESSONS.find((l) => l.code === String(code || "").trim()) || null;
}

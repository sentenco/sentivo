// Conditionals course registry -- 5 lessons, each a single deck that teaches,
// practices, and wraps up one conditional type in one sitting.

import c1 from "./cndData1";
import c2 from "./cndData2";
import c3 from "./cndData3";
import c4 from "./cndData4";
import c5 from "./cndData5";

const LESSONS = [c1, c2, c3, c4, c5];

export default LESSONS;

export function getLessonByCode(code) {
  return LESSONS.find((l) => l.code === String(code || "").trim()) || null;
}

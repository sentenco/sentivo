// Comparatives & Superlatives course registry -- 4 lessons, each a single
// deck that teaches, practices, and wraps up one rule in one sitting.

import c1 from "./csData1";
import c2 from "./csData2";
import c3 from "./csData3";
import c4 from "./csData4";

const LESSONS = [c1, c2, c3, c4];

export default LESSONS;

export function getLessonByCode(code) {
  return LESSONS.find((l) => l.code === String(code || "").trim()) || null;
}

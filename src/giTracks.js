// Gerunds & Infinitives course registry -- 4 lessons, each a single deck
// that teaches, practices, and wraps up one rule in one sitting.

import g1 from "./giData1";
import g2 from "./giData2";
import g3 from "./giData3";
import g4 from "./giData4";

const LESSONS = [g1, g2, g3, g4];

export default LESSONS;

export function getLessonByCode(code) {
  return LESSONS.find((l) => l.code === String(code || "").trim()) || null;
}

// Modals course registry -- 7 lessons, each a single deck that teaches,
// practices, and wraps up one modal function in one sitting.

import m1 from "./mdData1";
import m2 from "./mdData2";
import m3 from "./mdData3";
import m4 from "./mdData4";
import m5 from "./mdData5";
import m6 from "./mdData6";
import m7 from "./mdData7";

const LESSONS = [m1, m2, m3, m4, m5, m6, m7];

export default LESSONS;

export function getLessonByCode(code) {
  return LESSONS.find((l) => l.code === String(code || "").trim()) || null;
}

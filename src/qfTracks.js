// Question Formation course registry -- 4 lessons, each a single deck that
// teaches, practices, and wraps up one question-forming rule in one sitting.

import q1 from "./qfData1";
import q2 from "./qfData2";
import q3 from "./qfData3";
import q4 from "./qfData4";

const LESSONS = [q1, q2, q3, q4];

export default LESSONS;

export function getLessonByCode(code) {
  return LESSONS.find((l) => l.code === String(code || "").trim()) || null;
}

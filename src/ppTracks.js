// Pronouns & Possessives course registry -- 5 lessons, each a single deck
// that teaches, practices, and wraps up one rule in one sitting.

import p1 from "./ppData1";
import p2 from "./ppData2";
import p3 from "./ppData3";
import p4 from "./ppData4";
import p5 from "./ppData5";

const LESSONS = [p1, p2, p3, p4, p5];

export default LESSONS;

export function getLessonByCode(code) {
  return LESSONS.find((l) => l.code === String(code || "").trim()) || null;
}

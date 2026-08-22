// Passive Voice course registry -- 6 lessons, each a single deck that teaches,
// practices, and wraps up one passive form in one sitting.

import p1 from "./pvData1";
import p2 from "./pvData2";
import p3 from "./pvData3";
import p4 from "./pvData4";
import p5 from "./pvData5";
import p6 from "./pvData6";

const LESSONS = [p1, p2, p3, p4, p5, p6];

export default LESSONS;

export function getLessonByCode(code) {
  return LESSONS.find((l) => l.code === String(code || "").trim()) || null;
}

// SPARK Kids trial lessons -- three fixed, standalone 20-minute trial
// classes (not a tailored-track / progression like FORGE, ASCEND, or
// SHIFT). A prospective student takes one of these, not a sequence.

import spark1 from "./sparkData1";
import spark2 from "./sparkData2";
import spark3 from "./sparkData3";

const LESSONS = [spark1, spark2, spark3];

export default LESSONS;

export function getLesson(id) {
  return LESSONS.find((l) => l.id === id) || null;
}

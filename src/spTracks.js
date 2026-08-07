// Sentence Patterns course registry -- 6 lessons, each a single deck that
// teaches, practices, and assesses one pattern (or a compared pair) in one
// sitting. Flatter than vtTracks/posTracks since there's no A/B split here.

import s1 from "./spData1";
import s2 from "./spData2";
import s3 from "./spData3";
import s4 from "./spData4";
import s5 from "./spData5";
import s6 from "./spData6";

const LESSONS = [s1, s2, s3, s4, s5, s6];

export default LESSONS;

export function getLessonByCode(code) {
  return LESSONS.find((l) => l.code === String(code || "").trim()) || null;
}

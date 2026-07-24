// Parts of Speech course registry -- 6 topics, each with a Lesson (A) and an
// Assessment (B) lesson. Mirrors vtTracks.js's flat structure (one course
// under the Grammar category), just without the Present/Past/Future
// sub-grouping since there's no natural subgroup for 6 topics.

import p1 from "./posData1";
import p2 from "./posData2";
import p3 from "./posData3";
import p4 from "./posData4";
import p5 from "./posData5";
import p6 from "./posData6";

const TOPICS = [p1, p2, p3, p4, p5, p6];

export default TOPICS;

export function getTopic(number) {
  return TOPICS.find((t) => t.number === Number(number)) || null;
}

// code like "1A", "3B", "6A"
export function getLessonByCode(code) {
  const match = /^(\d+)([AB])$/i.exec(String(code || "").trim());
  if (!match) return null;
  const topic = getTopic(match[1]);
  if (!topic) return null;
  const lesson = match[2].toUpperCase() === "A" ? topic.lessonA : topic.lessonB;
  return { topic, lesson };
}

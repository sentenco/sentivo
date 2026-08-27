// FORGE tracks: each track is a category (a life domain), containing 8
// lessons, one per real-life situation within that category. Each lesson
// drills a 6-word bank through Callback (lessons 2+ only) -> Word Bank ->
// Personal Connection (one question per word) -> Storytelling -> Wrap-up.

import health1 from "./forgeHealth1";
import health2 from "./forgeHealth2";
import health3 from "./forgeHealth3";
import health4 from "./forgeHealth4";
import health5 from "./forgeHealth5";
import health6 from "./forgeHealth6";
import health7 from "./forgeHealth7";
import health8 from "./forgeHealth8";

const TRACKS = [
  {
    id: "health",
    title: "Health",
    level: "A2-B1",
    audience: ["adults"],
    blurb: "Real situations around clinics, pharmacies, and wellness, one root situation per lesson, word banks you'll actually reach for.",
    lessons: [health1, health2, health3, health4, health5, health6, health7, health8],
  },
];

export default TRACKS;

export function getTrack(trackId) {
  return TRACKS.find((t) => t.id === trackId) || null;
}

export function getLesson(trackId, lessonNum) {
  const track = getTrack(trackId);
  if (!track) return null;
  return track.lessons[lessonNum - 1] || null;
}

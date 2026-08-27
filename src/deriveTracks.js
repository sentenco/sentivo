// DERIVE tracks: each track is a set of word-family lessons. One lesson =
// one word family, drilled across gap-fill sentences (2 per form) until
// every form has been used correctly twice. A track's Hub card links to
// its overview page (DeriveTrack.jsx), which lists its lessons.

import career1 from "./deriveCareer1";
import career2 from "./deriveCareer2";
import career3 from "./deriveCareer3";
import career4 from "./deriveCareer4";
import career5 from "./deriveCareer5";
import career6 from "./deriveCareer6";
import career7 from "./deriveCareer7";
import career8 from "./deriveCareer8";
import career9 from "./deriveCareer9";
import career10 from "./deriveCareer10";

const TRACKS = [
  {
    id: "career",
    title: "Career & Work",
    level: "A2-B1",
    audience: ["adults"],
    blurb: "Word families every professional context uses, one root per lesson, drilled until every form clicks.",
    lessons: [career1, career2, career3, career4, career5, career6, career7, career8, career9, career10],
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

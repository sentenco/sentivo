// DERIVE tracks: each track is a set of word-family lessons. One lesson =
// one word family, drilled across gap-fill sentences (2 per form) until
// every form has been used correctly twice. A track's Hub card links to
// its overview page (DeriveTrack.jsx), which lists its lessons.

import career1 from "./deriveCareer1";

const TRACKS = [
  {
    id: "career",
    title: "Career & Work",
    level: "A2-B1",
    blurb: "Word families every professional context uses, one root per lesson, drilled until every form clicks.",
    lessons: [career1],
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

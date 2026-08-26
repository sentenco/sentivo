// SHIFT tracks: each track is a set of situational, role-based lessons
// tailored to one diagnosed tense-accuracy gap. A track's Library card links
// to its overview page (ShiftTrack.jsx), which lists its lessons; only
// authored lessons are clickable, the rest show as "Coming soon" until
// their content is added here.

import restaurant1 from "./shiftRestaurant1";
import restaurant2 from "./shiftRestaurant2";
import restaurant3 from "./shiftRestaurant3";
import restaurant4 from "./shiftRestaurant4";
import restaurant5 from "./shiftRestaurant5";

const TRACKS = [
  {
    id: "restaurant",
    title: "Restaurant",
    gapFocus: "Spontaneous Tense Accuracy",
    level: "A2-B1",
    audience: ["adults"],
    blurb: "Five restaurant scenes, five role pairs, one tense-accuracy skill trained live in conversation, not in isolated drills.",
    lessons: [restaurant1, restaurant2, restaurant3, restaurant4, restaurant5],
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

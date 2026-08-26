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
import family1 from "./shiftFamily1";
import family2 from "./shiftFamily2";
import family3 from "./shiftFamily3";
import family4 from "./shiftFamily4";
import family5 from "./shiftFamily5";
import school1 from "./shiftSchool1";
import school2 from "./shiftSchool2";
import school3 from "./shiftSchool3";
import school4 from "./shiftSchool4";
import school5 from "./shiftSchool5";

const TRACKS = [
  {
    id: "family",
    title: "Family & Home Life",
    gapFocus: "Spontaneous Tense Accuracy",
    level: "A2-B1",
    audience: ["teens"],
    blurb: "Five family scenes, five role pairs, one tense-accuracy skill trained live in conversation, not in isolated drills.",
    lessons: [family1, family2, family3, family4, family5],
  },
  {
    id: "school",
    title: "School Day",
    gapFocus: "Spontaneous Tense Accuracy",
    level: "A2-B1",
    audience: ["teens"],
    blurb: "Five school scenes, five role pairs, one tense-accuracy skill trained live in conversation, not in isolated drills.",
    lessons: [school1, school2, school3, school4, school5],
  },
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

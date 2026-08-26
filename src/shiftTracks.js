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
import friends1 from "./shiftFriends1";
import friends2 from "./shiftFriends2";
import friends3 from "./shiftFriends3";
import friends4 from "./shiftFriends4";
import friends5 from "./shiftFriends5";
import gaming1 from "./shiftGaming1";
import gaming2 from "./shiftGaming2";
import gaming3 from "./shiftGaming3";
import gaming4 from "./shiftGaming4";
import gaming5 from "./shiftGaming5";
import sports1 from "./shiftSports1";
import sports2 from "./shiftSports2";
import sports3 from "./shiftSports3";
import sports4 from "./shiftSports4";
import sports5 from "./shiftSports5";

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
    id: "friends",
    title: "Friend Group Hangout",
    gapFocus: "Spontaneous Tense Accuracy",
    level: "A2-B1",
    audience: ["teens"],
    blurb: "Five friend-group scenes, five moments together, one tense-accuracy skill trained live in conversation, not in isolated drills.",
    lessons: [friends1, friends2, friends3, friends4, friends5],
  },
  {
    id: "gaming",
    title: "Online & Gaming",
    gapFocus: "Spontaneous Tense Accuracy",
    level: "A2-B1",
    audience: ["teens"],
    blurb: "Five teammate scenes, five gaming moments, one tense-accuracy skill trained live in conversation, not in isolated drills.",
    lessons: [gaming1, gaming2, gaming3, gaming4, gaming5],
  },
  {
    id: "sports",
    title: "Sports Team",
    gapFocus: "Spontaneous Tense Accuracy",
    level: "A2-B1",
    audience: ["teens"],
    blurb: "Five team scenes, five sideline moments, one tense-accuracy skill trained live in conversation, not in isolated drills.",
    lessons: [sports1, sports2, sports3, sports4, sports5],
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

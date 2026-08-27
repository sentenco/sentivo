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

import school1 from "./deriveSchool1";
import school2 from "./deriveSchool2";
import school3 from "./deriveSchool3";
import school4 from "./deriveSchool4";
import school5 from "./deriveSchool5";

import friends1 from "./deriveFriends1";
import friends2 from "./deriveFriends2";
import friends3 from "./deriveFriends3";
import friends4 from "./deriveFriends4";
import friends5 from "./deriveFriends5";

import online1 from "./deriveOnline1";
import online2 from "./deriveOnline2";
import online3 from "./deriveOnline3";
import online4 from "./deriveOnline4";
import online5 from "./deriveOnline5";

import sports1 from "./deriveSports1";
import sports2 from "./deriveSports2";
import sports3 from "./deriveSports3";
import sports4 from "./deriveSports4";
import sports5 from "./deriveSports5";

import family1 from "./deriveFamily1";
import family2 from "./deriveFamily2";
import family3 from "./deriveFamily3";
import family4 from "./deriveFamily4";
import family5 from "./deriveFamily5";

const TRACKS = [
  {
    id: "career",
    title: "Career & Work",
    level: "A2-B1",
    audience: ["adults"],
    blurb: "Word families every professional context uses, one root per lesson, drilled until every form sticks.",
    lessons: [career1, career2, career3, career4, career5, career6, career7, career8, career9, career10],
  },
  {
    id: "school",
    title: "School Life",
    level: "A2-B1",
    audience: ["teens"],
    blurb: "Word families for classroom life, one root per lesson, drilled until every form sticks.",
    lessons: [school1, school2, school3, school4, school5],
  },
  {
    id: "friends",
    title: "Friend Group & Social Life",
    level: "A2-B1",
    audience: ["teens"],
    blurb: "Word families for friendships and group dynamics, one root per lesson, drilled until every form sticks.",
    lessons: [friends1, friends2, friends3, friends4, friends5],
  },
  {
    id: "online",
    title: "Online & Gaming",
    level: "A2-B1",
    audience: ["teens"],
    blurb: "Word families for gaming and social media, one root per lesson, drilled until every form sticks.",
    lessons: [online1, online2, online3, online4, online5],
  },
  {
    id: "sports",
    title: "Sports & Activities",
    level: "A2-B1",
    audience: ["teens"],
    blurb: "Word families for training and team life, one root per lesson, drilled until every form sticks.",
    lessons: [sports1, sports2, sports3, sports4, sports5],
  },
  {
    id: "family",
    title: "Family & Home Life",
    level: "A2-B1",
    audience: ["teens"],
    blurb: "Word families for life at home, one root per lesson, drilled until every form sticks.",
    lessons: [family1, family2, family3, family4, family5],
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

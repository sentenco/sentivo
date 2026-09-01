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
import friends1 from "./forgeFriends1";
import friends2 from "./forgeFriends2";
import friends3 from "./forgeFriends3";
import friends4 from "./forgeFriends4";
import friends5 from "./forgeFriends5";
import friends6 from "./forgeFriends6";
import friends7 from "./forgeFriends7";
import friends8 from "./forgeFriends8";
import school1 from "./forgeSchool1";
import school2 from "./forgeSchool2";
import school3 from "./forgeSchool3";
import school4 from "./forgeSchool4";
import school5 from "./forgeSchool5";
import school6 from "./forgeSchool6";
import school7 from "./forgeSchool7";
import school8 from "./forgeSchool8";
import family1 from "./forgeFamily1";
import family2 from "./forgeFamily2";
import family3 from "./forgeFamily3";
import family4 from "./forgeFamily4";
import family5 from "./forgeFamily5";
import family6 from "./forgeFamily6";
import family7 from "./forgeFamily7";
import family8 from "./forgeFamily8";
import sports1 from "./forgeSports1";
import sports2 from "./forgeSports2";
import sports3 from "./forgeSports3";
import sports4 from "./forgeSports4";
import sports5 from "./forgeSports5";
import sports6 from "./forgeSports6";
import sports7 from "./forgeSports7";
import sports8 from "./forgeSports8";
import gaming1 from "./forgeGaming1";
import gaming2 from "./forgeGaming2";
import gaming3 from "./forgeGaming3";
import gaming4 from "./forgeGaming4";
import gaming5 from "./forgeGaming5";
import gaming6 from "./forgeGaming6";
import gaming7 from "./forgeGaming7";
import gaming8 from "./forgeGaming8";

const TRACKS = [
  {
    id: "health",
    title: "Health",
    level: "A2-B1",
    audience: ["adults"],
    blurb: "Real situations around clinics, pharmacies, and wellness, one root situation per lesson, word banks you'll actually reach for.",
    lessons: [health1, health2, health3, health4, health5, health6, health7, health8],
  },
  {
    id: "friends",
    title: "Friends & Social Life",
    level: "A2-B1",
    audience: ["teens"],
    blurb: "Real situations with friends, from making plans to saying goodbye, one root situation per lesson, word banks you'll actually reach for.",
    lessons: [friends1, friends2, friends3, friends4, friends5, friends6, friends7, friends8],
  },
  {
    id: "school",
    title: "School Life",
    level: "A2-B1",
    audience: ["teens"],
    blurb: "Real situations from class schedules to report cards, one root situation per lesson, word banks you'll actually reach for.",
    lessons: [school1, school2, school3, school4, school5, school6, school7, school8],
  },
  {
    id: "family",
    title: "Family & Home Life",
    level: "A2-B1",
    audience: ["teens"],
    blurb: "Real situations at home, from chores to family trips, one root situation per lesson, word banks you'll actually reach for.",
    lessons: [family1, family2, family3, family4, family5, family6, family7, family8],
  },
  {
    id: "sports",
    title: "Sports & Fitness",
    level: "A2-B1",
    audience: ["teens"],
    blurb: "Real situations on and off the field, from tryouts to championships, one root situation per lesson, word banks you'll actually reach for.",
    lessons: [sports1, sports2, sports3, sports4, sports5, sports6, sports7, sports8],
  },
  {
    id: "gaming",
    title: "Online & Gaming",
    level: "A2-B1",
    audience: ["teens"],
    blurb: "Real situations online, from squad games to streamers, one root situation per lesson, word banks you'll actually reach for.",
    lessons: [gaming1, gaming2, gaming3, gaming4, gaming5, gaming6, gaming7, gaming8],
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

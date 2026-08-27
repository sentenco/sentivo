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

import movies1 from "./deriveMovies1";
import movies2 from "./deriveMovies2";
import movies3 from "./deriveMovies3";
import movies4 from "./deriveMovies4";
import movies5 from "./deriveMovies5";

import finance1 from "./deriveFinance1";
import finance2 from "./deriveFinance2";
import finance3 from "./deriveFinance3";
import finance4 from "./deriveFinance4";
import finance5 from "./deriveFinance5";
import finance6 from "./deriveFinance6";
import finance7 from "./deriveFinance7";
import finance8 from "./deriveFinance8";
import finance9 from "./deriveFinance9";
import finance10 from "./deriveFinance10";

import health1 from "./deriveHealth1";
import health2 from "./deriveHealth2";
import health3 from "./deriveHealth3";
import health4 from "./deriveHealth4";
import health5 from "./deriveHealth5";
import health6 from "./deriveHealth6";
import health7 from "./deriveHealth7";
import health8 from "./deriveHealth8";
import health9 from "./deriveHealth9";
import health10 from "./deriveHealth10";

import travel1 from "./deriveTravel1";
import travel2 from "./deriveTravel2";
import travel3 from "./deriveTravel3";
import travel4 from "./deriveTravel4";
import travel5 from "./deriveTravel5";
import travel6 from "./deriveTravel6";
import travel7 from "./deriveTravel7";
import travel8 from "./deriveTravel8";
import travel9 from "./deriveTravel9";
import travel10 from "./deriveTravel10";

import home1 from "./deriveHome1";
import home2 from "./deriveHome2";
import home3 from "./deriveHome3";
import home4 from "./deriveHome4";
import home5 from "./deriveHome5";
import home6 from "./deriveHome6";
import home7 from "./deriveHome7";
import home8 from "./deriveHome8";
import home9 from "./deriveHome9";
import home10 from "./deriveHome10";

import legal1 from "./deriveLegal1";
import legal2 from "./deriveLegal2";
import legal3 from "./deriveLegal3";
import legal4 from "./deriveLegal4";
import legal5 from "./deriveLegal5";
import legal6 from "./deriveLegal6";
import legal7 from "./deriveLegal7";
import legal8 from "./deriveLegal8";
import legal9 from "./deriveLegal9";
import legal10 from "./deriveLegal10";

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
  {
    id: "movies",
    title: "Movies & Entertainment",
    level: "A2-B1",
    audience: ["teens"],
    blurb: "Word families for film and entertainment, one root per lesson, drilled until every form sticks.",
    lessons: [movies1, movies2, movies3, movies4, movies5],
  },
  {
    id: "finance",
    title: "Finance & Banking",
    level: "A2-B1",
    audience: ["adults"],
    blurb: "Word families for money and banking, one root per lesson, drilled until every form sticks.",
    lessons: [finance1, finance2, finance3, finance4, finance5, finance6, finance7, finance8, finance9, finance10],
  },
  {
    id: "health",
    title: "Health & Wellness",
    level: "A2-B1",
    audience: ["adults"],
    blurb: "Word families for clinics and everyday health, one root per lesson, drilled until every form sticks.",
    lessons: [health1, health2, health3, health4, health5, health6, health7, health8, health9, health10],
  },
  {
    id: "travel",
    title: "Travel & Tourism",
    level: "A2-B1",
    audience: ["adults"],
    blurb: "Word families for trips and travel logistics, one root per lesson, drilled until every form sticks.",
    lessons: [travel1, travel2, travel3, travel4, travel5, travel6, travel7, travel8, travel9, travel10],
  },
  {
    id: "home",
    title: "Home & Property",
    level: "A2-B1",
    audience: ["adults"],
    blurb: "Word families for renting, owning, and maintaining a home, one root per lesson, drilled until every form sticks.",
    lessons: [home1, home2, home3, home4, home5, home6, home7, home8, home9, home10],
  },
  {
    id: "legal",
    title: "Legal & Civic Life",
    level: "A2-B1",
    audience: ["adults"],
    blurb: "Word families for courts, elections, and civic duties, one root per lesson, drilled until every form sticks.",
    lessons: [legal1, legal2, legal3, legal4, legal5, legal6, legal7, legal8, legal9, legal10],
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

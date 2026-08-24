// RELAY tracks: each track is a 5-lesson speaking course tailored to one
// context. A track's Library card links to its overview page
// (RelayTrack.jsx), which lists Lessons 1-5; only authored lessons are
// clickable, the rest show as "Coming soon" until their content is added
// here. Mirrors forgeTracks.js, but capped at 5 lessons per track (not 10).

import relayL1 from "./relayData";
import relayL2 from "./relayData2";
import relayL3 from "./relayData3";
import relayL4 from "./relayData4";
import relayL5 from "./relayData5";
import relayTeensL1 from "./relayTeensData";
import relayTeensL2 from "./relayTeensData2";
import relayTeensL3 from "./relayTeensData3";
import relayTeensL4 from "./relayTeensData4";
import relayTeensL5 from "./relayTeensData5";
import relayTeensGamingL1 from "./relayTeensGamingData";
import relayTeensGamingL2 from "./relayTeensGamingData2";
import relayTeensGamingL3 from "./relayTeensGamingData3";
import relayTeensGamingL4 from "./relayTeensGamingData4";
import relayTeensGamingL5 from "./relayTeensGamingData5";
import relayTeensMoneyL1 from "./relayTeensMoneyData";
import relayTeensMoneyL2 from "./relayTeensMoneyData2";
import relayTeensMoneyL3 from "./relayTeensMoneyData3";
import relayTeensMoneyL4 from "./relayTeensMoneyData4";
import relayTeensMoneyL5 from "./relayTeensMoneyData5";
import relayTeensTravelL1 from "./relayTeensTravelData";
import relayTeensTravelL2 from "./relayTeensTravelData2";
import relayTeensTravelL3 from "./relayTeensTravelData3";
import relayTeensTravelL4 from "./relayTeensTravelData4";
import relayTeensTravelL5 from "./relayTeensTravelData5";
import relayTeensFutureL1 from "./relayTeensFutureData";
import relayTeensFutureL2 from "./relayTeensFutureData2";
import relayTeensFutureL3 from "./relayTeensFutureData3";
import relayTeensFutureL4 from "./relayTeensFutureData4";
import relayTeensFutureL5 from "./relayTeensFutureData5";

const TRACKS = [
  {
    id: "relay-1",
    title: "Everyday Conversations",
    focus: "Small Talk",
    level: "A2",
    audience: "adults",
    blurb: "5 lessons that turn short, complete answers into real back-and-forth exchanges.",
    lessons: [relayL1, relayL2, relayL3, relayL4, relayL5],
  },
  {
    id: "relay-teens-1",
    title: "School & Friends",
    focus: "Small Talk",
    level: "A2",
    audience: "teens",
    blurb: "5 lessons that turn short, complete answers into real back-and-forth exchanges.",
    lessons: [relayTeensL1, relayTeensL2, relayTeensL3, relayTeensL4, relayTeensL5],
  },
  {
    id: "relay-teens-gaming-1",
    title: "Gaming & Online Life",
    focus: "Gaming",
    level: "A2",
    audience: "teens",
    blurb: "5 lessons that turn short, complete answers into real back-and-forth exchanges.",
    lessons: [relayTeensGamingL1, relayTeensGamingL2, relayTeensGamingL3, relayTeensGamingL4, relayTeensGamingL5],
  },
  {
    id: "relay-teens-money-1",
    title: "Part-Time Jobs & Money",
    focus: "Money & Work",
    level: "A2",
    audience: "teens",
    blurb: "5 lessons that turn short, complete answers into real back-and-forth exchanges.",
    lessons: [relayTeensMoneyL1, relayTeensMoneyL2, relayTeensMoneyL3, relayTeensMoneyL4, relayTeensMoneyL5],
  },
  {
    id: "relay-teens-travel-1",
    title: "Travel & Adventures",
    focus: "Travel",
    level: "A2",
    audience: "teens",
    blurb: "5 lessons that turn short, complete answers into real back-and-forth exchanges.",
    lessons: [relayTeensTravelL1, relayTeensTravelL2, relayTeensTravelL3, relayTeensTravelL4, relayTeensTravelL5],
  },
  {
    id: "relay-teens-future-1",
    title: "Future Plans & Ambitions",
    focus: "Future",
    level: "A2",
    audience: "teens",
    blurb: "5 lessons that turn short, complete answers into real back-and-forth exchanges.",
    lessons: [relayTeensFutureL1, relayTeensFutureL2, relayTeensFutureL3, relayTeensFutureL4, relayTeensFutureL5],
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

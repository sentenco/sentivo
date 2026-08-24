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

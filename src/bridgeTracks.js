// BRIDGE tracks: each track is a topic domain, containing 4 lessons. Every
// lesson in a track drills the SAME 3 filler phrases against new hard
// questions on a new topic -- deep repetition of a small toolkit, not
// breadth across many phrases. Mechanic: the phrase is never shown until
// genuinely needed; each lesson closes with an unaided capstone.

import conversations1 from "./bridgeConversations1";
import conversations2 from "./bridgeConversations2";
import conversations3 from "./bridgeConversations3";
import conversations4 from "./bridgeConversations4";
import talkThrough1 from "./bridgeTalkThrough1";
import talkThrough2 from "./bridgeTalkThrough2";
import talkThrough3 from "./bridgeTalkThrough3";
import talkThrough4 from "./bridgeTalkThrough4";

const TRACKS = [
  {
    id: "talk-through-it",
    title: "Talking Through It",
    audience: ["teens"],
    blurb: "The same three catch phrases, drilled against real hard questions across 4 lessons, until reaching for one is automatic.",
    lessons: [talkThrough1, talkThrough2, talkThrough3, talkThrough4],
  },
  {
    id: "everyday-conversations",
    title: "Everyday Conversations",
    audience: ["adults"],
    blurb: "The same three catch phrases, drilled against real hard questions across 4 lessons, until reaching for one is automatic.",
    lessons: [conversations1, conversations2, conversations3, conversations4],
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

import ascendL1 from "./ascendData1";
import ascendL2 from "./ascendData2";
import ascendL3 from "./ascendData3";
import ascendL4 from "./ascendData4";
import ascendL5 from "./ascendData5";
import ascendLawL1 from "./ascendDataLaw1";
import ascendLawL2 from "./ascendDataLaw2";
import ascendLawL3 from "./ascendDataLaw3";
import ascendLawL4 from "./ascendDataLaw4";
import ascendLawL5 from "./ascendDataLaw5";
import ascendNegotiationL1 from "./ascendDataNegotiation1";
import ascendNegotiationL2 from "./ascendDataNegotiation2";
import ascendNegotiationL3 from "./ascendDataNegotiation3";
import ascendNegotiationL4 from "./ascendDataNegotiation4";
import ascendNegotiationL5 from "./ascendDataNegotiation5";
import ascendGovernanceL1 from "./ascendDataGovernance1";
import ascendGovernanceL2 from "./ascendDataGovernance2";
import ascendGovernanceL3 from "./ascendDataGovernance3";
import ascendGovernanceL4 from "./ascendDataGovernance4";
import ascendGovernanceL5 from "./ascendDataGovernance5";

const TRACKS = [
  {
    id: "ascend-1",
    category: "Business",
    title: "Business + AI",
    theme: "Business + AI",
    level: "C1",
    levelBand: "b2c1",
    audience: ["adults"],
    blurb: "5 lessons of precision, framing, and diplomatic control. Lesson 5 replays Lesson 1's question so you can hear the difference for yourself.",
    lessons: [ascendL1, ascendL2, ascendL3, ascendL4, ascendL5],
  },
  {
    id: "ascend-law",
    category: "Law",
    title: "Law & Advocacy",
    theme: "Law & Advocacy",
    level: "C1",
    levelBand: "b2c1",
    audience: ["adults"],
    blurb: "5 lessons of precision, framing, and diplomatic control, built for legal English. Lesson 5 replays Lesson 1's question so you can hear the difference for yourself.",
    lessons: [ascendLawL1, ascendLawL2, ascendLawL3, ascendLawL4, ascendLawL5],
  },
  {
    id: "ascend-negotiation",
    category: "Law",
    title: "Contract Negotiation",
    theme: "Contract Negotiation",
    level: "C1",
    levelBand: "b2c1",
    audience: ["adults"],
    blurb: "5 lessons of precision, framing, and diplomatic control, built for deal-making. Lesson 5 replays Lesson 1's question so you can hear the difference for yourself.",
    lessons: [ascendNegotiationL1, ascendNegotiationL2, ascendNegotiationL3, ascendNegotiationL4, ascendNegotiationL5],
  },
  {
    id: "ascend-governance",
    category: "Business",
    title: "Corporate Governance & Risk",
    theme: "Corporate Governance & Risk",
    level: "C1",
    levelBand: "b2c1",
    audience: ["adults"],
    blurb: "5 lessons of precision, framing, and diplomatic control, built for the legal-vs-commercial tension in governance and risk. Lesson 5 replays Lesson 1's question so you can hear the difference for yourself.",
    lessons: [ascendGovernanceL1, ascendGovernanceL2, ascendGovernanceL3, ascendGovernanceL4, ascendGovernanceL5],
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

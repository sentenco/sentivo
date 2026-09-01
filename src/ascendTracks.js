import ascendDayL1 from "./ascendDay1";
import ascendSchoolL1 from "./ascendSchool1";
import ascendFamilyL1 from "./ascendFamily1";
import ascendSportsL1 from "./ascendSports1";
import ascendMoviesL1 from "./ascendMovies1";
import ascendBusinessL1 from "./ascendBusiness1";
import ascendLawL1 from "./ascendLaw1";
import ascendNegotiationL1 from "./ascendNegotiation1";
import ascendGovernanceL1 from "./ascendGovernance1";

const TRACKS = [
  {
    id: "ascend-day",
    category: "Everyday Life",
    title: "Talking About Your Day",
    theme: "Everyday Life",
    level: "A2-B1",
    levelBand: "a2b1",
    audience: ["teens"],
    blurb: "Say it plain, then say it stronger. Real everyday moments pushed toward more precise, natural English.",
    lessons: [ascendDayL1],
  },
  {
    id: "ascend-school",
    category: "School Life",
    title: "Talking About a School Day",
    theme: "School Life",
    level: "A2-B1",
    levelBand: "a2b1",
    audience: ["teens"],
    blurb: "Say it plain, then say it stronger. Real school moments pushed toward more precise, natural English.",
    lessons: [ascendSchoolL1],
  },
  {
    id: "ascend-family",
    category: "Family & Home Life",
    title: "Talking About Your Family",
    theme: "Family & Home Life",
    level: "A2-B1",
    levelBand: "a2b1",
    audience: ["teens"],
    blurb: "Say it plain, then say it stronger. Real family moments pushed toward more precise, natural English.",
    lessons: [ascendFamilyL1],
  },
  {
    id: "ascend-sports",
    category: "Sports & Activities",
    title: "Talking About Sports & Activities",
    theme: "Sports & Activities",
    level: "A2-B1",
    levelBand: "a2b1",
    audience: ["teens"],
    blurb: "Say it plain, then say it stronger. Real sports moments pushed toward more precise, natural English.",
    lessons: [ascendSportsL1],
  },
  {
    id: "ascend-movies",
    category: "Movies & Entertainment",
    title: "Talking About a Show or Movie",
    theme: "Movies & Entertainment",
    level: "A2-B1",
    levelBand: "a2b1",
    audience: ["teens"],
    blurb: "Say it plain, then say it stronger. Real entertainment moments pushed toward more precise, natural English.",
    lessons: [ascendMoviesL1],
  },
  {
    id: "ascend-business",
    category: "Business & AI",
    title: "Technology & the Modern Workplace",
    theme: "Business & AI",
    level: "B2-C1",
    levelBand: "b2c1",
    audience: ["adults"],
    blurb: "Say it plain, then say it stronger. Professional opinions pushed toward more precise, C1-level English.",
    lessons: [ascendBusinessL1],
  },
  {
    id: "ascend-law",
    category: "Law & Advocacy",
    title: "Arguing for Change",
    theme: "Law & Advocacy",
    level: "B2-C1",
    levelBand: "b2c1",
    audience: ["adults"],
    blurb: "Say it plain, then say it stronger. Arguments and positions pushed toward more precise, C1-level English.",
    lessons: [ascendLawL1],
  },
  {
    id: "ascend-negotiation",
    category: "Negotiation & Contracts",
    title: "Getting to an Agreement",
    theme: "Negotiation & Contracts",
    level: "B2-C1",
    levelBand: "b2c1",
    audience: ["adults"],
    blurb: "Say it plain, then say it stronger. Negotiation talk pushed toward more precise, C1-level English.",
    lessons: [ascendNegotiationL1],
  },
  {
    id: "ascend-governance",
    category: "Corporate Governance & Risk",
    title: "Accountability & Risk",
    theme: "Corporate Governance & Risk",
    level: "B2-C1",
    levelBand: "b2c1",
    audience: ["adults"],
    blurb: "Say it plain, then say it stronger. Governance and risk talk pushed toward more precise, C1-level English.",
    lessons: [ascendGovernanceL1],
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

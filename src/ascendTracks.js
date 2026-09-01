import ascendDayL1 from "./ascendDay1";
import ascendDayL2 from "./ascendDay2";
import ascendDayL3 from "./ascendDay3";
import ascendDayL4 from "./ascendDay4";
import ascendSchoolL1 from "./ascendSchool1";
import ascendSchoolL2 from "./ascendSchool2";
import ascendSchoolL3 from "./ascendSchool3";
import ascendSchoolL4 from "./ascendSchool4";
import ascendFamilyL1 from "./ascendFamily1";
import ascendFamilyL2 from "./ascendFamily2";
import ascendFamilyL3 from "./ascendFamily3";
import ascendFamilyL4 from "./ascendFamily4";
import ascendSportsL1 from "./ascendSports1";
import ascendSportsL2 from "./ascendSports2";
import ascendSportsL3 from "./ascendSports3";
import ascendSportsL4 from "./ascendSports4";
import ascendMoviesL1 from "./ascendMovies1";
import ascendMoviesL2 from "./ascendMovies2";
import ascendMoviesL3 from "./ascendMovies3";
import ascendMoviesL4 from "./ascendMovies4";
import ascendBusinessL1 from "./ascendBusiness1";
import ascendBusinessL2 from "./ascendBusiness2";
import ascendBusinessL3 from "./ascendBusiness3";
import ascendBusinessL4 from "./ascendBusiness4";
import ascendLawL1 from "./ascendLaw1";
import ascendLawL2 from "./ascendLaw2";
import ascendLawL3 from "./ascendLaw3";
import ascendLawL4 from "./ascendLaw4";
import ascendNegotiationL1 from "./ascendNegotiation1";
import ascendNegotiationL2 from "./ascendNegotiation2";
import ascendNegotiationL3 from "./ascendNegotiation3";
import ascendNegotiationL4 from "./ascendNegotiation4";
import ascendGovernanceL1 from "./ascendGovernance1";
import ascendGovernanceL2 from "./ascendGovernance2";
import ascendGovernanceL3 from "./ascendGovernance3";
import ascendGovernanceL4 from "./ascendGovernance4";
import ascendSocialL1 from "./ascendSocial1";
import ascendSocialL2 from "./ascendSocial2";
import ascendSocialL3 from "./ascendSocial3";
import ascendSocialL4 from "./ascendSocial4";
import ascendEnvironmentL1 from "./ascendEnvironment1";
import ascendEnvironmentL2 from "./ascendEnvironment2";
import ascendEnvironmentL3 from "./ascendEnvironment3";
import ascendEnvironmentL4 from "./ascendEnvironment4";
import ascendFutureL1 from "./ascendFuture1";
import ascendFutureL2 from "./ascendFuture2";
import ascendFutureL3 from "./ascendFuture3";
import ascendFutureL4 from "./ascendFuture4";
import ascendTechEthicsL1 from "./ascendTechEthics1";
import ascendTechEthicsL2 from "./ascendTechEthics2";
import ascendTechEthicsL3 from "./ascendTechEthics3";
import ascendTechEthicsL4 from "./ascendTechEthics4";
import ascendRoutineL1 from "./ascendRoutine1";
import ascendRoutineL2 from "./ascendRoutine2";
import ascendRoutineL3 from "./ascendRoutine3";
import ascendRoutineL4 from "./ascendRoutine4";
import ascendHealthL1 from "./ascendHealth1";
import ascendHealthL2 from "./ascendHealth2";
import ascendHealthL3 from "./ascendHealth3";
import ascendHealthL4 from "./ascendHealth4";
import ascendMoneyL1 from "./ascendMoney1";
import ascendMoneyL2 from "./ascendMoney2";
import ascendMoneyL3 from "./ascendMoney3";
import ascendMoneyL4 from "./ascendMoney4";
import ascendHomeL1 from "./ascendHome1";
import ascendHomeL2 from "./ascendHome2";
import ascendHomeL3 from "./ascendHome3";
import ascendHomeL4 from "./ascendHome4";
import ascendTravelL1 from "./ascendTravel1";
import ascendTravelL2 from "./ascendTravel2";
import ascendTravelL3 from "./ascendTravel3";
import ascendTravelL4 from "./ascendTravel4";

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
    lessons: [ascendDayL1, ascendDayL2, ascendDayL3, ascendDayL4],
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
    lessons: [ascendSchoolL1, ascendSchoolL2, ascendSchoolL3, ascendSchoolL4],
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
    lessons: [ascendFamilyL1, ascendFamilyL2, ascendFamilyL3, ascendFamilyL4],
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
    lessons: [ascendSportsL1, ascendSportsL2, ascendSportsL3, ascendSportsL4],
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
    lessons: [ascendMoviesL1, ascendMoviesL2, ascendMoviesL3, ascendMoviesL4],
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
    lessons: [ascendBusinessL1, ascendBusinessL2, ascendBusinessL3, ascendBusinessL4],
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
    lessons: [ascendLawL1, ascendLawL2, ascendLawL3, ascendLawL4],
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
    lessons: [ascendNegotiationL1, ascendNegotiationL2, ascendNegotiationL3, ascendNegotiationL4],
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
    lessons: [ascendGovernanceL1, ascendGovernanceL2, ascendGovernanceL3, ascendGovernanceL4],
  },
  {
    id: "ascend-social",
    category: "Social Media & Digital Identity",
    title: "Life Online",
    theme: "Social Media & Digital Identity",
    level: "B2-C1",
    levelBand: "b2c1",
    audience: ["teens"],
    blurb: "Say it plain, then say it stronger. Opinions about life online pushed toward more precise, C1-level English.",
    lessons: [ascendSocialL1, ascendSocialL2, ascendSocialL3, ascendSocialL4],
  },
  {
    id: "ascend-environment",
    category: "Environment & Sustainability",
    title: "Our Changing Planet",
    theme: "Environment & Sustainability",
    level: "B2-C1",
    levelBand: "b2c1",
    audience: ["teens"],
    blurb: "Say it plain, then say it stronger. Opinions on the environment pushed toward more precise, C1-level English.",
    lessons: [ascendEnvironmentL1, ascendEnvironmentL2, ascendEnvironmentL3, ascendEnvironmentL4],
  },
  {
    id: "ascend-future",
    category: "Education & Future Ambitions",
    title: "Thinking About the Future",
    theme: "Education & Future Ambitions",
    level: "B2-C1",
    levelBand: "b2c1",
    audience: ["teens"],
    blurb: "Say it plain, then say it stronger. Talk about the future pushed toward more precise, C1-level English.",
    lessons: [ascendFutureL1, ascendFutureL2, ascendFutureL3, ascendFutureL4],
  },
  {
    id: "ascend-tech-ethics",
    category: "Technology & Ethics",
    title: "Technology & Right and Wrong",
    theme: "Technology & Ethics",
    level: "B2-C1",
    levelBand: "b2c1",
    audience: ["teens"],
    blurb: "Say it plain, then say it stronger. Ethical questions pushed toward more precise, C1-level English.",
    lessons: [ascendTechEthicsL1, ascendTechEthicsL2, ascendTechEthicsL3, ascendTechEthicsL4],
  },
  {
    id: "ascend-routine",
    category: "Daily Routine & Work-Life",
    title: "Talking About Your Day",
    theme: "Daily Routine & Work-Life",
    level: "A2-B1",
    levelBand: "a2b1",
    audience: ["adults"],
    blurb: "Say it plain, then say it stronger. Real everyday moments pushed toward more precise, natural English.",
    lessons: [ascendRoutineL1, ascendRoutineL2, ascendRoutineL3, ascendRoutineL4],
  },
  {
    id: "ascend-health",
    category: "Health & Wellness",
    title: "Talking About Your Health",
    theme: "Health & Wellness",
    level: "A2-B1",
    levelBand: "a2b1",
    audience: ["adults"],
    blurb: "Say it plain, then say it stronger. Real health moments pushed toward more precise, natural English.",
    lessons: [ascendHealthL1, ascendHealthL2, ascendHealthL3, ascendHealthL4],
  },
  {
    id: "ascend-money",
    category: "Money & Shopping",
    title: "Talking About Money",
    theme: "Money & Shopping",
    level: "A2-B1",
    levelBand: "a2b1",
    audience: ["adults"],
    blurb: "Say it plain, then say it stronger. Real money moments pushed toward more precise, natural English.",
    lessons: [ascendMoneyL1, ascendMoneyL2, ascendMoneyL3, ascendMoneyL4],
  },
  {
    id: "ascend-home",
    category: "Home & Neighborhood",
    title: "Talking About Home",
    theme: "Home & Neighborhood",
    level: "A2-B1",
    levelBand: "a2b1",
    audience: ["adults"],
    blurb: "Say it plain, then say it stronger. Real home moments pushed toward more precise, natural English.",
    lessons: [ascendHomeL1, ascendHomeL2, ascendHomeL3, ascendHomeL4],
  },
  {
    id: "ascend-travel",
    category: "Travel & Getting Around",
    title: "Talking About Travel",
    theme: "Travel & Getting Around",
    level: "A2-B1",
    levelBand: "a2b1",
    audience: ["adults"],
    blurb: "Say it plain, then say it stronger. Real travel moments pushed toward more precise, natural English.",
    lessons: [ascendTravelL1, ascendTravelL2, ascendTravelL3, ascendTravelL4],
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

import kidsImg from "./assets/notebook/kids.jpg";
import minimalImg from "./assets/notebook/minimal.jpg";
import elegantImg from "./assets/notebook/elegant.jpg";
import soccerStadiumImg from "./assets/notebook/soccer-stadium.jpg";
import soccerCoachImg from "./assets/notebook/soccer-coach.jpg";

// safeArea is the padding (in % of the page box) kept clear of each
// design's border art, so the writable area never overlaps the artwork.
// aspect is width/height of the source image, used to size the page box.
const DESIGNS = [
  {
    key: "kids",
    label: "Kids",
    image: kidsImg,
    blurb: "Bright doodles and a dashed rainbow border. Great for young learners.",
    aspect: 675 / 900,
    safeArea: { top: 11, right: 12, bottom: 11, left: 12 },
    ink: "#3A3A3A",
    frame: "#FDFCF8",
  },
  {
    key: "minimal",
    label: "Minimal",
    image: minimalImg,
    blurb: "Quiet sketch lines on soft grey. Stays out of the way.",
    aspect: 675 / 900,
    safeArea: { top: 10, right: 14, bottom: 12, left: 14 },
    ink: "#2B2B2B",
    frame: "#F4F5F6",
  },
  {
    key: "elegant",
    label: "Elegant",
    image: elegantImg,
    blurb: "Navy and gold geometry. Best for adult classes.",
    aspect: 637 / 900,
    safeArea: { top: 9, right: 14, bottom: 12, left: 12 },
    ink: "#1B2333",
    frame: "#FAFAF9",
  },
  {
    key: "soccer-stadium",
    label: "Soccer Stadium",
    image: soccerStadiumImg,
    blurb: "Floodlights, turf, and a match ball. High energy.",
    aspect: 637 / 900,
    safeArea: { top: 15, right: 15, bottom: 16, left: 13 },
    ink: "#152318",
    frame: "#0B1F14",
  },
  {
    key: "soccer-coach",
    label: "Soccer Coach",
    image: soccerCoachImg,
    blurb: "Black and gold tactics board. Sharp and focused.",
    aspect: 635 / 900,
    safeArea: { top: 16, right: 16, bottom: 16, left: 14 },
    ink: "#211A0E",
    frame: "#12100C",
  },
];

export function getNotebookDesign(key) {
  return DESIGNS.find((d) => d.key === key) || null;
}

// Shared with NotebookPage's .nbp-stage padding so the popup window JS
// sizing (in NotebookHub) and the actual CSS layout agree on how much
// frame to leave around the paper.
export const NOTEBOOK_STAGE_MARGIN = 16;

export default DESIGNS;

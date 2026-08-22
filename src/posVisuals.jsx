// Shared visual vocabulary for the Parts of Speech course -- one
// signature color per real part of speech, plus a small geometric mark
// (echoing real grammar-teaching symbol systems like Montessori grammar,
// which uses shapes per word class). Used by both PartsOfSpeechLesson
// (the slide deck) and PartsOfSpeechTrack (the topic hub), split into its
// own file since it's plain data/markup, not a page component.
export const POS_COLORS = {
  noun: "#ED1C24",
  pronoun: "#FF3D8E",
  verb: "#FF8A00",
  adjective: "#2EC4B6",
  adverb: "#00B4D8",
  preposition: "#3A86FF",
  conjunction: "#8338EC",
  interjection: "#FFC300",
};

// Shape families reinforce relationships: noun/pronoun share the circle
// family (pronoun's is hollow), adjective/adverb share the square family
// (adverb's is rotated into a diamond).
export function PosMark({ posKey }) {
  const shapes = {
    noun: <circle cx="12" cy="12" r="7" fill="#fff" />,
    pronoun: <circle cx="12" cy="12" r="7" fill="none" stroke="#fff" strokeWidth="3" />,
    verb: <path d="M6 4 L20 12 L6 20 Z" fill="#fff" />,
    adjective: <rect x="5" y="5" width="14" height="14" fill="#fff" />,
    adverb: <rect x="5.5" y="5.5" width="13" height="13" fill="#fff" transform="rotate(45 12 12)" />,
    preposition: (
      <>
        <line x1="5" y1="19" x2="19" y2="5" stroke="#fff" strokeWidth="2.6" />
        <circle cx="5" cy="19" r="2.6" fill="#fff" />
        <circle cx="19" cy="5" r="2.6" fill="#fff" />
      </>
    ),
    conjunction: <path d="M12 4 V20 M4 12 H20" stroke="#fff" strokeWidth="3" strokeLinecap="round" />,
    interjection: (
      <g stroke="#fff" strokeWidth="2.6" strokeLinecap="round">
        <line x1="12" y1="3" x2="12" y2="21" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="5.5" y1="5.5" x2="18.5" y2="18.5" />
        <line x1="18.5" y1="5.5" x2="5.5" y2="18.5" />
      </g>
    ),
  };
  return (
    <span className="posl-badge">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {shapes[posKey] || shapes.noun}
      </svg>
    </span>
  );
}

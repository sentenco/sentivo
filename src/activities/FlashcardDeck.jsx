import { useState } from "react";
import { useActivityStyles } from "./activityStyles";

// cards: [{ img?, emoji?, alt?, word }]
export default function FlashcardDeck({ cards }) {
  useActivityStyles();
  const [idx, setIdx] = useState(0);
  const [flip, setFlip] = useState(false);
  const [pending, setPending] = useState(null); // card to show on the back face while mid-flip

  function next() {
    const nextIdx = (idx + 1) % cards.length;
    setPending(cards[nextIdx]);
    setFlip((f) => !f);
    setTimeout(() => setIdx(nextIdx), 220);
  }

  const showingBackFace = flip;
  const frontCard = showingBackFace ? cards[idx] : (pending || cards[idx]);
  const backCard = showingBackFace ? (pending || cards[idx]) : cards[idx];

  return (
    <div>
      <div className="sa-deck-wrap">
        <div className={`sa-deck-inner ${flip ? "sa-flip" : ""}`}>
          <div className="sa-deck-face sa-front">
            {frontCard.img ? <img src={frontCard.img} alt={frontCard.alt || frontCard.word} /> : frontCard.emoji}
            <span className="sa-word">{frontCard.word}</span>
          </div>
          <div className="sa-deck-face sa-back">
            {backCard.img ? <img src={backCard.img} alt={backCard.alt || backCard.word} /> : backCard.emoji}
            <span className="sa-word">{backCard.word}</span>
          </div>
        </div>
      </div>
      <div className="sa-deck-dots">
        {cards.map((_, i) => (
          <span key={i} className={`sa-deck-dot ${i === idx ? "sa-on" : ""}`} />
        ))}
      </div>
      <button type="button" className="sa-next-btn" onClick={next}>Next Card →</button>
    </div>
  );
}

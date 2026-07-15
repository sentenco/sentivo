export default function SlideCloser({ content }) {
  return (
    <div className="slcl-slide">
      <style>{CSS}</style>
      <div className="slcl-badge" aria-hidden="true">
        {content.sticker || "🌟"}
      </div>
      <h2 className="slcl-headline">{content.headline || "You did it!"}</h2>
      {content.goal && <p className="slcl-goal">{content.goal}</p>}
      <p className="slcl-bye">{content.closing || "See you next time!"}</p>
    </div>
  );
}

const CSS = `
.slcl-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
  padding: 20px 40px;
  background: linear-gradient(160deg, var(--k-tint, #FFEDE0), var(--k-bg, #FFF6EC));
}
.slcl-badge {
  font-size: 56px;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.12));
}
.slcl-headline {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #1B2A4A;
  margin: 0;
}
.slcl-goal {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #1B2A4A;
  max-width: 460px;
  margin: 0;
  line-height: 1.5;
}
.slcl-bye {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.3px;
  color: var(--k-accent-dark, #E06B4C);
  margin: 4px 0 0;
}
`;


export default function SlideWarmup({ content }) {
  const questions = content.questions || [];

  return (
    <div className="slw-slide">
      <style>{CSS}</style>
      <div className="slw-image-area">
        <span className="slw-pill">Warm-up</span>
        {content.image_url && (
          <img className="slw-image" src={content.image_url} alt="" />
        )}
      </div>
      <div className="slw-bottom">
        <h2 className="slw-title">What do you see?</h2>
        <div className="slw-questions">
          {questions.map((q, i) => (
            <span className="slw-chip" key={i}>
              {q}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
.slw-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.slw-image-area {
  position: relative;
  height: 66%;
  background: #FDF8F0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slw-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  mix-blend-mode: multiply;
}
.slw-pill {
  position: absolute;
  top: 12px;
  left: 16px;
  background: #fff;
  color: #1B2A4A;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11px;
  padding: 4px 12px;
  border-radius: 999px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.12);
}
.slw-bottom {
  flex: 1;
  min-height: 0;
  background: #E8F8F0;
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.slw-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #1B2A4A;
  margin: 0;
}
.slw-questions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}
.slw-chip {
  background: #fff;
  color: #2C6B4F;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13.5px;
  padding: 9px 18px;
  border-radius: 999px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
}
`;

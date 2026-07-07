export default function SlideDiagnosis({ content }) {
  const likelyResponses = content.likelyResponses || [];
  const scorecardFocus = content.scorecardFocus || [];

  return (
    <div className="sldg-slide">
      <style>{CSS}</style>
      <div className="sldg-header">
        <span className="sldg-tag">Diagnosis</span>
        <h2 className="sldg-title">What to Listen For</h2>
      </div>
      <div className="sldg-body">
        {content.listenFor && (
          <div className="sldg-section">
            <div className="sldg-label">Listen For</div>
            <p className="sldg-text">{content.listenFor}</p>
          </div>
        )}

        {likelyResponses.length > 0 && (
          <div className="sldg-section">
            <div className="sldg-label">Likely Responses</div>
            <div className="sldg-quotes">
              {likelyResponses.map((r, i) => (
                <p className="sldg-quote" key={i}>
                  &ldquo;{r}&rdquo;
                </p>
              ))}
            </div>
          </div>
        )}

        {scorecardFocus.length > 0 && (
          <div className="sldg-section">
            <div className="sldg-label">Scorecard Focus</div>
            <div className="sldg-pills">
              {scorecardFocus.map((s, i) => (
                <span className="sldg-pill" key={i}>
                  <strong>{s.dimension}</strong>
                  {s.note && <span className="sldg-pill-note"> — {s.note}</span>}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const CSS = `
.sldg-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #F7F5EF;
}
.sldg-header {
  padding: 18px 26px 12px;
  border-bottom: 1px solid #DEDAD0;
  flex-shrink: 0;
}
.sldg-tag {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #5C6F8A;
  border: 1px solid #5C6F8A;
  border-radius: 3px;
  padding: 3px 10px;
  margin-bottom: 8px;
}
.sldg-title {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 19px;
  color: #1B2A4A;
  margin: 0;
}
.sldg-body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 14px 26px 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.sldg-label {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #B5502E;
  margin-bottom: 4px;
}
.sldg-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.55;
  color: #1B2A4A;
  margin: 0;
}
.sldg-quotes {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.sldg-quote {
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 13.5px;
  line-height: 1.5;
  color: #6B6458;
  background: #fff;
  border: 1px solid #DEDAD0;
  border-radius: 5px;
  padding: 8px 12px;
  margin: 0;
}
.sldg-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.sldg-pill {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12.5px;
  color: #1B2A4A;
  background: #fff;
  border: 1px solid #1B2A4A;
  border-radius: 4px;
  padding: 5px 10px;
}
.sldg-pill strong { font-weight: 700; }
.sldg-pill-note { color: #8A8272; }
`;

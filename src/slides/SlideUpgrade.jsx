export default function SlideUpgrade({ content }) {
  const prompts = content.interventionPrompts || [];

  return (
    <div className="slug-slide">
      <style>{CSS}</style>
      <div className="slug-header">
        <span className="slug-tag">Upgrade Clinic</span>
        <h2 className="slug-title">From Correct to Controlled</h2>
      </div>
      <div className="slug-body">
        {content.upgradePath && (
          <div className="slug-section">
            <div className="slug-label">Upgrade Path</div>
            <p className="slug-text">{content.upgradePath}</p>
          </div>
        )}

        {prompts.length > 0 && (
          <div className="slug-section">
            <div className="slug-label">Say This Live</div>
            <div className="slug-prompts">
              {prompts.map((p, i) => (
                <p className="slug-prompt" key={i}>
                  &ldquo;{p}&rdquo;
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const CSS = `
.slug-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #F7F5EF;
}
.slug-header {
  padding: 18px 26px 12px;
  border-bottom: 1px solid #DEDAD0;
  flex-shrink: 0;
}
.slug-tag {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #B5502E;
  border: 1px solid #B5502E;
  border-radius: 3px;
  padding: 3px 10px;
  margin-bottom: 8px;
}
.slug-title {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 19px;
  color: #1B2A4A;
  margin: 0;
}
.slug-body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 14px 26px 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.slug-label {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #B5502E;
  margin-bottom: 4px;
}
.slug-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14.5px;
  line-height: 1.55;
  color: #1B2A4A;
  margin: 0;
}
.slug-prompts {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.slug-prompt {
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 500;
  font-size: 13.5px;
  line-height: 1.5;
  color: #1B2A4A;
  background: #fff;
  border-left: 3px solid #B5502E;
  border-radius: 2px;
  padding: 8px 12px;
  margin: 0;
}
`;

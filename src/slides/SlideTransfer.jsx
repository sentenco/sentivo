export default function SlideTransfer({ content }) {
  return (
    <div className="sltr-slide">
      <style>{CSS}</style>
      <div className="sltr-header">
        <span className="sltr-tag">Transfer</span>
        <h2 className="sltr-title">Extend or Support</h2>
      </div>
      <div className="sltr-body">
        {content.extension && (
          <div className="sltr-col sltr-col--extension">
            <div className="sltr-label">Extension</div>
            <p className="sltr-text">{content.extension}</p>
          </div>
        )}
        {content.recovery && (
          <div className="sltr-col sltr-col--recovery">
            <div className="sltr-label">Recovery</div>
            <p className="sltr-text">{content.recovery}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const CSS = `
.sltr-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #F7F5EF;
}
.sltr-header {
  padding: 18px 26px 12px;
  border-bottom: 1px solid #DEDAD0;
  flex-shrink: 0;
}
.sltr-tag {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #3B6D11;
  border: 1px solid #3B6D11;
  border-radius: 3px;
  padding: 3px 10px;
  margin-bottom: 8px;
}
.sltr-title {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 19px;
  color: #1B2A4A;
  margin: 0;
}
.sltr-body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 14px 26px 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.sltr-col {
  border-radius: 6px;
  padding: 12px 14px;
  border: 1px solid #DEDAD0;
  background: #fff;
}
.sltr-col--extension { border-left: 3px solid #3B6D11; }
.sltr-col--recovery { border-left: 3px solid #5C6F8A; }
.sltr-label {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #8A8272;
  margin-bottom: 4px;
}
.sltr-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.55;
  color: #1B2A4A;
  margin: 0;
}
`;

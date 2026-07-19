// Small diagrammatic timeline per tense, matching the shape described in
// the Verb Tenses source spec (e.g. "repeated dots across the present
// line", "long bar crossing the present moment"). One SVG per variant,
// sharing a common axis/NOW-marker so they read as one visual family.

const AXIS_Y = 46;
const COLOR = "#5B4FE0";
const COLOR_SOFT = "#B7B0F5";

function Axis() {
  return <line x1="20" y1={AXIS_Y} x2="380" y2={AXIS_Y} stroke={COLOR_SOFT} strokeWidth="2" />;
}

function NowMarker({ x = 200, label = "NOW" }) {
  return (
    <g>
      <line x1={x} y1={AXIS_Y - 14} x2={x} y2={AXIS_Y + 14} stroke={COLOR} strokeWidth="2.5" />
      <text x={x} y={AXIS_Y + 30} textAnchor="middle" fontSize="11" fontWeight="700" fill={COLOR} fontFamily="Quicksand, sans-serif">{label}</text>
    </g>
  );
}

function Pt({ x, label }) {
  return (
    <g>
      <circle cx={x} cy={AXIS_Y} r="6" fill={COLOR} />
      {label && <text x={x} y={AXIS_Y - 16} textAnchor="middle" fontSize="10.5" fontWeight="600" fill={COLOR} fontFamily="Quicksand, sans-serif">{label}</text>}
    </g>
  );
}

function Bar({ x1, x2, label }) {
  return (
    <g>
      <line x1={x1} y1={AXIS_Y} x2={x2} y2={AXIS_Y} stroke={COLOR} strokeWidth="6" strokeLinecap="round" />
      {label && <text x={(x1 + x2) / 2} y={AXIS_Y - 16} textAnchor="middle" fontSize="10.5" fontWeight="600" fill={COLOR} fontFamily="Quicksand, sans-serif">{label}</text>}
    </g>
  );
}

function Dots({ x1, x2 }) {
  const n = 6;
  const dots = [];
  for (let i = 0; i < n; i++) {
    dots.push(<circle key={i} cx={x1 + ((x2 - x1) * i) / (n - 1)} cy={AXIS_Y} r="3.5" fill={COLOR} />);
  }
  return <>{dots}</>;
}

function Arrow({ x1, x2, label }) {
  return (
    <g>
      <line x1={x1} y1={AXIS_Y} x2={x2 - 8} y2={AXIS_Y} stroke={COLOR} strokeWidth="2.5" markerEnd="url(#vtArrow)" />
      {label && <text x={(x1 + x2) / 2} y={AXIS_Y - 16} textAnchor="middle" fontSize="10.5" fontWeight="600" fill={COLOR} fontFamily="Quicksand, sans-serif">{label}</text>}
    </g>
  );
}

function Defs() {
  return (
    <defs>
      <marker id="vtArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill={COLOR} />
      </marker>
    </defs>
  );
}

const VARIANTS = {
  // 1 Present Simple -- repeated dots across the present line
  1: () => (
    <>
      <Axis /><Defs /><Dots x1={60} x2={340} /><NowMarker />
    </>
  ),
  // 2 Present Continuous -- long bar crossing the present moment
  2: () => (
    <>
      <Axis /><Defs /><Bar x1={130} x2={270} /><NowMarker />
    </>
  ),
  // 3 Present Perfect -- past point with arrow to present
  3: () => (
    <>
      <Axis /><Defs /><Pt x={80} label="past" /><Arrow x1={92} x2={196} /><NowMarker />
    </>
  ),
  // 4 Present Perfect Continuous -- long bar from past to now
  4: () => (
    <>
      <Axis /><Defs /><Bar x1={70} x2={200} /><NowMarker />
    </>
  ),
  // 5 Past Simple -- one finished point before now
  5: () => (
    <>
      <Axis /><Defs /><Pt x={110} label="finished" /><NowMarker />
    </>
  ),
  // 6 Past Continuous -- long bar before now, crossed by a short past event
  6: () => (
    <>
      <Axis /><Defs /><Bar x1={60} x2={220} label="in progress" /><Pt x={150} /><NowMarker />
    </>
  ),
  // 7 Past Perfect -- one past point before another past point
  7: () => (
    <>
      <Axis /><Defs /><Pt x={70} label="1st" /><Pt x={150} label="2nd" /><NowMarker />
    </>
  ),
  // 8 Past Perfect Continuous -- long bar ending at another past point
  8: () => (
    <>
      <Axis /><Defs /><Bar x1={50} x2={150} /><Pt x={150} label="past point" /><NowMarker />
    </>
  ),
  // 9 Future Simple -- point after now
  9: () => (
    <>
      <Axis /><Defs /><NowMarker /><Pt x={300} label="future" />
    </>
  ),
  // 10 Future Continuous -- long bar crossing a future point
  10: () => (
    <>
      <Axis /><Defs /><NowMarker /><Bar x1={250} x2={350} />
    </>
  ),
  // 11 Future Perfect -- future completed point before another future point
  11: () => (
    <>
      <Axis /><Defs /><NowMarker /><Pt x={260} label="completed" /><Pt x={340} label="deadline" />
    </>
  ),
  // 12 Future Perfect Continuous -- long bar from earlier time to future point
  12: () => (
    <>
      <Axis /><Defs /><NowMarker /><Bar x1={230} x2={330} /><Pt x={330} label="future point" />
    </>
  ),
};

export default function VTTimeline({ variant }) {
  const Render = VARIANTS[variant] || VARIANTS[1];
  return (
    <svg viewBox="0 0 400 80" className="vt-timeline-svg">
      <Render />
    </svg>
  );
}

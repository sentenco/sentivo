export function renderBlankLine(text, color) {
  if (!text) return null;
  const parts = String(text).split(/(_{2,}|\bblank\b)/gi);
  return parts.map((part, i) =>
    /^(_{2,}|blank)$/i.test(part) ? (
      <span
        key={i}
        style={{
          display: "inline-block",
          minWidth: "48px",
          borderBottom: `2px solid ${color}`,
          margin: "0 2px",
        }}
      >
        &nbsp;
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

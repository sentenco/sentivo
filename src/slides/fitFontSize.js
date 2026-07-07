// Scales a text block's font size down as its character count grows, so
// short lines render big and confident while long paragraphs still fit
// the fixed-height slide card without overflowing or shrinking to the
// same tiny default everything used before.
export function fitFontSize(text = "", { max, min, softLimit }) {
  const len = (text || "").length;
  if (len <= softLimit) return max;
  const over = len - softLimit;
  const reduced = max - Math.floor(over / 45);
  return Math.max(min, reduced);
}

export function newTextElement(x = 30, y = 40) {
  return {
    id: crypto.randomUUID(),
    type: "text",
    x,
    y,
    w: 34,
    fontSize: 24,
    color: "#1B2A4A",
    align: "left",
    bold: false,
    italic: false,
    text: "",
  };
}

export function newImageElement(src, x = 30, y = 30) {
  return {
    id: crypto.randomUUID(),
    type: "image",
    x,
    y,
    w: 28,
    src,
  };
}

export function newSlide(title = "") {
  return {
    id: crypto.randomUUID(),
    title,
    elements: [],
  };
}

export function newDeckSlides() {
  return [newSlide("")];
}

export function timeAgo(iso) {
  const then = new Date(iso).getTime();
  const diffSec = Math.max(0, Math.floor((Date.now() - then) / 1000));
  if (diffSec < 60) return "just now";
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr}h ago`;
  const diffDay = Math.floor(diffHr / 24);
  if (diffDay < 30) return `${diffDay}d ago`;
  return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

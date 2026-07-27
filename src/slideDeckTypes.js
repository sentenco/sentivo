export const LAYOUTS = [
  { key: "title", label: "Title", icon: "🔠", hint: "A big heading, good for section breaks." },
  { key: "bullets", label: "Bullet list", icon: "📋", hint: "A heading with a list of points, one per line." },
  { key: "image-text", label: "Image + text", icon: "🖼️", hint: "A caption for an image alongside a short note." },
];

export function newSlide(layout = "title") {
  return {
    id: crypto.randomUUID(),
    layout,
    heading: "",
    body: "",
    imageNote: "",
  };
}

export function newDeckSlides() {
  return [newSlide("title")];
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

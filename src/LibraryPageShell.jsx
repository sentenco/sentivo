import LibraryHeader from "./LibraryHeader";

// Wraps a standalone hub/track page (Speaking modality hubs, Grammar
// Foundation module pages) with the same top nav bar Library.jsx shows,
// so browsing one of these doesn't feel like leaving the app. Deliberately
// does NOT reuse Library.jsx's `.content`/`.body-wrap` (max-width capped,
// overflow: hidden) since these pages are full-bleed, self-scrolling
// layouts of their own (each already assumes `min-height: 100vh`) -- this
// shell just stacks the header above them in normal document flow.
export default function LibraryPageShell({ children }) {
  return (
    <div className="page theme-pro">
      <LibraryHeader />
      {children}
    </div>
  );
}

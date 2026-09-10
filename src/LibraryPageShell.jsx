import LibraryHeader from "./LibraryHeader";

// Wraps a standalone hub/track page (Speaking modality hubs, Grammar
// Foundation module pages) with the same top nav bar Library.jsx shows,
// so browsing one of these doesn't feel like leaving the app.
//
// `.page` (from Library.jsx's shared CSS) is a fixed `height: 100vh` flex
// column with `overflow: hidden` -- fine for Library.jsx itself, since its
// own `.body-wrap`/`.content` chain provides an internal scroll region. The
// standalone pages wrapped here have no such internal scroller (each
// assumes it owns the whole viewport, `min-height: 100vh`), so without a
// scrollable child of its own, content below the fold was simply clipped
// with no way to reach it. `.lps-scroll` is that scroll region: it takes
// the remaining height below the header and scrolls internally, mirroring
// how `.body-wrap` does it for Library.jsx.
export default function LibraryPageShell({ children }) {
  return (
    <div className="page theme-pro">
      <style>{`.lps-scroll { flex: 1; min-height: 0; overflow-y: auto; }`}</style>
      <LibraryHeader />
      <div className="lps-scroll">{children}</div>
    </div>
  );
}

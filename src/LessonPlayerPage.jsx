import LessonPlayer from "./LessonPlayer";

export default function LessonPlayerPage() {
  return (
    <div className="lpp-backdrop">
      <style>{`
        html, body, #root { height: 100%; }
        .lpp-backdrop {
          width: 100%;
          min-height: 100vh;
          background: #2B2330;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: auto;
        }
      `}</style>
      <LessonPlayer />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

const GRADIENTS = {
  coral:   "linear-gradient(160deg, #FFD9C7 0%, #FFB199 100%)",
  teal:    "linear-gradient(160deg, #C9F0E2 0%, #8FDDC0 100%)",
  lavender:"linear-gradient(160deg, #E3DAFF 0%, #C2AEF5 100%)",
  gold:    "linear-gradient(160deg, #FCE7BD 0%, #F3C871 100%)",
};

function openRoom(route) {
  window.open(
    route,
    "sentivoScenarioRoom",
    "width=860,height=640,toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes"
  );
}

export default function VirtualScenarioRoom({ isPro }) {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const { data, error } = await supabase
        .from("scenario_rooms")
        .select("*")
        .eq("is_active", true)
        .order("sort_order", { ascending: true });
      if (error) {
        setError(error.message);
      } else {
        setRooms(data || []);
      }
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div className={`vsr-page ${isPro ? "theme-pro" : "theme-fun"}`}>
      <style>{CSS}</style>

      <div className="vsr-header">
        <h1 className="vsr-title">Virtual Scenario Room</h1>
        <p className="vsr-subtitle">Respond to real-life situations using the right verb tense.</p>
      </div>

      {loading ? (
        <p className="vsr-state">Loading rooms…</p>
      ) : error ? (
        <p className="vsr-state">Couldn't load rooms. Please refresh.</p>
      ) : (
        <div className="vsr-grid">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="vsr-card"
              onClick={() => openRoom(room.route)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openRoom(room.route)}
            >
              <div
                className="vsr-thumb"
                style={{
                  background: room.image_url
                    ? undefined
                    : GRADIENTS[room.palette] || GRADIENTS.coral,
                }}
              >
                {room.image_url ? (
                  <img src={room.image_url} alt={room.title} className="vsr-thumb-img" />
                ) : (
                  <span className="vsr-emoji">{room.emoji}</span>
                )}
              </div>
              <div className="vsr-card-body">
                <p className="vsr-card-title">{room.title}</p>
                <p className="vsr-card-desc">{room.description}</p>
                <div className="vsr-tags">
                  <span className="vsr-tag">{room.age_label}</span>
                  <span className="vsr-tag">{room.level_label}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Coming soon placeholder */}
          <div className="vsr-card vsr-card--soon">
            <div className="vsr-thumb vsr-thumb--soon" />
            <div className="vsr-card-body">
              <p className="vsr-card-title vsr-soon-text">More rooms coming soon</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');

.vsr-page {
  width: 100%;
  height: 100%;
  padding: 32px 36px;
  overflow-y: auto;
  font-family: 'Quicksand', sans-serif;
}

.vsr-header { margin-bottom: 28px; }

.vsr-title {
  font-family: 'Fredoka', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #2B2330;
  margin: 0 0 6px;
}
.theme-pro .vsr-title { font-family: 'Source Serif 4', serif; color: #1B2A4A; }

.vsr-subtitle {
  font-size: 13px;
  color: #7A7260;
  opacity: 0.85;
  margin: 0;
}
.theme-pro .vsr-subtitle { font-family: 'Inter', sans-serif; }

.vsr-state {
  font-size: 14px;
  opacity: 0.6;
  padding: 40px 0;
  text-align: center;
}

.vsr-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.vsr-card {
  background: white;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 8px 0 rgba(0,0,0,0.06), 0 14px 24px rgba(0,0,0,0.10);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  outline: none;
}
.vsr-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 0 rgba(0,0,0,0.07), 0 18px 28px rgba(0,0,0,0.12);
}
.theme-pro .vsr-card {
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  border: 1px solid rgba(0,0,0,0.06);
}
.theme-pro .vsr-card:hover { transform: none; }

.vsr-card--soon {
  cursor: default;
  background: transparent;
  box-shadow: none;
  border: 1.5px dashed #C9BBA3;
  display: flex;
  flex-direction: column;
}
.vsr-card--soon:hover { transform: none; box-shadow: none; }
.theme-pro .vsr-card--soon { border: 1.5px dashed #DEDAD0; }

.vsr-thumb {
  width: 100%;
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.vsr-thumb--soon { background: transparent; }
.vsr-thumb-img { width: 100%; height: 100%; object-fit: cover; }
.vsr-emoji { font-size: 36px; }

.vsr-card-body { padding: 12px 14px 14px; }

.vsr-card-title {
  font-family: 'Fredoka', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #2B2330;
  margin: 0 0 5px;
  line-height: 1.3;
}
.theme-pro .vsr-card-title { font-family: 'Source Serif 4', serif; color: #1B2A4A; }

.vsr-soon-text {
  font-family: 'Quicksand', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #B8ADCF;
  text-align: center;
  padding: 10px 0;
}
.theme-pro .vsr-soon-text { font-family: 'Inter', sans-serif; color: #9C9485; }

.vsr-card-desc {
  font-size: 12px;
  color: #7A7260;
  line-height: 1.5;
  margin: 0 0 10px;
}
.theme-pro .vsr-card-desc { font-family: 'Inter', sans-serif; }

.vsr-tags { display: flex; gap: 5px; flex-wrap: wrap; }

.vsr-tag {
  font-size: 9.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  background: rgba(255,122,89,0.12);
  color: #C2452F;
  padding: 3px 8px;
  border-radius: 999px;
}
.theme-pro .vsr-tag {
  background: #F0EBDD;
  color: #8A6A3A;
  border-radius: 3px;
  font-family: 'Inter', sans-serif;
}
`;

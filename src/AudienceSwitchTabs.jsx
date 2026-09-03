import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AUDIENCES = [
  { id: "kids", label: "Kids", age: "6–12", path: (lvl) => `/library/curriculum/${lvl}` },
  { id: "teens", label: "Teens", age: "13–17", path: (lvl) => `/library/curriculum/teens/${lvl}` },
  { id: "adults", label: "Adults", age: "18+", path: (lvl) => `/library/curriculum/adults/${lvl}` },
];

export default function AudienceSwitchTabs({ active, level = "A1" }) {
  const navigate = useNavigate();

  useEffect(() => {
    const styleId = "ast-styles";
    if (document.getElementById(styleId)) return;
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  return (
    <div className="ast-row">
      {AUDIENCES.map((a) => (
        <button
          key={a.id}
          type="button"
          className={`ast-pill ${active === a.id ? "is-active" : ""}`}
          onClick={() => active !== a.id && navigate(a.path(level))}
        >
          {a.label} <span className="ast-age">{a.age}</span>
        </button>
      ))}
    </div>
  );
}

const styles = `
.ast-row { display: flex; justify-content: center; gap: 8px; margin-bottom: 22px; }
.ast-pill {
  display: inline-flex; align-items: center; gap: 6px; padding: 7px 16px; border-radius: 999px;
  border: 1.5px solid #EDE6F4; background: #fff; cursor: pointer;
  font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 12.5px; color: #6B6E96;
  transition: all 0.15s ease;
}
.ast-pill .ast-age { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 9px; text-transform: uppercase; letter-spacing: 0.04em; opacity: 0.65; }
.ast-pill.is-active { background: #1B2A4A; border-color: #1B2A4A; color: #fff; cursor: default; }
.ast-pill:not(.is-active):hover { border-color: #FF6B4A; color: #1B2A4A; }
`;

// Simple flat picture icons for SPARK Kids lessons.
// Kept deliberately plain (basic shapes, no gradients) so they read clearly
// to young learners and stay visually consistent across all three lessons.

const ICONS = {
  dog: (
    <>
      <ellipse cx="24" cy="48" rx="10" ry="22" fill="#B8763A" transform="rotate(-18 24 48)" />
      <ellipse cx="76" cy="48" rx="10" ry="22" fill="#B8763A" transform="rotate(18 76 48)" />
      <ellipse cx="50" cy="52" rx="26" ry="24" fill="#E5B47D" />
      <ellipse cx="50" cy="64" rx="15" ry="12" fill="#F2D9B4" />
      <circle cx="39" cy="44" r="3.5" fill="#3A2A18" />
      <circle cx="61" cy="44" r="3.5" fill="#3A2A18" />
      <ellipse cx="50" cy="60" rx="5" ry="4" fill="#3A2A18" />
      <path d="M44 68 Q50 72 56 68" stroke="#3A2A18" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </>
  ),
  cat: (
    <>
      <ellipse cx="50" cy="64" rx="28" ry="20" fill="#9AA0A6" />
      <path d="M32 34 L26 18 L42 30 Z" fill="#9AA0A6" />
      <path d="M68 34 L74 18 L58 30 Z" fill="#9AA0A6" />
      <circle cx="50" cy="48" r="22" fill="#B7BCC2" />
      <circle cx="42" cy="46" r="3.2" fill="#2A2A2A" />
      <circle cx="58" cy="46" r="3.2" fill="#2A2A2A" />
      <path d="M50 52 L46 56 L54 56 Z" fill="#E8879A" />
      <path d="M32 58 Q40 56 46 58" stroke="#2A2A2A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M68 58 Q60 56 54 58" stroke="#2A2A2A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </>
  ),
  banana: (
    <path
      d="M30 70 C25 55 30 30 50 20 C48 24 46 30 50 32 C58 26 66 30 68 38 C70 46 62 56 50 62 C42 66 34 72 30 70 Z"
      fill="#F4C13B"
    />
  ),
  basketball: (
    <>
      <circle cx="50" cy="50" r="32" fill="#E07A3C" />
      <path d="M50 18 V82 M18 50 H82" stroke="#3A2A18" strokeWidth="2.5" />
      <path d="M24 26 Q50 44 24 74" stroke="#3A2A18" strokeWidth="2.5" fill="none" />
      <path d="M76 26 Q50 44 76 74" stroke="#3A2A18" strokeWidth="2.5" fill="none" />
    </>
  ),
  soccerball: (
    <>
      <circle cx="50" cy="50" r="32" fill="#F5F5F5" stroke="#2A2A2A" strokeWidth="2" />
      <polygon points="50,32 60,40 56,52 44,52 40,40" fill="#2A2A2A" />
      <polygon points="50,32 40,40 30,34 36,22 50,20" fill="none" stroke="#2A2A2A" strokeWidth="1.5" />
      <polygon points="50,32 60,40 70,34 64,22 50,20" fill="none" stroke="#2A2A2A" strokeWidth="1.5" />
      <polygon points="44,52 30,52 26,66 38,72" fill="none" stroke="#2A2A2A" strokeWidth="1.5" />
      <polygon points="56,52 70,52 74,66 62,72" fill="none" stroke="#2A2A2A" strokeWidth="1.5" />
    </>
  ),
  elephant: (
    <>
      <ellipse cx="60" cy="40" rx="18" ry="20" fill="#9199A6" />
      <ellipse cx="42" cy="54" rx="28" ry="24" fill="#A9AFBB" />
      <path d="M28 66 Q18 70 20 84 Q21 92 28 90 Q32 89 30 84 Q26 84 27 76 Q28 70 34 68 Z" fill="#A9AFBB" />
      <circle cx="30" cy="48" r="3" fill="#2A2A2A" />
      <ellipse cx="44" cy="82" rx="26" ry="6" fill="#9199A6" />
    </>
  ),
  lion: (
    <>
      <circle cx="50" cy="52" r="30" fill="#B8762A" />
      <path d="M50 18 L56 30 L44 30 Z M78 26 L74 38 L66 32 Z M22 26 L26 38 L34 32 Z M20 52 L32 52 L28 62 Z M80 52 L68 52 L72 62 Z M32 78 L42 68 L46 78 Z M68 78 L58 68 L54 78 Z" fill="#B8762A" />
      <circle cx="50" cy="54" r="18" fill="#F0C879" />
      <circle cx="43" cy="52" r="3" fill="#2A2A18" />
      <circle cx="57" cy="52" r="3" fill="#2A2A18" />
      <path d="M50 56 L47 60 L53 60 Z" fill="#2A2A18" />
      <path d="M41 64 Q50 69 59 64" stroke="#2A2A18" strokeWidth="2" fill="none" strokeLinecap="round" />
    </>
  ),
  fish: (
    <>
      <ellipse cx="46" cy="50" rx="24" ry="16" fill="#4E9BD6" />
      <polygon points="70,50 86,38 86,62" fill="#3D7FB3" />
      <circle cx="34" cy="46" r="3" fill="#1E2A33" />
      <path d="M26 50 Q10 44 8 50 Q10 56 26 50" fill="#3D7FB3" />
    </>
  ),
  trophy: (
    <>
      <rect x="42" y="70" width="16" height="10" rx="2" fill="#B8862F" />
      <rect x="34" y="80" width="32" height="6" rx="2" fill="#8A6425" />
      <path d="M36 34 H64 V54 Q64 68 50 68 Q36 68 36 54 Z" fill="#F4C13B" />
      <path d="M36 38 Q22 38 22 50 Q22 60 34 60" stroke="#D79A22" strokeWidth="4" fill="none" />
      <path d="M64 38 Q78 38 78 50 Q78 60 66 60" stroke="#D79A22" strokeWidth="4" fill="none" />
    </>
  ),
  star: (
    <polygon
      points="50,16 60,40 86,42 66,58 72,84 50,70 28,84 34,58 14,42 40,40"
      fill="#F4C13B"
      stroke="#D79A22"
      strokeWidth="2"
    />
  ),
  starOutline: (
    <polygon
      points="50,16 60,40 86,42 66,58 72,84 50,70 28,84 34,58 14,42 40,40"
      fill="none"
      stroke="#D79A22"
      strokeWidth="3"
    />
  ),
  magnifier: (
    <>
      <circle cx="42" cy="42" r="22" fill="none" stroke="#4A3B12" strokeWidth="7" />
      <line x1="58" y1="58" x2="80" y2="80" stroke="#4A3B12" strokeWidth="8" strokeLinecap="round" />
    </>
  ),
  boy: (
    <>
      <circle cx="50" cy="34" r="18" fill="#E9B98A" />
      <path d="M30 60 Q50 46 70 60 L74 86 H26 Z" fill="#4E9BD6" />
      <path d="M34 22 Q50 10 66 22 Q66 30 50 30 Q34 30 34 22" fill="#5A3A22" />
    </>
  ),
  girl: (
    <>
      <circle cx="50" cy="34" r="18" fill="#E9B98A" />
      <path d="M26 60 Q50 44 74 60 L80 88 H20 Z" fill="#EA6F9C" />
      <path d="M32 22 Q50 8 68 22 Q70 40 62 44 Q66 28 50 26 Q34 28 38 44 Q30 40 32 22" fill="#5A3A22" />
    </>
  ),
  monkey: (
    <>
      <circle cx="50" cy="52" r="26" fill="#8A5A34" />
      <circle cx="50" cy="54" r="17" fill="#E9C29A" />
      <circle cx="30" cy="50" r="7" fill="#E9C29A" />
      <circle cx="70" cy="50" r="7" fill="#E9C29A" />
      <circle cx="42" cy="52" r="3" fill="#2A2A18" />
      <circle cx="58" cy="52" r="3" fill="#2A2A18" />
      <ellipse cx="50" cy="60" rx="6" ry="4" fill="#B98456" />
    </>
  ),
  ball: (
    <>
      <circle cx="50" cy="50" r="30" fill="#E85C4A" />
      <path d="M50 20 Q64 35 50 50 Q36 65 50 80" stroke="#B8402F" strokeWidth="3" fill="none" />
      <path d="M22 42 Q40 50 22 58" stroke="#B8402F" strokeWidth="3" fill="none" />
      <path d="M78 42 Q60 50 78 58" stroke="#B8402F" strokeWidth="3" fill="none" />
    </>
  ),
  hat: (
    <>
      <ellipse cx="50" cy="66" rx="34" ry="8" fill="#2F6FA8" />
      <path d="M32 66 Q32 34 50 34 Q68 34 68 66" fill="#3D86C6" />
      <rect x="30" y="60" width="40" height="8" rx="4" fill="#F4C13B" />
    </>
  ),
  apple: (
    <>
      <path d="M50 32 Q30 32 28 56 Q26 78 46 80 Q50 82 54 80 Q74 78 72 56 Q70 32 50 32 Z" fill="#E24C3F" />
      <path d="M50 32 Q48 22 56 16" stroke="#6B4226" strokeWidth="3" fill="none" strokeLinecap="round" />
      <ellipse cx="58" cy="18" rx="7" ry="4" fill="#5EA352" transform="rotate(-25 58 18)" />
    </>
  ),
  schoolbag: (
    <>
      <rect x="26" y="36" width="48" height="46" rx="8" fill="#7A5AC9" />
      <rect x="36" y="24" width="28" height="20" rx="8" fill="#8F72D6" />
      <rect x="40" y="52" width="20" height="14" rx="4" fill="#5C40A8" />
    </>
  ),
  pencil: (
    <>
      <rect x="46" y="18" width="8" height="56" rx="2" fill="#F4C13B" transform="rotate(20 50 46)" />
      <polygon points="60,66 68,74 58,80" fill="#3A2A18" transform="rotate(20 50 46)" />
    </>
  ),
  book: (
    <>
      <path d="M20 26 Q40 20 50 30 V78 Q40 68 20 74 Z" fill="#3D86C6" />
      <path d="M80 26 Q60 20 50 30 V78 Q60 68 80 74 Z" fill="#2F6FA8" />
    </>
  ),
  teddy: (
    <>
      <circle cx="30" cy="26" r="9" fill="#B98456" />
      <circle cx="70" cy="26" r="9" fill="#B98456" />
      <circle cx="50" cy="42" r="24" fill="#C68A4E" />
      <ellipse cx="50" cy="72" rx="26" ry="20" fill="#C68A4E" />
      <circle cx="42" cy="40" r="3" fill="#2A2A18" />
      <circle cx="58" cy="40" r="3" fill="#2A2A18" />
      <ellipse cx="50" cy="48" rx="7" ry="5" fill="#E5B47D" />
    </>
  ),
  box: (
    <>
      <rect x="18" y="40" width="64" height="42" rx="4" fill="#C99A5B" />
      <polygon points="18,40 32,24 82,24 68,40" fill="#DDB37A" />
      <rect x="46" y="40" width="8" height="42" fill="#A67C3F" />
    </>
  ),
  chair: (
    <>
      <rect x="28" y="18" width="44" height="10" rx="3" fill="#8A5A34" />
      <rect x="28" y="28" width="10" height="40" fill="#A9713F" />
      <rect x="24" y="60" width="52" height="10" rx="3" fill="#8A5A34" />
      <rect x="30" y="70" width="8" height="16" fill="#6B4226" />
      <rect x="62" y="70" width="8" height="16" fill="#6B4226" />
    </>
  ),
  table: (
    <>
      <rect x="14" y="42" width="72" height="10" rx="3" fill="#A9713F" />
      <rect x="20" y="52" width="8" height="30" fill="#8A5A34" />
      <rect x="72" y="52" width="8" height="30" fill="#8A5A34" />
    </>
  ),
  arrow: (
    <path d="M14 50 H70 M56 32 L76 50 L56 68" stroke="#E07A3C" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  wave: (
    <>
      <circle cx="40" cy="72" r="16" fill="#4E9BD6" />
      <circle cx="40" cy="32" r="14" fill="#E9B98A" />
      <path d="M52 68 Q70 54 68 26" stroke="#E9B98A" strokeWidth="11" fill="none" strokeLinecap="round" />
      <circle cx="68" cy="22" r="10" fill="#E9B98A" />
      <path d="M78 8 Q83 13 78 18 M86 12 Q91 17 86 24 M82 22 Q88 26 82 31" stroke="#4A3B12" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </>
  ),
  clap: (
    <>
      <path d="M18 52 Q12 40 22 30 Q32 24 38 34 L42 58 Q36 70 24 66 Q14 62 18 52 Z" fill="#E9B98A" />
      <path d="M82 52 Q88 40 78 30 Q68 24 62 34 L58 58 Q64 70 76 66 Q86 62 82 52 Z" fill="#E9B98A" />
      <path d="M50 10 L50 22 M38 14 L44 24 M62 14 L56 24" stroke="#D79A22" strokeWidth="3" fill="none" strokeLinecap="round" />
    </>
  ),
  jump: (
    <>
      <circle cx="50" cy="20" r="11" fill="#E9B98A" />
      <path d="M34 52 Q50 40 66 52 L70 74 H30 Z" fill="#4E9BD6" />
      <path d="M36 54 L20 34" stroke="#4E9BD6" strokeWidth="9" fill="none" strokeLinecap="round" />
      <path d="M64 54 L80 34" stroke="#4E9BD6" strokeWidth="9" fill="none" strokeLinecap="round" />
      <path d="M38 74 L26 90" stroke="#4E9BD6" strokeWidth="9" fill="none" strokeLinecap="round" />
      <path d="M62 74 L74 90" stroke="#4E9BD6" strokeWidth="9" fill="none" strokeLinecap="round" />
    </>
  ),
  sit: (
    <>
      <circle cx="42" cy="26" r="11" fill="#E9B98A" />
      <path d="M26 56 Q42 44 58 56 L60 74 H24 Z" fill="#4E9BD6" />
      <path d="M56 68 L82 68" stroke="#4E9BD6" strokeWidth="12" fill="none" strokeLinecap="round" />
      <path d="M28 74 L26 90 M56 74 L58 90" stroke="#4E9BD6" strokeWidth="9" fill="none" strokeLinecap="round" />
    </>
  ),
  stand: (
    <>
      <circle cx="50" cy="24" r="11" fill="#E9B98A" />
      <path d="M32 58 Q50 44 68 58 L72 88 H28 Z" fill="#4E9BD6" />
      <path d="M32 60 L20 76" stroke="#4E9BD6" strokeWidth="9" fill="none" strokeLinecap="round" />
      <path d="M68 60 L80 76" stroke="#4E9BD6" strokeWidth="9" fill="none" strokeLinecap="round" />
    </>
  ),
  dance: (
    <>
      <circle cx="50" cy="22" r="11" fill="#E9B98A" />
      <path d="M34 54 Q50 42 66 54 L68 78 H32 Z" fill="#EA6F9C" />
      <path d="M36 56 L18 44" stroke="#EA6F9C" strokeWidth="9" fill="none" strokeLinecap="round" />
      <path d="M64 56 L82 66" stroke="#EA6F9C" strokeWidth="9" fill="none" strokeLinecap="round" />
      <path d="M40 78 L28 92" stroke="#EA6F9C" strokeWidth="9" fill="none" strokeLinecap="round" />
      <path d="M56 78 L74 86" stroke="#EA6F9C" strokeWidth="9" fill="none" strokeLinecap="round" />
    </>
  ),
  clock: (
    <>
      <circle cx="50" cy="50" r="34" fill="#FDF3DF" stroke="#3A2A18" strokeWidth="4" />
      <path d="M50 30 L50 50 L66 58" stroke="#4E9BD6" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="50" cy="50" r="4" fill="#3A2A18" />
      <circle cx="50" cy="19" r="2.5" fill="#3A2A18" />
      <circle cx="50" cy="81" r="2.5" fill="#3A2A18" />
      <circle cx="19" cy="50" r="2.5" fill="#3A2A18" />
      <circle cx="81" cy="50" r="2.5" fill="#3A2A18" />
    </>
  ),
  heart: (
    <path d="M50 85 C15 60 5 38 5 22 C5 8 17 2 28 2 C38 2 46 8 50 18 C54 8 62 2 72 2 C83 2 95 8 95 22 C95 38 85 60 50 85 Z" fill="#EA6F9C" />
  ),
};

export default function SparkIcon({ name, size = 64, className = "" }) {
  const content = ICONS[name];
  if (!content) return null;
  return (
    <svg
      className={`spark-icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}

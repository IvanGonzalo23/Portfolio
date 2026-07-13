import "./Avatar.css";

// Ilustración propia en line-art, coherente con la estética de terminal.
// No usa fotos ni assets externos: es SVG puro con los colores del tema.
export function Avatar() {
  return (
    <svg
      viewBox="0 0 240 240"
      role="img"
      aria-label="Ilustración de un desarrollador frente a una terminal"
      className="avatar-svg"
    >
      <defs>
        <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>

      <circle cx="120" cy="120" r="118" fill="url(#glow)" />

      {/* monitor */}
      <rect
        x="46"
        y="56"
        width="148"
        height="98"
        rx="8"
        fill="var(--surface)"
        stroke="var(--border-strong)"
        strokeWidth="2"
      />
      <rect x="46" y="56" width="148" height="22" rx="8" fill="var(--surface-2)" />
      <circle cx="56" cy="67" r="2.5" fill="#ff5f57" />
      <circle cx="64" cy="67" r="2.5" fill="#febc2e" />
      <circle cx="72" cy="67" r="2.5" fill="#28c840" />

      {/* código en pantalla */}
      <text x="58" y="100" fontFamily="monospace" fontSize="9" fill="var(--accent-2)">
        const dev = {"{"}
      </text>
      <text x="66" y="113" fontFamily="monospace" fontSize="9" fill="var(--text-muted)">
        name: <tspan fill="var(--accent)">"Iván"</tspan>,
      </text>
      <text x="66" y="126" fontFamily="monospace" fontSize="9" fill="var(--text-muted)">
        stack: [Py, JS, TS],
      </text>
      <text x="58" y="139" fontFamily="monospace" fontSize="9" fill="var(--accent-2)">
        {"}"}
      </text>

      {/* stand del monitor */}
      <rect x="112" y="154" width="16" height="14" fill="var(--surface-2)" />
      <rect x="94" y="168" width="52" height="8" rx="3" fill="var(--surface-2)" />

      {/* cabeza */}
      <circle cx="120" cy="205" r="18" fill="var(--surface-2)" stroke="var(--border-strong)" strokeWidth="2" />
      {/* hombros */}
      <path
        d="M84 240 C84 214 100 200 120 200 C140 200 156 214 156 240"
        fill="var(--surface-2)"
        stroke="var(--border-strong)"
        strokeWidth="2"
      />

      {/* cursor parpadeante como detalle */}
      <rect x="146" y="132" width="6" height="10" fill="var(--accent)">
        <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

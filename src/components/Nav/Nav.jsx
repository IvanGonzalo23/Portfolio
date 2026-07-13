import { useState } from "react";
import "./Nav.css";

const LINKS = [
  { href: "#sobre-mi", label: "--sobre-mi" },
  { href: "#stack", label: "--stack" },
  { href: "#proyectos", label: "--proyectos" },
  { href: "#github", label: "--github" },
  { href: "#contacto", label: "--contacto" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-header">
      <nav className="nav">
        <div className="nav-brand">
          <span className="nav-brand-sym">~/</span>IGMA
        </div>
        <button
          className="nav-toggle"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
        <ul className={`nav-links ${open ? "nav-links-open" : ""}`}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

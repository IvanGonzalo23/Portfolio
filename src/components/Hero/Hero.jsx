import { profile } from "../../data/profile";
import { Terminal } from "../Terminal/Terminal";
import { Avatar } from "../Avatar/Avatar";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap hero-grid">
        <div className="hero-terminal-col">
          <Terminal />
          <div className="hero-cta">
            <a href="#proyectos" className="pf-btn pf-btn-primary">
              ./ver-proyectos.sh
            </a>
            {profile.cvUrl ? (
              <a href={profile.cvUrl} className="pf-btn pf-btn-ghost" target="_blank" rel="noopener noreferrer">
                ↓ descargar-cv.pdf
              </a>
            ) : (
              <span className="pf-btn pf-btn-ghost" aria-disabled="true" title="Todavía no hay CV cargado">
                ↓ descargar-cv.pdf
              </span>
            )}
            <a href="#contacto" className="pf-btn pf-btn-ghost">
              $ contactar --now
            </a>
          </div>
        </div>
        <div className="hero-avatar-col" aria-hidden="true">
          <Avatar />
        </div>
      </div>
    </section>
  );
}

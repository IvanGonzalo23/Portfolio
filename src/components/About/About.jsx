import { profile } from "../../data/profile";
import "./About.css";

export function About() {
  return (
    <section id="sobre-mi">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">whoami</span>
          <h2 className="section-title">Sobre mí</h2>
        </div>
        <div className="about-grid">
          <div className="about-text">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="about-facts">
            <div className="fact">
              <span>rol</span>
              <span>{profile.role}</span>
            </div>
            <div className="fact">
              <span>estado</span>
              <span>{profile.status}</span>
            </div>
          
            <div className="fact">
              <span>equipo</span>
              <span>Orán Soluciones</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

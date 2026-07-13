import { profile } from "../../data/profile";
import "./Contact.css";

export function Contact() {
  return (
    <section id="contacto">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">./contacto.sh</span>
          <h2 className="section-title">Hablemos</h2>
        </div>

        <div className="contact-box">
          <div className="contact-line">
            <span className="term-prompt">$</span> mail --to Iván
          </div>
          <div className="contact-line contact-echo">
            ¿Buscás sumar un dev a tu equipo? Escribime, respondo rápido.
          </div>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>✉ {profile.email}</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              ⌥ GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              in LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

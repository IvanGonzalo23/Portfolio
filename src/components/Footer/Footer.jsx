import { profile } from "../../data/profile";
import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        © {new Date().getFullYear()} {profile.name} — construido con React, JavaScript y Vite
      </div>
    </footer>
  );
}

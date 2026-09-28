import { profile } from "../../data/profile";
import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        © {new Date().getFullYear()} IGMA - DEV
      </div>
    </footer>
  );
}

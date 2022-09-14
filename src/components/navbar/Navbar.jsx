import "./navbar.scss";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <div className="navbar hidden-phone">
      <div className="navbar__container">
        <div className="navbar__container__left">
          <Link to={`/`}>
            <img src={require("../../assets/logo.png")} />
          </Link>
        </div>
        <div className="navbar__container__right">
          <span>
            <a href="#uvod">Kdo jsme</a>
          </span>
          <span>
            <a href="#kandidati">Kandidáti</a>
          </span>
          <span>
            <a href="#programme">Program</a>
          </span>
          <span>
            <a href="#kontakt">Kontakt</a>
          </span>
        </div>
      </div>
    </div>
  );
}

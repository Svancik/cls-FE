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
            <Link to="#uvod">Kdo jsme</Link>
          </span>
          <span>
            <Link to="#kandidati">Kandidáti</Link>
          </span>
          <span>
            <Link to="#programme">Program</Link>
          </span>
          <span>
            <Link to="#kontakt">Kontakt</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

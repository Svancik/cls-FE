import "./profile.scss";
import { Politics } from "../../assets/candidateData";
import { HashLink as Link } from "react-router-hash-link";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";

export default function Profile({ id }) {
  const paramId = useParams().id;
  //const person = Politics.filter((p) => p.id == paramId)[0];
  const person = Politics.filter((p) => p.id == id)[0];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="profile">
        <header className="profile__header">
          <h1>{person.title}</h1>
        </header>
        <div className="profile__container">
          <div className="profile__container__info">
            <div className="profile__container__info__img">
              <img src={require("../../assets/" + person.faceImg)} />
            </div>
            <div className="profile__container__info__quote">
              <span className="profile__container__info__quote_preText">
                {person.preMottoText}
              </span>
              <br />
              <span className="profile__container__info__quote__text" lang="de">
                {person.mottoText}
              </span>
              <br />
            </div>
          </div>

          <div className="profile__container__description">
            <span style={{ whiteSpace: "pre-line" }}>{person.longText}</span>
          </div>
        </div>
      </div>
      <div className="profile__button">
        <Link to={`/#${paramId}`}>
          <button>Zpět</button>
        </Link>
      </div>
    </>
  );
}

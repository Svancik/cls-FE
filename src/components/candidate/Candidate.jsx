import "./candidate.scss";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Candidate({ id, medailonImg, bigMedailonImg }) {
  return (
    <div
      id={id}
      className={"galleryCell " + (bigMedailonImg && "candidate__big")}
    >
      <Link to={`/candidate/${id}`}>
        <img src={require("../../assets/" + medailonImg)} />{" "}
      </Link>
    </div>
  );
}

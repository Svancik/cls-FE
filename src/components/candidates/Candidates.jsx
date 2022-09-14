import "./candidates.scss";
import { Politics } from "../../assets/candidateData";
import Candidate from "../candidate/Candidate";

export default function Candidates() {
  return (
    <div className="candidates__container">
      {Politics.map((p) => (
        <Candidate
          key={p.id}
          id={p.id}
          title={p.title}
          medailonImg={p.medailonImg}
          bigMedailonImg={p.bigMedailonImg}
          faceImg={p.faceImg}
          mottoText={p.mottoText}
          longText={p.longText}
        />
      ))}
    </div>
  );
}

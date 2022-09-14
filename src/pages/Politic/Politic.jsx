import Navbar from "../../components/navbar/Navbar";
import "./politic.scss";
import Profile from "./../../components/profile/Profile";
import { useParams } from "react-router-dom";
import Footer from "./../../components/footer/Footer";

export default function Politic() {
  const id = useParams().id;
  return (
    <>
      <Profile id={id} />
    </>
  );
}

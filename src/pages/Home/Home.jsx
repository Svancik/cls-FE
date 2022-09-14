import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Featured from "./../../components/featured/Featured";
import Candidates from "../../components/candidates/Candidates";
import Footer from "./../../components/footer/Footer";
import Programme from "../../components/programme/Programme";
export default function Home() {
  return (
    <div className="wrapper">
      <Navbar />
      <Featured />
      <Candidates />
      <Programme />
      <Footer />
    </div>
  );
}

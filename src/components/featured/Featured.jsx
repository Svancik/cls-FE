import "./featured.scss";
import Candidates from "../candidates/Candidates";
import Footer from "../footer/Footer";
import { Element } from "react-scroll";

export default function Featured() {
  return (
    <div className="featured">
      <div className="featured__photo item hidden-phone">
        <div className="img-wrap">
          <img src={require("../../assets/featured.webp")} />
        </div>
      </div>
      <div className="featured__container">
        <div id="uvod" className="featured_container__header">
          <h1 className="hidden-phone">CESTA LEPŠÍM SMĚREM</h1>
          <img className="hidden-PC" src={require("../../assets/logo.png")} />
        </div>

        <hr />
        <div className="featured_container__description ">
          <h2>KDO JSME?</h2>
          <span>
            <b> Jsme místní patrioti a srdcaři</b>, kterým není lhostejný osud
            Města Štětí a jeho devíti místních částí – Brocna, Čakovic, Hněvic,
            Chcebuze, Počeplic, Radouně, Stračí, Újezda a Veselí. <br />
            <b>Jsme aktivní občané</b>, ale také Vaši sousedé, kteří už léta
            přikládají ruku k dílu, aby náš region vzkvétal, lidem se v něm
            dobře žilo, senioři se nebáli vycházet ze svých domovů a mladí lidé
            se odsud nestěhovali pryč. <br /> <b> Jsme dobrovolníci</b> činní v
            různých spolcích a neziskových organizacích, kteří chtějí moderní,
            profesionální, otevřenou, přátelskou a komunikující radnici
            reagující průběžně na podněty svých občanů. <br />{" "}
            <b> Jsme jako Vy</b> – rodiče a prarodiče, kteří chtějí jednou svým
            dětem i vnoučatům předat ten náš kousek Země v lepší kondici, s
            kvalitními podmínkami pro bydlení v bezpečném prostředí, v živé a
            pestré krajině a s různorodými možnostmi pro aktivní trávení volného
            času. <br />{" "}
            <b>
              Jsme kandidáti do Zastupitelstva města Štětí, kteří se nebojí
              přijmout zodpovědnost, naslouchat Vám, inspirovat se příklady
              dobré praxe, hájit veřejný zájem a spolu s Vámi nacházet CESTU
              LEPŠÍM SMĚREM!
            </b>
          </span>
        </div>
        <hr />
        <Element id="kandidati">
          <h2>KANDIDÁTI</h2>
        </Element>
      </div>
    </div>
  );
}

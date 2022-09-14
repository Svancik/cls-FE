import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <h3 id="kontakt">Kontakt</h3>
        <h4> cestalepsimsmerem@seznam.cz </h4>
        <div className="socialIcons">
          <div className="icon">
            <a href="https://www.facebook.com/CestaLepsimSmerem">
              <img
                src={require("../../assets/socials/icons8-facebook-64.png")}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

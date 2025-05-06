import "./Footer.css";
import githubIcon from "../../assets/Images/github-icon.png";
import facebookIcon from "../../assets/Images/facebook-icon.png";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">© 2024 Supersite, Powered by News API</p>
      <div className="footer__links">
        <nav className="footer__nav">
          <a href="/" className="footer__link">
            Home
          </a>

          <a href="https://tripleten.com/" className="footer__link">
            TripleTen
          </a>
        </nav>
        <div className="footer__socials">
          <a href="https://github.com/DGOOD-15/news-explorer" className="">
            <img
              src={githubIcon}
              alt="github logo"
              className="footer__github-icon"
            />
          </a>
          <a href="https://www.facebook.com/" className="footer__socials">
            <img
              src={facebookIcon}
              alt="facebook logo"
              className="footer__facebook-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

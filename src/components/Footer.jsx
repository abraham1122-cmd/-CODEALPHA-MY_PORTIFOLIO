import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div>
          <h3>
            Abraham <span>Desta</span>
          </h3>

          <p>
            Software Developer building modern web experiences.
          </p>
        </div>

        <div className="footer-socials">

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
          >
            <FontAwesomeIcon icon={faTelegram} />
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>

        </div>

        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} abraham-desta.
          all rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
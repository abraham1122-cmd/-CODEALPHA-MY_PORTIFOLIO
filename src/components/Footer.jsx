

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div>
          <h3>
            Abraham <span>Desta</span>
          </h3>

          <p>
            Frontend Developer building modern web experiences.
          </p>
        </div>

        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

      </div>

      <div className="footer-bottom">

        <p >
          © {new Date().getFullYear()} abraham-desta.
          all rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
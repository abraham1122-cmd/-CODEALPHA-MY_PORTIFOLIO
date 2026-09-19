

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="container hero-container">

        <div className="hero-content">

          <p className="hero-intro">
            Hello, I'm
          </p>

          <h1>
            Abraham <span>Desta</span>
          </h1>

          <h2>
            Frontend Developer
          </h2>

          <p className="hero-description">
            I build responsive, user-friendly and modern web
            applications using JavaScript, React and modern
            web development technologies.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>

            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/abraham-desta"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <div className="hero-image">

          <div className="image-wrapper">

            <img
              src="/src/assets/port pro.jpg"
              alt="Abraham Desta"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;


function About() {
  return (
    <section className="section" id="about">

      <div className="container">

        <div className="section-heading">
          <p>Get To Know Me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

          <div className="about-text">

            <h3>
              Building useful digital experiences.
            </h3>

            <p>
              I am a front-end developer interested in building
              modern, responsive and user-friendly web applications.
              I enjoy turning ideas into functional digital products.
            </p>

            <p>
              My development journey includes HTML, CSS, JavaScript,
              React, Git, responsive design and working with APIs.
              I continuously improve my problem-solving and software
              development skills through practical projects.
            </p>

            <a
              href="#contact"
              className="text-link"
            >
              Let's work together →
            </a>

          </div>

          <div className="about-stats">

            <div className="stat-card">
              <strong>10+</strong>
              <span>Projects</span>
            </div>

            <div className="stat-card">
              <strong>5+</strong>
              <span>Technologies</span>
            </div>

            <div className="stat-card">
              <strong>100%</strong>
              <span>Learning Mindset</span>
            </div>

            <div className="stat-card">
              <strong>∞</strong>
              <span>Curiosity</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
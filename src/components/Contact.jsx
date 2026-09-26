import { useState } from "react";

function Contact() {
  const [showContact, setShowContact] = useState(false);

  return (
    <section className="section contact-section" id="contact">
      <div className="container">

        <button
          className="projects-toggle"
          onClick={() => setShowContact(!showContact)}
        >
          <span>Contact Me</span>

          <span className="projects-arrow">
            {showContact ? "↑" : "↓"}
          </span>
        </button>

        {showContact && (
          <div className="projects-content">

            <div className="section-heading">
             
            </div>

            <div className="contact-content">

              <div className="contact-intro">
                <span className="contact-label">
                  Have a project in mind?
                </span>

                <h3>
                  Let's build something
                  <span> meaningful together.</span>
                </h3>

                <p>
                  I am open to software development opportunities,
                  freelance projects, internships, collaborations,
                  and other opportunities where I can contribute
                  and continue growing as a developer.
                </p>
              </div>

              <div className="contact-details">

                <div className="contact-item">
                  <span>Email</span>
                  <a href="abrahamdasta48@gmail.com">
                    abrahamdasta48@gmail.com
                  </a>
                </div>

                <div className="contact-item">
                  <span>Phone</span>
                  <a href="tel:+251931325733">
                    +251 931325733
                  </a>
                </div>

                <div className="contact-item">
                  <span>Location</span>
                  <p>Addis Ababa, Ethiopia</p>
                </div>

                <div className="contact-item">
                  <span>Social</span>

                  <div className="contact-socials">
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>

                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn ↗
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
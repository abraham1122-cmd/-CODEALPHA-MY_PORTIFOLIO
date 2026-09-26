import { useState } from "react";

function Experience() {
  const [showExperience, setShowExperience] = useState(false);

  const experiences = [
    {
      date: "2026 – Present",
      title: "Frontend Developer",
      company: "Independent / Projects",
      description:
        "Building responsive web applications and improving practical skills in JavaScript, React, APIs and modern frontend development.",
    },
    {
      date: "Professional Experience",

       title: "Web Developer",

       company: "Freelance / Personal Projects",

      description:
"Developed responsive and interactive web applications using HTML, CSS, JavaScript, React, and Next.js, focusing on modern UI design and user-friendly experiences.",

    },
    {
      date: "Professional Experience",

      title: "Full-Stack Developer in Training",

      company: "Independent Projects",

      description:
"Developing full-stack web applications using React, Next.js, JavaScript, APIs, databases, and authentication while building practical experience with Git and GitHub.",

    },
  ];

  return (
    <section className="section" id="experience">
      <div className="container">

        <button
          className="projects-toggle"
          onClick={() => setShowExperience(!showExperience)}
        >
          <span>Experience</span>

          <span className="projects-arrow">
            {showExperience ? "↑" : "↓"}
          </span>
        </button>

        {showExperience && (
          <div className="projects-content">

            <div className="section-heading">
              {/* <p>My Journey</p>
              <h2>Experience</h2> */}
            </div>

            <div className="timeline">
              {experiences.map((experience, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>

                  <div className="timeline-content">
                    <span className="timeline-date">
                      {experience.date}
                    </span>

                    <h3>{experience.title}</h3>

                    <h4>{experience.company}</h4>

                    <p>{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

export default Experience;
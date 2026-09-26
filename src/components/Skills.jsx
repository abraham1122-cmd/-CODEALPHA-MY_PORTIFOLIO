import { useState } from "react";
import skills from "../data/skills";

function Skills() {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <section className="section" id="skills">
      <div className="container">

        <button
          className="projects-toggle"
          onClick={() => setShowSkills(!showSkills)}
        >
          <span>Skills</span>

          <span className="projects-arrow">
            {showSkills ? "↑" : "↓"}
          </span>
        </button>

        {showSkills && (
          <div className="projects-content">

            <div className="section-heading">
              {/* <p>My Technical Skills</p>
              <h2>Skills</h2> */}
            </div>

            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <span className="skill-icon">
                    {skill.icon}
                  </span>

                  <h3>{skill.name}</h3>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

export default Skills;
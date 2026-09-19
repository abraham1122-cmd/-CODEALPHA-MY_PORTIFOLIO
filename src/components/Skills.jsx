

import skills from "../data/skills";

function Skills() {
  return (
    <section className="section section-alt" id="skills">

      <div className="container">

        <div className="section-heading">
          <p>What I Know</p>
          <h2>My Skills</h2>
        </div>

        <div className="skills-grid">

          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>

              <div className="skill-icon">
                {skill.icon}
              </div>

              <div>
                <h3>{skill.name}</h3>
                <p>{skill.level}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;


function Experience() {
  const experiences = [
    {
      date: "2026 – Present",
      title: "Frontend Developer",
      company: "Independent / Projects",
      description:
        "Building responsive web applications and improving practical skills in JavaScript, React, APIs and modern frontend development."
    },
    {
      date: "Professional Experience",
      title: "Sales & Customer Relations",
      company: "East Africa Bottling Share Company",
      description:
        "Worked on customer-related and sales activities, supporting digitalization and customer service processes."
    },
    {
      date: "Professional Experience",
      title: "Administrative & Supervisory Experience",
      company: "Various Organizations",
      description:
        "Developed experience in administration, coordination, supervision, communication and working with teams."
    }
  ];

  return (
    <section className="section" id="experience">

      <div className="container">

        <div className="section-heading">
          <p>My Journey</p>
          <h2>Experience</h2>
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

                <p>
                  {experience.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;
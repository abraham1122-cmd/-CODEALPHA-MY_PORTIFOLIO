

function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <div className="project-image">

        <img
          src={project.image}
          alt={project.title}
        />

        <span className="project-category">
          {project.category}
        </span>

      </div>

      <div className="project-content">

        <h3>{project.title}</h3>

        <p>
          {project.description}
        </p>

        <div className="technology-list">

          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}

        </div>

        <div className="project-links">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          {/* <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo ↗
          </a> */}

        </div>

      </div>

    </article>
  );
}

export default ProjectCard;
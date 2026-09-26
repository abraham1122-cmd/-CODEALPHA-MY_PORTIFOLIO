function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-category">{project.category}</span>
        <span className="project-number">
          {String(project.id).padStart(2, "0")}
        </span>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="technology-list">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            View Project ↗
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
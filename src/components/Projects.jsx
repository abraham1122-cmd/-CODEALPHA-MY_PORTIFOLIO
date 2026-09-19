import { useEffect, useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [category, setCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    "All",
    "React",
    "JavaScript",
    "HTML/CSS"
  ];

  const filteredProjects =
    category === "All"
      ? projects
      : projects.filter(
          (project) => project.category === category
        );

 
  const infiniteProjects = [
    ...filteredProjects,
    ...filteredProjects
  ];

 
  useEffect(() => {
    if (filteredProjects.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, [filteredProjects.length]);

 
  useEffect(() => {
    setCurrentIndex(0);
  }, [category]);

 
  useEffect(() => {
    if (currentIndex === filteredProjects.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(0);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, filteredProjects.length]);

  return (
    <section className="section" id="projects">

      <div className="container">

        <div className="section-heading">
          <p>My Recent Work</p>
          <h2>Projects</h2>
        </div>

        <div className="filter-buttons">

          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}

        </div>

        <div className="project-slider">

          <div
            className="project-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition:
                currentIndex === filteredProjects.length
                  ? "transform 0.8s ease-in-out"
                  : "transform 0.8s ease-in-out"
            }}
          >

            {infiniteProjects.map((project, index) => (
              <div
                className="project-slide"
                key={`${project.id}-${index}`}
              >
                <ProjectCard project={project} />
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;
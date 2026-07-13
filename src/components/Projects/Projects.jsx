import { projects } from "../../data/profile";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./Projects.css";

export function Projects() {
  return (
    <section id="proyectos">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">ls -la proyectos/</span>
          <h2 className="section-title">Proyectos</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.filename} />
          ))}
        </div>
      </div>
    </section>
  );
}

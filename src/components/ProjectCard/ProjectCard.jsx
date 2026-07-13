import "./ProjectCard.css";

export function ProjectCard({ project }) {
  const hasDemo = Boolean(project.demoUrl);
  const hasCode = Boolean(project.codeUrl);

  return (
    <article className="project-card">
      <div className="project-file">
        <span className="filename">
          {project.filename}
          <span className="ext">{project.ext}</span>
        </span>
        <span className={`status-badge ${project.status}`}>
          {project.status === "wip" ? "en desarrollo" : "listo"}
        </span>
      </div>
      <div className="project-body">
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="project-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="project-actions">
          <a
            href={project.demoUrl || "#"}
            aria-disabled={!hasDemo}
            target={hasDemo ? "_blank" : undefined}
            rel="noopener noreferrer"
          >
            demo →
          </a>
          <a
            href={project.codeUrl || "#"}
            aria-disabled={!hasCode}
            target={hasCode ? "_blank" : undefined}
            rel="noopener noreferrer"
          >
            código →
          </a>
        </div>
      </div>
    </article>
  );
}

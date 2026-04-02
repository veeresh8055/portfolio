import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projectsData";

export default function Projects({ showAll = false }) {
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 4);

  return (
    <section className="projects" id="project">
      <div className="projectsInner">
        <div className="projectsHead">
          <h2>Projects</h2>
          <span>({projectsData.length})</span>
        </div>

        <div className="projectsGrid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {!showAll && (
          <div className="showMoreWrap">
            <a href="/projects" className="showMoreBtn">
              Show More
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

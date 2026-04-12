import ProjectCard from "./ProjectCard";
import { projectsData } from "../../data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-2">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <span className="section-tag px-4 py-1.5 inline-block mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif tracking-tight">
            Featured Projects
          </h2>
          <p className="page-description max-w-2xl mx-auto text-balance">
            A selection of my work in the past, showcasing my skills in design and frontend development.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:gap-10 mt-8 md:mt-12 max-w-5xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

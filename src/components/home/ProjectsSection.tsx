import ProjectCard from "./ProjectCard";
import { projectsData } from "../../data/projects";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-2">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl mb-2 font-serif tracking-tight">
            Featured Projects
          </h2>
          <p className="text max-w-compact mx-auto text-balance">
            A selection of my work, showcasing my skills in Design and Engineering.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

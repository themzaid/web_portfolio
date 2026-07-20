import ProjectCard from "./ProjectCard";
import { projectsData } from "../../data/projects";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@/components/ui/custom-icons";

/**
 * Home page "Featured Projects" — shows a limited number of projects
 * based on the current CSS grid layout using pure CSS visibility.
 *
 * Breakpoints (matching the grid):
 * - 1 column (< 640px, mobile):   show first 3 projects
 * - 2 columns (640–1023px, sm):   show first 4 projects
 * - 3 columns (≥ 1024px, lg):     show first 6 projects
 */

/** Max projects to render (desktop 3-col shows all 6) */
const MAX_PROJECTS = 6;

const ProjectsSection = () => {
  // Slice to the maximum we'd ever show (mobile = 6)
  const visibleProjects = projectsData.slice(0, MAX_PROJECTS);

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
          {visibleProjects.map((project, index) => {
            /**
             * CSS-based responsive visibility:
             * - Cards 0–2: always visible (all breakpoints)
             * - Card 3:    hidden on mobile 1-col, visible on sm 2-col and lg 3-col
             * - Cards 4–5: hidden below lg 3-col, visible on desktop only
             */
            let responsiveClass = "";
            if (index === 3) {
              responsiveClass = "hidden sm:block";
            } else if (index >= 4) {
              responsiveClass = "hidden lg:block";
            }

            return (
              <div key={project.id} className={responsiveClass}>
                <ProjectCard project={project} index={index} />
              </div>
            );
          })}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <Button asChild variant="outline" size="default" className="group">
            <Link to="/projects">
              View all projects
              <ArrowRightIcon
                size={16}
                className="ml-1 transition-transform [@media(hover:hover)]:group-hover:translate-x-1 group-active:translate-x-1"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

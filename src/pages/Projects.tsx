import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/home/ProjectCard";
import { projectsData } from "@/data/projects";

const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Full-Stack", value: "Full-Stack Development" },
  { label: "Frontend", value: "Frontend Development" },
  { label: "Design", value: "design" },
] as const;

/**
 * Checks if a project matches a given filter category.
 * "design" is a catch-all for any category containing "Design" (Logo Design, UI Design, etc.)
 */
const matchesCategory = (projectCategory: string, filter: string): boolean => {
  if (filter === "all") return true;
  if (filter === "design") return projectCategory.toLowerCase().includes("design");
  return projectCategory === filter;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projectsData.filter((p) =>
    matchesCategory(p.category, activeFilter)
  );

  return (
    <Layout>
      <section className="pt-8 pb-16 md:pb-24 px-2">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-2">
              Projects
            </h1>
            <p className="text-[16px] md:text-[17px] leading-[1.7] font-normal max-w-compact mx-auto text-text-primary">
              A complete collection of my work across design and engineering.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-9 md:mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`
                  py-1 px-3 md:py-2 md:px-5 rounded-full text-[13px] md:text-[14px] font-semibold font-sans tracking-wider
                  border-2 transition-all duration-200 ease-out
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                  ${activeFilter === cat.value
                    ? "border-accent-blue bg-accent-blue/95 text-white"
                    : "border-accent-blue/80 bg-background text-accent-blue/90 hover:bg-accent-blue/5"
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-muted-foreground mt-16 text-lg"
            >
              No projects in this category yet.
            </motion.p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

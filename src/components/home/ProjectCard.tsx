import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Project } from "../../data/projects";
import MacBookFrame from "@/components/common/MacBookFrame";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {



  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{
        duration: 0.6,
        ease: [.1, .12, .2, 1],
      }}
      id={`project-${project.slug}`}
      className="grid grid-cols-1 sm:grid-cols-[clamp(42%,45vw,50%)_1fr] border-[1px] border-border rounded-[25px] bg-card overflow-hidden min-h-[auto]"
    >

      {/* LEFT: Custom Thumbnail Graphic */}
      <div
        className="relative overflow-hidden min-h-[clamp(250px,30vw,320px)]"
        style={{ background: project.themeGradient }}
      >
        {/* Glows */}
        {project.glows.map((glow, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-[clamp(22px,3vw,35px)]"
            style={{
              width: glow.width,
              height: glow.height,
              top: glow.top,
              bottom: glow.bottom,
              left: glow.left,
              right: glow.right,
              background: glow.background
            }}
          />
        ))}

        {/* MacBook Frame */}
        <div
          className="absolute inset-x-[clamp(16px,4vw,24px)]"
          style={{ top: 'clamp(20px, 8vw, 32px)' }}
        >
          <MacBookFrame project={project} variant="card" />
        </div>
      </div>

      {/* RIGHT: Content Body */}
      <div className="flex flex-col p-6 ml-1 h-full w-full">
        <div className="flex flex-col flex-grow h-full">
          {/* Top Content Group */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] tracking-[0.18em] uppercase text-foreground/80">
              {project.category}
            </span>

            <h3 className="-ml-0.5 text-[28px] lg:text-[34px] leading-none tracking-tight">
              {project.title}
            </h3>

            <p className="text-[15px] leading-[1.7] text-foreground/80">
              {project.description}
            </p>
          </div>

          {/* Bottom Tags Group - Pinned using mt-auto */}
          <div className="flex flex-wrap gap-2 mt-3 mb-5 -ml-1">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="portfolio-tag px-3 py-1 text-[11px] leading-tight"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t-[1px] border-gray-300 w-full shrink-0 pt-5">
          <span className="text-xs text-foreground/60 tracking-wider">
            {project.year}
          </span>
          <Button asChild className="rounded-xl group text-xs tracking-widest font-semibold px-4">
            <Link
              to={`/project/${project.slug}`}
              aria-label={`View Case Study for ${project.title}`}
              onClick={() => sessionStorage.setItem('homeScrollPos', window.scrollY.toString())}
            >
              Case study
              <ArrowUpRight className="ml-0.5 w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.5} />
            </Link>
          </Button>
        </div>
      </div>

    </motion.article>
  );
};

export default ProjectCard;

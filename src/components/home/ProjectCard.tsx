import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
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
      animate={index < 3 ? { opacity: 1, y: 0 } : undefined}
      whileInView={index >= 3 ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "0px" }}
      transition={{
        duration: 0.6,
        ease: [.1, .12, .2, 1],
        delay: index < 3 ? 0.2 + (index * 0.1) : 0,
      }}
      id={`project-${project.slug}`}
      className="flex flex-col border-[1px] border-border rounded-[20px] bg-card overflow-hidden h-full"
    >

      {/* TOP: Custom Thumbnail Graphic */}
      <div
        className="relative overflow-hidden aspect-[4/3]"
        style={{ background: project.themeGradient, containerType: 'inline-size' }}
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
          className="absolute inset-x-[clamp(16px,5%,32px)] top-1/2 -translate-y-1/2"
        >
          <MacBookFrame project={project} variant="card" />
        </div>
      </div>

      {/* BOTTOM: Content Body */}
      <div className="flex flex-col flex-1 p-6 pb-5 w-full">
        <div className="flex flex-col flex-grow">
          {/* Top Content Group */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-foreground/60 mb-[-2px]">
              {project.category}
            </span>

            <h3 className="text-[28px] leading-none tracking-tight ml-[-1px]">
              {project.title}
            </h3>

            <p className="text-[15px] leading-[1.7] text-foreground/80">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
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

        <div className="flex items-center justify-end w-full shrink-0 mt-6">
          <Link
            to={`/project/${project.slug}`}
            aria-label={`View Case Study for ${project.title}`}
            onClick={() => sessionStorage.setItem('homeScrollPos', window.scrollY.toString())}
            className="group inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-foreground font-medium hover:text-muted-foreground transition-colors"
          >
            Case study
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

    </motion.article>
  );
};

export default ProjectCard;

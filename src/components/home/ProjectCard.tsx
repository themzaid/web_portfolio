import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@/components/ui/custom-icons";
import { Link } from "react-router-dom";
import { Project } from "../../data/projects";
import MacBookFrame from "@/components/common/MacBookFrame";
import SideRays from "@/components/ui/SideRays";
interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{
        y: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.15 },
        opacity: { duration: 0.7, ease: "linear", delay: (index % 3) * 0.15 }
      }}
      id={`project-${project.slug}`}
      className="flex flex-col border-[1px] border-card-border rounded-[20px] bg-card overflow-hidden h-full"
    >

      {/* TOP: Custom Thumbnail Graphic */}
      <div
        className="relative overflow-hidden aspect-[4/3] [container-type:inline-size]"
        style={{ background: project.themeGradient }}
      >
        <div className="absolute inset-0 opacity-40">
          <SideRays
            speed={2.5}
            rayColor1="#ffffff"
            rayColor2="#ffffff"
            intensity={2}
            spread={2}
            origin="top-right"
            tilt={0}
            saturation={0}
            blend={0.75}
            falloff={1.6}
            opacity={1.0}
          />
        </div>
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
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-muted-foreground mb-[-2px] ml-[1px]">
              {project.category}
            </span>

            <h3 className="text-[28px] leading-none tracking-tight ml-[-1px]">
              {project.title}
            </h3>

            <p className="description">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="portfolio-tag px-3 py-1 text-[11px] leading-tight text-primary/80"
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
            className="group inline-flex items-center gap-2 text-sm tracking-[0.12em] uppercase text-accent-blue font-extrabold transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:rounded-sm active:opacity-50"
          >
            Case study
            <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

    </motion.article>
  );
};

export default ProjectCard;

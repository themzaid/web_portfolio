import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {

  const renderMiniBrowserContent = () => {
    const accent = project.miniBrowserAccent ?? '#111111';

    if (project.slug === "crep-middle-east") {
      return (
        <div className="flex items-center justify-center w-full h-full">
          <img src="/crepme.svg" alt="Crep Middle East Logo" className="w-full h-full object-cover" />
        </div>
      );
    }

    if (project.slug === "tangled") {
      return (
        <div className="flex flex-col gap-2">
          <div className="text-[10px] tracking-widest uppercase text-black/30 mb-2">Educational Platform · Login</div>
          <div className="bg-black/5 border-[1px] border-black/10 rounded-md px-3 py-2 text-[11px] text-black/40">Email address</div>
          <div className="bg-black/5 border-[1px] border-black/10 rounded-md px-3 py-2 text-[11px] text-black/40">Password</div>
        </div>
      );
    }

    return (
      <>
        {project.miniBrowser.title && (
          <div className="font-sans font-medium text-[16px] lg:text-[20px] mb-2 leading-tight" style={{ color: accent }}>
            {project.miniBrowser.title}
          </div>
        )}
        {project.miniBrowser.desc && (
          <div className="text-[11px] text-black/50 max-w-[24ch] leading-relaxed">
            {project.miniBrowser.desc}
          </div>
        )}
        {project.miniBrowser.tags && (
          <div className="flex flex-wrap gap-2 mt-3">
            {project.miniBrowser.tags.map((tag, i) => (
              <div key={i} className="px-3 py-1 rounded-full text-[10px] border" style={{ color: accent, borderColor: accent + '33', backgroundColor: accent + '12' }}>
                {tag}
              </div>
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      id={`project-${project.slug}`}
      className="grid grid-cols-1 sm:grid-cols-[42%_1fr] border-[1px] border-border rounded-3xl bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 min-h-[300px]"
    >

      {/* LEFT: Custom Thumbnail Graphic */}
      <div
        className="relative overflow-hidden min-h-[220px]"
        style={{ background: project.themeGradient }}
      >
        {/* Glows */}
        {project.glows.map((glow, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-[22px] md:blur-[28px]"
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

        {/* Miniature Floating Browser Wrapper */}
        <div
          className="absolute inset-x-6 md:inset-x-6 top-6 md:top-7 bottom-0 rounded-t-[14px] border-[1px] border-white/10 border-b-0 overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
          style={{ backgroundColor: project.miniBrowserBg ?? '#0f1218' }}
        >
          <div className="h-[34px] flex items-center gap-2 px-3.5 bg-[#f0f0f0] border-b-[1px] border-black/8">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/60" />
          </div>
          <div className={project.slug === 'crep-middle-east' ? 'h-full' : 'p-5'}>
            {renderMiniBrowserContent()}
          </div>
        </div>
      </div>

      {/* RIGHT: Content Body */}
      <div className="flex flex-col p-5 ml-1 h-full w-full">
        <div className="flex flex-col justify-center flex-grow gap-3">
          <span className="text-[11px] tracking-[0.18em] uppercase text-foreground/80">
            {project.category}
          </span>

          <h3 className="-ml-0.5 text-[28px] lg:text-[34px] leading-none tracking-tight">
            {project.title}
          </h3>

          <p className="text-[15px] leading-[1.7] text-foreground/80">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-0 -ml-1">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="portfolio-tag px-2.5 py-0.5 text-[11px] leading-tight"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-5 mt-4 border-t-[1px] border-gray-300 w-full shrink-0">
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

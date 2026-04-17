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

  const liveUrl = project.links?.find(l =>
    l.label.toLowerCase().includes("landing") ||
    l.label.toLowerCase().includes("live") ||
    l.icon === 'external'
  )?.url;

  const renderMiniBrowserContent = () => {
    const accent = project.miniBrowserAccent ?? '#111111';

    if (project.screenshot) {
      return (
        <div className="w-full h-full overflow-hidden bg-[#111215] aspect-[16/9] flex items-center justify-center">
          <img
            src={`/src/assets/${project.screenshot}`}
            alt={`${project.title} Preview`}
            className="w-full h-full object-cover object-top"
          />
        </div>
      );
    }

    if (liveUrl) {
      return (
        <div className="w-full relative bg-[#111215] overflow-hidden aspect-[16/9]">
          <iframe
            src={liveUrl}
            className="absolute inset-0 w-[166.7%] h-[166.7%] border-none origin-top-left scale-[0.6] pointer-events-none"
            title={project.title}
            loading="lazy"
          />
        </div>
      );
    }

    const brandImages = ['bitstrap', 'crep-middle-east', 'skillscall', 'swades', 'tangled'];

    if (brandImages.includes(project.slug) && (!liveUrl || project.slug === 'crep-middle-east' || project.slug === 'bitstrap')) {
      const fileName = project.slug === 'crep-middle-east' ? 'crepme' : project.slug;
      return (
        <div className="flex items-center justify-center w-full h-full bg-[#111215]">
          <img
            src={`/${fileName}.svg`}
            alt={`${project.title} Preview`}
            className="w-full h-full object-cover object-center opacity-95"
          />
        </div>
      );
    }
    // Default fallback if no live URL is found
    return (
      <div className="flex items-center justify-center h-full bg-[#111215] text-white/20 text-[10px] uppercase tracking-widest">
        Preview Not Available
      </div>
    );
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{
        duration: 0.6,
        ease: [.1, .12, .2, 1],
      }}
      id={`project-${project.slug}`}
      className="grid grid-cols-1 sm:grid-cols-[50%_1fr] md:grid-cols-[42%_1fr] border-[1px] border-border rounded-[20px] bg-card overflow-hidden min-h-[auto]"
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

        {/* MacBook Frame — single connected unit based on original design */}
        <div className="absolute inset-x-5 md:inset-x-6 top-1/2 -translate-y-1/2 md:top-7 md:translate-y-0 flex flex-col drop-shadow-2xl">

          {/* Lid (Original Design restored) */}
          <div className="bg-[#0a0a0c] p-[6px] pb-3 md:p-[8px] md:pb-4 rounded-t-[15px] border-[1.5px] border-[#d2d3d6] border-b-0 relative">
            {/* Inner Screen */}
            <div className="w-full rounded-t-[9px] overflow-hidden border-[1px] border-white/5 bg-[#111215] flex flex-col">
              {/* Dark Header */}
              <div className="h-[34px] flex items-center gap-1.5 px-3 bg-[#0e1012] border-b-[1px] border-white/5 shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                <div className="ml-2 bg-white/10 rounded-md h-4 flex-1 max-w-[83%] flex items-center px-2 text-[8.5px] text-white/50 font-mono truncate">
                  {project.caseStudy.browserUrl}
                </div>
              </div>

              <div className="flex-1 min-h-0 bg-[#111215]">
                {renderMiniBrowserContent()}
              </div>
            </div>

            {/* Subtle MacBook Chin Reflector */}
            <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-t from-white/5 to-transparent rounded-full mx-8" />
          </div>

          {/* New Attached Base */}
          <div className="h-[12px] md:h-[16px] -mx-4 md:-mx-6 bg-gradient-to-b from-[#e8e8ea] to-[#babbbe] rounded-b-[8px] border border-t-0 border-[#a2a3a7] shadow-lg relative flex justify-center">
            {/* Hinge Line */}
            <div className="absolute top-0 inset-x-5 md:inset-x-7 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            {/* Lift notch */}
            <div className="absolute top-0 w-12 md:w-16 h-[3px] bg-[#0a0a0c] rounded-b-[4px] shadow-[inset_0_-1px_1px_rgba(255,255,255,0.4)]" />
          </div>

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

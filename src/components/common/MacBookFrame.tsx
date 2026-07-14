import { useState, useEffect } from "react";
import { Project } from "../../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MacBookFrameProps {
  project: Project;
  variant?: "card" | "case-study";
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

/**
 * Reusable MacBook hardware frame component.
 * Encapsulates both the fluid hardware styling AND the intelligent
 * rendering of its internal screen (iFrame vs Image vs Fallback).
 */
const MacBookFrame = ({ project, variant = "card" }: MacBookFrameProps) => {
  const { caseStudy } = project;
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const liveUrl = project.links?.find(l =>
    l.label.toLowerCase().includes("landing") ||
    l.label.toLowerCase().includes("live") ||
    l.icon === 'external'
  )?.url;

  const screenshots = Array.isArray(project.screenshot)
    ? project.screenshot
    : (project.screenshot ? [project.screenshot] : []);
  const hasMultiple = screenshots.length > 1;

  const currentIndex = hasMultiple
    ? ((page % screenshots.length) + screenshots.length) % screenshots.length
    : 0;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (!hasMultiple || isHovered || variant !== "case-study") return;
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [page, hasMultiple, isHovered, variant]);

  const renderContent = () => {
    // 1. Screenshot Image(s)
    if (screenshots.length > 0) {
      const isSvg = screenshots[currentIndex]?.endsWith('.svg');
      // Case study might need different padding for SVGs
      const imgClass = isSvg && variant === "case-study"
        ? "w-full h-full object-contain p-8 md:p-14 opacity-95 absolute inset-0"
        : (isSvg ? "w-full h-full object-cover object-top opacity-95 absolute inset-0" : "w-full h-full object-cover object-top absolute inset-0");

      return (
        <div
          className="w-full h-full overflow-hidden bg-[#111215] aspect-[16/9] flex items-center justify-center relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {hasMultiple ? (
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={page}
                src={`${import.meta.env.BASE_URL}${screenshots[currentIndex]}`}
                custom={direction}
                variants={{
                  enter: (direction: number) => ({
                    x: direction > 0 ? '100%' : '-100%',
                    opacity: 0.5
                  }),
                  center: {
                    zIndex: 1,
                    x: 0,
                    opacity: 1
                  },
                  exit: (direction: number) => ({
                    zIndex: 0,
                    x: direction < 0 ? '100%' : '-100%',
                    opacity: 0.5
                  })
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 120, damping: 18 },
                  opacity: { duration: 0.3 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className={`${imgClass} cursor-grab active:cursor-grabbing`}
                alt={`${project.title} Preview`}
                style={{
                  willChange: "transform, opacity",
                  WebkitBackfaceVisibility: "hidden",
                  backfaceVisibility: "hidden",
                  transformStyle: "preserve-3d" // Extra push for GPU rendering
                }}
              />
            </AnimatePresence>
          ) : (
            <img
              src={`${import.meta.env.BASE_URL}${screenshots[0]}`}
              alt={`${project.title} Preview`}
              className={imgClass}
            />
          )}
        </div>
      );
    }

    // 2. Live IFrame
    if (liveUrl) {
      return (
        <div className="w-full h-full relative bg-[#111215] overflow-hidden aspect-[16/9]">
          <iframe
            src={liveUrl}
            className={`absolute inset-0 border-none origin-top-left ${variant === 'card' ? 'w-[166.7%] h-[166.7%] scale-[0.6] pointer-events-none' : 'w-[125%] h-[125%] scale-[0.8]'}`}
            title={project.title}
            loading="lazy"
          />
        </div>
      );
    }

    // 3. Special Brand SVGs (Card Only usually, but let's handle gracefully)
    const brandImages = ['bitstrap', 'crep-middle-east', 'skillscall', 'swades', 'tangled'];
    if (variant === "card" && brandImages.includes(project.slug) && (!liveUrl || project.slug === 'crep-middle-east' || project.slug === 'bitstrap')) {
      const fileName = project.slug === 'crep-middle-east' ? 'crepme' : project.slug;
      return (
        <div className="flex items-center justify-center w-full h-full bg-[#111215] aspect-[16/9]">
          <img
            src={`${import.meta.env.BASE_URL}${fileName}.svg`}
            alt={`${project.title} Preview`}
            className="w-full h-full object-cover object-center opacity-95"
          />
        </div>
      );
    }

    // 4. Data-driven Fallback UI (Case Study usually)
    if (variant === "case-study") {
      return (
        <div className="w-full h-full relative bg-[#111215] overflow-hidden aspect-[16/9] flex items-center justify-center">
          <div className="absolute inset-0 px-6 py-7 md:p-8 flex flex-col items-start h-full relative z-10 bg-[#111215]">
            <h2 className="text-[24px] md:text-[36px] leading-none text-white max-w-[10ch] mb-3 md:mb-4">
              {project.miniBrowser?.title || project.title}
            </h2>
          </div>
        </div>
      );
    }

    // 5. Ultimate Fallback
    return (
      <div className="flex items-center justify-center w-full h-full aspect-[16/9] bg-[#111215] text-white/20 text-[10px] uppercase tracking-widest">
        Preview Not Available
      </div>
    );
  };

  return (
    <div className="flex flex-col shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] rounded-b-[clamp(4px,1cqw,10px)] relative w-full z-10 transition-all duration-300">

      {hasMultiple && variant === "case-study" && (
        <>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); paginate(-1); }}
            className="absolute -left-[8%] md:-left-[10%] lg:-left-[12%] top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-50 border border-white/10 [@media(pointer:coarse)]:hidden"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); paginate(1); }}
            className="absolute -right-[8%] md:-right-[10%] lg:-right-[12%] top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-50 border border-white/10 [@media(pointer:coarse)]:hidden"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Lid */}
      <div className="bg-[#0a0a0c] p-[clamp(4px,0.8cqw,10px)] pb-[clamp(6px,1cqw,12px)] rounded-t-[clamp(10px,2cqw,18px)] border-[1.5px] border-[#d2d3d6] border-b-0 relative">
        {/* Inner Screen */}
        <div className="w-full rounded-t-[clamp(6px,1.2cqw,12px)] overflow-hidden border-[1px] border-white/5 bg-[#111215] flex flex-col">
          {/* Browser Header (Traffic Lights + URL Bar) */}
          <div className="h-[clamp(20px,3cqw,40px)] flex items-center gap-[clamp(3px,0.5cqw,6px)] px-[clamp(8px,1.2cqw,16px)] bg-[#0e1012] border-b-[1px] border-white/5 shrink-0">
            <div className="w-[clamp(5px,0.8cqw,10px)] h-[clamp(5px,0.8cqw,10px)] rounded-full bg-[#ff5f56]" />
            <div className="w-[clamp(5px,0.8cqw,10px)] h-[clamp(5px,0.8cqw,10px)] rounded-full bg-[#ffbd2e]" />
            <div className="w-[clamp(5px,0.8cqw,10px)] h-[clamp(5px,0.8cqw,10px)] rounded-full bg-[#27c93f]" />
            <div className="ml-[clamp(4px,0.6cqw,10px)] bg-white/10 rounded-[clamp(4px,0.5cqw,8px)] h-[clamp(12px,1.6cqw,20px)] flex-1 max-w-[83%] flex items-center px-[clamp(4px,0.6cqw,10px)] text-[clamp(6px,0.8cqw,10px)] text-white/50 font-mono truncate overflow-hidden whitespace-nowrap text-ellipsis relative">
              {hasMultiple && variant === "case-study" && (
                <motion.div
                  className="absolute top-0 left-0 h-full bg-blue-500/30"
                  initial={{ width: "0%" }}
                  animate={{ width: isHovered ? "0%" : "100%" }}
                  transition={{ duration: isHovered ? 0 : 6, ease: "linear", repeat: 0 }}
                  key={`${page}-${isHovered}`}
                />
              )}
              <span className="relative z-10">{caseStudy.browserUrl}</span>
            </div>
          </div>

          {/* Browser Viewport */}
          <div className="flex-1 min-h-0 bg-[#111215]">
            {renderContent()}
          </div>
        </div>

        {/* Chin Reflector */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-t from-white/5 to-transparent rounded-full mx-[clamp(16px,3cqw,40px)]" />
      </div>

      {/* Attached Base */}
      <div className="h-[clamp(10px,2cqw,30px)] -mx-[clamp(8px,2cqw,50px)] bg-gradient-to-b from-[#e8e8ea] to-[#babbbe] rounded-b-[clamp(4px,1cqw,10px)] rounded-t-[clamp(0.5px,0.2cqw,2px)] border border-t-0 border-[#a2a3a7] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] relative flex justify-center">
        {/* Hinge Line */}
        <div className="absolute top-0 left-[clamp(12px,2cqw,32px)] right-[clamp(12px,2cqw,32px)] h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
        {/* Lift Notch */}
        <div className="absolute top-0 w-[clamp(32px,6cqw,92px)] h-[3px] bg-[#0a0a0c] rounded-b-[4px] shadow-[inset_0_-1px_1px_rgba(255,255,255,0.4)]" />
      </div>
    </div>
  );
};

export default MacBookFrame;

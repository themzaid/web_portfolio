import { ReactNode } from "react";
import { Project } from "../../data/projects";

interface MacBookFrameProps {
  project: Project;
  variant?: "card" | "case-study";
}

/**
 * Reusable MacBook hardware frame component.
 * Encapsulates both the fluid hardware styling AND the intelligent
 * rendering of its internal screen (iFrame vs Image vs Fallback).
 */
const MacBookFrame = ({ project, variant = "card" }: MacBookFrameProps) => {
  const { caseStudy } = project;

  const liveUrl = project.links?.find(l =>
    l.label.toLowerCase().includes("landing") ||
    l.label.toLowerCase().includes("live") ||
    l.icon === 'external'
  )?.url;

  const renderContent = () => {
    // 1. Screenshot Image
    if (project.screenshot) {
      const isSvg = project.screenshot.endsWith('.svg');
      // Case study might need different padding for SVGs
      const imgClass = isSvg && variant === "case-study"
        ? "w-full h-full object-contain p-8 md:p-14 opacity-95"
        : (isSvg ? "w-full h-full object-cover object-top opacity-95" : "w-full h-full object-cover object-top");

      return (
        <div className="w-full h-full overflow-hidden bg-[#111215] aspect-[16/9] flex items-center justify-center">
          <img
            src={`/src/assets/${project.screenshot}`}
            alt={`${project.title} Preview`}
            className={imgClass}
          />
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
            src={`/${fileName}.svg`}
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
            {caseStudy.fakeNav && (
              <div className="flex gap-4 md:gap-5 mb-5 md:mb-6">
                {caseStudy.fakeNav.map(item => (
                  <span key={item} className="text-[11.5px] md:text-xs text-white/40">{item}</span>
                ))}
              </div>
            )}
            <h2 className="text-[24px] md:text-[36px] leading-none text-white max-w-[10ch] mb-3 md:mb-4">
              {project.miniBrowser?.title || project.title}
            </h2>
            <p className="text-[12.5px] md:text-[13px] text-white/60 max-w-[30ch] leading-[1.65]">
              {caseStudy.fakeP}
            </p>
            {caseStudy.fakeBtn && (
              <div className="mt-4 md:mt-5 px-5 py-2.5 bg-white/10 rounded-full text-xs text-white inline-block">
                {caseStudy.fakeBtn}
              </div>
            )}
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
    <div className="flex flex-col drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)] relative w-full z-10 transition-all duration-300">
      {/* Lid */}
      <div className="bg-[#0a0a0c] p-[clamp(4px,0.8vw,10px)] pb-[clamp(6px,1vw,12px)] rounded-t-[clamp(10px,2vw,18px)] border-[1.5px] border-[#d2d3d6] border-b-0 relative">
        {/* Inner Screen */}
        <div className="w-full rounded-t-[clamp(6px,1.2vw,12px)] overflow-hidden border-[1px] border-white/5 bg-[#111215] flex flex-col">
          {/* Browser Header (Traffic Lights + URL Bar) */}
          <div className="h-[clamp(20px,3vw,40px)] flex items-center gap-[clamp(3px,0.5vw,6px)] px-[clamp(8px,1.2vw,16px)] bg-[#0e1012] border-b-[1px] border-white/5 shrink-0">
            <div className="w-[clamp(5px,0.8vw,10px)] h-[clamp(5px,0.8vw,10px)] rounded-full bg-[#ff5f56]" />
            <div className="w-[clamp(5px,0.8vw,10px)] h-[clamp(5px,0.8vw,10px)] rounded-full bg-[#ffbd2e]" />
            <div className="w-[clamp(5px,0.8vw,10px)] h-[clamp(5px,0.8vw,10px)] rounded-full bg-[#27c93f]" />
            <div className="ml-[clamp(4px,0.6vw,10px)] bg-white/10 rounded-[clamp(4px,0.5vw,8px)] h-[clamp(12px,1.6vw,20px)] flex-1 max-w-[83%] flex items-center px-[clamp(4px,0.6vw,10px)] text-[clamp(6px,0.8vw,10px)] text-white/50 font-mono truncate overflow-hidden whitespace-nowrap text-ellipsis">
              {caseStudy.browserUrl}
            </div>
          </div>

          {/* Browser Viewport */}
          <div className="flex-1 min-h-0 bg-[#111215]">
            {renderContent()}
          </div>
        </div>

        {/* Chin Reflector */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-t from-white/5 to-transparent rounded-full mx-[clamp(16px,3vw,40px)]" />
      </div>

      {/* Attached Base */}
      <div className="h-[clamp(10px,2vw,30px)] -mx-[clamp(8px,2vw,50px)] bg-gradient-to-b from-[#e8e8ea] to-[#babbbe] rounded-b-[clamp(4px,1vw,10px)] rounded-t-[clamp(0.5px,0.2vw,2px)] border border-t-0 border-[#a2a3a7] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] relative flex justify-center">
        {/* Hinge Line */}
        <div className="absolute top-0 left-[clamp(12px,2vw,32px)] right-[clamp(12px,2vw,32px)] h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
        {/* Lift Notch */}
        <div className="absolute top-0 w-[clamp(32px,6vw,92px)] h-[3px] bg-[#0a0a0c] rounded-b-[4px] shadow-[inset_0_-1px_1px_rgba(255,255,255,0.4)]" />
      </div>
    </div>
  );
};

export default MacBookFrame;

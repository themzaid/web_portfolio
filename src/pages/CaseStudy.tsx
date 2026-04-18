import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github, Globe, Figma, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { projectsData } from "@/data/projects";
import { useState, useEffect, useLayoutEffect } from "react";
import { Button } from "@/components/ui/button";
import MacBookFrame from "@/components/common/MacBookFrame";

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeSection, setActiveSection] = useState(0);

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const { caseStudy } = project;

  // Find the most appropriate URL to iframe (Landing Page or first external link)
  const liveUrl = project.links?.find(l =>
    l.label.toLowerCase().includes("landing") ||
    l.label.toLowerCase().includes("live") ||
    l.icon === 'external'
  )?.url;

  return (
    <Layout>
      <div className="min-h-screen pb-32 px-2">
        <div className="container mx-auto">

          <div className="flex items-center mt-4 mb-6">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-foreground font-medium hover:text-muted-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to projects
            </Link>
          </div>

          {/* Hero Top (Title & Lede) */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-12 items-start pt-0">
            <div>
              {/* <div className="flex items-center gap-4 mb-4">
                <div className="w-6 h-[1px] bg-foreground/70"></div>
                <span className="text-[12px] font-medium md:text-[13px] tracking-[0.1em] uppercase text-foreground/90 overflow-hidden whitespace-nowrap block truncate">
                  Case Study / {project.title}
                </span>
              </div> */}
              <h1 className="text-[40px] md:text-[72px] font-normal leading-[1.05] tracking-[-0.02em] text-foreground -mb-3">
                {project.title}
              </h1>
              {/* <p className="text-[12px] font-medium md:text-[13px] tracking-[0.12em] text-foreground/90 uppercase font-sans">
                {project.role} &middot; {project.year}
              </p> */}
            </div>

            <div className="md:pt-1.5 md:justify-self-end">
              <p className="text-lg text-foreground leading-relaxed tracking-[-0.1px] pb-2">
                {caseStudy.heroLede}
              </p>
            </div>
          </div>

          {/* Hero Visual Container */}
          <div
            className="mt-8 md:mt-12 rounded-t-[24px] border border-border border-b-0 overflow-hidden relative flex justify-center items-end"
            style={{ background: project.themeGradient }}
          >
            {/* Background Glows (inside frame) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {project.glows.map((glow, i) => (
                <div
                  key={i}
                  className="absolute rounded-full blur-[clamp(40px,6vw,80px)] opacity-60"
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
            </div>

            {/* Scaled-down MacBook wrapper */}
            <div className="w-[clamp(70%,80vw,85%)] max-w-5xl pt-[clamp(32px,8vw,64px)] pb-0 relative z-10">
              <MacBookFrame project={project} variant="case-study" />
            </div>
          </div>

          {/* Meta Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-border border-[1px] border-border border-t-0 rounded-b-[20px] overflow-hidden mb-10 shadow-sm">
            {[
              { label: "Year", value: project.year },
              { label: "Role", value: project.role },
              { label: "Stack", value: project.tags.join(" · ") },
              { label: "Focus", value: caseStudy.focus }
            ].map((meta, i) => (
              <div key={i} className="px-5 py-5 md:px-6 md:py-6 bg-card h-full flex flex-col justify-start">
                <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground mb-2">{meta.label}</div>
                <div className="text-[14px] md:text-[16px] leading-[1.4] text-foreground font-medium">{meta.value}</div>
              </div>
            ))}
          </div>

          {/* Content Split: Sidebar + Stories */}
          <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] gap-8 md:gap-10 lg:gap-10">

            {/* Sidebar (Sticky) */}
            <aside className="sm:sticky sm:top-[88px] self-start space-y-6 w-full -mt-2 sm:mt-1">
              <ul className="grid gap-[2px] mb-5">
                {caseStudy.blocks.map((block, i) => (
                  <li key={i}>
                    <button
                      onClick={() => {
                        setActiveSection(i);
                        document.getElementById(`block-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                      className={`w-full flex items-center text-left justify-between px-3.5 py-2.5 rounded-[10px] text-[13px] transition-colors ${activeSection === i ? 'bg-gray-200/50 text-foreground font-medium' : 'text-muted-foreground hover:bg-secondary/40 hover:text-foreground'}`}
                    >
                      <span className="truncate pr-4">{block.navLabel || block.title}</span>
                      <span className="text-[11px] text-muted-foreground/60 font-mono flex-shrink-0">0{i + 1}</span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Sidebar Links Panel */}
              {project.links && project.links.length > 0 && (
                <div className="p-4 border-[1px] border-border rounded-2xl bg-card flex flex-col gap-3">
                  <div className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground mb-1">Links</div>

                  {project.links.map((link, idx) => {
                    let Icon = Globe;
                    if (link.icon === 'github') Icon = Github;
                    if (link.icon === 'figma') Icon = Figma;
                    if (link.icon === 'pdf') Icon = FileText;

                    return (
                      <Button
                        key={idx}
                        asChild
                        variant="default"
                        className="w-full justify-between h-auto py-3.5 px-4 rounded-lg text-[11px] font-semibold tracking-[0.08em] uppercase transition-all duration-300"
                      >
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex items-center gap-2">
                            <Icon className="w-3.5 h-3.5" />
                            {link.label}
                          </div>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </Button>
                    );
                  })}
                </div>
              )}
            </aside>

            {/* Story Blocks */}
            <div className="grid gap-6">
              {caseStudy.blocks.map((block, i) => (
                <div
                  key={i}
                  id={`block-${i}`}
                  className="p-7 md:p-9 border-[1px] rounded-[20px] transition-colors duration-300 bg-card border-border"
                >
                  <div className="text-[12px] tracking-[0.16em] mb-3 text-foreground/80 font-medium">
                    0{i + 1} / {block.navLabel || block.title.split(' ')[0]}
                  </div>
                  <h3 className="text-[22px] md:text-[32px] font-normal tracking-[-0.02em] leading-[1.2] mb-1 -ml-0.5 text-foreground">
                    {block.title}
                  </h3>
                  <p className="text-[15px] md:text-[16px] text-foreground/90 leading-[1.85]">
                    {block.p}
                  </p>

                  {block.type === 'list' && block.list && (
                    <ul className="mt-5 grid gap-3">
                      {block.list.map((item, index) => (
                        <li key={index} className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.75] pl-5 relative before:absolute before:left-0 before:top-[10px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-primary">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {block.type === 'outcome' && block.outcomes && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                      {block.outcomes.map((outcome, index) => (
                        <div key={index} className="p-4 md:p-5 border-[1px] border-border rounded-[10px] bg-white/[0.02]">
                          <h2 className="block text-[24px] md:text-[32px] text-primary mb-1 leading-none">{outcome.value}</h2>
                          <span className="text-[12px] md:text-[13px] text-muted-foreground">{outcome.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudy;

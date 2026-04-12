import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, Figma, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { projectsData } from "@/data/projects";
import { useState, useEffect, useLayoutEffect } from "react";
import { Button } from "@/components/ui/button";

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeSection, setActiveSection] = useState(0);

  // Ensure every case study mounts at the absolute top natively
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const { caseStudy } = project;

  return (
    <Layout>
      <div className="min-h-screen pb-32 px-2">
        <div className="container mx-auto">

          <div className="flex items-center mt-8 mb-8">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-foreground font-medium hover:text-muted-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to projects
            </Link>
          </div>

          {/* Hero Top (Title & Lede) */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-12 items-start pt-4">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-6 h-[1px] bg-foreground/70"></div>
                <span className="text-[12px] font-medium md:text-[13px] tracking-[0.1em] uppercase text-foreground/90 overflow-hidden whitespace-nowrap block truncate">
                  Case Study / {project.title}
                </span>
              </div>
              <h1 className="text-[40px] md:text-[72px] font-normal leading-[1.05] tracking-[-0.02em] text-foreground mb-6">
                {project.title}
              </h1>
              <p className="text-[12px] font-medium md:text-[13px] tracking-[0.12em] text-foreground/90 uppercase font-sans">
                {project.role} &middot; {project.year}
              </p>
            </div>

            <div className="md:pt-1.5 md:justify-self-end">
              <p className="text-xl text-foreground/80 leading-[1.78] pb-2">
                {caseStudy.heroLede}
              </p>
            </div>
          </div>

          {/* Hero Image / Custom Browser */}
          <div
            className="mt-10 md:mt-12 rounded-t-[20px] border-[1px] border-border border-b-0 min-h-[380px] relative overflow-hidden flex flex-col"
            style={{ background: project.themeGradient }}
          >
            {project.glows.map((glow, i) => (
              <div
                key={i}
                className="absolute rounded-full blur-[28px]"
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

            <div className="absolute inset-x-6 md:inset-x-8 top-8 bottom-0 bg-[#111215] rounded-t-[18px] border-[1px] border-white/10 border-b-0 overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
              <div className="h-10 flex items-center gap-2 px-4 bg-[#0e1012] border-b-[1px] border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <div className="ml-3 bg-white/5 rounded h-5.5 flex-1 max-w-[280px] flex items-center px-3 text-[11px] text-white/40 font-mono">
                  {caseStudy.browserUrl}
                </div>
              </div>
              <div className="px-6 py-7 md:p-8 flex flex-col items-start h-[calc(100%-40px)] relative z-10">
                {caseStudy.fakeNav && (
                  <div className="flex gap-4 md:gap-5 mb-5 md:mb-6">
                    {caseStudy.fakeNav.map(item => (
                      <span key={item} className="text-[11.5px] md:text-xs text-white/40">{item}</span>
                    ))}
                  </div>
                )}
                <h2 className="text-[24px] md:text-[36px] leading-none text-white max-w-[10ch] mb-3 md:mb-4">
                  {project.miniBrowser.title}
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
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] gap-8 md:gap-10 lg:gap-10">

            {/* Sidebar (Sticky) */}
            <aside className="md:sticky md:top-[88px] self-start space-y-6 w-full">
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

              <div className="p-5 border-[1px] border-border rounded-xl bg-card">
                <div className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground mb-3">Stack</div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(t => (
                    <span key={t} className="px-3 py-1.5 border-[1px] border-border bg-white/[0.02] text-muted-foreground text-[11px] tracking-[0.12em] uppercase rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sidebar Links Panel */}
              {project.links && project.links.length > 0 && (
                <div className="p-5 border-[1px] border-border rounded-xl bg-card flex flex-col gap-3">
                  <div className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground mb-1">Links</div>

                  {project.links.map((link, idx) => {
                    let Icon = ExternalLink;
                    if (link.icon === 'github') Icon = Github;
                    if (link.icon === 'figma') Icon = Figma;
                    if (link.icon === 'pdf') Icon = FileText;

                    return (
                      <Button
                        key={idx}
                        asChild
                        variant="default"
                        className="w-full justify-between h-auto py-3.5 px-4 rounded-md text-[11px] font-semibold tracking-[0.08em] uppercase transition-all duration-300"
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
                  <div className="text-[11px] tracking-[0.16em] mb-4 text-foreground/60">
                    0{i + 1} / {block.navLabel || block.title.split(' ')[0]}
                  </div>
                  <h3 className="text-[22px] md:text-[32px] font-normal tracking-[-0.02em] leading-[1.2] mb-4 text-foreground">
                    {block.title}
                  </h3>
                  <p className="text-[15px] md:text-[16px] text-muted-foreground leading-[1.85] max-w-[62ch]">
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
                          <strong className="block text-[28px] md:text-[32px] text-primary mb-1 leading-none">{outcome.value}</strong>
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

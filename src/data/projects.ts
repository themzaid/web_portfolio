export interface ProjectGlow {
  width: number;
  height: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  background: string;
}

export type LinkIconType = 'github' | 'figma' | 'external' | 'pdf';

export interface ProjectLink {
  label: string;
  url: string;
  icon: LinkIconType;
}

export interface CaseStudyBlock {
  type: 'text' | 'list' | 'outcome';
  navLabel?: string;
  title: string;
  p: string;
  list?: string[];
  outcomes?: { value: string; label: string }[];
  isAccent?: boolean;
}

export interface Project {
  id: number;
  slug: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  role: string;

  // Custom Visual Fields for Project Thumbnails
  themeGradient: string;
  glows: ProjectGlow[];
  miniBrowser: {
    title?: string;
    desc?: string;
    tags?: string[];
    customComponent?: string;
  };
  miniBrowserBg?: string;
  miniBrowserAccent?: string;

  // Case Study Complex Data
  caseStudy: {
    heroLede: string;
    focus: string; // Focus metric in metadata bar
    browserUrl: string;
    fakeNav: string[];
    fakeH1: string;
    fakeP: string;
    fakeBtn: string;
    blocks: CaseStudyBlock[];
  };

  // Links
  links?: ProjectLink[];
  screenshot?: string;
}

export const projectsData: Project[] = [
  {
    id: 5,
    slug: "advance",
    title: "Advance",
    category: "Web Development",
    description: "Designed and developed a custom landing page for a software services company, focused on clear messaging, structured content and a polished experience for growing businesses.",
    tags: ["HTML", "Tailwind CSS", "TypeScript", "Next.js", "React"],
    year: "2022",
    role: "Frontend Developer",
    themeGradient: "linear-gradient(135deg,#0f1e26,#09151e,#0e1d28)",
    glows: [
      { width: 220, height: 220, top: -30, right: -30, background: "rgba(60,160,220,0.2)" }
    ],
    miniBrowser: {
      title: "Digital systems for growing businesses.",
      desc: "Advance: Software services partner."
    },
    miniBrowserBg: "#ffffff",
    miniBrowserAccent: "#0369a1",
    caseStudy: {
      heroLede: "Designed and developed a landing page for a software services company, translating a complex offer into clear positioning for small and mid sized businesses.",
      focus: "UX/UI Flow",
      browserUrl: "https://advance.com",
      fakeNav: ["Services", "Process", "Work"],
      fakeH1: "Advance",
      fakeP: "Digital systems built for growing businesses.",
      fakeBtn: "Get Started",
      blocks: [
        { type: 'text', navLabel: 'Overview', title: "A Digital Front for a Growing Services Business", p: "Advance is a software services company built for small and mid-sized businesses that need more than just a developer — they need a long-term digital partner. The goal was to build a landing page that reflected that positioning clearly and gave potential clients a reason to reach out." },
        { type: 'text', navLabel: 'Challenge', title: "A Complex Offer with No Clear Voice", p: "Software services are difficult to sell without the right framing. Advance’s value wasn’t a simple product, it was a philosophy built around structure, clarity, and long-term ownership. Without a focused digital presence, that message wasn’t reaching the right audience, and the business had no way to stand out in a crowded space." },
        { type: 'text', navLabel: 'advance', isAccent: true, title: "A Landing Page That Leads with Thinking", p: "A conversion focused landing page that opens with a sharp positioning statement and walks visitors through the company’s philosophy and process that clearly communicates who they are, what they do, and who they do it for." }
      ]
    },
    links: [
      { label: "Landing Page", url: "https://advance-global.vercel.app/", icon: "external" },
    ],
    screenshot: "advance.png",
  },
  {
    id: 4,
    slug: "optcare",
    title: "Optcare",
    category: "UI Design · Frontend Development",
    description: "Designed and developed a landing page for an eye care clinic, focused on clear service communication, trust and a calm visual identity.",
    tags: ["HTML", "SCSS", "Bootstrap"],
    year: "2022",
    role: "UI Designer · Frontend Developer",
    themeGradient: "linear-gradient(135deg,#271811,#1e0f09,#2a1910)",
    glows: [
      { width: 220, height: 220, top: -30, right: -30, background: "rgba(255,140,60,0.22)" }
    ],
    miniBrowser: {
      title: "A taste of home, in every bite.",
      desc: "Restaurant chain website. Dubai, UAE. Warm and editorial."
    },
    miniBrowserBg: "#ffffff",
    miniBrowserAccent: "#c2410c",
    caseStudy: {
      heroLede: "Designed and developed a website for an eye care clinic, helping establish an online presence, build patient trust, and guide visitors from discovery to appointment.",
      focus: "Brand Identity · Interface",
      browserUrl: "https://optcare.com",
      fakeNav: ["Menu", "Locations", "Story"],
      fakeH1: "Authentic.",
      fakeP: "A culinary journey.",
      fakeBtn: "Book Table",
      blocks: [
        { type: 'text', navLabel: 'Overview', title: "Building a Digital Home for Eye Care", p: "Optcare had no digital presence and relied entirely on word of mouth. They needed a professional website that represented their practice well and gave prospective patients a way to find and connect with them online." },
        { type: 'text', navLabel: 'Challenge', title: "Invisible to the People Online", p: "The clinic had no presence online for new patients to explore their services or reach out to them, they were invisible to anyone searching for eye care in their area on the web." },
        { type: 'text', navLabel: 'Solution', isAccent: true, title: "A Clear Path from Discovery to Appointment", p: "Designed and developed a clean, mobile-friendly website with a structured layout that guides visitors from learning about the clinic to booking an appointment — featuring a services breakdown, doctor profiles, and clear contact information to build immediate trust." },
      ]
    },
    links: [
      { label: "Landing Page", url: "https://themzaid.github.io/eye-care/", icon: "external" }
    ],
    screenshot: "optcare.png",
  },
  {
    id: 3,
    slug: "skillscall",
    title: "Skillscall",
    category: "Frontend Development",
    description: "Designed and developed a custom website for a service based platform in the UAE, optimised for fast loading, clarity and smooth user interaction.",
    tags: ["HTML", "CSS", "JavaScript"],
    year: "2021",
    role: "Frontend Developer",
    themeGradient: "linear-gradient(135deg,#1e1525,#180f24,#1a1230)",
    glows: [
      { width: 220, height: 220, top: -40, right: -40, background: "rgba(180,99,255,0.22)" },
      // The hero image in the HTML uses 2 glows for skillscall, adding the second one for case study hero use:
      { width: 240, height: 240, bottom: -40, left: -40, background: "rgba(120,60,200,0.12)" }
    ],
    miniBrowser: {
      title: "Scale your skills. Find your calling.",
      desc: "UAE-based service platform. Conversion-focused and fast."
    },
    miniBrowserBg: "#ffffff",
    miniBrowserAccent: "#7c3aed",
    caseStudy: {
      heroLede: "Designed and developed a landing page for a UAE based platform connecting skilled professionals with opportunities, focused on fast loading, clarity and smooth user interaction.",
      browserUrl: "skillscall.com",
      fakeNav: ["Home", "Services", "About", "Contact"],
      fakeH1: "Scale your skills. Find your calling.",
      fakeP: "Connecting skilled professionals with the right opportunities across the UAE.",
      fakeBtn: "Get started →",
      blocks: [
        { type: 'text', navLabel: 'Overview', title: "A service platform built for the UAE market", p: "A landing page built for a UAE based client connecting professionals with opportunities. Kept it simple with plain HTML, CSS and vanilla JS, no framework needed." },
        { type: 'list', navLabel: 'Challenge', title: "High traffic, fast networks, a conversion-first mandate", p: "Needed to build it without a framework since the page had to stay light and load fast on mobile. Every decision came down to keeping things as simple as possible." },
        { type: 'list', navLabel: 'Solution', isAccent: true, title: "Vanilla JS, semantic HTML, aggressive asset optimisation", p: "Kept the structure semantic, the styles minimal and the form logic simple. No libraries, no unnecessary scripts, just what the page actually needed." }
      ]
    },
    links: [
      { label: "Landing Page", url: "https://project-xyz-show.web.app/scripts/landing.html", icon: "external" },
      // { label: "Frontend Template", url: "https://github.com/themzaid/project-xyz", icon: "github" }
    ],
    screenshot: "skillscall.png",
  },
  {
    id: 2,
    slug: "crep-middle-east",
    title: "Crep Middle East",
    category: "Logo Design",
    description: "Designed a scalable logo identity for a streetwear ecommerce startup in Dubai, built to stay clear and recognizable across digital and physical touchpoints..",
    tags: ["Adobe Illustrator"],
    year: "2021",
    role: "Brand Identity Designer",
    themeGradient: "linear-gradient(135deg,#1a1a1a,#111111,#1c1c1c)",
    glows: [
      { width: 200, height: 200, top: -30, right: -30, background: "rgba(200,200,200,0.1)" }
    ],
    miniBrowser: {
      customComponent: "crep-logo"
    },
    miniBrowserBg: "#ffffff",
    miniBrowserAccent: "#111111",
    caseStudy: {
      heroLede: "Logo design for a premium sneaker resale brand, built for recognition across digital and physical touchpoints.",
      focus: "Identity · Scalability",
      browserUrl: "crep.me",
      fakeNav: ["Shop", "Drops", "About"],
      fakeH1: "Fast.",
      fakeP: "Premium goods.",
      fakeBtn: "Shop Collection",
      blocks: [
        { type: 'text', navLabel: 'Overview', title: "Building a mark", p: "Crep Middle East is a premium footwear resale platform. They needed a logo that represented the brand confidently in the streetwear space." },
        { type: 'text', navLabel: 'Challenge', title: "Speed, authenticity, and hype", p: "The streetwear market moves fast. The logo needed to feel instantly recognizable and hold its own next to established global brands." },
        { type: 'text', navLabel: 'Solution', isAccent: true, title: "A bold wordmark built to scale", p: "Designed a clean geometric wordmark using custom letterforms that hold their weight across packaging, social media and storefronts." }
      ]
    },
    links: [
      { label: "Logo Design", url: "https://portfolio2021-4aa7c.web.app/assets/pdf/crepme.pdf", icon: "pdf" }
    ],
    screenshot: "crepme.svg",
  },
  {
    id: 1,
    slug: "bitstrap",
    title: "Bitstrap",
    category: "UI Design · Frontend Development",
    description: "Designed and built a custom CSS library for UI components, created to be modular, lightweight and easy to scale across products.",
    tags: ["HTML", "CSS", "JavaScript"],
    year: "2020",
    role: "UI Designer · Frontend Engineer",
    themeGradient: "linear-gradient(135deg,#1e2535,#0f1724,#162035)",
    glows: [
      { width: 240, height: 240, top: -50, right: -50, background: "rgba(99,152,255,0.22)" },
      { width: 140, height: 140, bottom: -20, left: 60, background: "rgba(99,200,255,0.1)" }
    ],
    miniBrowser: {
      title: "A CSS library for consistent interfaces.",
      desc: "Modular. Lightweight. Token-first design system."
    },
    miniBrowserBg: "#ffffff",
    miniBrowserAccent: "#2563eb",
    caseStudy: {
      heroLede: "A custom CSS library built from scratch for fast, modular interfaces and flexible design integration.",
      focus: "Performance · UI Standards",
      browserUrl: "ui.bitstrap.com",
      fakeNav: ["Docs", "Components", "Templates"],
      fakeH1: "Build better UI",
      fakeP: "A modular toolkit for developers.",
      fakeBtn: "Get Started",
      blocks: [
        { type: 'text', navLabel: 'Overview', title: "The Need for Modularity", p: "Existing frameworks were too bloated or restrictive. The goal was to build something token-first from the ground up." },
        { type: 'text', navLabel: 'Challenge', title: "Scaling complexity without the weight", p: "Creating a robust CSS design system that doesn't rely on bloated JavaScript bundles, keeping core web vitals high." },
        { type: 'text', navLabel: 'Solution', isAccent: true, title: "A token-driven architecture", p: "Implemented a pure CSS variables approach, scoping styles perfectly and allowing rapid theming without DOM manipulation." },
        { type: 'outcome', navLabel: 'Outcome', title: "Fast, flexible, modular", p: "The CSS library significantly reduced build times and overall bundle size for all implementations.", outcomes: [{ value: "12kb", label: "Gzipped size" }, { value: "100%", label: "Token compliance" }] }
      ]
    },
    links: [
      { label: "Figma UI Kit", url: "https://www.figma.com/proto/fYuUTd4adyMGVJzQMZaZLd/Bitstrap?node-id=0-1&t=QIYsIRR9VCmeYMow-1", icon: "figma" },
      // { label: "Source Code", url: "https://github.com/themzaid/bitstrap", icon: "github" }
    ],
    screenshot: "bitstrap.svg",
  }
];

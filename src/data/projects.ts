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
  bgLabel: string;
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
}

export const projectsData: Project[] = [
  {
    id: 1,
    slug: "bitstrap",
    title: "Bitstrap",
    category: "Frontend Development · Design System",
    description: "Designed and built a custom CSS library for UI components — modular, lightweight, and built from the ground up without the overhead of existing frameworks.",
    tags: ["Figma", "HTML", "CSS", "JavaScript"],
    year: "2024",
    role: "Frontend Engineer",
    themeGradient: "linear-gradient(135deg,#1e2535,#0f1724,#162035)",
    glows: [
      { width: 240, height: 240, top: -50, right: -50, background: "rgba(99,152,255,0.22)" },
      { width: 140, height: 140, bottom: -20, left: 60, background: "rgba(99,200,255,0.1)" }
    ],
    bgLabel: "BITSTRAP",
    miniBrowser: {
      title: "A CSS library for consistent interfaces.",
      desc: "Modular. Lightweight. Token-first design system.",
      tags: ["Buttons", "Cards", "Forms"]
    },
    miniBrowserBg: "#ffffff",
    miniBrowserAccent: "#2563eb",
    caseStudy: {
      heroLede: "A highly performant CSS library built entirely from scratch, removing rigid standard UI classes in favor of fully customized design integration.",
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
  },
  {
    id: 2,
    slug: "skillscall",
    title: "Skillscall",
    category: "Frontend Development",
    description: "Custom website for a service-based platform in the UAE — engineered for sub-second load times and built without frameworks to handle high traffic efficiently.",
    tags: ["HTML", "CSS", "JavaScript"],
    year: "2023",
    role: "Full-stack Developer",
    themeGradient: "linear-gradient(135deg,#1e1525,#180f24,#1a1230)",
    glows: [
      { width: 220, height: 220, top: -40, right: -40, background: "rgba(180,99,255,0.22)" },
      // The hero image in the HTML uses 2 glows for skillscall, adding the second one for case study hero use:
      { width: 240, height: 240, bottom: -40, left: -40, background: "rgba(120,60,200,0.12)" }
    ],
    bgLabel: "SKILLSCALL",
    miniBrowser: {
      title: "Scale your skills. Find your calling.",
      desc: "UAE-based service platform. Conversion-focused and fast."
    },
    miniBrowserBg: "#ffffff",
    miniBrowserAccent: "#7c3aed",
    caseStudy: {
      heroLede: "A landing page for a UAE based platform connecting skilled professionals with opportunities.",
      focus: "Performance · Conversion",
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
  },
  {
    id: 3,
    slug: "swades",
    title: "Swades",
    category: "UI Design",
    description: "Designed a custom website for a restaurant chain in Dubai — focused on atmosphere, warmth, and creating a natural path through the menu and brand story.",
    tags: ["Figma", "UI Design"],
    year: "2023",
    role: "UI Designer",
    themeGradient: "linear-gradient(135deg,#271811,#1e0f09,#2a1910)",
    glows: [
      { width: 220, height: 220, top: -30, right: -30, background: "rgba(255,140,60,0.22)" }
    ],
    bgLabel: "SWADES",
    miniBrowser: {
      title: "A taste of home, in every bite.",
      desc: "Restaurant chain website. Dubai, UAE. Warm and editorial."
    },
    miniBrowserBg: "#ffffff",
    miniBrowserAccent: "#c2410c",
    caseStudy: {
      heroLede: "A multi-page website for a restaurant group in Dubai, showcasing their dining experience across multiple branches.",
      focus: "Brand Identity · Interface",
      browserUrl: "swades.ae",
      fakeNav: ["Menu", "Locations", "Story"],
      fakeH1: "Authentic.",
      fakeP: "A culinary journey.",
      fakeBtn: "Book Table",
      blocks: [
        { type: 'text', navLabel: 'Overview', title: "Bringing an Indian restaurant online", p: "Swades is an authentic Indian restaurant with multiple branches in Dubai. They wanted a proper web presence that felt true to their brand and made it easy for customers to explore the menu, find a branch and order online." },
        { type: 'text', navLabel: 'Challenge', title: "Getting the vibe right", p: "The design needed to feel warm, premium and authentic across a multi-page site covering the menu, locations, events and gallery." },
        { type: 'text', navLabel: 'Solution', isAccent: true, title: "Rich visuals, clear navigation", p: "The website is structured around how a customer naturally thinks. See the food, check the menu, find a branch, place an order. Each page follows that flow without making them think twice." },
      ]
    },
    links: [
      // { label: "Live Website", url: "https://swades.ae/", icon: "external" },
      { label: "UI Design", url: "https://www.figma.com/proto/OixtdxChvTmXbbQ9f6JCWw/Swades?node-id=0-1&t=0iuCUgNfTPBporWT-1", icon: "figma" }
    ],
  },
  {
    id: 4,
    slug: "crep-middle-east",
    title: "Crep Middle East",
    category: "Logo Design",
    description: "Designed a scalable logo identity for a streetwear e-commerce startup in Dubai — built to communicate speed and authenticity from app icon to billboard.",
    tags: ["Adobe Illustrator", "Brand Identity"],
    year: "2022",
    role: "Brand Identity Designer",
    themeGradient: "linear-gradient(135deg,#1a1a1a,#111111,#1c1c1c)",
    glows: [
      { width: 200, height: 200, top: -30, right: -30, background: "rgba(200,200,200,0.1)" }
    ],
    bgLabel: "CREP",
    miniBrowser: {
      customComponent: "crep-logo"
    },
    miniBrowserBg: "#ffffff",
    miniBrowserAccent: "#111111",
    caseStudy: {
      heroLede: "Logo design for a premium sneaker resale brand in the Middle East.",
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
  },
  {
    id: 5,
    slug: "tangled",
    title: "Tangled",
    category: "Frontend Development",
    description: "Custom login experience for an educational platform in the UAE — desktop-first, focused on visual clarity and a smooth branded authentication flow.",
    tags: ["HTML", "CSS", "JavaScript"],
    year: "2022",
    role: "Frontend Developer",
    themeGradient: "linear-gradient(135deg,#0f1e26,#09151e,#0e1d28)",
    glows: [
      { width: 220, height: 220, top: -30, right: -30, background: "rgba(60,160,220,0.2)" }
    ],
    bgLabel: "TANGLED",
    miniBrowser: {
      customComponent: "tangled-form"
    },
    miniBrowserBg: "#ffffff",
    miniBrowserAccent: "#0369a1",
    caseStudy: {
      heroLede: "Redesigning the front door. Creating a frictionless onboarding flow for educational institutes.",
      focus: "UX/UI Flow",
      browserUrl: "tangled.ae",
      fakeNav: ["Login", "Register"],
      fakeH1: "Welcome",
      fakeP: "Access your dashboard.",
      fakeBtn: "Login",
      blocks: [
        { type: 'text', navLabel: 'Overview', title: "Frictionless authentication", p: "The login page is the most trafficked area of any educational platform. We needed to ensure accessing the dashboard was completely frictionless." },
        { type: 'text', navLabel: 'Challenge', title: "Balancing security with usability", p: "Handling varied user states (students, teachers, admins) elegantly without cluttering the interface or confusing lower-tier technical users." },
        { type: 'text', navLabel: 'Solution', isAccent: true, title: "A focused, distraction-free corridor", p: "Stripped away all unnecessary marketing materials from the authentication route. Built a tightly validated, highly responsive form component." },
        { type: 'outcome', navLabel: 'Outcome', title: "Smooth sailing for thousands", p: "Failed login attempts plummeted, and support tickets relating to access dropped significantly in the first month.", outcomes: [{ value: "-40%", label: "Login error rate" }, { value: "1.2s", label: "Time to interact" }] }
      ]
    },
    links: [
      { label: "Login Page", url: "https://portfolio2021-4aa7c.web.app/tangled_web/login.html", icon: "external" },
      // { label: "Source Code", url: "https://github.com/neeltron/tangled-web", icon: "github" }
    ],
  }
];

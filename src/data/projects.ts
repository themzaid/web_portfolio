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
    id: 5,
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
    id: 1,
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
      heroLede: "A highly performant service platform landing experience for the UAE market — engineered without framework overhead and optimised for sub-second load times on mobile networks.",
      focus: "Performance · Conversion",
      browserUrl: "skillscall.com",
      fakeNav: ["Home", "Services", "About", "Contact"],
      fakeH1: "Scale your skills. Find your calling.",
      fakeP: "Connecting skilled professionals with the right opportunities across the UAE.",
      fakeBtn: "Get started →",
      blocks: [
        { type: 'text', navLabel: 'Overview', title: "A service platform built for the UAE market", p: "Skillscall is a UAE-based platform connecting skilled professionals with opportunities. The product needed a strong landing page capable of handling high traffic, capturing leads quickly, and loading reliably on mobile networks — without the performance overhead of a heavy JavaScript framework." },
        { type: 'list', navLabel: 'Challenge', title: "High traffic, fast networks, a conversion-first mandate", p: "The platform required a highly performant landing experience capable of handling high traffic spikes while maintaining rapid lead-capture conversion rates.", list: ["Must load sub-second on mobile networks common in the UAE", "No framework overhead — every kilobyte was a decision", "Conversion funnel needed to work on first visit, not after warm-up", "Stable performance under marketing campaign traffic spikes"] },
        { type: 'list', navLabel: 'Solution', isAccent: true, title: "Vanilla JS, semantic HTML, aggressive asset optimisation", p: "I engineered a custom vanilla JavaScript solution free from heavy framework overhead. The entire build focused on semantic HTML and aggressive asset optimisation to ensure sub-second load times across mobile networks.", list: ["Semantic HTML structure for both accessibility and fast parse times", "Zero runtime framework dependencies — fully hand-authored JS", "Asset pipeline optimised for the smallest possible payload", "Lead capture form with instant feedback and minimal friction"] },
        { type: 'outcome', navLabel: 'Outcome', title: "Fast, focused, built to convert", p: "The final product delivered a measurably fast experience for Skillscall's UAE audience. Sub-second load times translated directly into better user retention and higher form submission rates.", outcomes: [{ value: "<1s", label: "Load time on mobile" }, { value: "0", label: "Framework dependencies" }, { value: "↑", label: "User retention vs benchmark" }, { value: "↑", label: "Form submission rate" }] }
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
      heroLede: "Digital translation of a premium dining experience for a highly competitive hospitality market.",
      focus: "Brand Identity · Interface",
      browserUrl: "swades.ae",
      fakeNav: ["Menu", "Locations", "Story"],
      fakeH1: "Authentic.",
      fakeP: "A culinary journey.",
      fakeBtn: "Book Table",
      blocks: [
        { type: 'text', navLabel: 'Overview', title: "Digital translation of taste", p: "Swades required an interface that authentically matched their fine-dining experience. The digital footprint needed to feel as warm and rich as the interior of the restaurant itself." },
        { type: 'text', navLabel: 'Challenge', title: "Translating hospitality to a screen", p: "Standing out in Dubai's saturated premium restaurant sector. The digital experience had to immediately communicate quality and establish trust." },
        { type: 'text', navLabel: 'Solution', isAccent: true, title: "Editorial typography and immersive imagery", p: "We crafted an editorial layout utilizing sweeping, full-bleed imagery and sophisticated serif typefaces to create a digital menu that feels like a luxury magazine." },
        { type: 'outcome', navLabel: 'Outcome', title: "A new benchmark for dining", p: "The launch solidified the brand's premium positioning in the market, driving a significant increase in digital reservations.", outcomes: [{ value: "45%", label: "Increase in reservations" }, { value: "3x", label: "Longer session duration" }] }
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
      heroLede: "A highly scalable and versatile wordmark capable of anchoring a massive e-commerce operation in the streetwear ecosystem.",
      focus: "Identity · Scalability",
      browserUrl: "crep.me",
      fakeNav: ["Shop", "Drops", "About"],
      fakeH1: "Fast.",
      fakeP: "Premium goods.",
      fakeBtn: "Shop Collection",
      blocks: [
        { type: 'text', navLabel: 'Overview', title: "Building a mark", p: "The logo needed to work everywhere — from a tiny 16px favicon on a phone screen to a massive billboard across Sheikh Zayed Road." },
        { type: 'text', navLabel: 'Challenge', title: "Speed, authenticity, and hype", p: "The streetwear market moves fast. The brand required a mark that felt instantly recognizable and had the visual weight to stand next to giant global brands." },
        { type: 'text', navLabel: 'Solution', isAccent: true, title: "The C-monogram system", p: "Designed a heavy, striking geometric 'C' mark paired with an unapologetically brutalist wordmark. Built out a strict grid system for infinite scaling." },
        { type: 'outcome', navLabel: 'Outcome', title: "Ready for the streets", p: "The brand successfully launched its first collection with the new visual identity leading the charge across all digital touchpoints.", outcomes: [{ value: "10k+", label: "Day 1 visitors" }, { value: "100%", label: "Brand consistency" }] }
      ]
    },
    links: [
      { label: "Logo Design", url: "https://portfolio2021-4aa7c.web.app/assets/pdf/crepme.pdf", icon: "pdf" }
    ],
  },
  {
    id: 2,
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

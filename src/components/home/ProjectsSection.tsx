import ProjectCard, { Project } from "./ProjectCard";

const projectsData: Project[] = [
  {
    id: 5,
    title: "Bitstrap",
    description: "Designed and built a custom CSS Library for UI components.",
    tags: ["Figma", "HTML", "CSS", "JavaScript"],
    image: "bitstrap.png",
    link: "https://www.figma.com/proto/fYuUTd4adyMGVJzQMZaZLd/Bitstrap?node-id=0-1&t=QIYsIRR9VCmeYMow-1",
    codeLink: "https://github.com/themzaid/bitstrap",
  },
  {
    id: 1,
    title: "Skillscall",
    description:
      "Created a custom website for a service-based platform in the UAE.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "skillscall.png",
    link: "https://project-xyz-show.web.app/scripts/landing.html", // Project link
    codeLink: "https://github.com/themzaid/project-xyz", // Code link
  },

  {
    id: 3,
    title: "Swades",
    description: "Designed a custom website for a restaurant chain in Dubai.",
    tags: ["Figma"],
    image: "swades.png",
    link: "https://swades.ae/",
    designLink:
      "https://www.figma.com/proto/OixtdxChvTmXbbQ9f6JCWw/Swades?node-id=0-1&t=0iuCUgNfTPBporWT-1",
  },
  {
    id: 4,
    title: "Crep Middle East",
    description: "Designed a logo for an e-commerce startup based in Dubai.",
    tags: ["Adobe Illustrator"],
    image: "crepme.png",
    link: "https://portfolio2021-4aa7c.web.app/assets/pdf/crepme.pdf",
    designLink: "https://portfolio2021-4aa7c.web.app/assets/pdf/crepme.pdf",
  },
  {
    id: 2,
    title: "Tangled",
    description:
      "Created a custom login page for an educational platform based in the UAE. (desktop only)",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "tangled.png",
    link: "https://portfolio2021-4aa7c.web.app/tangled_web/home.html",
    codeLink: "https://github.com/neeltron/tangled-web",
  },
  // {
  //   id: 6,
  //   title: "Task Management Tool",
  //   description:
  //     "Collaborative task management application with drag-and-drop.",
  //   tags: ["React", "Node.js", "MongoDB"],
  //   image:
  //     "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //   link: "https://taskmanagement.com",
  //   codeLink: "https://github.com/user/taskmanagement",
  // },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-2">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <span className="section-tag px-4 py-1.5 inline-block mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Featured Projects
          </h2>
          <p className="page-description max-w-2xl mx-auto text-balance">
            A selection of my work in the past, showcasing my skills in design and frontend development.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Code,
  Monitor,
  Palette,
  Award,
  FolderOpen,
} from "lucide-react";
import { CalendarMonthRounded } from "@mui/icons-material";

const About = () => {
  const timeline = [
    {
      year: "Mar 2025 - Present",
      role: "QA Analyst",
      company: "Pleximus Inc - Mumbai",
      description:
        "Manual & Automated testing and Automation Framework development for web and mobile applications using Selenium and Appium.",
    },
    {
      year: "Apr 2020 - Jul 2021",
      role: "Web Designer & Developer",
      company: "Freelance - Remote",
      description:
        "Designed and created websites and logos based on client requirements.",
    },
    {
      year: "Jan 2020 - Apr 2020",
      role: "Web Development Intern",
      company: "Blue LLC - Dubai",
      description:
        "Led the ux/ui design for employee management system as the sole designer and frontend developer. I designed and built a custom User Interface for Data Visualisation, CMS, Dashboard and UI Components.",
    },
    {
      year: "Nov 2018 - April 2019",
      role: "Research & Development Intern",
      company: "The Assembly - Dubai",
      description:
        " Researched, developed and conducted workshops under the following topics: Introduction to Web Virtual Reality with A-Frame, Developed an object tracking game using OpenCV in Unity, Developed a 3D survival shooter game in Unity, Built a ToDo App using ElectronJS.",
    },
  ];

  const services = [
    {
      icon: Monitor,
      title: "Test Automation",
      description:
        "I build test automation frameworks from scratch. Selenium, Appium, Pytest, POM architecture, CI/CD integration. The kind of setup your developers can actually maintain after I'm done.",
    },
    {
      icon: Award,
      title: "QA & Test Planning",
      description:
        "Test plans, exploratory testing sessions, bug documentation, and coverage mapping. Everything you need, to improve your product's quality from the ground up.",
    },
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Clean, responsive web applications built to last. I've shipped websites and interfaces for clients in the UAE and India across various industries.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "I design functional interfaces that are easy to use and built to be implemented. Having written the frontend code myself, I know what's realistic to build and what isn't.",
    },
  ];

  const skills = [
    // Frontend Development
    "HTML5 / CSS3",
    "JavaScript / TypeScript",
    "React / Vanilla JS",
    "Tailwind / Bootstrap",
    "Responsive Design",
    "CSS Animations",

    // QA & Automation
    "SDET / QA Engineering",
    "Manual / Automated Testing",
    "Selenium / Appium",
    "Pytest / Test Frameworks",
    "Test Planning",
    "CI/CD Integration",

    // Backend & Infrastructure
    "Python",
    "Node.js / PostgreSQL",
    "Firebase / Vercel",

    // Design
    "Interface Design",
    "Figma Specialist",
    "Design Systems",
    "Illustrator / Photoshop",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-6 pb-24 px-2">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-[4fr_3fr] md:grid-cols-[6fr_3fr] lg:grid-cols-[5fr_3fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="px-4 py-1.5 text-xs font-medium font-mono rounded-full bg-primary/5 text-secondary-foreground inline-block mb-4">
                ABOUT ME
              </span>
              <h1 className="text-[28px] tracking-tight md:text-4xl lg:text-5xl">
                Hi, I'm Mohammed Zaid.
              </h1>
              <p className="page-description mb-5">
                I'm a software engineer based in Navi Mumbai, specialising in QA automation. I've spent the last few years working across design, frontend development, and quality engineering, and right now I'm focused on building test automation frameworks at Pleximus Inc.
              </p>
              <p className="page-description mb-5">
                I started my career as a UI designer and frontend developer. That means when I write automation, I'm not guessing how users move through an app. I already know. That context makes the tests I write more meaningful and the bugs I find more relevant.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild>
                  <Link to="/contact" className="flex items-center">
                    Contact me <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://docs.google.com/document/d/10DcDhUz6Wi7df9FXJq_Od4m6KQH0Aru2fE9-oIjgSNY/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Resume
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square overflow-hidden rounded-[20px] border border-gray-200 shadow-sm">
                <img
                  src="zaid.jpg"
                  alt="Mohammed Zaid - Frontend Developer and Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 -z-10 h-full w-full rounded-[28px] border border-gray-200 bg-background"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-2 bg-secondary">
        <div className="container mx-auto max-w-reading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="px-4 py-1.5 text-xs font-medium font-mono rounded-full bg-primary/5 text-secondary-foreground inline-block mb-4">
              SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl mb-4 tracking-tight">
              What I Do
            </h2>
            <p className="page-description max-w-compact mx-auto">
              I design and develop test automation frameworks alongside frontend applications, focusing on clean architecture, reliability, and long-term maintainability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-7">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-gray-200 rounded-[20px] p-6"
              >
                <div className="p-3 border border-gray-200 bg-gray-100 inline-block rounded-[7px] mb-3">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm/[21px]">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-2">
        <div className="container mx-auto max-w-reading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="px-4 py-1.5 text-xs font-medium font-mono rounded-full bg-primary/5 text-secondary-foreground inline-block mb-4">
              EXPERIENCE
            </span>
            <h2 className="text-3xl md:text-4xl mb-4 tracking-tight">
              My Journey
            </h2>
            <p className="page-description max-w-compact mx-auto">
              A timeline of my professional experience in the industry.
            </p>
          </motion.div>

          <div className="space-y-12 relative before:absolute before:left-0 sm:before:left-[145px] before:top-[34px] before:bottom-4 before:w-px before:bg-gray-200 before:hidden sm:before:block">
            {/* Timeline Label - Right-aligned with the date column */}
            <div className="absolute -top-10 left-0 md:w-[145px] text-right hidden md:block">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-muted-foreground/70 pr-6">
                Timeline
              </span>
            </div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 md:gap-14 relative"
              >
                {/* Years and Dot */}
                <div className="sm:w-[145px] flex-shrink-0 flex items-start justify-start sm:justify-end relative pt-0 sm:pt-[26px] pl-1 sm:pl-0">
                  <span className="text-[13px] font-serif tracking-wider text-foreground pr-0 sm:pr-6 whitespace-nowrap text-left md:text-right">
                    {item.year}
                  </span>
                  {/* Smaller Hollow Dot on the timeline - Centered with the year text */}
                  <div className="absolute right-[-4.5px] top-[32px] w-2 h-2 rounded-full border-2 border-primary bg-background z-10 hidden sm:block" />
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-card border border-gray-200 rounded-[20px] px-7 py-6 text-primary shadow-sm hover:shadow-sm transition-all duration-300">
                  <div className="mb-2">
                    <h3 className="text-xl font-medium mb-1 leading-tight">
                      {item.role}
                    </h3>
                    <p className="text-[14px] font-medium text-foreground -mb-1 leading-relaxed">
                      {item.company}
                    </p>
                  </div>
                  <p className="text-[14px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Origin Marker (The Start) */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-14 relative mt-4">
              <div className="sm:w-[145px] flex-shrink-0 flex items-start justify-end relative">
                {/* Final Dot to close the line */}
                <div className="absolute right-[-4.5px] top-[10px] w-2 h-2 rounded-full border-2 border-primary/40 bg-background z-10 hidden sm:block" />
              </div>
              <div className="flex-1 pt-1.5 hidden md:block">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-muted-foreground/70 ml-1">
                  The Beginning
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="pt-20 pb-24 px-2 bg-secondary">
        <div className="container mx-auto max-w-reading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl mb-4 tracking-tight">
              Skills & Expertise
            </h2>
            <p className="page-description max-w-compact mx-auto">
              A comprehensive list of technologies and tools I work with.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                viewport={{ once: true }}
                className="portfolio-tag h-9 px-3.5"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-2 bg-black text-primary-foreground">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-normal mb-6 tracking-tight">
              Let's Work Together!
            </h2>
            <p className="mb-8 max-w-compact mx-auto opacity-80">
              If you need QA automation set up, a framework built from scratch, or just someone who understands both the product and the code, let's find the right solution for your project.
            </p>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="rounded-full"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

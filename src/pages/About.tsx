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
} from "lucide-react";
import { CalendarMonthRounded } from "@mui/icons-material";

const About = () => {
  const timeline = [
    {
      year: "Mar 2025 - Present",
      role: "QA Analyst",
      company: "Pleximus Inc - Mumbai",
      description:
        "Manuala & Automated testing and Automation Framework development for web and mobile applications using Selenium and Appium.",
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
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Designing interfaces that prioritize usability, accessibility, and seamless user interactions, with an emphasis on functional design.",
    },
    {
      icon: Monitor,
      title: "Interactive Experiences",
      description:
        "Creating interactive experiences with thoughtful animations and micro‑interactions that make products engaging and intuitive.",
    },
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Building clean, responsive, and accessible frontend applications with a strong focus on performance, maintainability, and user experience.",
    },
    {
      icon: Award,
      title: "QA & Validation",
      description:
        "Designing scalable test automation frameworks and validating software functionality through structured testing, ensuring and long-term reliability.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-6 pb-24 px-2">
        <div className="container mx-auto max-w-8xl">
          <div className="grid grid-cols-1 sm:grid-cols-[4fr_3fr] md:grid-cols-[6fr_3fr] lg:grid-cols-[5fr_3fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="px-4 py-1.5 text-xs font-medium font-mono rounded-full bg-primary/5 text-secondary-foreground inline-block mb-4">
                ABOUT ME
              </span>
              <h1 className="text-[28px] tracking-tight md:text-4xl lg:text-5xl font-bold mb-5 font-serif">
                Hi, I'm Mohammed Zaid
              </h1>
              <p className="page-desciption mb-5">
                I am a software engineer with over three years of experience building and validating products for clients across diverse domains. My work involves software development, test automation, and frontend implementation, with a strong focus on writing maintainable, production-quality code.
              </p>
              {/* <p className="page-desciption mb-5">
              With a background in QA, frontend development, and product design, I bring a system-level perspective to engineering, understanding not only how software functions, but how it is experienced by end users. This allows me to design automation and software systems that are both technically robust and aligned with real user behavior.
              </p> */}
              <p  className="page-desciption mb-5">
              Currently, I focus on building scalable test automation frameworks, applying software engineering principles to ensure reliability, extensibility, and long-term maintainability, while continuing to leverage my design and frontend foundations where they add the most value.
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
      <section className="py-24 px-2 bg-secondary/50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1.5 text-xs font-medium font-mono rounded-full bg-primary/5 text-secondary-foreground inline-block mb-4">
              SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif tracking-tight">
              What I Do
            </h2>
            <p className="page-desciption max-w-2xl mx-auto">
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
                <h3 className="text-xl font-medium font-sans mb-3">
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
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1.5 text-xs font-medium font-mono rounded-full bg-primary/5 text-secondary-foreground inline-block mb-4">
              EXPERIENCE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif tracking-tight">
              My Journey
            </h2>
            <p className="page-description max-w-2xl mx-auto">
              A timeline of my professional experience in the industry.
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 md:gap-10"
              >
                <div className="md:w-1/4 flex items-start">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full border border-gray-200 bg-white flex-shrink-0">
                      <CalendarMonthRounded className="h-4 w-4 text-primary" />
                    </div>
                    <div className="ml-3">
                      <span className="text-[13px] font-mono font-medium">
                        {item.year}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/4 bg-card border border-gray-200 rounded-[20px] px-6 py-5">
                  <h3 className="text-lg font-sans font-medium mb-1">
                    {item.role}
                  </h3>
                  <p className="text-primary font-medium mb-1.5 text-sm">
                    {item.company}
                  </p>
                  <p className="text-muted-foreground text-sm/[21px]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-2 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-normal mb-6 font-serif tracking-tight">
              Let's Work Together
            </h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-80">
              I'm always interested in new opportunities and collaborations.
              Whether you have a project in mind or just want to connect, I'd
              love to hear from you.
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

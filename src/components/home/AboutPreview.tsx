import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  const skills = [
    "HTML5 / CSS3",
    "Bootstrap / Tailwind",
    "Responsive Design",
    "CSS Flex / Grid",
    "CSS Animations",
    "GSAP / Lottie",
    "JavaScript / TypeScript",
    "Vanilla / React",
    "QA & Testing",
    "Manual / Automated",
    "UI/UX Design",
    "Figma / Adobe Illustrator",
    "2D/3D Motion",
    "After Effects / Blender",
  ];

  return (
    <section className="py-24 px-2 bg-secondary/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-12 lg:gap-18 md:gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="section-tag px-4 py-1.5 inline-block mb-4">
              ABOUT ME
            </span>
            <h2 className="text-3xl md:text-4xl mb-6">
              Passionate about creating beautiful digital experiences.
            </h2>
            <p className="page-description mb-6 text-balance">
              I'm a Software Automation Engineer based in Navi Mumbai with a
              background in UI design, frontend development, and quality
              engineering. I started my career building products which means I
              understand how they're designed, how they're built, and exactly
              how they break
            </p>
            {/* <p className="page-description mb-6 text-balance">
              With a background in QA, frontend development and product design,
              I bring a system-level perspective to engineering, understanding
              not only how software functions, but how it is experienced by end
              users. This allows me to design automation and software systems
              that are both technically robust and aligned with real user
              behavior.
            </p> */}
            <div className="mt-8">
              <Button
                asChild
                variant="outline"
                className="group rounded-full size-lg"
              >
                <Link to="/about">
                  More about me
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-card border border-border-gray-100 rounded-[20px] p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/30 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/4"></div>

              <h3 className="text-xl mb-6 relative z-10">Skills & Expertise</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-2"></div>
                    <span className="text-sm font-mono font-medium text-gray-600 tracking-tight">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

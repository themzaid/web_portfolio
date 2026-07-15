import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import { ArrowDownIcon } from "@/components/ui/custom-icons";
import { Button } from "@/components/ui/button";
import Iridescence from "@/components/ui/Iridescence";

const Hero = () => {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 800], [0, 250]);



  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      const y = projectsSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full px-2 mb-4"
      style={{ height: "calc(var(--real-vh, 100svh) - 80px)" }}
    >
      {/* Background Container with Corner Radius & Masking */}
      <div className="absolute inset-x-4 bottom-0 top-0 md:bottom-0 md:top-0 rounded-3xl overflow-hidden bg-background">
        <Iridescence
          color={[0.3, 0.5, 0.9]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />

        {/* Main Content Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            style={{ y: contentY, willChange: "transform" }}
            className="container mx-auto px-4 text-white z-10"
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center gap-8"
              >
                {/* <StatusBadge
                  status={CURRENT_STATUS.status}
                  customText={CURRENT_STATUS.text}
                /> */}
              </motion.div>

              <div className="dark w-full">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance py-2 md:py-4 lg:py-6"
                >
                  Building modern web applications with React, Next.js and TypeScript.
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text max-w-compact mb-6 md:mb-10 lg-md-12 text-balance !text-white opacity-90"
              >
                With a background in Design and Engineering, I build web applications that are fast, reliable, and easy to use.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  onClick={scrollToProjects}
                  size="lg"
                  variant="secondary"
                  glowColor="#4c7fe6"
                  className="rounded-full group"
                >
                  View my work
                  <ArrowDownIcon
                    size={16}
                    className="ml-2 transition-transform [@media(hover:hover)]:group-hover:translate-y-1 group-active:translate-y-1"
                  />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

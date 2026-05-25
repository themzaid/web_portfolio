import { motion, animate } from "framer-motion";
import { ArrowDownIcon } from "lucide-react";
import StatusBadge, { AvailabilityStatus } from "../common/StatusBadge";
import { Button } from "@/components/ui/button";

const CURRENT_STATUS: { status: AvailabilityStatus; text?: string } = {
  status: "available",
  text: "Open to work",
};

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      const y = projectsSection.getBoundingClientRect().top + window.scrollY;
      animate(window.scrollY, y, {
        duration: 0.8,
        ease: [0.26, 1, 0.3, 1],
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    }
  };

  return (
    <section className="py-24 [@media(pointer:coarse)]:py-0 flex items-center justify-center px-2 relative [@media(pointer:coarse)]:min-h-[75vh]">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative px-4">
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
            <span className="section-tag px-4 py-1.5 inline-block mb-4">
              SOFTWARE DESIGNER & ENGINEER
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance py-2"
          >
            I design, build, test <br /> and ship products

          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-md page-description max-w-compact mb-10 text-balance"
          >
            With a background in design & engineering and a strong focus on frontend development, I build features that stay clear and reliable as products scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="rounded-full group"
            >
              View my work
              <ArrowDownIcon
                size={16}
                className="ml-2 group-hover:translate-y-1 transition-transform"
              />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

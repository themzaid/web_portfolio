import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 px-2 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="section-tag px-4 py-1.5 inline-block mb-4">
            LET'S COLLABORATE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-balance tracking-tight  max-w-compact mx-auto">
            Need test coverage without a full-time hire?
          </h2>
          <p className="page-description mx-auto mb-10 text-balance max-w-compact">
            I'm available for freelance automation projects and framework setup. If your team is shipping without safety nets and you need someone to fix that fast, let's talk.
          </p>
          <Button asChild size="lg" className="rounded-full group">
            <Link to="/contact">
              Get in touch
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

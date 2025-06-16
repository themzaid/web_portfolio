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

      <div className="container mx-auto max-w-4xl">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-playfair text-balance">
            Have a project in mind? Let's bring it to life
          </h2>
          <p className="page-description max-w-2xl mx-auto mb-10 text-balance">
            I'm currently available for contract or full-time opportunities. If
            you're looking for a developer who is passionate about creating
            exceptional digital experiences, let's connect.
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

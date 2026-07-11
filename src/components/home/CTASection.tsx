import { motion } from "framer-motion";
import { ArrowRightIcon } from "@/components/ui/custom-icons";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Beams from "@/components/ui/Beams";

const CTASection = () => {
  return (
    <section className="py-24 px-2 relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Beams
          beamWidth={2.5}
          beamHeight={15}
          beamNumber={12}
          lightColor="#0ea5e9"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={-35} // Angled exactly like the React Bits preview
          color="#000000"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-7 text-balance tracking-tight max-w-compact mx-auto">
            Interested in working together?
          </h2>
          <p className="text-gray-300 mx-auto mb-10 text-balance max-w-compact">
            Available for freelance work, collaborations, and full-time opportunities.
          </p>
          <Button asChild size="lg" className="rounded-full group" variant="secondary">
            <Link to="/contact">
              Get in touch
              <ArrowRightIcon
                size={16}
                className="ml-1 transition-transform [@media(hover:hover)]:group-hover:translate-x-1 group-active:translate-x-1"
              />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

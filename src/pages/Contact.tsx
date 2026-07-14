import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Beams from "@/components/ui/Beams";

const Contact = () => {
  return (
    <Layout>
      <div className="relative min-h-[calc(100vh-64px)] flex flex-col">
        <div className="absolute -top-[64px] left-0 right-0 bottom-0 z-0 pointer-events-none">
          <Beams
            beamWidth={2.5}
            beamHeight={15}
            beamNumber={12}
            lightColor="#0ea5e9"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={-35}
            color="#000000"
          />
        </div>

        <section className="pt-8 pb-12 lg:pb-16 px-2 relative z-10 flex-1 flex flex-col justify-center">
          <div className="container mx-auto max-w-reading">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-9 lg:mb-12"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-2">
                Get in Touch
              </h1>
              <p className="text-[16px] md:text-[17px] leading-[1.7] font-normal max-w-compact mx-auto text-text-primary dark:text-text-primary">
                Whether you're hiring, building a product, or looking for support on a project, I'd be happy to help.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-8 items-stretch">
              <div className="h-full">
                <ContactForm />
              </div>

              <div className="h-full">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;

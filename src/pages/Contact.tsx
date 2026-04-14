import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { Codepen } from "lucide-react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <Layout>
      <section className="pt-16 pb-24 px-2">
        <div className="container mx-auto max-w-reading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1.5 text-xs font-medium font-mono rounded-full bg-primary/5 text-secondary-foreground inline-block mb-4">
              CONTACT
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 tracking-tight">
              Get in Touch
            </h1>
            <p className="page-description max-w-compact mx-auto">
              Have a project in mind or want to discuss potential opportunities?
              I'd love to hear from you. Fill out the form below or reach out
              directly.
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
    </Layout>
  );
};

export default Contact;

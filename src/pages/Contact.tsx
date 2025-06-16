import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { Github, Codepen, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="pt-16 pb-24 px-2">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground inline-block mb-4">
              CONTACT
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-playfair">
              Get in Touch
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities?
              I'd love to hear from you. Fill out the form below or reach out
              directly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl font-semibold mb-6 font-playfair"
              >
                Send Me a Message
              </motion.h2>
              <ContactForm />
            </div>

            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl font-semibold mb-6 font-playfair"
              >
                Contact Information
              </motion.h2>
              <ContactInfo />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-12"
              >
                <h3 className="text-lg font-medium mb-4">Connect with me</h3>
                <div className="flex space-x-6">
                  <a
                    href="https://github.com/themzaid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border/60 rounded-full hover:border-border hover:shadow-sm transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://codepen.io/themzaid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border/60 rounded-full hover:border-border hover:shadow-sm transition-all duration-300"
                    aria-label="CodePen"
                  >
                    <Codepen size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/themzaid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border/60 rounded-full hover:border-border hover:shadow-sm transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

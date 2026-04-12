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

          <div className="grid grid-cols-1 md:grid-cols-[3fr_5fr] lg:grid-cols-[3fr_4fr] gap-12 md:gap-8 lg:gap-20">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl mb-6 max-w-lg md:max-w-xl mx-auto"
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
                className="text-2xl mb-6 mx-auto"
              >
                Contact Information
              </motion.h2>
              <ContactInfo />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-9"
              >
                <h3 className="text-lg font-medium mb-4">Connect with me</h3>
                <div className="flex space-x-6">
                  <Button variant="secondary" size="icon" asChild className="h-[46px] w-[46px] rounded-full [&_svg]:size-[26px]">
                    <a
                      href="https://github.com/themzaid"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <GitHub fontSize="medium" />
                    </a>
                  </Button>
                  <Button variant="secondary" size="icon" asChild className="h-[46px] w-[46px] rounded-full [&_svg]:size-[26px] p-0 flex items-center justify-center">
                    <a
                      href="https://codepen.io/themzaid"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="CodePen"
                    >
                      <Codepen />
                    </a>
                  </Button>
                  <Button variant="secondary" size="icon" asChild className="h-[46px] w-[46px] rounded-full [&_svg]:size-[26px]">
                    <a
                      href="https://linkedin.com/in/themzaid"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <LinkedIn fontSize="medium" />
                    </a>
                  </Button>
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

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Codepen } from "lucide-react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Button } from "@/components/ui/button";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      details: "themzaid@gmail.com",
      link: "mailto:themzaid@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9833014421",
      link: "tel:+919833014421",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Navi Mumbai, Maharashtra, India",
      link: null,
    },
  ];

  const socials = [
    { icon: GitHub, url: "https://github.com/themzaid", label: "GitHub" },
    { icon: Codepen, url: "https://codepen.io/themzaid", label: "CodePen" },
    { icon: LinkedIn, url: "https://linkedin.com/in/themzaid", label: "LinkedIn" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-gray-200 rounded-[20px] pt-7 pb-10 px-8 md:pt-8 md:pb-12 md:px-10 shadow-sm h-full"
    >
      <div className="mb-7">
        <h2 className="text-2xl font-serif pb-4 border-b border-gray-300 tracking-tight">Contact Information</h2>
        <p className="text-sm text-muted-foreground mt-6 font-medium">Find me where the design meets the code.</p>
      </div>

      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-start"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-gray-50/50 mr-4">
              <item.icon className="w-5 h-5 text-primary/70" />
            </div>
            <div>
              <h3 className="text-xs font-sans font-medium uppercase tracking-widest text-muted-foreground mb-0.5">
                {item.title}
              </h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.details}
                </a>
              ) : (
                <p className="text-base font-medium text-foreground">
                  {item.details}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-serif pb-4 border-b border-gray-300 tracking-tight mb-6">Connect with me</h3>
        <div className="flex space-x-4">
          {socials.map((social) => (
            <Button
              key={social.label}
              variant="secondary"
              size="icon"
              asChild
              className="h-11 w-11 rounded-full bg-gray-50/50 border border-gray-100 hover:bg-primary/5 hover:border-primary/20 transition-all [&_svg]:size-5"
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon className="text-primary/70" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;

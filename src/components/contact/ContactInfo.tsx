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
    { icon: GitHub, url: "https://github.com/themzaid", label: "GitHub", iconClass: "text-foreground" },
    { icon: LinkedIn, url: "https://linkedin.com/in/themzaid", label: "LinkedIn", iconClass: "text-[#0A66C2]" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card/60 backdrop-blur-md shadow-sm border border-card-border rounded-[20px] pt-7 pb-10 px-8 md:pt-8 md:pb-12 md:px-10 h-full flex flex-col text-text-primary dark:text-text-primary"
    >
      <div className="mb-7">
        <h2 className="text-2xl font-serif pb-4 border-b border-border tracking-tight">Contact Information</h2>
        <p className="description mt-6">Available globally for remote work.</p>
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
            <div className="flex-shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center bg-muted/50 mr-4">
              <item.icon className="w-5 h-5 text-primary/70 dark:text-accent-blue/80" />
            </div>
            <div>
              <h3 className="text-xs font-sans font-medium uppercase tracking-widest text-muted-foreground mb-0.5">
                {item.title}
              </h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-base font-medium text-text-primary dark:text-text-primary hover:text-accent-blue transition-colors underline decoration-dotted underline-offset-4 hover:decoration-accent-blue"
                >
                  {item.details}
                </a>
              ) : (
                <p className="text-base font-medium text-text-primary dark:text-text-primary">
                  {item.details}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-auto pt-12">
        <h3 className="text-xl font-serif pb-4 border-b border-border tracking-tight mb-6">Connect with me</h3>
        <div className="flex flex-wrap gap-4">
          {socials.map((social) => (
            <Button
              key={social.label}
              variant="outline"
              asChild
              className="h-11 px-[10px] rounded-full border-2 border-primary/15 transition-all gap-2 [&_svg]:size-6"
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon className={social.iconClass || "text-primary/70 dark:text-accent-blue/90"} />
                <span className="font-medium font-sans tracking-wide">{social.label}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;

import { motion } from "framer-motion";
// import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import {
  EmailRounded,
  PhoneRounded,
  LocationPin,
  GroupRounded,
} from "@mui/icons-material";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: EmailRounded,
      title: "Email",
      details: "themzaid@ gmail.com",
      link: "mailto:themzaid@gmail.com",
    },
    {
      icon: PhoneRounded,
      title: "Phone",
      details: "+91 98330 14421",
      link: "tel:+919833014421",
    },
    {
      icon: LocationPin,
      title: "Location",
      details: "Mumbai, Maharashtra, India",
      link: null,
    },
    {
      icon: GroupRounded,
      title: "Social Media",
      details: "GitHub, LinkedIn, CodePen",
      link: null,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-wrap max-w-lg md:max-w-xl mx-auto">
      {contactDetails.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="bg-card border border-border/60 rounded-[20px] p-6 hover:border-border hover:shadow-sm transition-all duration-300"
        >
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="p-3 bg-secondary rounded-full">
                <item.icon sx={{ fontSize: 24 }} className="text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-base font-sans font-medium">{item.title}</h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-sm font-mono font-medium tracking-wide text-muted-foreground hover:text-primary hover:underline transition-colors"
                >
                  {item.details}
                </a>
              ) : (
                <p className="text-sm font-mono font-medium tracking-wide text-muted-foreground">
                  {item.details}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfo;

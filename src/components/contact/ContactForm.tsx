import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
// import { Mail, Send, User, FileText } from "lucide-react";
import {
  EmailOutlined,
  PersonOutline,
  Send,
  Subject,
} from "@mui/icons-material";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these with your actual EmailJS values
    const SERVICE_ID = "service_07k7s9s";
    const TEMPLATE_ID = "template_t53l9ch";
    const PUBLIC_KEY = "flIspkXa1UMtwUP_R";

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description:
          typeof error === "string"
            ? error
            : error?.text || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto tracking-wide"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <div className="relative">
            <PersonOutline className="absolute left-3 top-2 text-muted-foreground/90" />
            <Input
              placeholder="Your Name"
              className="pl-10 text-sm font-medium"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="relative">
            <EmailOutlined className="absolute left-3 top-2 text-muted-foreground/90" />
            <Input
              type="email"
              placeholder="Your Email"
              className="pl-10 text-sm font-medium"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="relative">
            <Subject
              sx={{ fontSize: 20 }}
              className="absolute left-3 top-2.5 text-muted-foreground/90"
            />
            <Input
              placeholder="Subject"
              className="pl-10 text-sm font-medium"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Textarea
            placeholder="Your Message"
            className="min-h-[150px] resize-none text-sm font-medium"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <Button
          type="submit"
          className={cn(
            "w-full transition-all duration-300 rounded-full",
            isSubmitting && "opacity-80"
          )}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              Sending...
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="ml-2"
              >
                <Send sx={{ fontSize: 16 }} />
              </motion.div>
            </span>
          ) : (
            <span className="flex items-center">
              Send Message
              <Send sx={{ fontSize: 16 }} className="ml-2" />
            </span>
          )}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;

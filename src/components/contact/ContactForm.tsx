import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
// import { Mail, Send, User, FileText } from "lucide-react";
import { Send } from "@mui/icons-material";
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
      className="flex flex-col bg-card border border-gray-200 rounded-[20px] pt-7 pb-10 px-8 md:pt-8 md:pb-12 md:px-10 shadow-sm h-full"
    >
      <div className="mb-7 shrink-0">
        <h2 className="text-2xl font-serif pb-4 border-b border-gray-300 tracking-tight">Send Me a Message</h2>
        <p className="text-sm font-medium text-muted-foreground mt-6">Usually replies within 24–48 hours.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-6">
        <div className="space-y-2">
          <Input
            placeholder="Your Name"
            className="px-4 text-sm font-medium rounded-full"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Your Email"
            className="px-4 text-sm font-medium rounded-full"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* <div className="space-y-2">
          <Input
            placeholder="Subject"
            className="px-4 text-sm font-medium rounded-full"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div> */}

        <div className="flex-1 flex flex-col">
          <Textarea
            placeholder="Your Message"
            className="flex-1 min-h-[100px] resize-none text-sm font-medium rounded-[18px]"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <Button
          type="submit"
          className={cn(
            "w-full transition-all duration-300 rounded-full shrink-0",
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

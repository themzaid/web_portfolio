import { Github, Codepen, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 px-2 border-t border-border/40">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col">
            <span className="font-playfair text-xl font-medium">
              Mohammed Zaid
            </span>
            <p className="text-sm text-muted-foreground mt-2 text-balance">
              Creating beautiful digital experiences through code and design.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/themzaid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://codepen.io/themzaid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CodePen"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Codepen size={20} />
            </a>
            <a
              href="https://linkedin.com/in/themzaid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:themzaid@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Mohammed Zaid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

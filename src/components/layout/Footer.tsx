import { IoLogoCodepen } from "react-icons/io";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";

const ICON_SIZE = 28;

const Footer = () => {
  return (
    // change 0 to 40 fo border to appear if below section is uncommented
    <footer className="py-6 px-2 border-t border-border/0">
      <div className="container mx-auto">
        {/* <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col">
            <span className="font-serif text-xl font-medium">Mohammed Zaid</span>
            <p className="text-sm text-muted-foreground mt-2 text-balance">
              Creating beautiful digital experiences by bridging the gap between
              design and code.
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
              <GitHub size={ICON_SIZE} />
            </a>
            <a
              href="https://codepen.io/themzaid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CodePen"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <IoLogoCodepen size={ICON_SIZE} />
            </a>
            <a
              href="https://linkedin.com/in/themzaid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <LinkedIn size={ICON_SIZE} />
            </a>
            <a
              href="mailto:themzaid@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail size={ICON_SIZE} />
            </a>
          </div>
        </div> */}

        {/*  change mt-0 to 10 when above is uncommented */}
        <div className="mt-0 pt-6 border-t border-gray-200 text-center text-sm text-muted-foreground">
          <p>v26.0 © {new Date().getFullYear()} by Mohammed Zaid</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { IoLogoCodepen } from "react-icons/io";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const ICON_SIZE = 26;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const [viewportHeight, setViewportHeight] = useState<number>(
    window.innerHeight
  );
  const isMobile = useIsMobile();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Update viewport height on resize and scroll
  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
      if (mobileMenuRef.current && isOpen) {
        mobileMenuRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      // Update height on scroll as well to catch address bar hiding/showing
      if (isMobile && mobileMenuRef.current && isOpen) {
        mobileMenuRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    // Initial height setting
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, isMobile]);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Navigation items
  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  // Social links
  const socialLinks = [
    {
      icon: (props) => <GitHub {...props} size={ICON_SIZE} />,
      link: "https://github.com/themzaid",
      label: "GitHub",
    },
    {
      icon: (props) => <IoLogoCodepen {...props} size={ICON_SIZE} />,
      link: "https://codepen.io/themzaid",
      label: "CodePen",
    },
    {
      icon: (props) => <LinkedIn {...props} size={ICON_SIZE} />,
      link: "https://linkedin.com/in/themzaid",
      label: "LinkedIn",
    },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-2 py-4 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo/Brand */}
          <NavLink
            to="/"
            className="text-2xl font-normal tracking-normal relative z-20"
          >
            <span className="font-playfair hidden sm:block">Mohammed Zaid</span>
            <span className="font-playfair sm:hidden">MZ</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      cn(
                        "text-sm font-normal relative px-1 py-1.5 transition-colors font-playfair tracking-wide",
                        "after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#222] after:transition-all after:duration-300",
                        isActive
                          ? "after:w-full text-primary"
                          : "text-muted-foreground hover:text-primary hover:after:w-full"
                      )
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {social.icon({})}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button with Custom 2-Line Animation */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden relative z-20 p-2 w-6 h-8 flex flex-col justify-center items-center"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={cn(
                "block h-0.5 w-5 bg-primary transition-all duration-500 ease-in-out",
                isOpen ? "rotate-45 translate-y-0.6" : "-translate-y-[3px]"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-primary transition-all duration-500 ease-in-out",
                isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-[4px]"
              )}
            />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/100 backdrop-blur-md flex flex-col pt-20 px-6 overflow-auto"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              height: `${viewportHeight}px`,
              overflow: "auto",
              paddingTop: "5rem",
            }}
          >
            <ul className="flex flex-col space-y-7 items-center mt-auto">
              {navItems.map((item) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * navItems.indexOf(item) }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      cn(
                        "text-3xl font-normal transition-colors font-playfair",
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      )
                    }
                  >
                    {item.title}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto mb-10 flex justify-center space-x-5"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary transition-colors p-2"
                >
                  {social.icon({})}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

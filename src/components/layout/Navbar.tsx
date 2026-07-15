import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { IoLogoCodepen } from "react-icons/io";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowLeftIcon } from "@/components/ui/custom-icons";


const ICON_SIZE = 26;

const childVariantsBack = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { ease: [0.22, 1, 0.36, 1], duration: 0.4 } },
  exit: { y: 20, opacity: 0, transition: { ease: [0.22, 1, 0.36, 1], duration: 0.3 } }
};

const childVariantsLogo = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { ease: [0.22, 1, 0.36, 1], duration: 0.4 } },
  exit: { y: -20, opacity: 0, transition: { ease: [0.22, 1, 0.36, 1], duration: 0.3 } }
};

const AnimatedText = ({ text, variants, className = "" }: { text: string, variants: any, className?: string }) => (
  <span className={cn("inline-flex overflow-hidden", className)}>
    {text.split("").map((char, i) => (
      <motion.span key={i} variants={variants} className="inline-block whitespace-pre">
        {char}
      </motion.span>
    ))}
  </span>
);

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
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-2 py-4 transition-all duration-300",
          scrolled && location.pathname !== "/contact" && !isOpen ? "shadow-sm" : "",
          location.pathname === "/contact" && !isOpen ? "border-b border-border" : ""
        )}
      >
        <motion.div 
          initial={false}
          animate={{ height: isOpen ? '100dvh' : '64px' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 left-0 right-0 bg-background/80 dark:bg-background/50 backdrop-blur-md pointer-events-none origin-top"
        />
        <div className="container mx-auto relative group/navbar">
          <nav className="flex items-center justify-between">
            {/* Logo/Brand / Back Button */}
            <div className="relative z-20 flex items-center h-[32px] w-[160px] sm:w-[220px]">
              <AnimatePresence mode="wait">
                {location.pathname.startsWith('/project/') ? (
                  <motion.div
                    key="back-button"
                    className="absolute left-0 flex items-center h-full"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={{
                      initial: {},
                      animate: { transition: { staggerChildren: 0.015 } },
                      exit: { transition: { staggerChildren: 0.01, staggerDirection: 1 } }
                    }}
                  >
                    <NavLink
                      to="/"
                      data-restore-scroll="true"
                      className="group inline-flex items-center gap-2 text-[13px] tracking-[0.14em] uppercase text-accent-blue dark:text-accent-blue-c font-bold hover:opacity-80 transition-opacity [-webkit-tap-highlight-color:transparent]"
                    >
                      <motion.div variants={childVariantsBack}>
                        <ArrowLeftIcon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1 transform-gpu" />
                      </motion.div>
                      <AnimatedText text="Back to projects" variants={childVariantsBack} className="translate-y-[0.5px]" />
                    </NavLink>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="logo"
                    className="absolute left-0 flex items-center h-full"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={{
                      initial: {},
                      animate: { transition: { staggerChildren: 0.02 } },
                      exit: { transition: { staggerChildren: 0.015, staggerDirection: 1 } }
                    }}
                  >
                    <NavLink
                      to="/"
                      onClick={(e) => {
                        if (location.pathname === "/") {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }}
                      className="text-2xl font-normal tracking-normal text-accent-blue dark:text-text-primary block"
                    >
                      <motion.span 
                        variants={{
                          initial: {},
                          animate: { transition: { staggerChildren: 0.02 } },
                          exit: { transition: { staggerChildren: 0.015, staggerDirection: 1 } }
                        }}
                        className="font-sans font-medium tracking-[0.02em] hidden sm:flex items-center gap-[0.25em]"
                      >
                        <motion.span whileTap={{ scale: 0.9, x: -2, transition: { type: "spring", stiffness: 500, damping: 15 } }} className="inline-flex overflow-hidden">
                          <AnimatedText text="Mohammed" variants={childVariantsLogo} />
                        </motion.span>
                        <motion.span whileTap={{ scale: 0.9, x: 2, transition: { type: "spring", stiffness: 500, damping: 15 } }} className="inline-flex overflow-hidden">
                          <AnimatedText text="Zaid" variants={childVariantsLogo} />
                        </motion.span>
                      </motion.span>
                      <motion.span 
                        variants={{
                          initial: {},
                          animate: { transition: { staggerChildren: 0.02 } },
                          exit: { transition: { staggerChildren: 0.015, staggerDirection: 1 } }
                        }}
                        className="font-sans font-medium tracking-[0.05em] flex sm:hidden items-center"
                      >
                        <motion.span whileTap={{ scale: 0.85, x: -2, rotate: -6, transition: { type: "spring", stiffness: 500, damping: 15 } }} className="inline-flex overflow-hidden">
                          <AnimatedText text="M" variants={childVariantsLogo} />
                        </motion.span>
                        <motion.span whileTap={{ scale: 0.85, x: 2, rotate: 6, transition: { type: "spring", stiffness: 500, damping: 15 } }} className="inline-flex overflow-hidden">
                          <AnimatedText text="Z" variants={childVariantsLogo} />
                        </motion.span>
                      </motion.span>
                    </NavLink>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-8">
              <ul className="flex space-x-6">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      onClick={(e) => {
                        if (location.pathname === item.path) {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }}
                      className={({ isActive }) =>
                        cn(
                          "text-md font-medium px-1 py-1.5 transition-colors font-sans tracking-wide",
                          isActive
                            ? "text-accent-blue dark:text-text-primary"
                            : "text-text-primary/60 hover:text-foreground/60"
                        )
                      }
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button with Custom 2-Line Animation */}
            <div className="flex items-center gap-3 sm:hidden relative z-20">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 w-8 h-8 relative"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <motion.span
                  initial={false}
                  animate={{
                    x: "-50%",
                    y: isOpen ? "-50%" : "-6px",
                    rotate: isOpen ? 45 : 0
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="absolute top-1/2 left-1/2 h-[2.5px] w-6 bg-accent-blue dark:bg-text-primary"
                />
                <motion.span
                  initial={false}
                  animate={{
                    x: "-50%",
                    y: isOpen ? "-50%" : "4px",
                    rotate: isOpen ? -45 : 0
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="absolute top-1/2 left-1/2 h-[2.5px] w-6 bg-accent-blue dark:bg-text-primary"
                />
              </button>
            </div>
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
              transition={{ 
                y: { type: "spring", stiffness: 300, damping: 24 },
                opacity: { duration: 0.3, ease: "linear" }
              }}
              className="fixed left-0 right-0 flex flex-col px-6 overflow-auto"
              style={{
                top: "64px",
                zIndex: 40,
                height: "calc(100dvh - 64px)",
                paddingTop: "2rem",
              }}
            >
            <ul className="flex flex-col space-y-7 items-center mt-auto">
              {navItems.map((item) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    y: { type: "spring", stiffness: 280, damping: 20, delay: 0.1 * navItems.indexOf(item) },
                    opacity: { duration: 0.4, ease: "linear", delay: 0.1 * navItems.indexOf(item) }
                  }}
                >
                  <NavLink
                    to={item.path}
                    onClick={(e) => {
                      if (location.pathname === item.path) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                      document.body.style.overflow = "";
                      setIsOpen(false);
                    }}
                    className={({ isActive }) =>
                      cn(
                        "text-3xl font-normal transition-colors font-sans font-medium",
                        isActive
                          ? "text-accent-blue dark:text-text-primary"
                          : "text-text-primary/50 hover:text-accent-blue"
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                y: { type: "spring", stiffness: 280, damping: 20, delay: 0.3 },
                opacity: { duration: 0.4, ease: "linear", delay: 0.3 }
              }}
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
    </>
  );
};

export default Navbar;

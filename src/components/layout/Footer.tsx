import { Link, useLocation } from "react-router-dom";
import { ArrowUpRightIcon } from "@/components/ui/custom-icons";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const Footer = () => {
  const location = useLocation();
  const footerLinks = navItems.filter((item) => item.path !== location.pathname);
  const isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

  return (
    <footer className={`pt-0 ${isAndroid ? "pb-12" : "pb-6"} px-4 bg-transparent`}>
      <div className="container mx-auto">

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-y-0 gap-x-5 md:gap-x-12 mb-1 sm:mb-5 sm:mt-5 w-full">
          {footerLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={(e) => {
                if (location.pathname === link.path) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="group flex items-center justify-between sm:justify-start gap-2 text-xl font-medium border-b border-border sm:border-none py-5 sm:py-0 text-accent-blue dark:text-text-primary hover:opacity-80 transition-all"
            >
              {link.title}
              <ArrowUpRightIcon className="w-5 h-5 text-accent-blue dark:text-text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-active:-translate-y-0.5 group-active:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="pt-6 border-border text-center text-sm text-muted-foreground sm:border-t">
          <p>© {new Date().getFullYear()} Mohammed Zaid. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

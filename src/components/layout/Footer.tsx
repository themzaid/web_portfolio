import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const Footer = () => {
  const location = useLocation();
  const footerLinks = navItems.filter((item) => item.path !== location.pathname);

  return (
    <footer className="pt-12 pb-6 px-4 mt-12">
      <div className="container mx-auto">

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-5 md:gap-12 mb-5 w-full">
          {footerLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="group flex items-center justify-between sm:justify-start gap-2 text-xl font-medium border-t border-border sm:border-none pt-4 sm:pt-0 hover:text-primary transition-colors"
            >
              {link.title}
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="pt-6 border-t border-gray-200 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mohammed Zaid</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

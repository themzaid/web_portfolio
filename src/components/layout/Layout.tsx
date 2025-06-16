import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "./PageTransition";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-20 flex-1 relative z-0">
        <PageTransition>{children}</PageTransition>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

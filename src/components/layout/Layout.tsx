import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "./PageTransition";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-500 bg-background">
      <Navbar />
      {/* Spacer div to account for fixed navbar height */}
      <div className="h-[64px] w-full shrink-0" aria-hidden="true" />
      <div className="pt-0 flex-1 relative z-0">
        <PageTransition>
          {children}
        </PageTransition>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

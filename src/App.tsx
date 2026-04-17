import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Scroll restoration that ignores HMR reloads
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Only scroll to top if this isn't a dev-server HMR refresh
    // We check if the pathname truly changed from its last value
    const lastPath = window.sessionStorage.getItem('lastPath');
    if (lastPath !== pathname) {
      window.scrollTo(0, 0);
      window.sessionStorage.setItem('lastPath', pathname);
    }
  }, [pathname]);

  return null;
};

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CaseStudy from "./pages/CaseStudy";

const queryClient = new QueryClient();

// This component handles the AnimatePresence and routes
const AnimatedRoutes = () => {
  const location = useLocation();

  return <AnimatedRoutes />;
};

const App = () => {
  // Removed global smooth scroll to prevent route transition animation bugs

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project/:slug" element={<CaseStudy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Pages
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));

// Premium Loading Fallback
const PageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-background z-[100]">
    <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

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
        <HashRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/project/:slug" element={<CaseStudy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

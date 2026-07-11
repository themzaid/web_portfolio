import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation, Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CaseStudy from "./pages/CaseStudy";

const queryClient = new QueryClient();

// We track scroll position outside AnimatePresence so it doesn't get frozen by exit animations
const ScrollTracker = () => {
  const location = useLocation();
  const currentPath = useRef(location.pathname);

  // CRITICAL FIX: Update path synchronously during render!
  // If we wait for useEffect, the DOM might shrink and fire a scroll event 
  // before the path updates, accidentally saving 0 to the OLD path!
  if (currentPath.current !== location.pathname) {
    currentPath.current = location.pathname;
  }

  // Continuously save scroll position to the REAL current path
  useEffect(() => {
    const onScroll = () => {
      sessionStorage.setItem(`scroll:${currentPath.current}`, String(Math.round(window.scrollY)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
};

// Handles restoring scroll on Back/Forward navigation AFTER exit animations complete
const ScrollRestorer = () => {
  const location = useLocation();

  useEffect(() => {
    let attempts = 0;
    
    const enforceScroll = () => {
      const forceTop = sessionStorage.getItem('forceScrollToTop') === 'true';
      
      if (forceTop) {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      } else {
        const saved = sessionStorage.getItem(`scroll:${location.pathname}`);
        if (saved) {
          const val = parseInt(saved, 10);
          window.scrollTo(0, val);
          document.documentElement.scrollTop = val;
          document.body.scrollTop = val;
        }
      }
      
      attempts++;
      if (attempts < 5) {
        requestAnimationFrame(enforceScroll);
      } else {
        // Clear flag only after we're done enforcing
        sessionStorage.removeItem('forceScrollToTop');
      }
    };
    
    enforceScroll();
  }, [location.pathname]);

  return <Outlet />;
};

const AppRoutes = () => {
  const location = useLocation();

  // Global interceptor for link clicks to bypass HashRouter navigation type bugs
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      // If it's an internal link, guarantee a scroll-to-top on the next navigation
      if (target && target.href && target.href.includes(window.location.host)) {
        // If the link explicitly requests scroll restoration (like "Back to projects" acting as a back button)
        if (target.getAttribute('data-restore-scroll') === 'true') {
          return;
        }
        
        // Only set it if it's NOT a same-page hash link
        const currentUrl = window.location.href.split('#')[0];
        const targetUrl = target.href.split('#')[0];
        // For HashRouter, the path is after the hash
        sessionStorage.setItem('forceScrollToTop', 'true');
      }
    };
    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  // Disable browser's native scroll restoration so we fully control it
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      <ScrollTracker />
      <AnimatePresence 
        mode="wait"
        onExitComplete={() => {
          // Only force scroll to top if this was an explicit link click (PUSH).
          // If it's a POP (back button) or a 'restore-scroll' link, do nothing and let ScrollRestorer restore the saved position.
          const forceTop = sessionStorage.getItem('forceScrollToTop') === 'true';
          if (forceTop) {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            
            setTimeout(() => {
              window.scrollTo(0, 0);
              document.documentElement.scrollTop = 0;
              document.body.scrollTop = 0;
            }, 10);
          }
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route element={<ScrollRestorer />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:slug" element={<CaseStudy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => {
  // Removed global smooth scroll to prevent route transition animation bugs

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <AppRoutes />
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

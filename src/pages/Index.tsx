
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ProjectsSection from "@/components/home/ProjectsSection";
import AboutPreview from "@/components/home/AboutPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  const { hash } = useLocation();

  useLayoutEffect(() => {
    const savedPos = sessionStorage.getItem('homeScrollPos');
    
    // Primary: Pixel-perfect strict scroll restoration
    if (savedPos) {
      const pos = parseInt(savedPos, 10);
      requestAnimationFrame(() => {
        window.scrollTo({ top: pos, behavior: 'auto' });
        // Safety net: Some SPA DOMs take a split second to calculate full maximum height
        setTimeout(() => window.scrollTo({ top: pos, behavior: 'auto' }), 50);
      });
      sessionStorage.removeItem('homeScrollPos');
      return;
    }

    // Fallback: Hash-based anchor targeting
    if (!hash) return;
    const el = document.getElementById(hash.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'auto', block: 'center' });
    }
  }, [hash]);

  return (
    <Layout>
      <Hero />
      <ProjectsSection />
      <AboutPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;

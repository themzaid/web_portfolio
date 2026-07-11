
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ProjectsSection from "@/components/home/ProjectsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  const { hash } = useLocation();

  useLayoutEffect(() => {


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
      <CTASection />
    </Layout>
  );
};

export default Index;

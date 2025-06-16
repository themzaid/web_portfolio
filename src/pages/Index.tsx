
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ProjectsSection from "@/components/home/ProjectsSection";
import AboutPreview from "@/components/home/AboutPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
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

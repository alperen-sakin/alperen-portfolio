import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import ProjectsSection from "@/components/projectsSection/ProjectsSection";
import SkillsSection from "@/components/skillsSection/SkillsSection";

const page = () => {
  return (
    <div className="relative">
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default page;

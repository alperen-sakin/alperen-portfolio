import Hero from "@/components/Hero/Hero";
import ProjectsSection from "@/components/projectsSection/ProjectsSection";
import SkillsSection from "@/components/skillsSection/SkillsSection";

const page = () => {
  return (
    <div className="relative">
      <Hero />
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
};

export default page;

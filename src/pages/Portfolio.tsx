
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import CallToActionSection from "@/components/sections/CallToActionSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import ArticlesSection from "@/components/sections/ArticlesSection";
import CodingProfilesSection from "@/components/sections/CodingProfilesSection";
import ParticlesBackground from "@/components/ParticlesBackground";

const sections = [
  { id: "hero", component: HeroSection, title: "Home" },
  { id: "cta", component: CallToActionSection, title: "Hire Me" },
  { id: "resume", component: ResumeSection, title: "Resume" },
  { id: "projects", component: ProjectsSection, title: "Projects" },
  { id: "skills", component: SkillsSection, title: "Skills" },
  { id: "contact", component: ContactSection, title: "Contact" },
  { id: "articles", component: ArticlesSection, title: "Open Source" },
  { id: "profiles", component: CodingProfilesSection, title: "Profiles" },
];

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const navigateToSection = useCallback((index: number) => {
    setCurrentSection(index);
  }, []);

  const CurrentComponent = sections[currentSection].component;

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <ParticlesBackground />
      
      {/* Animated gradient background */}
      <div className="fixed inset-0 gradient-blur -z-10" />
      
      <Navigation 
        sections={sections}
        currentSection={currentSection}
        onNavigate={navigateToSection}
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, scale: 0.8, rotateX: -10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          exit={{ opacity: 0, scale: 1.1, rotateX: 10 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.6, -0.05, 0.01, 0.99],
            opacity: { duration: 0.6 },
            scale: { duration: 0.8 },
            rotateX: { duration: 0.8 }
          }}
          className="relative z-10"
        >
          <CurrentComponent onNavigate={navigateToSection} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;

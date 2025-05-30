
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  sections: Array<{ id: string; title: string }>;
  currentSection: number;
  onNavigate: (index: number) => void;
}

const Navigation = ({ sections, currentSection, onNavigate }: NavigationProps) => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 p-6"
    >
      <div className="flex justify-center">
        <div className="backdrop-blur-md bg-black/30 rounded-full p-2 border border-white/10">
          <div className="flex space-x-2">
            {sections.map((section, index) => (
              <Button
                key={section.id}
                onClick={() => onNavigate(index)}
                variant={currentSection === index ? "default" : "ghost"}
                size="sm"
                className={`relative transition-all duration-300 ${
                  currentSection === index
                    ? "bg-purple-600 text-white glow-effect"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {section.title}
                {currentSection === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-purple-600 rounded-md -z-10"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

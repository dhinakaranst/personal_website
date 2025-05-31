import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface SkillsSectionProps {
  onNavigate: (index: number) => void;
}

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Java", level: 95, color: "#f89820" },
      { name: "JavaScript", level: 90, color: "#f7df1e" },
      { name: "Python", level: 80, color: "#3776ab" },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90, color: "#339933" },
      { name: "Express", level: 88, color: "#000000" },
      { name: "REST APIs", level: 92, color: "#ff6b35" },
      { name: "Async Programming", level: 85, color: "#4a90e2" },
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 95, color: "#e34f26" },
      { name: "CSS", level: 90, color: "#1572b6" },
      { name: "JavaScript", level: 90, color: "#f7df1e" },
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 88, color: "#47a248" },
      { name: "MySQL", level: 85, color: "#4479a1" },
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 95, color: "#f05032" },
      { name: "GitHub", level: 92, color: "#181717" },
      { name: "VS Code", level: 95, color: "#007acc" },
      { name: "Postman", level: 88, color: "#ff6c37" },
    ]
  }
];

// Animated skill bubble component with proper typing
const SkillBubble = ({ 
  color, 
  text, 
  positionClass,
  size = '60px'
}: { 
  color: string; 
  text: string; 
  positionClass: string;
  size?: string;
}) => (
  <motion.div
    className={`absolute rounded-full flex items-center justify-center ${positionClass}`}
    style={{ backgroundColor: color || "#61dafb", width: size, height: size }}
    animate={{
      y: [0, -10, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "reverse",
    }}
  >
    <span className="text-white font-bold text-xs">{text}</span>
  </motion.div>
);

const SkillsSection = ({ onNavigate }: SkillsSectionProps) => {
  // Check if device is mobile
  const isMobile = useIsMobile();
  
  // Ensure skills data is valid
  const validSkills = Array.isArray(skills) ? skills : [];
  
  return (
    <div className="min-h-screen py-12 md:py-20 px-4 md:px-6 relative">
      {/* Animated background with floating bubbles - hide some on mobile */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <SkillBubble 
          color="#f89820" 
          text="Java" 
          positionClass="top-[15%] left-[20%]"
          size={isMobile ? '40px' : '60px'} 
        />
        {!isMobile && <SkillBubble color="#f7df1e" text="JS" positionClass="top-[25%] right-[25%]" />}
        <SkillBubble 
          color="#339933" 
          text="Node" 
          positionClass="top-[40%] left-[15%]"
          size={isMobile ? '40px' : '60px'} 
        />
        {!isMobile && <SkillBubble color="#47a248" text="Mongo" positionClass="bottom-[30%] left-[25%]" />}
        <SkillBubble 
          color="#f05032" 
          text="Git" 
          positionClass="bottom-[20%] right-[20%]"
          size={isMobile ? '40px' : '60px'} 
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-glow">
            My Skills
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and 
            proficiency levels across various technologies and tools.
          </p>
        </motion.div>
        
        <div className="space-y-8 md:space-y-12">
          {validSkills.map((category, categoryIndex) => (
            <motion.div
              key={`category-${categoryIndex}-${category.category}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: categoryIndex * 0.3 
              }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-8 text-center">
                {category.category || "Unlisted Skills"}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {(category.skills || []).map((skill, skillIndex) => (
                  <motion.div
                    key={`skill-${categoryIndex}-${skillIndex}-${skill.name}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.3 + skillIndex * 0.1 
                    }}
                    className="space-y-2 md:space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold text-base md:text-lg">
                        {skill.name || "Unnamed Skill"}
                      </span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: categoryIndex * 0.3 + skillIndex * 0.1 + 0.5 }}
                        className="text-purple-400 font-bold text-sm md:text-base"
                      >
                        {typeof skill.level === 'number' ? `${skill.level}%` : 'N/A'}
                      </motion.span>
                    </div>
                    
                    <div className="relative h-2 md:h-3 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: typeof skill.level === 'number' ? `${Math.max(0, Math.min(100, skill.level))}%` : '0%' }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.3 + skillIndex * 0.1 + 0.5,
                          ease: "easeOut"
                        }}
                        className="h-full rounded-full relative"
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color || "#333"}, ${skill.color || "#333"}dd)` 
                        }}
                      >
                        <motion.div
                          animate={{ x: [-10, 10, -10] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                          }}
                          className="absolute inset-0 bg-white/30 rounded-full"
                          style={{ filter: "blur(5px)" }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-10 md:mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              Always Learning
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Completed 150+ days of LeetCode practice with Striver's DSA Sheet. 
              Actively contributing to open-source projects like Kestra and 
              continuously exploring new technologies to build better tools.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;

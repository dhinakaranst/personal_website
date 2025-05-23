
import { motion } from "framer-motion";

interface SkillsSectionProps {
  onNavigate: (index: number) => void;
}

const skills = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95, color: "#61dafb" },
      { name: "TypeScript", level: 90, color: "#3178c6" },
      { name: "Next.js", level: 88, color: "#000000" },
      { name: "Tailwind CSS", level: 92, color: "#06b6d4" },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90, color: "#339933" },
      { name: "Python", level: 85, color: "#3776ab" },
      { name: "PostgreSQL", level: 88, color: "#336791" },
      { name: "MongoDB", level: 82, color: "#47a248" },
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Docker", level: 80, color: "#2496ed" },
      { name: "AWS", level: 75, color: "#ff9900" },
      { name: "Git", level: 95, color: "#f05032" },
      { name: "Figma", level: 85, color: "#f24e1e" },
    ]
  }
];

// Animated skill bubble component
const SkillBubble = ({ color, text, positionClass }: { color: string; text: string; positionClass: string }) => (
  <motion.div
    className={`absolute rounded-full flex items-center justify-center ${positionClass}`}
    style={{ backgroundColor: color, width: '60px', height: '60px' }}
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
  return (
    <div className="min-h-screen py-20 px-6 relative">
      {/* Animated background with floating bubbles instead of 3D */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <SkillBubble color="#61dafb" text="React" positionClass="top-[15%] left-[20%]" />
        <SkillBubble color="#3178c6" text="TS" positionClass="top-[25%] right-[25%]" />
        <SkillBubble color="#339933" text="Node" positionClass="top-[40%] left-[15%]" />
        <SkillBubble color="#06b6d4" text="CSS" positionClass="bottom-[30%] left-[25%]" />
        <SkillBubble color="#f05032" text="Git" positionClass="bottom-[20%] right-[20%]" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
            My Skills
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and 
            proficiency levels across various technologies.
          </p>
        </motion.div>
        
        <div className="space-y-12">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: categoryIndex * 0.3 
              }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.3 + skillIndex * 0.1 
                    }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold text-lg">
                        {skill.name}
                      </span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: categoryIndex * 0.3 + skillIndex * 0.1 + 0.5 }}
                        className="text-purple-400 font-bold"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    
                    <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.3 + skillIndex * 0.1 + 0.5,
                          ease: "easeOut"
                        }}
                        className="h-full rounded-full relative"
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)` 
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Technology evolves rapidly, and I'm committed to staying at the 
              forefront. Currently exploring Web3, AI/ML integration, and 
              advanced cloud architectures.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;

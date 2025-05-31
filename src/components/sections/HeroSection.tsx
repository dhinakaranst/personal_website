import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import ProfilePhoto from "@/components/ProfilePhoto";

interface HeroSectionProps {
  onNavigate: (index: number) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15),transparent_70%)]"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 md:w-12 md:h-12 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.4 + 0.2,
              opacity: 0.1 + Math.random() * 0.2,
              backgroundColor: ['#9333ea', '#4f46e5', '#ec4899', '#f59e0b', '#10b981'][i % 5]
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Hero Content */}
      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <ProfilePhoto className="transform hover:scale-105 transition-transform duration-300" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 text-glow"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20, 
              delay: 0.8 
            }}
          >
            Dhinakaran
          </motion.h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-2xl md:text-4xl font-light mb-8 text-purple-300">
            Full Stack Developer & Open Source Contributor
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="space-y-6"
        >
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building tools that solve real-world problems with Java, JavaScript, and modern web technologies. 
            Passionate about open-source development, data structures, and helping developers through 
            self-hostable solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => onNavigate(1)}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg glow-effect"
              >
                Hire Me Now
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => onNavigate(3)}
                variant="outline"
                size="lg"
                className="border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white px-8 py-3 text-lg"
              >
                View Projects
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => onNavigate(1)}
        >
          <ArrowDown className="w-6 h-6 text-purple-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

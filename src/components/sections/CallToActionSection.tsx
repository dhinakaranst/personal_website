
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";

interface CallToActionSectionProps {
  onNavigate: (index: number) => void;
}

const CallToActionSection = ({ onNavigate }: CallToActionSectionProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="text-center z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="mx-auto w-24 h-24 mb-8 flex items-center justify-center"
          >
            <Sparkles className="w-16 h-16 text-yellow-400" />
          </motion.div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-glow"
        >
          Ready to Build Something
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {" "}Amazing?
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Let's turn your ideas into reality. I specialize in creating 
          high-performance web applications that drive results and delight users.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="space-y-8"
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 30px rgba(147, 51, 234, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Button
                onClick={() => onNavigate(5)}
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white px-12 py-4 text-xl font-semibold relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Hire Me Now
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => onNavigate(3)}
                variant="outline"
                size="lg"
                className="border-2 border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white px-12 py-4 text-xl backdrop-blur-sm"
              >
                View My Work
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-gray-400 text-sm"
          >
            <p>✨ Available for freelance projects</p>
            <p>🚀 Quick turnaround time</p>
            <p>💎 Premium quality guaranteed</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToActionSection;

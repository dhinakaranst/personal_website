
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, FileText, Eye, Trophy, Code, Users } from "lucide-react";

interface ResumeSectionProps {
  onNavigate: (index: number) => void;
}

const ResumeSection = ({ onNavigate }: ResumeSectionProps) => {
  const handleDownload = () => {
    // Replace with your actual resume URL
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Developer_Resume.pdf";
    link.click();
  };

  const handlePreview = () => {
    // Replace with your actual resume URL
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="text-center z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              rotateY: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotateY: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="mx-auto w-32 h-32 mb-8 flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl glow-effect"
          >
            <FileText className="w-16 h-16 text-white" />
          </motion.div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-glow"
        >
          My Resume
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Download my complete professional profile showcasing full-stack development expertise, 
          open-source contributions, and problem-solving achievements.
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
                rotate: [0, -1, 1, 0],
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleDownload}
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-4 text-xl font-semibold group relative overflow-hidden"
              >
                <span className="flex items-center gap-3 relative z-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Download className="w-6 h-6" />
                  </motion.div>
                  Download PDF
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handlePreview}
                variant="outline"
                size="lg"
                className="border-2 border-blue-500 text-blue-300 hover:bg-blue-600 hover:text-white px-10 py-4 text-xl"
              >
                <Eye className="w-6 h-6 mr-2" />
                Preview Online
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { label: "LeetCode Days", value: "100+ Days", icon: <Code className="w-8 h-8" />, color: "from-orange-500 to-red-500" },
              { label: "Projects Built", value: "15+ Completed", icon: <Trophy className="w-8 h-8" />, color: "from-blue-500 to-purple-500" },
              { label: "Open Source", value: "Active Contributor", icon: <Users className="w-8 h-8" />, color: "from-green-500 to-teal-500" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center group hover:scale-105 transition-transform"
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">🎯 Current Goals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <p className="text-purple-300 font-semibold">• Launch changelog tool</p>
                <p className="text-gray-300 text-sm">Open-source-first with free and premium tiers</p>
              </div>
              <div className="space-y-2">
                <p className="text-purple-300 font-semibold">• Community mentoring</p>
                <p className="text-gray-300 text-sm">Help early-year engineering students</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumeSection;

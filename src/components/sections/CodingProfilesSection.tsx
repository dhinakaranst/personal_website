
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Trophy, Target } from "lucide-react";

interface CodingProfilesSectionProps {
  onNavigate: (index: number) => void;
}

const profiles = [
  {
    platform: "GitHub",
    username: "@dhinakaranst",
    description: "Open source contributions and personal projects",
    stats: { repos: "15+"},
    url: "https://github.com/dhinakaranst",
    color: "#333",
    icon: Github,
    achievements: ["Arctic Code Vault Contributor", "Pro User"]
  },
  {
    platform: "LeetCode",
    username: "Dhinakaran_Thillainathan",
    description: "Competitive programming and algorithm challenges",
    stats: { solved: "150+" },
    url: "https://leetcode.com/u/DHINAKARAN_Thillainathan/",
    color: "#ffa116",
    icon: Code,
    achievements: ["Knight Badge", "Contest Specialist"]
  },
  
  ,
];

const CodingProfilesSection = ({ onNavigate }: CodingProfilesSectionProps) => {
  return (
    <div className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
            Coding Profiles
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Explore my coding journey across various platforms, from open source 
            contributions to competitive programming achievements.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group"
            >
              <div className="p-8 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: profile.color + "20", border: `2px solid ${profile.color}` }}
                    >
                      <profile.icon className="w-8 h-8" style={{ color: profile.color }} />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {profile.platform}
                      </h3>
                      <p className="text-gray-400">{profile.username}</p>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      onClick={() => window.open(profile.url, "_blank")}
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {profile.description}
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(profile.stats).map(([key, value], statIndex) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + statIndex * 0.1 + 0.5 }}
                      className="text-center p-3 bg-white/5 rounded-xl"
                    >
                      <div className="text-xl font-bold text-white mb-1">
                        {value}
                      </div>
                      <div className="text-gray-400 text-sm capitalize">
                        {key}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Achievements</h4>
                  <div className="flex flex-wrap gap-2">
                    {profile.achievements.map((achievement, achievementIndex) => (
                      <motion.span
                        key={achievement}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + achievementIndex * 0.1 + 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
                      >
                        {achievement}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Action Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => window.open(profile.url, "_blank")}
                    className="w-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 text-white border border-white/10 relative overflow-hidden group"
                  >
                    <span className="flex items-center justify-center gap-2 relative z-10">
                      Visit {profile.platform}
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Collaborate
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Interested in working together on coding challenges, open source projects, 
              or just want to connect? I'm always open to new opportunities and collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate(5)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                Get In Touch
              </Button>
              <Button
                onClick={() => onNavigate(3)}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                View My Projects
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CodingProfilesSection;

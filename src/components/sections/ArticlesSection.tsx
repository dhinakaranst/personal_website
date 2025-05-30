
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, GitPullRequest, Star } from "lucide-react";

interface ArticlesSectionProps {
  onNavigate: (index: number) => void;
}

const contributions = [
  {
    title: "Kestra - Data Orchestration Platform",
    description: "Actively contributing to Kestra, a modern open-source data orchestration tool. Developed and extended plugin functionality including RunRule plugin.",
    technologies: ["Java", "Plugin Development", "CLI Integration", "Workflow Debugging"],
    githubUrl: "https://github.com/kestra-io/kestra",
    website: "https://kestra.io",
    contribution: "Plugin Development",
    status: "Active Contributor",
    impact: "Enhanced plugin architecture and CLI integration",
    color: "#4f46e5"
  },
  {
    title: "LeetCode Solutions",
    description: "Completed 100+ days of consistent practice following Striver's DSA Sheet. Solutions cover arrays, recursion, two pointers, sorting, strings, and hashing.",
    technologies: ["Java", "Data Structures", "Algorithms", "Problem Solving"],
    githubUrl: "https://github.com",
    website: "https://leetcode.com",
    contribution: "100 Days Badge",
    status: "Consistent Contributor",
    impact: "Mastered core DSA concepts and problem-solving patterns",
    color: "#10b981"
  }
];

const ArticlesSection = ({ onNavigate }: ArticlesSectionProps) => {
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
            Open Source
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Contributing to the developer community through open-source projects and consistent problem-solving practice.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {contributions.map((contribution, index) => (
            <motion.div
              key={contribution.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: contribution.color }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Github className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <span className="px-3 py-1 bg-green-600/30 text-green-300 rounded-full text-sm font-medium">
                        {contribution.status}
                      </span>
                    </div>
                  </div>
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {contribution.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {contribution.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <GitPullRequest className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-purple-300 font-medium">Contribution: {contribution.contribution}</span>
                  </div>
                  <p className="text-sm text-gray-400">{contribution.impact}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {contribution.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => window.open(contribution.githubUrl, "_blank")}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex-1"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => window.open(contribution.website, "_blank")}
                      variant="outline"
                      className="border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Achievement Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
            <div className="text-gray-300">Days of LeetCode</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">Active</div>
            <div className="text-gray-300">OSS Contributor</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">Real</div>
            <div className="text-gray-300">Impact Projects</div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Collaborate on Open Source
            </h3>
            <p className="text-gray-300 mb-6">
              Interested in contributing together or need help with your open-source project? Let's connect and build something amazing.
            </p>
            <Button
              onClick={() => onNavigate(5)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArticlesSection;

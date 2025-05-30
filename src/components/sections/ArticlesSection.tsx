import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, GitPullRequest, Star, GitMerge } from "lucide-react";

interface ArticlesSectionProps {
  onNavigate: (index: number) => void;
}

const contributions = [
  {
    title: "Open Nest Africa",
    description: "Contributed to the Open Nest Africa community platform, helping to build tools and resources for African developers and tech enthusiasts.",
    technologies: ["Open Source", "Community Building", "Development"],
    githubUrl: "https://github.com/open-nest-africa/open-nest-africa/pull/88",
    website: "https://github.com/open-nest-africa/open-nest-africa",
    contribution: "Pull Request #88",
    status: "Merged & Closed",
    impact: "Enhanced community platform functionality",
    color: "#10b981"
  },
  {
    title: "Spiderly Website",
    description: "Contributed to the Spiderly website project, improving user experience and functionality for the web scraping tool platform.",
    technologies: ["Web Development", "UI/UX", "Frontend"],
    githubUrl: "https://github.com/filiptrivan/spiderly-website/pull/6",
    website: "https://github.com/filiptrivan/spiderly-website",
    contribution: "Pull Request #6",
    status: "Merged & Closed",
    impact: "Improved website functionality and user experience",
    color: "#4f46e5"
  },
  {
    title: "Kestra - Backfill Button",
    description: "Actively contributing to Kestra, a modern open-source data orchestration tool. Developed backfill button functionality to enhance workflow management.",
    technologies: ["Java", "Plugin Development", "Workflow Management", "Data Orchestration"],
    githubUrl: "https://github.com/kestra-io/kestra/pull/8624",
    website: "https://kestra.io",
    contribution: "Pull Request #8624",
    status: "Active Development",
    impact: "Enhanced workflow backfill capabilities",
    color: "#f89820"
  },
  {
    title: "Spiderly Website (Additional)",
    description: "Follow-up contribution to the Spiderly website project, continuing improvements and feature enhancements for the platform.",
    technologies: ["Web Development", "Feature Enhancement", "Collaboration"],
    githubUrl: "https://github.com/filiptrivan/spiderly-website/pull/9",
    website: "https://github.com/filiptrivan/spiderly-website",
    contribution: "Pull Request #9",
    status: "In Review",
    impact: "Continued platform improvements and enhancements",
    color: "#ec4899"
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
            Contributing to the developer community through meaningful open-source projects and collaborative development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {contributions.map((contribution, index) => (
            <motion.div
              key={contribution.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
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
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        contribution.status.includes('Merged') 
                          ? 'bg-green-600/30 text-green-300' 
                          : contribution.status.includes('Active')
                          ? 'bg-blue-600/30 text-blue-300'
                          : 'bg-orange-600/30 text-orange-300'
                      }`}>
                        {contribution.status}
                      </span>
                    </div>
                  </div>
                  {contribution.status.includes('Merged') ? (
                    <GitMerge className="w-5 h-5 text-green-400" />
                  ) : (
                    <Star className="w-5 h-5 text-yellow-400" />
                  )}
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
                    <span className="text-sm text-purple-300 font-medium">{contribution.contribution}</span>
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
                      View PR
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
                      Repository
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
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">9</div>
            <div className="text-gray-300">Merged PRs</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">9</div>
            <div className="text-gray-300">Total PRs</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">3</div>
            <div className="text-gray-300">Projects</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">Active</div>
            <div className="text-gray-300">Contributor</div>
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
              Passionate about contributing to meaningful projects. Looking to collaborate on tools that solve real-world problems for developers and communities.
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

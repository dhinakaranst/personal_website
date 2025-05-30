
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectsSectionProps {
  onNavigate: (index: number) => void;
}

const projects = [
  {
    title: "CommitMetrics",
    description: "A self-hostable Git analytics dashboard built with the MERN stack. Displays commit frequency, repository trends, and code stats for developers and teams.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: "/placeholder.svg",
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    color: "#10b981"
  },
  {
    title: "Notes Making App",
    description: "A lightweight note-taking app built for fast and efficient personal use with simple UI/UX and full CRUD operations support.",
    technologies: ["JavaScript", "HTML", "CSS", "Local Storage"],
    image: "/placeholder.svg",
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    color: "#4f46e5"
  },
  {
    title: "Health Monitoring System",
    description: "Java Swing desktop application that tracks health parameters and visualizes data using charts. Stores records in MySQL database.",
    technologies: ["Java", "Swing", "MySQL", "Charts"],
    image: "/placeholder.svg",
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    color: "#f89820"
  },
  {
    title: "AI-Powered Shorts Series",
    description: "Educational content series of 50 short videos on data structures using AI-generated visuals and voice for social media platforms.",
    technologies: ["AI Tools", "Video Editing", "Educational Content"],
    image: "/placeholder.svg",
    liveUrl: "https://youtube.com",
    githubUrl: "https://github.com",
    color: "#ec4899"
  },
];

const ProjectsSection = ({ onNavigate }: ProjectsSectionProps) => {
  return (
    <div className="min-h-screen py-20 px-6 relative">
      {/* Background gradient effect */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-purple-600/30 via-blue-600/30 to-pink-600/30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
            My Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my work including self-hostable tools, open-source contributions, 
            and educational content built with modern technologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
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
              <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                <motion.div
                  className="w-24 h-24 rounded-xl"
                  style={{ backgroundColor: project.color }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/30"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/30"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </motion.div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              🌍 Open Source Contributions
            </h3>
            <p className="text-gray-300 mb-4">
              Actively contributing to Kestra, a modern open-source data orchestration tool. 
              Developed and extended plugin functionality including RunRule plugin.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 bg-green-600/30 text-green-300 rounded-full text-sm">Plugin Development</span>
              <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm">CLI Integration</span>
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm">Workflow Debugging</span>
            </div>
          </div>
          
          <Button
            onClick={() => onNavigate(5)}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg"
          >
            Let's Work Together
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;

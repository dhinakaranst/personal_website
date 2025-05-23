
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectsSectionProps {
  onNavigate: (index: number) => void;
}

const ProjectCard3D = ({ position, color }: any) => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position}>
        <boxGeometry args={[1.5, 1, 0.1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  );
};

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/placeholder.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "#9333ea"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
    image: "/placeholder.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "#4f46e5"
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather app with data visualization",
    technologies: ["React", "D3.js", "Weather API", "Tailwind"],
    image: "/placeholder.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "#ec4899"
  },
  {
    title: "Portfolio Website",
    description: "Interactive portfolio with 3D animations",
    technologies: ["React", "Three.js", "Framer Motion", "TypeScript"],
    image: "/placeholder.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "#f59e0b"
  },
];

const ProjectsSection = ({ onNavigate }: ProjectsSectionProps) => {
  return (
    <div className="min-h-screen py-20 px-6 relative">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-10">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <ProjectCard3D position={[-3, 2, 0]} color="#9333ea" />
          <ProjectCard3D position={[3, 1, 0]} color="#4f46e5" />
          <ProjectCard3D position={[0, 3, 0]} color="#ec4899" />
          <ProjectCard3D position={[-2, -1, 0]} color="#f59e0b" />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
      
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
            A showcase of my latest work, featuring modern web applications 
            built with cutting-edge technologies.
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

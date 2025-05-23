
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text3D, Center } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  onNavigate: (index: number) => void;
}

const FloatingIcon = ({ position, color, children }: any) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} color="#9333ea" />
      
      <FloatingIcon position={[-3, 2, 0]} color="#9333ea" />
      <FloatingIcon position={[3, 1, 0]} color="#4f46e5" />
      <FloatingIcon position={[0, 3, 0]} color="#ec4899" />
      <FloatingIcon position={[-2, -1, 0]} color="#f59e0b" />
      <FloatingIcon position={[2, -2, 0]} color="#10b981" />
      
      <Center>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          PORTFOLIO
          <meshStandardMaterial color="#9333ea" />
        </Text3D>
      </Center>
      
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
};

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <Scene3D />
        </Canvas>
      </div>
      
      {/* Hero Content */}
      <div className="text-center z-10 max-w-4xl mx-auto">
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
            John Doe
          </motion.h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-2xl md:text-4xl font-light mb-8 text-purple-300">
            Full Stack Developer & UI/UX Designer
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="space-y-6"
        >
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with modern technologies. 
            Specialized in React, Node.js, and cloud architecture. 
            Passionate about creating beautiful, functional applications.
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

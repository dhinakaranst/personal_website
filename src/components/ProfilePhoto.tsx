import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProfilePhotoProps {
  className?: string;
  imagePath?: string;
  alt?: string;
}

const ProfilePhoto = ({ 
  className,
  imagePath = "/profile-photo.jpg",
  alt = "Dhinakaran Thillainathan"
}: ProfilePhotoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden",
        "border-2 border-white/10 backdrop-blur-sm",
        "shadow-[0_0_15px_rgba(255,255,255,0.1)]",
        "hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]",
        "transition-all duration-300",
        className
      )}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 z-10" />
      
      {/* Photo container */}
      <div className="relative w-full h-full">
        <img
          src={imagePath}
          alt={alt}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
      </div>

      {/* Animated border effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};

export default ProfilePhoto; 
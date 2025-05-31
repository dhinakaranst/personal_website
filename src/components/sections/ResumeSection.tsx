import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, FileText, Eye, Trophy, Code, Users } from "lucide-react";

interface ResumeSectionProps {
  onNavigate: (index: number) => void;
}

const ResumeSection = ({ onNavigate }: ResumeSectionProps) => {
  const handleDownload = () => {
    try {
      const resumeUrl = "/resume.pdf";
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Dhinakaran_Resume.pdf";
      link.click();
    } catch (error) {
      console.error("Error downloading resume:", error);
      alert("Failed to download resume. Please try again.");
    }
  };

  const handlePreview = () => {
    window.open("/resume.pdf", "_blank");
  };

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
            Resume
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Download my resume to learn more about my experience, skills, and achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Resume</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Download my detailed resume to learn more about my professional experience,
              technical skills, and achievements in software development.
            </p>
            <div className="flex gap-4">
              <Button
                onClick={handleDownload}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button
                onClick={handlePreview}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Key Highlights</h2>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <Code className="w-5 h-5 text-purple-400 mt-1" />
                <span>Full Stack Development with React, Node.js, and Java</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-400 mt-1" />
                <span>Open Source Contributions and Community Engagement</span>
              </li>
              <li className="flex items-start gap-3">
                <Trophy className="w-5 h-5 text-pink-400 mt-1" />
                <span>Competitive Programming and Algorithm Expertise</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;

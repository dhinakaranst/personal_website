import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface ArticlesSectionProps {
  onNavigate: (index: number) => void;
}

// Reduced list of articles - keeping only one featured article
const articles = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for creating maintainable and scalable React applications using modern patterns and tools.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    url: "https://example.com/article-1",
    image: "/placeholder.svg",
    featured: true
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
            Featured Article
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Insights and thoughts on modern web development and best practices.
          </p>
        </motion.div>
        
        <div className="space-y-8">
          {/* Featured Article */}
          {articles
            .filter(article => article.featured)
            .map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">
                        {article.category}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={() => window.open(article.url, "_blank")}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white group"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </div>
                  
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl flex items-center justify-center"
                    >
                      <div className="text-6xl">{article.category === "React" ? "⚛️" : "📝"}</div>
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to Stay Updated?
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to my newsletter for the latest articles and insights on web development.
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

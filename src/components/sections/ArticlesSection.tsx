
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface ArticlesSectionProps {
  onNavigate: (index: number) => void;
}

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
  },
  {
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies that will shape the future of web development in 2024 and beyond.",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Technology",
    url: "https://example.com/article-2",
    image: "/placeholder.svg",
    featured: false
  },
  {
    title: "Mastering TypeScript in 2024",
    excerpt: "A comprehensive guide to advanced TypeScript features and how they can improve your development workflow.",
    date: "2024-01-05",
    readTime: "15 min read",
    category: "TypeScript",
    url: "https://example.com/article-3",
    image: "/placeholder.svg",
    featured: false
  },
  {
    title: "CSS Grid vs Flexbox: When to Use What",
    excerpt: "Understanding the differences between CSS Grid and Flexbox and when to use each layout method effectively.",
    date: "2023-12-28",
    readTime: "6 min read",
    category: "CSS",
    url: "https://example.com/article-4",
    image: "/placeholder.svg",
    featured: false
  },
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
            Featured Articles
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on modern web development, 
            technology trends, and best practices.
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
          
          {/* Regular Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles
              .filter(article => !article.featured)
              .map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 50, rotateX: -10 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.6 + index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    z: 50,
                  }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group cursor-pointer"
                  onClick={() => window.open(article.url, "_blank")}
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      className="text-4xl"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      {article.category === "TypeScript" ? "📘" : 
                       article.category === "CSS" ? "🎨" : 
                       article.category === "Technology" ? "🚀" : "📝"}
                    </motion.div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ArrowRight className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-sm">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
          </div>
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

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe, Code } from "lucide-react";

interface ArticlesSectionProps {
  onNavigate: (index: number) => void;
}

const articles = [
  {
    title: "Kestra Workflow Engine",
    description: "Enhanced workflow backfill capabilities with improved error handling and performance optimizations",
    githubUrl: "https://github.com/kestra-io/kestra/pull/8624",
    website: "https://kestra.io",
    contribution: "Pull Request #8624",
    status: "Merged & Closed",
    impact: "Enhanced workflow backfill capabilities",
    color: "#4f46e5"
  },
  {
    title: "Open Source Contributions",
    description: "Active contributions to various open source projects, focusing on developer tools and utilities",
    githubUrl: "https://github.com/dhinakaranst",
    website: "https://github.com/dhinakaranst",
    contribution: "Multiple PRs",
    status: "Active Development",
    impact: "Improved developer experience and tooling",
    color: "#f89820"
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
            My contributions to open source projects and community-driven development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group"
            >
              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400">{article.contribution}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => window.open(article.githubUrl, "_blank")}
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => window.open(article.website, "_blank")}
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <Globe className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {article.description}
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: `${article.color}20`,
                      color: article.color,
                      border: `1px solid ${article.color}40`
                    }}
                  >
                    {article.status}
                  </div>
                  <div className="text-gray-400 text-sm">
                    Impact: {article.impact}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;

import { memo, useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog-posts";
import { Calendar, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/utils/constants";

// Intersection Observer hook for lazy loading
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setIsIntersecting(true);
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [hasIntersected, options]);

  return [ref, isIntersecting] as const;
};

// Lazy loaded blog post card component
const LazyBlogPostCard = memo(function LazyBlogPostCard({
  post,
  delay = 0,
}: {
  post: (typeof blogPosts)[0];
  delay?: number;
}) {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <div ref={ref}>
      {isIntersecting ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay * 0.1 }}
        >
          <Link to={`/${ROUTES.COMPUTERSCIENCE_BLOG}/${post.id}`}>
            <Card className="p-6 bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-300 cursor-pointer group">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-zinc-400 text-base leading-relaxed mb-4">
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-zinc-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.publishDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </Link>
        </motion.div>
      ) : (
        <div className="opacity-0 h-48" /> // Placeholder to maintain layout
      )}
    </div>
  );
});

export const BlogPostsList = memo(function BlogPostsList() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-zinc-100 mb-4">
          Technical Blog Posts
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Deep dives into software engineering, security architecture, and
          technical leadership insights.
        </p>
      </div>

      <div className="grid gap-6">
        {blogPosts.map((post, index) => (
          <LazyBlogPostCard key={post.id} post={post} delay={index} />
        ))}
      </div>

      {blogPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-zinc-500 text-lg">
            No blog posts yet. Check back soon for technical insights and
            tutorials!
          </p>
        </div>
      )}
    </div>
  );
});

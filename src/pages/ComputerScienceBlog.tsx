import { SectionHeader } from "@/components/computer-science";
import { BlogPostsList } from "@/components/computer-science/BlogPostsList";
import { ComputerScienceNav } from "@/components/computer-science/ComputerScienceNav";

export function ComputerScienceBlog() {
  return (
    <div className="relative pt-20 pb-24 max-w-6xl mx-auto px-4 overflow-x-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/50 rounded-full filter blur-3xl opacity-20 animate-blob pointer-events-none"></div>
      <div className="absolute top-48 right-1/4 w-96 h-96 bg-purple-900/50 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000 pointer-events-none"></div>

      <SectionHeader
        title="Software Engineering"
        description="A showcase of my journey in full-stack development, technical leadership, and building scalable SaaS platforms. I specialize in modern web technologies with a focus on user experience, performance, and maintainable code."
      />

      <ComputerScienceNav />

      <BlogPostsList />
    </div>
  );
}

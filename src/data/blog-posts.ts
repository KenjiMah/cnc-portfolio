import { SecurityArchitectureBlog } from "../projectDetailedPages/SecurityArchitectureBlog";

export interface BlogPostEntry {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  publishDate: string;
  readTime: string;
  lastUpdatedUnix: number;
}

export const blogPosts: BlogPostEntry[] = [
  {
    id: "securityArchitecture",
    title:
      "Building Security Into My Web App: Applying the OWASP Top 10 (2025) to Critical Synthesis Security",
    summary:
      "A deep dive into implementing security-first architecture for Critical Synthesis Security platform, covering OWASP Top 10 mitigations, per-route CORS policies, hardened CSP, and comprehensive security tooling.",
    tags: ["appsec", "owasp", "supabase", "vercel", "stripe", "security"],
    publishDate: "January 2025",
    readTime: "12 min read",
    lastUpdatedUnix: Math.floor(Date.now() / 1000),
  },
];

export const BLOG_POST_MAPPER: Record<
  string,
  React.ComponentType<{ lastUpdatedUnix: number }>
> = {
  securityArchitecture: SecurityArchitectureBlog,
};


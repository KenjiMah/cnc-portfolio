import { useParams } from "react-router-dom";
import { BLOG_POST_MAPPER } from "@/data/blog-posts";
import { NotFound } from "./NotFound";

export function BlogPostDetail() {
  const { blogId } = useParams<{ blogId: string }>();

  if (!blogId || !BLOG_POST_MAPPER[blogId]) {
    return <NotFound />;
  }

  const BlogComponent = BLOG_POST_MAPPER[blogId];

  return <BlogComponent lastUpdatedUnix={Math.floor(Date.now() / 1000)} />;
}


import Link from "next/link";
import { supabase } from "@/app/_lib/supabase";

async function BlogPostCard() {
  const { data: blogPosts, error } = await supabase
    .from("blog_posts")
    .select("id, title");
  if (error) {
    console.error("Error fetching blog posts:", error.message);
    return <div>Error loading blog posts</div>;
  }
  console.log(blogPosts);
  return (
    <div>
      {blogPosts.map((blogPost) => (
        <div key={blogPost.id}>
          <h2>test</h2>
          <h3>{blogPost.title}</h3>
          <Link href={`/blog/${blogPost.id}`}>OPEN blog</Link>
        </div>
      ))}
    </div>
  );
}

export default BlogPostCard;

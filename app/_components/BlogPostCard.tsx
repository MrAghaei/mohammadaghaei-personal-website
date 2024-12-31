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
    <div className="flex flex-col gap-5 items-center mt-20 ">
      {blogPosts.map((blogPost) => (
        <div
          dir="rtl"
          className="flex flex-col gap-5 bg-gray-100 rounded-2xl size-1/3 p-5 dark:bg-black"
          key={blogPost.id}
        >
          <h3 className="text-2xl">{blogPost.title}</h3>
          <Link
            className="text-xl bg-blue-950 w-fit px-5 py-2 rounded-2xl text-white"
            href={`/blog/${blogPost.id}`}
          >
            خواندن...
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogPostCard;

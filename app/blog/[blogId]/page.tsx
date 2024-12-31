import { supabase } from "@/app/_lib/supabase";
import Interceptors from "undici-types/interceptors";
import retry = Interceptors.retry;

interface BlogPostPage {
  id: string;
  title: string;
  content: string;
}
async function Page({ params }: { params: { blogId: string } }) {
  const blogId = params.blogId;

  const { data, error } = await supabase
    .from<BlogPostPage>("blog_posts")
    .select("id, title, content")
    .eq("id", blogId)
    .single();
  if (error) {
    console.error("Error fetching blog post:", error.message);
    return <div>Error loading blog post</div>;
  }
  if (!data) {
    return <div>Blog post not found</div>;
  }
  return (
    <div>
      <h1>{data.title}</h1>
      <div>{data.content}</div>
    </div>
  );
}

export default Page;

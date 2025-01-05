// import Link from "next/link";
// import { supabase } from "@/app/(lib)/supabase";
//
// async function BlogPostCard() {
//   const { data: blogPosts, error } = await supabase
//     .from("blog_posts")
//     .select("id, title");
//   if (error) {
//     console.error("Error fetching blog posts:", error.message);
//     return <div>Error loading blog posts</div>;
//   }
//   console.log(blogPosts);
//   return (
//     <div className="flex flex-col gap-5 items-center mt-20 px-10 sm:px-20 xl:px-60">
//       {blogPosts.map((blogPost) => (
//         <div
//           dir="rtl"
//           className="flex flex-col gap-5 bg-gray-100 rounded-2xl size-full xl:size-1/2 p-5 dark:bg-black"
//           key={blogPost.id}
//         >
//           <h3 className="text-2xl">{blogPost.title}</h3>
//           <Link
//             className="text-xl bg-blue-950 w-fit px-5 py-2 rounded-2xl text-white"
//             href={`/blog/${blogPost.id}`}
//           >
//             خواندن...
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }
//
// export default BlogPostCard;
import Link from "next/link";
import { PostData } from "@/app/blog/page";
interface BlogPostCardProps {
  post: PostData;
}
function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <div
      dir="rtl"
      className="flex flex-col gap-5 bg-white shadow-md rounded-lg p-4 mb-4 dark:bg-gray-800"
    >
      <h2 className="text-xl font-bold dark:text-white">{post.title}</h2>
      <div
        className="text-gray-700 dark:text-gray-300"
        dangerouslySetInnerHTML={{ __html: post.content.slice(0, 200) + "..." }}
      >
        {/*{post.content.slice(0, 100)}... /!* Truncate content for preview *!/*/}
      </div>
      <Link
        className="text-xl bg-blue-950 w-fit px-5 py-2 rounded-2xl text-white"
        href={`/blog/${post.id}`}
      >
        Read
      </Link>
    </div>
  );
}

export default BlogPostCard;

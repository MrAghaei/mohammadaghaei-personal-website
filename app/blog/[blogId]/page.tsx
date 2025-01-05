import { supabase } from "@/app/(lib)/supabase";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";

interface ParamsInputView {
  blogId: string;
}
export type ParamsInputPromise = { params: Promise<ParamsInputView> };

async function Page({ params }: ParamsInputPromise) {
  const { blogId } = await params;

  console.log({ blogId });
  const { data, error } = await supabase
    .from("blog_posts")
    .select("id, title, content")
    .eq("id", blogId)
    .single();

  if (error) {
    console.error("Error fetching blog post:", error.message);
    return (
      <div className="text-center text-red-500">Error loading blog post</div>
    );
  }

  if (!data) {
    return <div className="text-center text-red-500">Blog post not found</div>;
  }

  return (
    <div
      dir="rtl"
      className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg dark:bg-darkModeBlack dark:text-white"
    >
      <div className="flex justify-end">
        <Link
          className="dark:hover:bg-gray-800 mb-5 flex items-center justify-center w-60 h-10 gap-2 hover:bg-gray-200 rounded px-3 duration-300"
          href="/blog"
        >
          <p>Back to portfolio</p>
          <FaLongArrowAltLeft />
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
        {data.title}
      </h1>
      <div
        className="text-lg text-gray-700 leading-relaxed dark:text-white"
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
    </div>
  );
}

export default Page;

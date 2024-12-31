import { supabase } from "@/app/_lib/supabase";

interface ParamsInputView {
  blogId: string;
}
export type ParamsInputPromise = { params: Promise<ParamsInputView> };

async function Page({ params }: ParamsInputPromise) {
  const { blogId } = await params;

  console.log({ blogId });
  const { data, error } = await supabase
    .from("blog_posts") // No need to pass the row type here
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
      className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{data.title}</h1>
      <div className="text-lg text-gray-700 leading-relaxed">
        {data.content}
      </div>
    </div>
  );
}

export default Page;

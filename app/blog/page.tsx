"use client";
import BlogHeader from "@/app/(components)/BlogHeader";
import BlogPostCard from "@/app/(components)/BlogPostCard";
import { useEffect, useState } from "react";
import { supabase } from "@/app/(lib)/supabase";
export interface PostData {
  id: string;
  title: string;
  content: string;
  created_at: string;
}

function Page() {
  const [blogPosts, setBlogPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 4;

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true);
      const offset = (currentPage - 1) * postPerPage;

      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, content, created_at")
        .order("created_at")
        .range(offset, offset + postPerPage - 1);

      if (error) {
        console.error("Error fetching blog post:", error.message);
      } else {
        setBlogPosts(data || []);
      }
      setLoading(false);
    };
    fetchBlogPosts();
  }, [currentPage]);

  const handleNextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const handlePreviousPage = () =>
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));

  return (
    <div className="dark:bg-darkModeBlack dark:text-white bg-white h-screen mx-auto">
      <BlogHeader />
      <div className="max-w-4xl mx-auto p-6">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <>
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 bg-gray-500 text-white rounded ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Page;

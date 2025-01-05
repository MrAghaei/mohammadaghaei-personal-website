"use client";
import BlogEditor from "@/app/(components)/BlogEditor";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/(lib)/supabase";

function Page() {
  const router = useRouter();
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };
  return (
    <div className="px-60 py-20">
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
      <BlogEditor />
    </div>
  );
}

export default Page;

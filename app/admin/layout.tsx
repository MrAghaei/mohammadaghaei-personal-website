// app/admin/layout.tsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/(lib)/supabase";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin/login");
      }
    };

    checkAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        router.push("/admin/login");
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  return <div>{children}</div>;
}

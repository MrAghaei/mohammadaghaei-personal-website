"use client";
import { useState } from "react";
import { supabase } from "../../(lib)/supabase";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      console.log(data);
      if (error) throw error;
      router.push("/admin");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-8">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full mb-4 p-2 border"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full mb-4 p-2 border"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white">
        Login
      </button>
    </form>
  );
}

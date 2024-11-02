"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import Layouts from "../_layouts/layout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/dashboard");
    } else {
      alert("Login failed");
    }
  };

  return (
    <Layouts>
      <main>
        <div className="flex justify-center items-center h-screen">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            />
            <button className="w-full bg-black text-white py-2 rounded">
              Sign In
            </button>
            <p className="mt-4 text-center">
              <a href="/forgot-password" className="text-sm text-blue-500">
                Forgot your password?
              </a>
            </p>
          </form>
        </div>
      </main>
    </Layouts>
  );
};

export default Login;

"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Spiner from "../_components/spiner";
import Layouts from "../_layouts/layout";

const Login: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!isClient) return;

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        router.push("/home");
      } else {
        alert(data.message || "Email or password error");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAccountClick = () => {
    router.push("/register");
  };

  return (
    <Layouts>
      <main className="flex items-center justify-center min-h-screen ">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-2 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Email"
              />
            </div>
            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {loading ? (
              <div className="flex justify-center py-3">
                <Spiner />
              </div>
            ) : (
              <button
                type="button"
                className="w-full bg-black text-white py-3 rounded-md mb-2 hover:bg-opacity-90"
                onClick={handleLogin}
                disabled={!isClient}
              >
                Sign In
              </button>
            )}
            <button
              type="button"
              className="w-full border border-black text-black py-3 rounded-md hover:bg-black hover:text-white transition-all duration-300"
              onClick={handleCreateAccountClick}
            >
              Create Account
            </button>
          </form>
        </div>
      </main>
    </Layouts>
  );
};

export default Login;

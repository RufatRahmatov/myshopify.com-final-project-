"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Spiner from "../_components/spiner";

const SignIn: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSignIn = async () => {
    if (!email || !password) {
      alert("Email and password are required!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.user?.isAdmin) {
          router.push("/dashboard");
        } else {
          router.push("/home");
        }
      } else {
        alert(data.message || "Invalid email or password!");
      }
    } catch (error) {
      console.error("Sign In error:", error);
      alert("Failed to connect to the server!");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAccountClick = () => {
    router.push("/signup");
  };

  const handleForgotPasswordClick = () => {
    router.push("/resetpassword");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://s.tmimgcdn.com/scr/1200x750/297400/koyu-siyah-arka-plan-dokusu_297412-original.jpg')",
      }}
    >
      <div className="bg-white p-8 rounded-lg w-full max-w-lg shadow-md">
        <h2 className="text-4xl font-bold mb-4 text-center">Sign In</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn();
          }}
        >
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <div className="mb-4 text-right">
            <button
              type="button"
              onClick={handleForgotPasswordClick}
              className="text-[16px] text-black border-b-2 border-black hover:border-b-3 font-medium"
            >
              Forgot your password?
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center py-3">
              <Spiner />
            </div>
          ) : (
            <button
              type="submit"
              className="w-full font-medium bg-black text-white py-3 rounded-full mb-2 hover:bg-opacity-90"
              disabled={!isClient}
            >
              Sign In
            </button>
          )}

          <button
            type="button"
            className="w-full font-medium border border-black text-black py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300"
            onClick={handleCreateAccountClick}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

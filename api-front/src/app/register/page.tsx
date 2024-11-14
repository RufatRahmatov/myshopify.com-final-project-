"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Layouts from "../_layouts/layout";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Register: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("User successfully created!");
        setForm({ name: "", email: "", password: "" });

        router.push("/login");
      } else {
        const errorData = await res.json();
        alert(`Error: ${errorData.message || "An unknown error occurred!"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect to the server!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layouts>
      <main>
        <div className="min-h-screen flex items-center justify-center mb-24">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
          >
            <h2 className="text-center text-4xl font-bold mb-6">
              Create Account
            </h2>

            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-black"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-black"
                required
              />
            </div>

            <div className="mb-6 relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-black"
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

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className={`bg-black text-white font-medium py-3 px-12 rounded-full focus:outline-none focus:shadow-outline ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Create"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </Layouts>
  );
};

export default Register;

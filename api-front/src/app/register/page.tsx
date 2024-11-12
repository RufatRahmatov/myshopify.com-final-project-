"use client";

import React, { useState } from "react";
import Layouts from "../_layouts/layout";

const Register: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("User successfully created!");
        setForm({ firstName: "", lastName: "", email: "", password: "" });
      } else {
        alert("An error occurred!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect to the server!");
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
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-black"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-black"
                required
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
            <div className="mb-6">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-black"
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-black text-white font-medium py-3 px-12 rounded-full focus:outline-none focus:shadow-outline"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </main>
    </Layouts>
  );
};

export default Register;

"use client";

import React, { useState, useEffect } from "react";
import Layouts from "../_layouts/layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spiner from "../_components/spiner";
const Contact: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spiner />
      </div>
    );
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <Layouts>
      <main>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 p-4 md:p-8 mx-24">
          <div className="w-full md:w-1/2 mx-4">
            <h2 className="text-2xl font-medium mb-4">Leave Us a Message</h2>
            <form
              className="flex flex-col gap-4 overflow-hiden "
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-md hover:border-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="email"
                placeholder="Email *"
                className="w-full p-3 border border-gray-300 rounded-md  hover:border-2 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <input
                type="text"
                placeholder="Phone number"
                className="w-full p-3 border border-gray-300 rounded-md  hover:border-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <textarea
                placeholder="Comment"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black hover:border-2"
                rows={5}
              ></textarea>
              <button
                type="submit"
                className="w-32 bg-black font-medium text-white py-2 px-4 border-2 border-black rounded-full hover:bg-white hover:text-black transition"
              >
                Send
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-medium mb-4">Get In Touch</h2>
            <p className="mb-6 font-medium text-lg">
              Embark On A Stylish Journey, Share Your Queries, And Lets Dive
              Deep Into Sunglass Adventures Together
            </p>
            <ul className="space-y-4">
              <li>
                <strong>Address:</strong> 4800 San Mateo Ln NE
              </li>
              <li>
                <strong>Phone:</strong> +91 123456789
              </li>
              <li>
                <strong>Email:</strong> demoexample@gmail.com
              </li>
              <li>
                <strong>Opening Hours:</strong> Monday - Saturday (10AM - 5PM),
                Closed On Sunday
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-2 flex justify-center ">
          <div className="relative w-[1615px] h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0198737635716!2d-106.5837948846835!3d35.111744080331175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220c9e50137231%3A0x1a4b4d7b36f0b920!2s4800%20San%20Mateo%20Ln%20NE%2C%20Albuquerque%2C%20NM%2087109%2C%20USA!5e0!3m2!1sen!2sin!4v1699193893536!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full border border-gray-300 rounded-xl"
              allowFullScreen={true}
              loading="lazy"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>

        <ToastContainer />
      </main>
    </Layouts>
  );
};

export default Contact;
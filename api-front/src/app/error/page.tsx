"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Layouts from "../_layouts/layout";

const Error: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layouts>
      <main>
        <div className="flex items-center justify-center bg-white h-[700px] from-slate-200 to-gray-200 dark:from-gray-800 dark:to-black text-black dark:text-white">
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-screen px-2">
              <div className="text-center">
                <h1 className="text-9xl text-black font-bold">404</h1>
                <p className="text-2xl text-black font-medium mt-4">
                  Oops! Page not found
                </p>
                <p className="mt-4 mb-8 text-black">
                  The page you&apos;re looking for doesn&apos;t exist or has
                  been moved.
                </p>
                <Link
                  href="/home"
                  className="px-8 py-3 bg-black font-medium border-2 border-black rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out dark:text-white"
                >
                  Go Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </Layouts>
  );
};

export default Error;

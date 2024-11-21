"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layouts from "../_layouts/layout";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="animate-spin inline-block w-10 h-10 border-4 border-current border-t-transparent text-black rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

const articles = [
  {
    id: 1,
    title: "Trends in Fashion Goggles: Making a Statement on the Slopes",
    description:
      "Fashion goggles have become a key part of winter sports outfits, allowing skiers and snowboarders to express their style while protecting their eyes. In this article, we'll explore the latest..",
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/articles/5.webp?v=1713443723&width=533",
    link: "/trends",
  },
  {
    id: 2,
    title: "Effective Strategies to Prevent Fogging in Your Goggles",
    description:
      "Foggy goggles can be frustrating and hinder your performance during activities like swimming, skiing, or other sports. To keep your vision clear, here are some tips on how to prevent...",
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/articles/2.webp?v=1713443584&width=533",
    link: "/effectiv",
  },
  {
    id: 3,
    title: "A Comprehensive Review of Top Swimming Goggles Brands",
    description:
      "Swimming goggles are essential for anyone who wants to protect their eyes and improve their performance in the water. With so many brands and options available, it can be overwhelming...",
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/articles/3.webp?v=1713443467&width=533",
    link: "/swimming",
  },
  {
    id: 4,
    title: "The Ultimate Guide to Choosing the Perfect Goggles",
    description:
      "Proper maintenance and cleaning of your eyewear can extend its lifespan and ensure clear vision. Here's how to take care of your glasses...",
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/articles/4.webp?v=1713443287&width=533",
    link: "/ultima",
  },
  {
    id: 5,
    title: "The Future of Sunglasses: Embracing Style, Comfort, and Technology",
    description:
      "Sunglasses are more than just a fashion statement; they are essential for protecting our eyes from harmful UV rays and enhancing our outdoor experiences. In recent years, sunglasses have evolved...",
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/articles/1.webp?v=1713443114&width=533",
    link: "/blog/article5",
  },
];

const News: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;

  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = articles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handlePageChange = (page: number) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setLoading(false);
    }, 1500);
  };

  return (
    <Layouts>
      <main>
        {loading ? (
          <Spinner />
        ) : (
          <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6">News</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-2xl overflow-hidden"
                >
                  <div className="overflow-hidden rounded-2xl ">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover rounded-2xl transition-transform duration-300 hover:scale-105 "
                    />
                  </div>

                  <div className="mt-4 ">
                    <Link href={article.link}>
                      <h2 className="text-xl font-bold mb-4 hover:underline">
                        {article.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 font-medium">
                      {article.description}
                    </p>
                  </div>
                  <div className="mt-16 border-t pt-6 flex justify-between items-center">
                    <h2 className="text-xl font-bold">Goggles</h2>
                    <p className="text-gray-500">By Webibazaar Support</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-4 mt-10">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className={`px-4 py-2 rounded-md text-lg ${
                  currentPage === 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gray-200 text-gray-800 hover:bg-black hover:text-white transition duration-300"
                }`}
              >
                &lt;
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-5 py-3 rounded-md text-lg ${
                    currentPage === index + 1
                      ? "bg-black text-white border-2 border-black hover:bg-white hover:text-black transition duration-300"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className={`px-4 py-2 rounded-md text-lg ${
                  currentPage === totalPages
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gray-200 text-gray-800 hover:bg-black hover:text-white transition duration-300"
                }`}
              >
                &gt;
              </button>
            </div>
          </div>
        )}
      </main>
    </Layouts>
  );
};

export default News;

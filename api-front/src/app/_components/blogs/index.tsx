"use client";

import { FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Spinner from "../spiner";

interface Blog {
  id: number;
  title: string;
  category: string;
  author: string;
  image: string;
}

const blogsData: Blog[] = [
  {
    id: 1,
    title: "Trends in Fashion Goggles: Making a Statement on the Slopes",
    category: "Goggles",
    author: "Webibazaar Support",
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/articles/5.webp?v=1713443723&width=533",
  },
  {
    id: 2,
    title: "Effective Strategies to Prevent Fogging in Your Goggles",
    category: "Goggles",
    author: "Webibazaar Support",
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/articles/2.webp?v=1713443584&width=533",
  },
  {
    id: 3,
    title: "A Comprehensive Review of Top Swimming Goggles Brands",
    category: "Goggles",
    author: "Webibazaar Support",
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/articles/3.webp?v=1713443467&width=533",
  },
  {
    id: 4,
    title: "The Ultimate Guide to Choosing the Perfect Goggles",
    category: "Goggles",
    author: "Webibazaar Support",
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/articles/4.webp?v=1713443287&width=533",
  },
];

const Blogs: FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogsData.length - 1 : prevIndex - 1
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container max-w-[1840px] mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-4xl font-medium">Our Blogs & Post</h2>
        <button className="bg-black border-2 border-black text-sm sm:text-base text-white font-medium rounded-full px-4 sm:px-6 py-1 sm:py-2 hover:bg-white hover:text-black transition duration-300 ease-in-out">
          View All
        </button>
      </div>

      <div className="hidden md:grid grid-cols-4 gap-8">
        {blogsData.map((blog, index) => (
          <div key={blog.id} className="rounded-3xl overflow-hidden group">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src={blog.image}
                alt={blog.title}
                width={533}
                height={250}
                className="w-full h-[250px] object-cover rounded-3xl transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
            <div className="mt-6">
              <Link
                href={
                  index === 0
                    ? `/trends`
                    : index === 1
                    ? `/effectiv`
                    : index === 2
                    ? `/swimming`
                    : `/ultima`
                }
                legacyBehavior
              >
                <a>
                  <h3 className="font-bold text-lg mb-2 cursor-pointer hover:text-gray-600">
                    {blog.title}
                  </h3>
                </a>
              </Link>
              <hr className="border-t border-gray-300 my-2 py-1" />
              <div className="flex justify-between mb-3">
                <p className="text-md font-medium cursor-pointer">
                  {blog.category}
                </p>
                <p className="text-md font-medium text-gray-500">
                  By {blog.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <div className="relative">
          <div className="overflow-hidden">
            <Image
              src={blogsData[currentIndex].image}
              alt={blogsData[currentIndex].title}
              width={600}
              height={240}
              className="w-full h-60 object-cover rounded-lg transform transition duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
          <div className="p-4">
            <Link
              href={
                currentIndex === 0
                  ? `/trends`
                  : currentIndex === 1
                  ? `/effective`
                  : currentIndex === 2
                  ? `/swimming`
                  : `/ultima`
              }
              legacyBehavior
            >
              <a>
                <h3 className="font-bold text-lg mb-2">
                  {blogsData[currentIndex].title}
                </h3>
              </a>
            </Link>
            <hr className="border-t border-gray-300 my-2" />
            <p className="text-sm text-gray-500">
              {blogsData[currentIndex].category}
            </p>
            <p className="text-sm text-gray-400">
              By {blogsData[currentIndex].author}
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          <button
            onClick={handlePrev}
            className="bg-gray-200 px-4 py-2 rounded-md"
          >
            <MdKeyboardArrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-200 px-4 py-2 rounded-md"
          >
            <MdKeyboardArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

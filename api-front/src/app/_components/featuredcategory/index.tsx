"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Category {
  id: number;
  title: string;
  itemsCount: number;
  image: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: "Eyeglasses",
    itemsCount: 7,
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/collections/6.webp?v=1713439281&width=1500",
  },
  {
    id: 2,
    title: "Computer Glasses",
    itemsCount: 8,
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/collections/1.webp?v=1713522076&width=1500",
  },
  {
    id: 3,
    title: "Sunglasses",
    itemsCount: 6,
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/collections/2.webp?v=1713521903&width=1500",
  },
  {
    id: 4,
    title: "Power Sunglasses",
    itemsCount: 8,
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/collections/3.webp?v=1713521928&width=1500",
  },
  {
    id: 5,
    title: "Swimming Glasses",
    itemsCount: 3,
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/collections/4.webp?v=1713439404&width=1500",
  },
  {
    id: 6,
    title: "Kids Glasses",
    itemsCount: 6,
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/collections/5..webp?v=1713522043&width=1500",
  },
];

const FeaturedCategory: React.FC = () => {
  return (
    <div className="relative mt-8">
      <div className="p-4">
        <div className="flex items-center justify-between mx-4 sm:mx-8 mb-2">
          <div className="mb-8">
            <p className="text-md font-medium text-gray-500">
              Eyeglasses Style
            </p>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-medium">
              Featured By Category
            </h2>
          </div>
          <Link href="/collections">
            <button className="text-xs sm:text-sm md:text-base text-white bg-black font-medium border-2 border-black px-2 sm:px-4 py-2 sm:py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
              View Collection
            </button>
          </Link>
        </div>

        <div className="h-[270px] grid grid-cols-2 hidden md:flex sm:grid-cols-3 lg:grid-cols-6 gap-6 mx-8 text-center">
          {categories.map((category) => (
            <div
              key={category.id}
              className="border-2 border-gray-300 rounded-xl overflow-hidden"
            >
              <div className="p-4 rounded-lg">
                <div className="overflow-hidden rounded-lg h-[165px]">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={300}
                    height={165}
                    className="w-full h-[165px] object-cover rounded-lg mb-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                  />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <p className="text-gray-500 text-sm">
                  {category.itemsCount} items
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className=" flex overflow-x-auto space-x-2 sm:hidden mt-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex-shrink-0 w-48 border rounded-lg shadow-md"
            >
              <div className="p-4">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={192}
                  height={128}
                  className="w-full h-32 object-cover mb-4 transform transition-transform duration-300 hover:scale-105"
                />
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <p className="text-gray-500 text-sm">
                  {category.itemsCount} items
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategory;

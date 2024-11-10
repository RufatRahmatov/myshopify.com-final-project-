"use client";

import React from "react";

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
    <div className="p-4">
      <div className="flex justify-between items-center mx-4">
        <div>
          <p className="text-sm text-gray-500">Eyeglasses Style</p>
          <h2 className="text-2xl sm:text-4xl font-semibold mb-4">
            Featured By Category
          </h2>
        </div>
        <button className="text-black border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition">
          View Collection
        </button>
      </div>

      <div className="h-[280px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mx-8 text-center">
        {categories.map((category) => (
          <div
            key={category.id}
            className="border rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-4 overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-[150px] object-cover rounded-lg mb-4 hover:transform transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-lg font-semibold">{category.title}</h3>
              <p className="text-gray-500 text-sm">
                {category.itemsCount} items
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex overflow-x-auto space-x-4 sm:hidden mt-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex-shrink-0 w-48 border rounded-lg shadow-md"
          >
            <div className="p-4">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-32 object-cover mb-4"
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
  );
};

export default FeaturedCategory;

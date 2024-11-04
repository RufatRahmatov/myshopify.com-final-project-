import React, { useState } from "react";

const categories = [
  {
    imageSrc:
      "https://maxmod-goggles.myshopify.com/cdn/shop/collections/6.webp?v=1713439281&width=1500",
    title: "Eyeglasses",
    itemsCount: 7,
  },
  {
    imageSrc:
      "https://maxmod-goggles.myshopify.com/cdn/shop/collections/1.webp?v=1713522076&width=1500",
    title: "Computer Glasses",
    itemsCount: 8,
  },
  {
    imageSrc:
      "https://maxmod-goggles.myshopify.com/cdn/shop/collections/2.webp?v=1713521903&width=1500",
    title: "Sunglasses",
    itemsCount: 6,
  },
  {
    imageSrc:
      "https://maxmod-goggles.myshopify.com/cdn/shop/collections/3.webp?v=1713521928&width=1500",
    title: "Power Sunglasses",
    itemsCount: 8,
  },
  {
    imageSrc:
      "https://maxmod-goggles.myshopify.com/cdn/shop/collections/4.webp?v=1713439404&width=1500",
    title: "Swimming Glasses",
    itemsCount: 3,
  },
  {
    imageSrc:
      "https://maxmod-goggles.myshopify.com/cdn/shop/collections/5..webp?v=1713522043&width=1500",
    title: "Kids Glasses",
    itemsCount: 6,
  },
];

export default function FeaturedCategory() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 max-w-[2400px]">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
          <div>
            <h2 className="text-sm text-gray-500">Eyeglasses Style</h2>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
              Featured By Category
            </h1>
          </div>
          <button className="px-3 py-[10px] sm:px-4 sm:py-2.5 lg:px-6 lg:py-3 bg-black text-white font-medium rounded-full hover:bg-white hover:text-black transition transform duration-300">
            View Collection
          </button>
        </div>

        <div className="flex items-center justify-center max-w-[2400px]">
          <div className="flex overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-2"
                >
                  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md border-2 border-gray-300 w-[250px]">
                    <img
                      src={category.imageSrc}
                      alt={category.title}
                      className="w-24 h-24 mb-4 rounded-lg shadow-md object-contain transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                    />
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                    <p className="text-gray-500">{category.itemsCount} items</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4 sm:hidden">
          <button onClick={handlePrev} className="text-2xl px-4">
            &#8249;
          </button>
          <button onClick={handleNext} className="text-2xl px-4">
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
}

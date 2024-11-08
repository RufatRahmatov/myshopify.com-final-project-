"use client";

import React, { useState } from "react";

interface OurproductProps {
  title: string;
  price: number;
  salePrice?: number;
  image: string;
  hoverImage: string;
  category: string;
}

const Ourproduct: React.FC<OurproductProps> = ({
  title,
  price,
  salePrice,
  image,
  hoverImage,
  category,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer w-full sm:w-1/2 lg:w-1/4 p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={isHovered ? hoverImage : image}
          alt={title}
          className="w-full transition-all duration-500 ease-in-out"
        />
        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
          Sale
        </div>
        <button className="absolute bottom-4 right-4 bg-black text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-800">
          Quick View
        </button>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">{category}</p>
        <p className="font-semibold text-lg">{title}</p>
        <p className="text-sm">
          <span className={`text-red-500 ${salePrice ? "line-through" : ""}`}>
            Rs. {price}
          </span>{" "}
          {salePrice && <span>Rs. {salePrice}</span>}
        </p>
      </div>
    </div>
  );
};

export default Ourproduct;

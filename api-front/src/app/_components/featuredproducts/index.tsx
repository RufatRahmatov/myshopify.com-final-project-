"use client";

import React, { useState } from "react";
import Image from "next/image";
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  hoverImageUrl: string;
}

const ProductCard: React.FC<{
  product: Product;
  addToCart: (product: Product) => void;
}> = ({ product, addToCart }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-full max-w-xs mx-auto group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative">
        <Image
          src={hovered ? product.hoverImageUrl : product.imageUrl}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-auto transition-transform transform group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">$ {product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-3 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

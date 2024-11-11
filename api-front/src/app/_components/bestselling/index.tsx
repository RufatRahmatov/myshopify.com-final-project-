"use client";

import React, { useState } from "react";

interface Product {
  id: string;
  title: string;
  category: string;
  basePrice: number;
  colors: {
    name: string;
    price: number;
    image: string;
    hoverImage: string;
  }[];
}

const products: Product[] = [
  {
    id: "1",
    title: "Unveiling the Finest Optical Experience",
    category: "Optical",
    basePrice: 2610,
    colors: [
      {
        name: "Black",
        price: 2610,
        image:
          "https://maxmod-goggles.myshopify.com/cdn/shop/files/6.webp?v=1713440677&width=533",
        hoverImage:
          "https://maxmod-goggles.myshopify.com/cdn/shop/files/1_c98d383d-d2ad-4c2b-98aa-969bfa9ac379.webp?v=1713440677&width=533",
      },
    ],
  },
  {
    id: "2",
    title: "Clarity & Style: Discover the Perfect",
    category: "Maxmod Goggles",
    basePrice: 900,
    colors: [
      {
        name: "Orange",
        price: 900,
        image:
          "https://maxmod-goggles.myshopify.com/cdn/shop/files/18_d766001f-9580-4059-ab48-bbec5a8b7a78.webp?v=1713862372&width=533",
        hoverImage:
          "https://maxmod-goggles.myshopify.com/cdn/shop/files/19_67553eb4-3cd2-478c-8854-205450801ee7.webp?v=1713441191&width=533",
      },
      {
        name: "Blue",
        price: 800,
        image: "/images/product2-blue.jpg",
        hoverImage: "/images/product2-hover-blue.jpg",
      },
    ],
  },
  {
    id: "3",
    title: "Clarity and Comfort with Our Optical Collection",
    category: "Glass",
    basePrice: 300,
    colors: [
      {
        name: "Gray",
        price: 300,
        image:
          "https://maxmod-goggles.myshopify.com/cdn/shop/files/22_80307ee7-a053-494d-a572-c4c0379c1176.webp?v=1713441277&width=533",
        hoverImage:
          "https://maxmod-goggles.myshopify.com/cdn/shop/files/20_97089cb7-390e-49a4-a78f-a22da33c2a6d.webp?v=1713441191&width=533",
      },
    ],
  },
  {
    id: "4",
    title: "ClarityPrime Optical Glass with Luminix Precision",
    category: "Electronics",
    basePrice: 1128,
    colors: [
      {
        name: "Gold",
        price: 1128,
        image:
          "https://maxmod-goggles.myshopify.com/cdn/shop/files/19_51aa1dcc-03ae-4f9e-8391-c23df47807b5.webp?v=1713862373&width=533",
        hoverImage: "/images/product4-hover.jpg",
      },
    ],
  },
];

const Bestselling: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");

  return (
    <div className="relative mt-10 p-4">
      <h2 className="text-4xl font-medium mb-8">Our Featured Products</h2>
      <div className="flex flex-wrap -mx-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group cursor-pointer w-full sm:w-1/2 lg:w-1/4 p-4"
            onClick={() => setSelectedProduct(product)}
          >
            <div className="relative rounded-2xl border-2 border-gray-300 overflow-hidden">
              <img
                src={product.colors[0].image}
                alt={product.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 py-2">
                <button className="w-full text-white py-2 hover:bg-white hover:text-black transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="font-semibold text-lg">{product.title}</p>
              <p className="text-sm text-red-500">Rs. {product.basePrice}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 sm:w-2/3 lg:w-1/3 p-6 rounded-lg relative">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => setSelectedProduct(null)}
            >
              X
            </button>
            <img
              src={
                selectedColor
                  ? selectedProduct.colors.find(
                      (color) => color.name === selectedColor
                    )?.image
                  : selectedProduct.colors[0].image
              }
              alt={selectedProduct.title}
              className="w-full mb-4 rounded-2xl"
            />
            <h3 className="text-lg font-semibold">{selectedProduct.title}</h3>
            <p className="text-sm text-gray-500 mb-2">
              {selectedProduct.category}
            </p>
            <div className="mb-4">
              <p className="text-sm font-semibold">Colors:</p>
              <div className="flex space-x-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color.name}
                    className={`px-4 py-2 border rounded ${
                      selectedColor === color.name
                        ? "bg-black text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => setSelectedColor(color.name)}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
            </div>
            <p className="font-semibold text-lg">
              Rs.{" "}
              {selectedColor
                ? selectedProduct.colors.find(
                    (color) => color.name === selectedColor
                  )?.price
                : selectedProduct.basePrice}
            </p>
            <button className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bestselling;
"use client";

import React, { useState } from "react";
// import Link from "next/link";
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
  onSale: boolean;
}

const products: Product[] = [
  {
    id: "1",
    title: "Unveiling the Finest Optical Experience  ",
    category: "Optical",
    basePrice: 110,
    onSale: false,
    colors: [
      {
        name: "Black",
        price: 110,
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
    basePrice: 90,
    onSale: true,
    colors: [
      {
        name: "Orange",
        price: 90,
        image:
          "https://maxmod-goggles.myshopify.com/cdn/shop/files/18_d766001f-9580-4059-ab48-bbec5a8b7a78.webp?v=1713862372&width=533",
        hoverImage:
          "https://maxmod-goggles.myshopify.com/cdn/shop/files/19_67553eb4-3cd2-478c-8854-205450801ee7.webp?v=1713441191&width=533",
      },
    ],
  },
  {
    id: "3",
    title: "Clarity and Comfort with Our Optical Collection",
    category: "Glass",
    basePrice: 100,
    onSale: true,
    colors: [
      {
        name: "Gray",
        price: 100,
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
    basePrice: 112,
    onSale: false,
    colors: [
      {
        name: "Gold",
        price: 112,
        image:
          "https://maxmod-goggles.myshopify.com/cdn/shop/files/19_51aa1dcc-03ae-4f9e-8391-c23df47807b5.webp?v=1713862373&width=533",
        hoverImage:
          "https://maxmod-goggles.myshopify.com/cdn/shop/files/20_97089cb7-390e-49a4-a78f-a22da33c2a6d.webp?v=1713441191&width=533",
      },
    ],
  },
];

const OurProducts: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  // const handleColorChange = (colorName: string) => {
  //   setSelectedColor(colorName);
  // };
  return (
    <div className="relative mt-8 p-4 ">
      <div className="flex justify-between items-center mx-8">
        <p className="font-medium text-[#787878]">Hottest collections</p>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl sm:text-3xl font-medium mb-0 mx-2 sm:mx-8">
          Our Featured Products
        </h2>
        <button className="text-sm sm:text-lg text-black border-2 border-black px-4 sm:px-6 py-1 sm:py-2 font-medium rounded-full bg-black text-white hover:bg-white hover:text-black transition duration-300 mx-2 sm:mx-8">
          View All
        </button>
      </div>

      <div className="flex flex-wrap mx-4 mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group cursor-pointer w-full sm:w-1/2 lg:w-1/4 p-4"
            // Removed onClick handler here
          >
            {product.onSale && (
              <span className="absolute top-8  left-8 bg-[#448B23] px-4 py-1 text-white text-xs font-medium px-2 py-1 rounded-full z-50">
                SALE
              </span>
            )}

            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={product.colors[0].image}
                alt={product.title}
                className="w-full h-[420px] object-cover transition-opacity duration-500 group-hover:opacity-0"
              />
              <img
                src={product.colors[0].hoverImage}
                alt={`${product.title} Hover`}
                className="w-full h-[420px] object-cover absolute top-0 left-0 transition-opacity duration-500 group-hover:opacity-100 opacity-0"
              />

              <button
                className="absolute top-4 right-4 text-black font-medium text-md  hover:underline "
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProduct(product);
                }}
              >
                Quick View
              </button>
              <div className="absolute bottom-2 left-3 w-full bg-opacity-75 py-2">
                <button className="w-[calc(100%-25px)] font-medium text-white py-2 bg-black rounded-full hover:bg-white hover:text-black border-2 border-black transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500 font-medium">
                {product.category}
              </p>
              <p className="font-bold text-lg ">{product.title}</p>
              <p className="text-lg  font-medium"> {product.basePrice}.$</p>
            </div>
            <div className="flex items-center justify-center mt-2 gap-2">
              <div className="bg-black rounded-full h-5 w-5"></div>
              <div className="bg-red-600 h-5 w-5 rounded-full"></div>
              <div className="bg-gray-300 rounded-full h-5 w-5"></div>
              <div className="bg-blue-700  rounded-full h-5 w-5"></div>
              <div className="bg-orange-500  rounded-full h-5 w-5"></div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 sm:w-2/3 lg:w-3/4 p-6 rounded-lg flex gap-8 relative">
            {/* Left Section - Large Image and Thumbnails */}
            <div className="flex-1">
              {/* Large Image */}
              <div className="w-full mb-4">
                <img
                  src={
                    selectedProduct.colors.find(
                      (color) => color.name === selectedColor
                    )?.image || selectedProduct.colors[0].image
                  }
                  alt={selectedProduct.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`border rounded-md ${
                      selectedColor === color.name
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                  >
                    <img
                      src={color.image}
                      alt={color.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <button
                className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full z-50"
                onClick={() => {
                  setSelectedProduct(null);
                  setSelectedColor(null);
                }}
              >
                X
              </button>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2">
                {selectedProduct.title}
              </h3>

              {/* Category */}
              <p className="text-sm text-gray-500 mb-4">
                {selectedProduct.category}
              </p>

              {/* Price */}
              <p className="text-lg font-semibold mb-4">
                $
                {selectedProduct.colors.find(
                  (color) => color.name === selectedColor
                )?.price || selectedProduct.colors[0].price}
              </p>

              {/* Quantity Selector */}
              <div className="mb-4">
                <p className="text-sm font-semibold">Quantity:</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleQuantityChange("decrease")}
                    className="px-4 py-2 bg-gray-200 rounded text-black font-bold"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange("increase")}
                    className="px-4 py-2 bg-gray-200 rounded text-black font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-4">
                <button className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800">
                  Add to Cart
                </button>
                <button className="w-full border border-black text-black py-2 rounded-full hover:bg-black hover:text-white">
                  Buy it Now
                </button>
              </div>

              {/* Description */}
              <div className="font-medium mt-4">
                <p>
                  Welcome to our Optical Collection, where we prioritize Clarity
                  and Comfort to enhance your vision and elevate your eyewear
                  experience. At our store, we understand the significance of
                  clear vision in your daily life. Thats why we have carefully
                  curated an extensive range of high-quality eyeglasses and
                  sunglasses that offer unparalleled clarity. Whether you need
                  prescription lenses for precise vision correction or
                  fashionable sunglasses to protect your eyes in style, we have
                  the perfect solution for you. Our commitment to comfort is
                  evident in every aspect of our eyewear selection. Each frame
                  is crafted with precision and designed to provide a snug and
                  secure fit.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurProducts;

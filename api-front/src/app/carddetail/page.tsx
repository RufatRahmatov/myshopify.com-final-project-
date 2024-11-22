"use client";

import React, { useState } from "react";
import Image from "next/image";
import Layouts from "../_layouts/layout";

interface ColorOption {
  name: string;
  image: string;
}

interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  description: string;
  colors: ColorOption[];
}

const product: Product = {
  id: "1",
  title: "Unveiling the Finest Optical Experience at Eyewearlabs",
  category: "Optical",
  price: 100,
  description:
    "Introducing our exceptional range of goggles, designed to provide you with unmatched protection, clarity, and style for all your outdoor adventures.",
  colors: [
    {
      name: "Gray",
      image:
        "https://maxmod-goggles.myshopify.com/cdn/shop/files/6.webp?v=1713440677&width=533",
    },
    {
      name: "White",
      image:
        "https://maxmod-goggles.myshopify.com/cdn/shop/files/1_c98d383d-d2ad-4c2b-98aa-969bfa9ac379.webp?v=1713440677&width=533",
    },
    {
      name: "Black",
      image:
        "https://maxmod-goggles.myshopify.com/cdn/shop/files/4.webp?v=1713440677&width=1946",
    },
  ],
};

const CardDetail: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors[0].name
  );
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <Layouts>
      <main>
        <div className="container mx-auto p-6 max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-7/12">
              <div className="w-full rounded-2xl mb-6 relative aspect-[4/3]">
                <Image
                  src={
                    product.colors.find((color) => color.name === selectedColor)
                      ?.image || product.colors[0].image
                  }
                  alt={product.title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              <div className="flex gap-4 overflow-x-auto">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`border ${
                      selectedColor === color.name
                        ? "border-black"
                        : "border-gray-300"
                    } rounded-lg p-2`}
                  >
                    <div className="w-16 h-16 relative">
                      <Image
                        src={color.image}
                        alt={color.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:w-5/12 sticky top-20 bg-white p-8 rounded-lg">
              <p className="text-gray-500 text-sm mb-2">{product.category}</p>
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="text-2xl font-semibold text-black mb-6">
                {product.price} .$
              </p>

              <div className="mb-6">
                <p className="text-md font-medium mb-2">Color</p>
                <div className="flex gap-4">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full border-2 ${
                        selectedColor === color.name
                          ? "border-black"
                          : "border-gray-300"
                      }`}
                      style={{
                        backgroundColor:
                          color.name === "Gray"
                            ? "#B8B8B8"
                            : color.name === "White"
                            ? "#FFFFFF"
                            : "#000000",
                      }}
                    ></button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-md font-medium mb-2">Quantity</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleQuantityChange("decrease")}
                    className="px-4 py-2 bg-gray-200 rounded font-semibold"
                  >
                    -
                  </button>
                  <span className="text-lg">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange("increase")}
                    className="px-4 py-2 bg-gray-200 rounded font-medium"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-black border-2 border-black text-white py-3 rounded-full font-medium hover:bg-white hover:text-black transition">
                  Add to Cart
                </button>
                <button className="flex-1 border-2 border-black py-3 rounded-full  font-medium text-black hover:bg-black hover:text-white transition">
                  Buy it Now
                </button>
              </div>

              <div className="mt-6  leading-relaxed">
                <p className="font-medium">{product.description}</p>
                <p className="mt-4 font-medium">
                  Whether youre hitting the slopes, conquering the waves, or
                  embarking on thrilling expeditions, our goggles are your
                  ultimate companion. Engineered with cutting-edge technology
                  and crafted from premium materials, they ensure optimal
                  performance and durability in various conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layouts>
  );
};

export default CardDetail;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Layouts from "../_layouts/layout";
import Embrace from "../_components/embrace";
import OurProducts from "../_components/ourproduct";

type Product = {
  id: number;
  name: string;
  price: number;
  images: { src: string; color: string; price: number }[];
  colors: { name: string; price: number }[];
  onSale: boolean;
};

const product: Product = {
  id: 1,
  name: "Clarity and Comfort with Our Optical Collection",
  price: 120,
  onSale: true,
  images: [
    {
      src: "https://maxmod-goggles.myshopify.com/cdn/shop/files/4_dc9af481-01ee-4d98-bdad-f5ab0ab7a2f1.webp?v=1713441277&width=1946",
      color: "Gray",
      price: 110,
    },
    {
      src: "https://maxmod-goggles.myshopify.com/cdn/shop/files/22_80307ee7-a053-494d-a572-c4c0379c1176.webp?v=1713441277&width=1946",
      color: "White",
      price: 112,
    },
    {
      src: "https://maxmod-goggles.myshopify.com/cdn/shop/files/1_4f0a3a17-bd6c-49a1-83c8-f20e373f82cf.webp?v=1713441278&width=416",
      color: "Brown",
      price: 140,
    },
    {
      src: "https://maxmod-goggles.myshopify.com/cdn/shop/files/5_cd0ade13-69a4-4ae2-8683-4da7003dcc80.webp?v=1713441277&width=416",
      color: "Gold",
      price: 130,
    },
  ],
  colors: [
    { name: "Gray", price: 120 },
    { name: "Silve", price: 140 },
    { name: "Orange", price: 110 },
  ],
};

const Glass = () => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("description");

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({ productId: product.id, quantity, selectedColor });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  const buyItNow = () => {
    const checkoutData = {
      productId: product.id,
      quantity,
      selectedColor,
    };
    localStorage.setItem("checkout", JSON.stringify(checkoutData));
    router.push("/checkout");
  };

  const changeQuantity = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <div className="w-10 h-10 border-4 border-t-transparent border-black rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <Layouts>
      <main>
        <div className="flex flex-wrap p-4 md:flex-nowrap md:space-x-8 px-5 mx-10 ">
          <div className="flex flex-col w-full md:w-1/2 space-y-4">
            <Image
              src={selectedImage.src}
              alt={selectedImage.color}
              className="w-full border rounded-2xl"
              width={600}
              height={600}
            />
            <div className="flex items-center justify-center space-x-4 overflow-x-auto">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedImage(image);
                    setSelectedColor({ name: image.color, price: image.price });
                  }}
                  className={`border rounded-2xl cursor-pointer ${
                    selectedImage.src === image.src
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={`Thumbnail ${index}`}
                    className="rounded-2xl"
                    width={180}
                    height={180}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="sticky top-0 flex flex-col w-full md:w-1/2 space-y-4  ">
            <p className="font-medium text-gray-600">Glass</p>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center space-x-2">
              <p className="text-lg font-medium text-gray-500 line-through">
                ${selectedColor.price + 50}
              </p>

              <p className="text-lg font-medium text-black">
                ${selectedColor.price}
              </p>

              {product.onSale && (
                <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                  Sale
                </span>
              )}
            </div>

            <div>
              <span className="block mb-2 font-medium">Color:</span>
              <div className="flex space-x-1">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    className={`px-4 py-1 border-2 border-black rounded-full ${
                      selectedColor.name === color.name
                        ? "bg-black text-white"
                        : "bg-white"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center border rounded-full w-fit px-10 py-2 shadow-sm">
              <button
                className="text-xl font-bold text-gray-600 hover:text-black"
                onClick={() => changeQuantity(-1)}
              >
                −
              </button>
              <span className="mx-4 text-lg font-medium">{quantity}</span>
              <button
                className="text-xl font-bold text-gray-600 hover:text-black"
                onClick={() => changeQuantity(1)}
              >
                +
              </button>
            </div>

            <div className="flex flex-col space-y-4">
              <button
                className="w-[300px]  px-4 py-3 sm:py-2 font-medium text-black bg-white rounded-full transition duration-300 hover:bg-black hover:text-white border-black border"
                onClick={addToCart}
              >
                Add To Cart
              </button>
              <button
                className="w-[300px]  px-4 py-3 sm:py-2 font-medium text-white bg-black border border-black rounded-full transition duration-300 hover:bg-white hover:text-black"
                onClick={buyItNow}
              >
                Buy It Now
              </button>
            </div>

            <div className="font-medium space-y-4">
              <p>
                Introducing our exceptional range of goggles, designed to
                provide you with unmatched protection, clarity, and style for
                all your outdoor adventures. Whether youre hitting the slopes,
                conquering the waves, or embarking on thrilling expeditions, our
                goggles are your ultimate companion. Engineered with
                cutting-edge technology and crafted from premium materials, they
                ensure optimal performance and durability in various conditions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 px-5 mx-10">
          <div className="flex space-x-6 border-b pb-2">
            <button
              className={`${
                activeTab === "description"
                  ? "border-b-2 border-black font-bold"
                  : ""
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`${
                activeTab === "shipping"
                  ? "border-b-2 border-black font-bold"
                  : ""
              }`}
              onClick={() => setActiveTab("shipping")}
            >
              Shipping & Return
            </button>
          </div>
          <div className="mt-4">
            {activeTab === "description" && (
              <div className="font-medium space-y-4">
                <p>
                  Embark On A Journey Into The World Of Unparalleled Optical
                  Excellence With Eyewearlabs – Where We Unveil The Finest
                  Optical Experience To Elevate Your Vision To New Heights.
                  Experience the difference from the moment you slip on a pair
                  of our meticulously crafted frames. Each frame is meticulously
                  designed to not only enhance your vision but also complement
                  your unique sense of style.
                  <p className="mt-2">
                    From sleek and sophisticated to bold and avant-garde, our
                    collection offers something for every taste and occasion.
                    But its not just about style – its about providing you with
                    the finest optical experience possible. Our lenses are
                    crafted with precision and care, using advanced technology
                    to ensure crystal-clear vision with minimal distortion.
                  </p>
                  Say goodbye to eye strain and discomfort as you immerse
                  yourself in a world of unmatched clarity and precision. At
                  Eyewearlabs, we understand that your eyes are precious, which
                  is why we go above and beyond to ensure that every pair of
                  glasses meets the highest standards of quality and comfort.
                  From the materials we use to the attention to detail in our
                  designs, we strive to provide you with an optical experience
                  that is truly second to none. Unveil the finest optical
                  experience at Eyewearlabs and see the world in a whole new
                  light. Discover your perfect pair today and step into a realm
                  where clarity, comfort, and style converge in perfect harmony.
                </p>
                <p>
                  At Eyewearlabs, We Believe That Clear Vision Is Not Just A
                  Necessity, But A Luxury To Be Cherished. Thats Why Weve
                  Dedicated Ourselves To Curating An Exceptional Collection Of
                  Eyewear That Combines Cutting-Edge Technology With Exquisite
                  Craftsmanship, Ensuring That Every Pair Of Glasses Offers The
                  Ultimate In Clarity, Comfort, And Style.
                </p>
              </div>
            )}
            {activeTab === "shipping" && (
              <div className="font-medium space-y-4">
                <p>
                  When it comes to shipping sunglasses, ensuring they arrive
                  safely and securely is paramount. Heres what you can expect in
                  your package from our sunglasses store: Rest assured, we take
                  great care in preparing and packaging your sunglasses to
                  ensure they arrive promptly and in perfect condition. If you
                  have any specific shipping preferences or requests, feel free
                  to reach out to our customer support team, and well do our
                  best to accommodate your needs.
                </p>
              </div>
            )}
          </div>
        </div>
        <Embrace />
        <OurProducts />
      </main>
    </Layouts>
  );
};

export default Glass;

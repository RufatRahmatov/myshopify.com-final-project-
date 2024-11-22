"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Embrace = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleViewAll = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/eyeframes");
    }, 1500);
  };

  return (
    <div className="bg-gray-100 py-10 mt-20 ">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="w-10 h-10 border-4 border-t-transparent border-black rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 max-w-[1900px]">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Where Can I Get Some?
            </h2>
            <p className="text-gray-600 font-medium text-sm md:text-base mb-6">
              Embrace Your Unique Style With Frames That Command Attention And
              Exude Personality. From Sleek And Sophisticated To Bold And
              Daring, Our Collection Features A Wide Range Of Designs To Suit
              Every Taste And Occasion. Whether Youre Rocking A Retro-Inspired
              Look Or Channeling Modern Chic Vibes, Our Extra Large Glasses And
              Sunglasses Ensure You Stand Out From The Crowd With Unparalleled
              Flair.
            </p>
            <button
              className="bg-black text-white px-7 py-2 rounded-full text-sm md:text-base font-medium transition duration-300 hover:bg-white hover:text-black border border-black"
              onClick={handleViewAll}
            >
              View All
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <Image
              src="https://maxmod-goggles.myshopify.com/cdn/shop/files/2_b8700fc8-df0c-4d1d-9d0c-b4160f67e59c.webp?v=1713441967&width=1500"
              alt="Embrace Your Unique Style"
              width={900}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Embrace;

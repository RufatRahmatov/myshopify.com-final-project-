"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
const ViewCollection: React.FC = () => {
  const router = useRouter();

  const handleCollectionClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className=" relative mt-6 container mx-auto px-4 py-8 max-w-[1840px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative rounded-3xl overflow-hidden bg-white shadow-lg ">
          <Image
            src="https://maxmod-goggles.myshopify.com/cdn/shop/files/1_9915b714-16b1-44f7-a03e-39a5de594827.webp?v=1713441967"
            alt="Eyeglasses Collection"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 bg-opacity-40 text-white ml-1 sm:ml-2">
            <p className="text-lg sm:text-xl text-black font-medium mb-3 sm:mb-4">
              Lets Elevate your frame
            </p>
            <h2 className="text-2xl sm:text-4xl font-medium mb-3 sm:mb-4 text-black">
              Elevate Your Style <br /> With Eyeglasses
            </h2>
            <button
              onClick={() => handleCollectionClick("/collection1")}
              className="w-28 sm:w-40 bg-black text-white text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-[10px] mt-4 sm:mt-6 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              View Collection
            </button>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-white shadow-lg">
          <Image
            src="https://maxmod-goggles.myshopify.com/cdn/shop/files/2_b8700fc8-df0c-4d1d-9d0c-b4160f67e59c.webp?v=1713441967"
            alt="Vision Collection"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 bg-opacity-40 text-white ml-1 sm:ml-2">
            <p className="text-lg sm:text-xl text-black font-medium mb-3 sm:mb-4">
              Lets Elevate your frame
            </p>
            <h2 className="text-2xl sm:text-4xl font-medium mb-3 sm:mb-4 text-black">
              Elevate Your Get <br />
              Vision You Deserve
            </h2>
            <button
              onClick={() => handleCollectionClick("/collection1")}
              className="w-28 sm:w-40 bg-black text-white text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-[10px] mt-4 sm:mt-6 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              View Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCollection;

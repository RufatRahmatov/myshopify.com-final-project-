"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "tailwindcss/tailwind.css";
import Image from "next/image";
const SliderComponent: React.FC = () => {
  return (
    <div className="relative w-full h-screen  px-2 md:px-12 rounded-3xl overflow-hidden">
      <Swiper
        direction="horizontal"
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} custom-bullet"></span>`,
        }}
        modules={[Pagination]}
        className="mySwiper"
        spaceBetween={30}
        loop={true}
        speed={800}
      >
        <SwiperSlide className="rounded-3xl ">
          <div className="relative overflow-hidden flex items-center justify-center h-full border rounded-3xl ">
            <Image
              src="https://maxmod-goggles.myshopify.com/cdn/shop/files/1.webp?v=1713438123&width=3840"
              alt="Slide 1"
              width={3840}
              height={2160}
              className="w-full min-h-screen md:h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-20 left-12 text-white">
              <p className="text-lg font-medium">Perfect fit for every face</p>
              <h2 className="text-4xl font-bold mt-2">
                SHOP YOUR OUTFIT SUNGLASSES
              </h2>
              <div className="mt-4 flex gap-2">
                <button className="px-6 py-2 text-sm md:text-base font-medium border-2 border-white rounded-full text-black bg-white hover:bg-[#737373] hover:text-white transition-all duration-300 sm:px-4 sm:py-1">
                  SHOP MENS
                </button>

                <button className="px-6 py-2 font-medium border-2 border-white rounded-full text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300">
                  SHOP WOMENS
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative flex items-center justify-center h-full border rounded-3xl overflow-hidden">
            <Image
              src="https://maxmod-goggles.myshopify.com/cdn/shop/files/2.webp?v=1713438127&width=3840"
              alt="Slide 2"
              width={3840}
              height={2160}
              className="w-full min-h-screen md:h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-20 left-12 text-white">
              <p className="text-lg font-light font-medium">
                Ideal for any activity
              </p>
              <h2 className="text-4xl font-bold mt-2">
                PROTECT YOUR EYES IN STYLE
              </h2>
              <div className="mt-4 flex ">
                <button className="px-6 py-2 font-medium border-2 border-white rounded-full text-black bg-white hover:bg-transparent hover:text-white transition-all duration-300">
                  SHOP WOMENS
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative flex items-center justify-center h-full border rounded-3xl overflow-hidden">
            <Image
              src="https://maxmod-goggles.myshopify.com/cdn/shop/files/3.webp?v=1713438128&width=3840"
              alt="Slide 3"
              width={3840}
              height={2160}
              className="w-full min-h-screen md:h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-20 left-12 text-white">
              <p className="text-lg font-light font-medium">
                Comfort in every pair
              </p>
              <h2 className="text-4xl font-bold mt-2">
                EXPLORE OUR LATEST COLLECTION OF GOGGLES
              </h2>
              <div className="mt-4 flex gap-2">
                <button className="px-6 py-2 text-sm md:text-base font-medium border-2 border-white rounded-full text-black bg-white hover:bg-[#737373] hover:text-white transition-all duration-300 sm:px-4 sm:py-1">
                  SHOP MENS
                </button>
                <button className="px-6 py-2 font-medium border-2 border-white rounded-full text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300">
                  SHOP WOMENS
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderComponent;

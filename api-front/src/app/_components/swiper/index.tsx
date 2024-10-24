"use client";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Swiper = () => {
  return (
    <div className="relative w-full h-auto">
      <SwiperReact
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col md:flex-row justify-center items-center md:gap-8">
            <div className="w-full md:w-1/2">
              <Image
                src=""
                alt="Sunglasses 1"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left p-4">
              <h1 className="text-2xl md:text-4xl font-bold mb-2">
                Perfect fit for every face
              </h1>
              <h2 className="text-lg md:text-2xl font-semibold mb-4">
                SHOP YOUR OUTFIT SUNGLASSES
              </h2>
              <div className="flex justify-center md:justify-start space-x-4">
                <button className="px-6 py-2 bg-black text-white rounded">
                  SHOP MENS
                </button>
                <button className="px-6 py-2 border border-black text-black rounded">
                  SHOP WOMENS
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/path-to-your-image-2.png"
              alt="Sunglasses 2"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
            <div className="text-center p-4">
              <h1 className="text-xl font-bold">Perfect fit for every face</h1>
              <h2 className="text-lg font-semibold mb-4">
                SHOP YOUR OUTFIT SUNGLASSES
              </h2>
              <div className="flex justify-center space-x-4">
                <button className="px-6 py-2 bg-black text-white rounded">
                  SHOP MENS
                </button>
                <button className="px-6 py-2 border border-black text-black rounded">
                  SHOP WOMENS
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </SwiperReact>
    </div>
  );
};

export default Swiper;

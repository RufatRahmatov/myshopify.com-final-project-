"use client";
import dynamic from "next/dynamic";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SwiperReact = dynamic(
  () => import("swiper/react").then((mod) => mod.Swiper),
  { ssr: false }
);
const SwiperSlide = dynamic(
  () => import("swiper/react").then((mod) => mod.SwiperSlide),
  { ssr: false }
);

const SwiperComponent = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <SwiperReact
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
        effect="slide"
        loop={true}
        speed={1000}
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://maxmod-goggles.myshopify.com/cdn/shop/files/1.webp?v=1713438123&width=3840"
              alt="Sunglasses 1"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-8 text-white">
              <h1 className="text-4xl font-bold mb-4">
                Perfect fit for every face
              </h1>
              <h2 className="text-2xl font-semibold mb-8">
                SHOP YOUR OUTFIT SUNGLASSES
              </h2>
              <div className="flex space-x-4">
                <button className="px-6 py-2 bg-white text-black rounded">
                  SHOP MENS
                </button>
                <button className="px-6 py-2 border border-white text-white rounded">
                  SHOP WOMENS
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slider 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://maxmod-goggles.myshopify.com/cdn/shop/files/2.webp?v=1713438127&width=3840"
              alt="Sunglasses 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-8 text-white">
              <h1 className="text-4xl font-bold mb-4">
                Protect your eyes in style
              </h1>
              <h2 className="text-2xl font-semibold mb-8">
                Ideal for any activity
              </h2>
              <button className="px-6 py-2 bg-white text-black rounded">
                SHOP WOMENS
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slider 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://maxmod-goggles.myshopify.com/cdn/shop/files/3.webp?v=1713438128&width=3840"
              alt="Sunglasses 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-8 text-white">
              <h1 className="text-4xl font-bold mb-4">
                Explore our latest collection of goggles
              </h1>
              <h2 className="text-2xl font-semibold mb-8">
                Comfort in every pair
              </h2>
              <div className="flex space-x-4">
                <button className="px-6 py-2 bg-white text-black rounded">
                  SHOP MENS
                </button>
                <button className="px-6 py-2 border border-white text-white rounded">
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

export default SwiperComponent;

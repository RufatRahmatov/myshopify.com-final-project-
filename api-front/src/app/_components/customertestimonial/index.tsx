"use client";

import React from "react";
import Image from "next/image";
interface Testimonial {
  name: string;
  date: string;
  text: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Emily Collins",
    date: "January 01, 2023",
    text: "I'm Absolutely In Love With The Selection At Maxmod! I Recently Picked Up A Pair Of Classic Aviators, And They've Quickly Become My Go-To Accessory. The Quality Is Fantastic, And They Look Great With Everything From Casual Outfits To More Formal Looks. Perfect.",
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/files/1_2043f9eb-86ba-4d1a-8de9-da5dbf01958c_550x.webp?v=1713442487",
    rating: 4,
  },
  {
    name: "Mark Davis",
    date: "January 01, 2023",
    text: "The Customer Service At Maxmod Is Top-Notch! I Wasn't Sure What Style Would Suit Me Best, But The Staff Was Incredibly Patient And Helped Me Find The Perfect Pair. I Left The Store Feeling Confident And Stylish. Thank You, Maxmod, For Such A Wonderful Shopping Experience!",
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/files/3_7d901ba8-46db-4b15-9b94-7d3d76474ad9_550x.webp?v=1713442487",
    rating: 4,
  },
  {
    name: "Jessica Ramirez",
    date: "January 01, 2023",
    text: "Finding Sunglasses That Fit My Face Well Has Always Been A Challenge—Until I Visited Maxmod. They Had A Wide Variety Of Styles And Sizes, And The Staff Was Helpful In Guiding Me To The Perfect Pair. They're So Comfortable, And I've Been Wearing Them Every Day Since!",
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/files/4_63d525ee-2177-4fa5-83ae-bb54ade4c670_550x.webp?v=1713442487",
    rating: 4,
  },
  {
    name: "Aaron Lee",
    date: "January 01, 2023",
    text: "I Was Pleasantly Surprised By The Affordable Prices At Maxmod. The Sunglasses Are Trendy, High-Quality, And Budget-Friendly. I Ended Up Buying Two Pairs Because I Couldn't Decide Between The Designs! I'll Definitely Be Coming Back For More In The Future. Very nice.",
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/files/5_1c0214b2-3a2b-43d6-9b9f-36b9924cc1e3_550x.webp?v=1713442486",
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="container relative mx-auto overflow-hidden max-w-[1840px] px-4 py-10 -mt-10">
      <div className="flex flex-wrap items-center justify-between mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-medium">
          Our Customers Testimonial
        </h2>
        <button className="text-xs sm:text-sm md:text-base bg-black border-2 border-black font-medium text-white px-3 sm:px-6 py-2 sm:py-2 rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out">
          View Review
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-4 sm:p-6 rounded-2xl shadow-md border border-gray-200 bg-[#F5F5F5]"
          >
            <div className="flex items-center mb-4">
              <div className="text-[#F9B42F] text-xl sm:text-2xl">
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
            </div>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              {testimonial.text}
            </p>
            <div className="flex items-center">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={48}
                height={48}
                className="rounded-full mr-4"
                loading="lazy"
              />
              <div>
                <h3 className="font-semibold text-sm sm:text-base">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {testimonial.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

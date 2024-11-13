"use client";

import React from "react";

const OurTeam: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 max-w-[1858px] mx-auto p-4 lg:p-8 mt-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-4 sm:gap-8">
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <img
            src="https://maxmod-goggles.myshopify.com/cdn/shop/files/4.jpg?v=1713615602&width=1500"
            alt="Team"
            className="rounded-2xl w-full object-cover"
          />
        </div>

        <div className="relative lg:top-16  flex flex-col gap-4 w-full lg:w-1/2 px-10 sm:mt-4">
          <h2 className="text-3xl lg:text-4xl font-medium text-gray-800">
            Our Team
          </h2>
          <p className=" text-gray-600 font-medium leading-relaxed md:text-lg  sm:text-base py-4">
            At the heart of Maxmod is a team of passionate individuals who share
            a love for eyewear and fashion. Our team is composed of designers,
            craftsmen, and customer service experts who work tirelessly to bring
            you the best products and experience. Each member of our team plays
            a vital role in delivering sunglasses that meet our high standards
            of quality and style.
          </p>
          <p className="text-gray-600 font-medium leading-relaxed md:text-lg sm:text-base">
            Were dedicated to fostering a positive and inclusive work
            environment, and our collaborative spirit is what drives our
            success. Our team works together seamlessly to bring you top-notch
            products and an unparalleled shopping experience. Each member is
            committed to upholding our values of quality, innovation, and
            customer satisfaction.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-4 sm:gap-8">
        <div className="relative lg:top-16 lg:right-[35px] flex flex-col gap-4 w-full lg:w-1/2 px-10 sm:mt-4">
          <h2 className="text-3xl lg:text-4xl font-medium text-gray-800">
            Customer Experiences
          </h2>
          <p className="text-gray-600 font-medium leading-relaxed md:text-lg sm:text-base py-4">
            Our relationship with you is built on trust and transparency. We
            take pride in our personalized customer service and strive to exceed
            your expectations with every interaction. Whether youre looking for
            advice on choosing the right style or need assistance with an order,
            our dedicated customer support team is here to help.
          </p>
          <p className="text-gray-600 font-medium leading-relaxed md:text-lg sm:text-base">
            Dont just take our word for it—hear what our customers have to say!
            Weve received glowing reviews from individuals who love our
            sunglasses for their comfort, durability, and trendy designs. Your
            feedback inspires us to continuously improve and innovate.
          </p>
        </div>

        <div className="w-full flex-shrink-0 lg:w-1/2 sm:mt-10 sm:pt-4">
          <img
            src="https://maxmod-goggles.myshopify.com/cdn/shop/files/3.jpg?v=1713615610&width=1500"
            alt="Customer Experience"
            className="rounded-2xl w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

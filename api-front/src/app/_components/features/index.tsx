"use client";
import React from "react";
import { FaShippingFast, FaFire } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { RiSecurePaymentFill } from "react-icons/ri";

const Features: React.FC = () => {
  const features = [
    {
      icon: <FaFire size={40} className="text-orange-500" />,
      title: "Daily Deals",
      description:
        "That Bring A Touch Of Excitement To Your Everyday Shopping Experience.",
    },
    {
      icon: <FaShippingFast size={40} className="text-red-500" />,
      title: "Return Shipping",
      description:
        "Return Shipping Costs Unless The Item Received Is Damaged, Defective, Or Incorrect.",
    },
    {
      icon: <RiSecurePaymentFill size={40} className="text-[#3083DC]" />,
      title: "Secure Payment",
      description:
        "We Accept A Variety Of Secure Payment Methods, Including Major Credit Cards.",
    },
    {
      icon: <BiMessageRoundedDetail size={40} className="text-[#FF7171]" />,
      title: "Help Center",
      description:
        "Absolutely, providing 24/7 support is a great way to enhance customer satisfaction.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 bg-[#F5F5F5] max-w-[2000px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col font-medium items-center text-center p-6 transform transition-transform duration-500 "
          >
            <div className="mb-4 transform transition-transform duration-500 hover:-rotate-y-180">
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

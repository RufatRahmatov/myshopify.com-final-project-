"use client";

import Layouts from "../_layouts/layout";
import OurTeam from "../_components/ourteam";
import Spiner from "../_components/spiner";
import React, { useState, useEffect } from "react";
const AboutUs: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spiner />
      </div>
    );
  }
  return (
    <Layouts>
      <main>
        <span className="font-medium mx-4 sm:mx-14 mt-4 sm:mt-8 block">
          Home &gt; About us
        </span>
        <div className="bg-gray-100 rounded-2xl p-4 sm:p-8 mx-auto max-w-full sm:max-w-[1800px] h-auto sm:h-[260px] mt-6 sm:mt-10">
          <h2 className="text-2xl sm:text-4xl font-medium text-center mb-4 sm:mb-6">
            Our Story
          </h2>
          <p className="text-center text-sm sm:text-lg text-gray-600 bg-[#F5F5F5] font-medium leading-relaxed px-4 sm:px-12">
            Founded in 2017, Maxmod set out to change the way people think about
            sunglasses. From the <br className="hidden sm:block" />
            beginning, we made it our mission to offer a diverse collection of
            sunglasses that cater to every taste{" "}
            <br className="hidden sm:block" />
            and occasion. We carefully curate our selection to ensure theres
            something for everyone—whether <br className="hidden sm:block" />
            youre looking for classic elegance, trendy statement pieces, or
            durable performance eyewear.
          </p>
        </div>
        <OurTeam />
      </main>
    </Layouts>
  );
};

export default AboutUs;

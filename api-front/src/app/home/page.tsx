"use client";

import React, { useState, useEffect } from "react";
import Layouts from "../_layouts/layout";
import Blogs from "../_components/blogs";
import Testimonials from "../_components/customertestimonial";
import VideoBanner from "../_components/youtube";
import ScrollingText from "../_components/scrolling";
import Bestselling from "../_components/bestselling";
import Features from "../_components/features";
import ViewCollection from "../_components/viewcollection";
import OurProducts from "../_components/ourproduct";
import FeaturedCategory from "../_components/featuredcategory";
import SliderComponent from "../_components/swiper";
import Spiner from "../_components/spiner";

const Home = () => {
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
        <SliderComponent />
        <FeaturedCategory />
        <OurProducts />
        <ViewCollection />
        <Features />
        <Bestselling />
        <ScrollingText />
        <VideoBanner />
        <Testimonials />
        <Blogs />
      </main>
    </Layouts>
  );
};

export default Home;

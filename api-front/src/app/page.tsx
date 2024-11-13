"use client";
import React, { useState, useEffect } from "react";
import Features from "./_components/features";
import ScrollingText from "./_components/scrolling";
import SwiperComponent from "./_components/swiper";
import ViewCollection from "./_components/viewcollection";
import Layouts from "./_layouts/layout";
import Featured from "./_components/featuredcategory";
import VideoBanner from "./_components/youtube";
import Testimonials from "./_components/customertestimonial";
import OurProducts from "./_components/ourproduct";
import Bestselling from "./_components/bestselling";
import Blogs from "./_components/blogs";
import Spiner from "./_components/spiner";
export default function Page() {
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
        <SwiperComponent />
        <Featured />
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
}

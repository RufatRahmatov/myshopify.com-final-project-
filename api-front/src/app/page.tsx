"use client";

import Features from "./_components/features";
import ScrollingText from "./_components/scrolling";
import SwiperComponent from "./_components/swiper";
import ViewCollection from "./_components/viewcollection";
import Layouts from "./_layouts/layout";
// import Featured from "./_components/featuredcategory";
import VideoBanner from "./_components/youtube";
import Testimonials from "./_components/customertestimonial";
import OurProducts from "./_components/ourproduct";
import Bestselling from "./_components/bestselling";

export default function Page() {
  return (
    <Layouts>
      <main>
        <SwiperComponent />
        {/* <Featured /> */}
        <OurProducts />
        <ViewCollection />
        <Features />
        <ScrollingText />
        <VideoBanner />
        <Testimonials />
        <Bestselling />
      </main>
    </Layouts>
  );
}

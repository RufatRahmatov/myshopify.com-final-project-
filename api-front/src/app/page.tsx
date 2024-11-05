"use client";

import Features from "./_components/features";
import ScrollingText from "./_components/scrolling";
import SwiperComponent from "./_components/swiper";
import ViewCollection from "./_components/viewcollection";
import Layouts from "./_layouts/layout";
import Featured from "./_components/featuredcategory";
import VideoBanner from "./_components/youtube";
import Testimonials from "./_components/customertestimonial";
export default function Page() {
  return (
    <Layouts>
      <main>
        <SwiperComponent />
        <Featured />
        <ViewCollection />
        <Features />
        <ScrollingText />
        <VideoBanner />
        <Testimonials />
      </main>
    </Layouts>
  );
}

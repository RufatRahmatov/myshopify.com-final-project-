"use client";

import SwiperComponent from "./_components/swiper";
import ViewCollection from "./_components/viewcollection";
import Layouts from "./_layouts/layout";

export default function Page() {
  return (
    <Layouts>
      <main>
        <SwiperComponent />
        <ViewCollection />
        {/* <Featured /> */}
      </main>
    </Layouts>
  );
}

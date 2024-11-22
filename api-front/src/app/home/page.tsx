"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

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
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <SliderComponent />
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <FeaturedCategory />
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <OurProducts />
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <ViewCollection />
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Features />
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Bestselling />
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <ScrollingText />
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <VideoBanner />
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Testimonials />
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Blogs />
        </motion.div>
      </main>
    </Layouts>
  );
};

export default Home;

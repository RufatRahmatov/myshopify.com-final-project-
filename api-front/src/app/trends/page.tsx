"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layouts from "../_layouts/layout";
import { LiaArrowLeftSolid } from "react-icons/lia";
import ShareButton from "../_components/share";

const Spinner: React.FC = () => {
  return (
    <div
      className="animate-spin inline-block w-10 h-10 border-[4px] border-current border-t-transparent text-black rounded-full"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

const Trends: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Spinner />
      </div>
    );
  }

  return (
    <Layouts>
      <main>
        <div className="container max-w-screen-xl mx-auto p-4">
          <div className="flex justify-center mb-8">
            <Image
              src="https://maxmod-goggles.myshopify.com/cdn/shop/articles/5.webp?v=1713443723&width=1100"
              alt="Trends"
              width={1200}
              height={400}
              className="rounded-2xl"
            />
          </div>

          <div className="text-center space-y-6">
            <div>
              <h1 className="text-4xl font-medium">
                Trends In Fashion Goggles: Making A Statement On The Slopes
              </h1>
            </div>

            <p className="flex items-start ml-[115px] text-gray-500 text-sm">
              April 18, 2024
            </p>
            <ShareButton />
            <div className="space-y-4 text-left max-w-5xl mx-auto">
              <p className="text-lg">
                Fashion goggles have become a key part of winter sports outfits,
                allowing skiers and snowboarders to express their style while
                protecting their eyes. In this article, we&apos;ll explore the
                latest trends in fashion goggles and how to make a statement on
                the slopes.
              </p>
            </div>

            <div className="space-y-4 text-left max-w-5xl mx-auto">
              <h2 className="text-2xl font-medium">
                Popular Styles and Colors
              </h2>
              <ol className="list-decimal pl-5 space-y-2 text-gray-900 text-lg">
                <li>
                  <span className="font-bold text-black">Bold colors:</span>{" "}
                  Bright and vibrant colors are in vogue, helping you stand out
                  on the slopes.
                </li>
                <li>
                  <span className="font-bold text-black">Mirrored lenses:</span>{" "}
                  Mirrored lenses not only look stylish but also reduce glare.
                </li>
                <li>
                  <span className="font-bold text-black">
                    Oversized frames:
                  </span>{" "}
                  Larger frames provide a trendy look and offer a wider field of
                  vision.
                </li>
              </ol>

              <h2 className="text-2xl font-medium mt-6">Innovative Features</h2>
              <ol className="list-decimal pl-5 space-y-2 text-gray-900 text-lg">
                <li>
                  <span className="font-bold text-black">
                    Interchangeable lenses:
                  </span>{" "}
                  Some goggles allow you to switch lenses based on weather
                  conditions or personal preference.
                </li>
                <li>
                  <span className="font-bold text-black">
                    Photochromic lenses:
                  </span>{" "}
                  These lenses adjust their tint based on the light intensity,
                  providing optimal visibility.
                </li>
                <li>
                  <span className="font-bold text-black">
                    Customizable straps:
                  </span>{" "}
                  Brands offer interchangeable straps, allowing you to mix and
                  match designs.
                </li>
              </ol>

              <h2 className="text-2xl font-medium mt-6">Top Brands</h2>
              <ol className="list-decimal pl-5 space-y-2 text-gray-900 text-lg">
                <li>
                  <span className="font-bold text-black">Oakley:</span> Known
                  for cutting-edge designs and high-quality lenses, Oakley
                  offers a wide range of stylish goggles.
                </li>
                <li>
                  <span className="font-bold text-black">Smith:</span> Smith
                  goggles combine fashion with functionality, featuring advanced
                  lens technologies.
                </li>
                <li>
                  <span className="font-bold text-black">Dragon:</span>{" "}
                  Dragon&apos;s goggles boast a range of trendy designs and
                  innovative features like Lumalens technology.
                </li>
              </ol>

              <h2 className="text-2xl font-medium mt-6">Conclusion</h2>
              <p className="text-lg text-gray-900">
                Fashion goggles offer a unique way to express your personal
                style on the slopes while keeping your eyes protected. With a
                variety of colors, designs, and features to choose from, you can
                find the perfect pair to complement your winter sports attire.
                Make a statement this season with the latest trends in fashion
                goggles.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/news" className="button-class">
              <button className="flex items-center gap-2 text-lg bg-black text-white border-2 border-black rounded-full px-10 py-2 font-medium hover:bg-white hover:text-black transition duration-300">
                <LiaArrowLeftSolid className="text-xl" /> Back to Blog
              </button>
            </Link>
          </div>
        </div>
      </main>
    </Layouts>
  );
};

export default Trends;

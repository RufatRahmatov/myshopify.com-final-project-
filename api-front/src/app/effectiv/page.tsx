"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layouts from "../_layouts/layout";
import { LiaArrowLeftSolid } from "react-icons/lia";
import ShareButton from "../_components/share";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div
        className="animate-spin inline-block w-10 h-10 border-4 border-current border-t-transparent text-black rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

const Effectiv: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Layouts>
      <main>
        <div className="container max-w-screen-xl mx-auto p-4">
          <div className="flex justify-center mb-8">
            <Image
              src="https://maxmod-goggles.myshopify.com/cdn/shop/articles/2.webp?v=1713443584&width=1100"
              alt="Trends"
              width={1200}
              height={400}
              className="rounded-2xl"
            />
          </div>

          <div className="text-center space-y-6">
            <div>
              <h1 className="text-4xl font-medium">
                Effective Strategies to Prevent Fogging in Your Goggles
              </h1>
            </div>

            <p className="flex items-start text-gray-500 text-sm">
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
              <h2 className="text-2xl font-medium">Why Fogging Happens</h2>
              <ol className="list-decimal pl-5 space-y-2 text-gray-900 text-lg">
                <li>
                  <span className="font-bold text-black">
                    Temperature changes:
                  </span>{" "}
                  Sudden shifts between warm and cold environments can cause
                  condensation.
                </li>
                <li>
                  <span className="font-bold text-black">
                    Poor ventilation:
                  </span>{" "}
                  Inadequate airflow in goggles leads to moisture buildup.
                </li>
                <li>
                  <span className="font-bold text-black">Body heat:</span> Heat
                  from your face can create a foggy environment inside the
                  goggles.
                </li>
              </ol>

              <h2 className="text-2xl font-medium mt-6">Anti-Fog Features</h2>
              <ol className="list-decimal pl-5 space-y-2 text-gray-900 text-lg">
                <li>
                  <span className="font-bold text-black">
                    Ventilation systems:
                  </span>{" "}
                  Built-in vents improve airflow, reducing fog formation.
                </li>
                <li>
                  <span className="font-bold text-black">
                    Anti-fog coatings:
                  </span>{" "}
                  Special treatments on the lenses help repel moisture.
                </li>
                <li>
                  <span className="font-bold text-black">Double lenses:</span>{" "}
                  Dual-layer lenses create a thermal barrier to prevent fogging.
                </li>
              </ol>

              <h2 className="text-2xl font-medium mt-6">
                DIY Anti-Fog Solutions
              </h2>
              <ol className="list-decimal pl-5 space-y-2 text-gray-900 text-lg">
                <li>
                  <span className="font-bold text-black">Use dish soap:</span>{" "}
                  Apply a small amount of dish soap, then rinse and dry to
                  create a fog-resistant layer.
                </li>
                <li>
                  <span className="font-bold text-black">Anti-fog sprays:</span>{" "}
                  Sprays designed for goggles can help keep lenses clear.
                </li>
                <li>
                  <span className="font-bold text-black">Saliva trick:</span>{" "}
                  While unconventional, saliva can be used as a temporary
                  anti-fogging measure.
                </li>
              </ol>

              <h2 className="text-2xl font-medium mt-6">Conclusion</h2>
              <p className="text-lg text-gray-900">
                Fogging can be a frustrating issue, but with the right
                strategies, you can enjoy clear vision throughout your
                activities. From advanced anti-fog technologies to simple DIY
                methods, there are plenty of options to keep your goggles
                fog-free.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/news">
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

export default Effectiv;

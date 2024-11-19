"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layouts from "../_layouts/layout";

const collections = [
  {
    id: 1,
    title: "Computer glasses",
    items: "8 items",
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/collections/1.webp?v=1713522076&width=1500",
  },
  {
    id: 2,
    title: "Eyeglasses",
    items: "7 items",
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/collections/6.webp?v=1713439281&width=1500",
  },
  {
    id: 3,
    title: "Kids glasses",
    items: "6 items",
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/collections/5..webp?v=1713522043&width=1500",
  },
  {
    id: 4,
    title: "Sunglasses",
    items: "9 items",
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/collections/3.webp?v=1713521928&width=1500",
  },
  {
    id: 5,
    title: "Swimming glasses",
    items: "5 items",
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/collections/2.webp?v=1713521903&width=1500",
  },
  {
    id: 6,
    title: "Optical glasses",
    items: "10 items",
    image:
      "https://maxmod-goggles.myshopify.com/cdn/shop/collections/4.webp?v=1713439404&width=1500",
  },
];

const Collections: React.FC = () => {
  return (
    <Layouts>
      <main>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold  mb-8">Collections</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="relative bg-white    transition duration-300 ease-in-out"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    width={500}
                    height={500}
                    className="object-cover max-w-[1300px] h-60 sm:h-80 rounded-xl transform hover:scale-105 transition duration-500 ease-in-out"
                  />
                </div>
                <div className="text-center mt-4">
                  <Link href="/eyeframes" legacyBehavior>
                    <a className="text-lg font-bold hover:underline">
                      {collection.title} →
                    </a>
                  </Link>
                  <p className="text-gray-500 text-sm">{collection.items}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layouts>
  );
};

export default Collections;

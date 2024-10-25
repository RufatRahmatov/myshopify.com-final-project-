import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    image: "/images/eyeglasses.png",
    title: "Eyeglasses",
    count: 7,
    link: "/details/eyeglasses",
  },
  {
    image: "/images/computer_glasses.png",
    title: "Computer Glasses",
    count: 8,
    link: "/details/computer-glasses",
  },
  {
    image: "/images/sunglasses.png",
    title: "Sunglasses",
    count: 6,
    link: "/details/sunglasses",
  },
  {
    image: "/images/power_sunglasses.png",
    title: "Power Sunglasses",
    count: 8,
    link: "/details/power-sunglasses",
  },
  {
    image: "/images/swimming_glasses.png",
    title: "Swimming Glasses",
    count: 3,
    link: "/details/swimming-glasses",
  },
  {
    image: "/images/kids_glasses.png",
    title: "Kids Glasses",
    count: 6,
    link: "/details/kids-glasses",
  },
];

const Home = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Featured By Category</h2>
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link href={category.link} key={index}>
              <div
                className="border rounded-lg p-4 flex flex-col items-center justify-center hover:cursor-pointer transform transition duration-300 hover:scale-105"
                onMouseEnter={() => setIsHovered(category.title)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div
                  className={`h-24 w-24 mb-4 transition-transform ${
                    isHovered === category.title
                      ? "translate-y-1"
                      : "translate-y-0"
                  }`}
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>

                <div
                  className={`text-lg font-semibold transition-colors ${
                    isHovered === category.title
                      ? "text-gray-500"
                      : "text-black"
                  }`}
                >
                  {category.title}
                </div>
                <div className="text-sm text-gray-600">
                  {category.count} items
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="absolute inset-0 flex justify-between items-center sm:hidden">
          <button className="p-2 bg-black text-white rounded-full">&lt;</button>
          <button className="p-2 bg-black text-white rounded-full">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

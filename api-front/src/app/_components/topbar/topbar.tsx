"use client";

import { AiOutlineBell, AiOutlineSetting } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
const TopBar: React.FC = () => {
  const [user] = useState({
    name: "Admin",
    avatar:
      "https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg",
  });

  return (
    <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg mb-6 overflow-hidden font-medium">
      <div className="text-xs sm:text-sm text-gray-500">
        Pages <span className="text-gray-800 font-medium">/ Dashboard</span>
      </div>

      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Type here..."
            className="border border-gray-300 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <Link href="/home">
          <button className="flex items-center gap-1 bg-black text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg hover:bg-white hover:text-black font-medium border-2 border-black text-xs sm:text-sm transition duration-300">
            Log Out
            <CiLogin className="font-medium text-lg hover:text-black" />
          </button>
        </Link>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <AiOutlineBell className="text-lg sm:text-xl text-gray-500 hover:text-gray-800 cursor-pointer" />
          <AiOutlineSetting className="text-lg sm:text-xl text-gray-500 hover:text-gray-800 cursor-pointer" />
          <span className="hidden sm:block text-gray-800 text-xs sm:text-sm font-medium">
            {user.name}
          </span>
          <div className="flex items-center space-x-2">
            <Image
              src={user.avatar}
              alt="Profile"
              width={40}
              height={40}
              className="w-6 h-6 sm:w-10 sm:h-10 rounded-full border border-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

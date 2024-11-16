"use client";

import React from "react";
import Link from "next/link";

import { LuLayoutDashboard } from "react-icons/lu";
import { FaTable } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100 font-medium">
      <aside className="w-64 bg-white border-r hidden md:block">
        <div className="p-4">
          <h2 className="text-xl font-bold">Glass</h2>
        </div>
        <nav className="mt-4 transistor px-4">
          <ul>
            <li className="p-4 font-bold ">Menu</li>
            <Link href="/dashbord">
              <li className="flex items-center p-4 hover:bg-gray-200 cursor-pointer gap-2">
                <LuLayoutDashboard />
                Dashboard
              </li>
            </Link>
            <Link href="/tables">
              <li className="flex items-center p-4 hover:bg-gray-200 cursor-pointer gap-2">
                <FaTable />
                Tables
              </li>
            </Link>

            <li className="p-4 font-bold ">Management</li>
            <Link href="/product">
              <li className="flex items-center p-4 hover:bg-gray-200 cursor-pointer gap-2">
                <MdOutlineProductionQuantityLimits />
                Product
              </li>
            </Link>

            <li className="flex items-center p-4 hover:bg-gray-200 cursor-pointer gap-2">
              Notifications
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  );
};

export default Layout;

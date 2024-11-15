import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaTable } from "react-icons/fa6";
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100 font-medium">
      <aside className="w-64 bg-white border-r hidden md:block">
        <div className="p-4">
          <h2 className="text-xl font-bold">Creative Tim</h2>
        </div>
        <nav className="mt-4 transistor">
          <ul>
            <li className=" flex items-center p-4 hover:bg-gray-200 cursor-pointer gap-2">
              <LuLayoutDashboard />
              Dashboard
            </li>
            <li className=" flex items-center p-4 hover:bg-gray-200 cursor-pointer gap-2">
              <FaTable />
              Tables
            </li>
            <li className="flex items-center p-4 hover:bg-gray-200 cursor-pointer gap-2">
              Billing
            </li>
            <li className=" flex items-center p-4 hover:bg-gray-200 cursor-pointer gap-2">
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

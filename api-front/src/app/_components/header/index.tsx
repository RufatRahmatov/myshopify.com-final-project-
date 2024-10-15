"use client";

import { useState } from "react";
import { Transition } from "@headlessui/react";
import { BiSearch, BiUser, BiCart, BiMenu, BiX } from "react-icons/bi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="w-full shadow">
      <div className="bg-black text-white text-sm flex justify-between px-4 py-2">
        <div>Helpline Number: 123-456-7890</div>
        <div>Orders By Shop Our Spring Collection Sale!</div>
      </div>

      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold">Maxmod</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("Pages")}
                  className="hover:border-b-2 hover:border-black pb-2"
                >
                  Pages
                </button>
                {openDropdown === "Pages" && (
                  <Transition
                    show={openDropdown === "Pages"}
                    enter="transition-opacity duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute z-10 bg-white shadow-lg p-4 rounded">
                      <ul>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Search</li>
                      </ul>
                    </div>
                  </Transition>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("Template")}
                  className="hover:border-b-2 hover:border-black pb-2"
                >
                  Template
                </button>
                {openDropdown === "Template" && (
                  <Transition
                    show={openDropdown === "Template"}
                    enter="transition-opacity duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute z-10 bg-white shadow-lg p-4 rounded">
                      <ul>
                        <li>Documentation</li>
                        <li>Get Support</li>
                      </ul>
                    </div>
                  </Transition>
                )}
              </div>
              <a href="#" className="hover:border-b-2 hover:border-black pb-2">
                Collection
              </a>
              <a href="#" className="hover:border-b-2 hover:border-black pb-2">
                Contact Lens
              </a>
              <a href="#" className="hover:border-b-2 hover:border-black pb-2">
                Eyeframes
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <BiSearch className="text-xl cursor-pointer" />
              <BiUser className="text-xl cursor-pointer" />
              <div className="relative">
                <BiCart className="text-xl cursor-pointer" />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  20
                </span>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <BiMenu className="text-2xl" />
                ) : (
                  <BiX className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block text-black px-3 py-2 rounded-md">
                Home
              </a>
              <a href="#" className="block text-black px-3 py-2 rounded-md">
                Pages
              </a>
              <a href="#" className="block text-black px-3 py-2 rounded-md">
                Template
              </a>
              <a href="#" className="block text-black px-3 py-2 rounded-md">
                Collection
              </a>
              <a href="#" className="block text-black px-3 py-2 rounded-md">
                Contact Lens
              </a>
              <a href="#" className="block text-black px-3 py-2 rounded-md">
                Eyeframes
              </a>
            </div>

            <div className="flex justify-around pb-4 border-t border-gray-200">
              <BiSearch className="text-xl cursor-pointer" />
              <BiUser className="text-xl cursor-pointer" />
              <div className="relative">
                <BiCart className="text-xl cursor-pointer" />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  20
                </span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

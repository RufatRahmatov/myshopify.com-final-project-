"use client";

import { useState } from "react";
import { Transition } from "@headlessui/react";
import { BiSearch, BiUser, BiCart, BiMenu, BiX } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
// import { RiSearchLine } from "react-icons/ri";
// import { BsPerson } from "react-icons/bs";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="w-full ">
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
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-black  font-medium text-lg"
                >
                  Home
                </a>
              </div>

              <div className="relative flex items-center gap-x-1 ">
                <span className="mx-1"></span>{" "}
                <button
                  onClick={() => toggleDropdown("Pages")}
                  className="border-b-2 border-transparent hover:border-black font-medium text-lg inline-flex items-center"
                >
                  Pages
                </button>
                <IoIosArrowDown className="mt-1 cursor-pointer " />
                {openDropdown === "Pages" && (
                  <Transition
                    show={openDropdown === "Pages"}
                    enter="transition-opacity duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  ></Transition>
                )}
              </div>

              <div className="relative flex items-center gap-x-1 ">
                <button
                  onClick={() => toggleDropdown("Template")}
                  className="border-b-2 border-transparent hover:border-black  font-medium text-lg inline-flex items-center"
                >
                  Template
                </button>
                <IoIosArrowDown className="mt-1 cursor-pointer" />
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
                    <div className="absolute z-10 bg-white shadow-lg p-4 rounded text-lg">
                      <ul>
                        <li>Documentation</li>
                        <li>Get Support</li>
                      </ul>
                    </div>
                  </Transition>
                )}
              </div>

              <div className="relative flex items-center gap-x-1">
                <a
                  href="#"
                  className="border-b-2 border-transparent hover:border-black font-medium text-lg inline-flex items-center"
                >
                  Collection
                </a>
                <IoIosArrowDown className="mt-1 cursor-pointer" />
              </div>

              <a
                href="#"
                className="hover:border-b-2 hover:border-black  font-medium text-lg"
              >
                Contact Lens
              </a>
              <a
                href="#"
                className="hover:border-b-2 hover:border-black  font-medium text-lg"
              >
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
              <a
                href="#"
                className="block text-black px-3 py-2 rounded-md font-medium text-lg"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-black px-3 py-2 rounded-md font-medium text-lg"
              >
                Pages
              </a>
              <a
                href="#"
                className="block text-black px-3 py-2 rounded-md font-medium text-lg"
              >
                Template
              </a>
              <a
                href="#"
                className="block text-black px-3 py-2 rounded-md font-medium text-lg"
              >
                Collection
              </a>
              <a
                href="#"
                className="block text-black px-3 py-2 rounded-md font-medium text-lg"
              >
                Contact Lens
              </a>
              <a
                href="#"
                className="block text-black px-3 py-2 rounded-md font-medium text-lg"
              >
                Eyeframes
              </a>
            </div>

            <div className="flex justify-around pb-4 border-t border-gray-200">
              {/* <BiSearch className="text-xl cursor-pointer" /> */}
              {/* <BiUser className="text-xl cursor-pointer" /> */}
              <div className="relative">
                {/* <BiCart className="text-xl cursor-pointer" /> */}
                {/* <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  20
                </span> */}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

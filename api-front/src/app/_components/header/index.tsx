"use client";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { BiMenu, BiX } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { RiShoppingBag2Line } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [textContent, setTextContent] = useState({
    helpline: "Helpline Number: 123-456-7890",
    orders: "Orders By Shop Our Spring Collection Sale!",
    country: "United States",
    language: "English",
    home: "Home",
    pages: "Pages",
    template: "Template",
    collection: "Collection",
    contactLens: "Contact Lens",
    eyeframes: "Eyeframes",
  });

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    if (language === "Azərbaycan dili") {
      setTextContent({
        helpline: "Yardım Nömrəsi: 123-456-7890",
        orders: "Yaz Kolleksiyası Satışından Alış-veriş edin!",
        country: "Azərbaycan",
        language: "Azərbaycan dili",
        home: "Ana Səhifə",
        pages: "Səhifələr",
        template: "Şablonlar",
        collection: "Kolleksiya",
        contactLens: "Kontakt linzalar",
        eyeframes: "Eynək çərçivələri",
      });
    } else {
      setTextContent({
        helpline: "Helpline Number: 123-456-7890",
        orders: "Orders By Shop Our Spring Collection Sale!",
        country: "United States",
        language: "English",
        home: "Home",
        pages: "Pages",
        template: "Template",
        collection: "Collection",
        contactLens: "Contact Lens",
        eyeframes: "Eyeframes",
      });
    }
  };

  return (
    <header className="w-full ">
      <div className="bg-black text-white text-sm flex justify-between px-4 py-2">
        <div>{textContent.helpline}</div>
        <div>{textContent.orders}</div>
        <div className="flex items-center space-x-4">
          {/* Currency Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("Currency")}
              className="inline-flex items-center"
            >
              {selectedCurrency} <IoIosArrowDown className="ml-1" />
            </button>
            {openDropdown === "Currency" && (
              <div className="absolute right-0 mt-2 bg-white text-black py-2 px-4 shadow-lg rounded">
                <div
                  className="cursor-pointer"
                  onClick={() => setSelectedCurrency("USD")}
                >
                  USD
                </div>
                <div
                  className="cursor-pointer mt-1"
                  onClick={() => setSelectedCurrency("AZN")}
                >
                  AZN
                </div>
              </div>
            )}
          </div>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("Language")}
              className="inline-flex items-center"
            >
              {selectedLanguage} <IoIosArrowDown className="ml-1" />
            </button>
            {openDropdown === "Language" && (
              <div className="absolute right-0 mt-2 bg-white text-black py-2 px-4 shadow-lg rounded">
                <div
                  className="cursor-pointer"
                  onClick={() => handleLanguageChange("English")}
                >
                  English
                </div>
                <div
                  className="cursor-pointer mt-1"
                  onClick={() => handleLanguageChange("Azərbaycan dili")}
                >
                  Azərbaycan dili
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold mr-32">Maxmod</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <div className="relative">
                <a
                  href="#"
                  className="hover:border-b-2 hover:border-black  font-medium text-lg"
                >
                  {textContent.home}
                </a>
              </div>

              <div className="relative flex items-center gap-x-1">
                <span className="mx-1"></span>{" "}
                <button
                  onClick={() => toggleDropdown("Pages")}
                  className="border-b-2 border-transparent hover:border-black font-medium text-lg inline-flex items-center"
                >
                  {textContent.pages}
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

              <div className="relative flex items-center gap-x-1">
                <button
                  onClick={() => toggleDropdown("Template")}
                  className="border-b-2 border-transparent hover:border-black  font-medium text-lg inline-flex items-center"
                >
                  {textContent.template}
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
                  {textContent.collection}
                </a>
                <IoIosArrowDown className="mt-1 cursor-pointer" />
              </div>

              <a
                href="#"
                className="hover:border-b-2 hover:border-black  font-medium text-lg"
              >
                {textContent.contactLens}
              </a>
              <a
                href="#"
                className="hover:border-b-2 hover:border-black  font-medium text-lg"
              >
                {textContent.eyeframes}
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <RiSearchLine className="text-2xl cursor-pointer" />
              <IoPersonOutline className="text-2xl cursor-pointer" />
              <div className="relative">
                <RiShoppingBag2Line className="text-2xl cursor-pointer" />
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
                {textContent.home}
              </a>
              <a
                href="#"
                className="block text-black px-3 py-2 rounded-md font-medium text-lg"
              >
                {textContent.pages}
              </a>
              <a
                href="#"
                className="block text-black px-3 py-2 rounded-md font-medium text-lg"
              >
                {textContent.template}
              </a>
              <a
                href="#"
                className="block text-black px-3 py-2 rounded-md font-medium text-lg"
              >
                {textContent.collection}
              </a>
              <a
                href="#"
                className="block text-black px-3 py-2 rounded-md font-medium text-lg"
              >
                {textContent.contactLens}
              </a>
              <a
                href="#"
                className="block text-black px-3 py-2 rounded-md font-medium text-lg"
              >
                {textContent.eyeframes}
              </a>
            </div>

            <div className="flex justify-around pb-4 border-t border-gray-200">
              <RiSearchLine className="text-2xl cursor-pointer font-medium" />
              <BsPerson className="text-xl cursor-pointer font-medium" />
              <div className="relative">
                <RiShoppingBag2Line className="text-xl cursor-pointer font-medium " />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

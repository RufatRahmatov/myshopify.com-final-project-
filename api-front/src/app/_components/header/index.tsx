"use client";
import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { BiMenu, BiX } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { RiShoppingBag2Line } from "react-icons/ri";

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
    if (language === "Azərbaycan") {
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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".dropdown")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full">
      <div className="bg-black text-white text-sm flex justify-between px-4 py-3">
        <div className="relative left-12">{textContent.helpline}</div>
        <div className="">{textContent.orders}</div>
        <div className="flex items-center space-x-4">
          <div className="relative dropdown">
            <button
              onClick={() => toggleDropdown("Currency")}
              className="inline-flex items-center"
            >
              {selectedCurrency}{" "}
              <IoIosArrowDown
                className={`ml-1 transition-transform duration-300 ${
                  openDropdown === "Currency" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <Transition
              show={openDropdown === "Currency"}
              enter="transition ease-out duration-300 transform"
              enterFrom="opacity-0 -translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-200 transform"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-4"
            >
              <div className="absolute right-0 mt-2 bg-black text-white py-2 px-4 shadow-lg rounded">
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
            </Transition>
          </div>

          <div className="relative dropdown">
            <button
              onClick={() => toggleDropdown("Language")}
              className="inline-flex items-center mr-12"
            >
              {selectedLanguage}{" "}
              <IoIosArrowDown
                className={`ml-1 transition-transform duration-300 ${
                  openDropdown === "Language" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <Transition
              show={openDropdown === "Language"}
              enter="transition ease-out duration-300 transform"
              enterFrom="opacity-0 -translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-200 transform"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-4"
            >
              <div className="absolute right-8 mt-2 bg-black text-gray-300 py-5 px-5 shadow-lg rounded font-medium">
                <div
                  className="cursor-pointer border-b-2 border-transparent hover:border-white"
                  onClick={() => handleLanguageChange("English")}
                >
                  English
                </div>
                <div
                  className="cursor-pointer mt-3 border-b-2 border-transparent hover:border-white"
                  onClick={() => handleLanguageChange("Azərbaycan")}
                >
                  Azərbaycan
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>

      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className=" relative flex justify-start">
              <span className=" absolute right-[190px] text-2xl font-bold bottom-[-11px]">
                Maxmod
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a
                href="#"
                className="hover:border-b-2 hover:border-black font-medium text-lg"
              >
                {textContent.home}
              </a>

              <button
                onClick={() => toggleDropdown("Pages")}
                className="border-b-2 border-transparent hover:border-black font-medium text-lg inline-flex items-center"
              >
                {textContent.pages} <IoIosArrowDown className="ml-1" />
              </button>

              <button
                onClick={() => toggleDropdown("Template")}
                className="border-b-2 border-transparent hover:border-black font-medium text-lg inline-flex items-center"
              >
                {textContent.template} <IoIosArrowDown className="ml-1" />
              </button>

              <a
                href="#"
                className="hover:border-b-2 hover:border-black font-medium text-lg"
              >
                {textContent.collection}
              </a>
              <a
                href="#"
                className="hover:border-b-2 hover:border-black font-medium text-lg"
              >
                {textContent.contactLens}
              </a>
              <a
                href="#"
                className="hover:border-b-2 hover:border-black font-medium text-lg"
              >
                {textContent.eyeframes}
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4 relative left-[280px]">
              <RiSearchLine className="text-2xl cursor-pointer" />
              <IoPersonOutline className="text-2xl cursor-pointer" />
              <RiShoppingBag2Line className="text-2xl cursor-pointer" />
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

        {/* Mobile Menu */}
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
              <IoPersonOutline className="text-2xl cursor-pointer font-medium" />
              <RiShoppingBag2Line className="text-2xl cursor-pointer font-medium" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

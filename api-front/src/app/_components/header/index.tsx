"use client";
import Link from "next/link";
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
        <div className="relative left-12 font-medium">
          {textContent.helpline}
        </div>
        <div className="font-medium">{textContent.orders}</div>

        <div className="flex items-center space-x-4">
          <div className="relative dropdown font-medium">
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
              <div className="absolute right-0 mt-2 bg-black text-white py-2 px-4 shadow-lg rounded z-50 font-medium">
                <div
                  className="cursor-pointer font-medium"
                  onClick={() => setSelectedCurrency("USD")}
                >
                  USD
                </div>
                <div
                  className="cursor-pointer mt-1 font-medium"
                  onClick={() => setSelectedCurrency("AZN")}
                >
                  India
                </div>
              </div>
            </Transition>
          </div>

          <div className="relative dropdown">
            <button
              onClick={() => toggleDropdown("Language")}
              className="inline-flex items-center mr-12 font-medium"
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
              <div className="absolute z-50 right-8 mt-2 bg-black text-gray-300 py-5 px-5 shadow-lg rounded font-medium">
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
            <div className="relative flex justify-start">
              <span className="absolute right-[179px] text-[1.6rem] font-bold bottom-[-15px]">
                Maxmod
              </span>
            </div>

            <div className="hidden md:flex space-x-8 ml-16">
              <a
                href="#"
                className="hover:border-b-2 hover:border-black font-medium text-lg"
              >
                {textContent.home}
              </a>

              <div className="relative dropdown">
                {" "}
                <button
                  onClick={() => toggleDropdown("Pages")}
                  className="border-b-2 border-transparent hover:border-black font-medium text-lg inline-flex items-center"
                >
                  {textContent.pages}
                  <IoIosArrowDown
                    className={`ml-1 mt-1 text-sm transition-transform duration-300 ${
                      openDropdown === "Pages" ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <Transition
                  show={openDropdown === "Pages"}
                  enter="transition ease-out duration-200 transform"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-200 transform"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-4"
                  unmount={true}
                >
                  <div className="absolute left-[-690px] mt-3 w-[1908px] bg-white shadow-lg rounded p-8 flex space-x-16 z-50">
                    <div className="relative left-[29px]">
                      <h2 className="text-[1.05rem]  font-medium mb-2 cursor-pointer">
                        OTHER PAGES
                      </h2>
                      <Link
                        href="/about-us"
                        className=" block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform"
                      >
                        About us
                      </Link>
                      <Link
                        href="/contact"
                        className="block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform mt-2"
                      >
                        Contact
                      </Link>
                      <Link
                        href="/search"
                        className="block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform mt-2"
                      >
                        Search
                      </Link>
                    </div>
                    <div className="relative left-[300px]">
                      <h2 className="text-[1.05rem]  font-medium mb-2">
                        POLICY PAGES
                      </h2>
                      <p className="block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform cursor-pointer">
                        Privacy Policy
                      </p>
                      <p className="block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform mt-2 cursor-pointer">
                        Refund Policy
                      </p>
                      <p className="block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform mt-2 cursor-pointer">
                        Terms of Service
                      </p>
                    </div>
                    <div className="relative left-[560px]">
                      <h2 className="text-[1.05rem]  font-medium mb-2 cursor-pointer">
                        BUY THEME!
                      </h2>
                      <p className="block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform  cursor-pointer">
                        Documentation
                      </p>
                      <p className="block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform mt-2 cursor-pointer">
                        Get Support
                      </p>
                      <p className="block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform mt-2 cursor-pointer">
                        Create Shopify Account
                      </p>
                    </div>
                  </div>
                </Transition>
              </div>

              <div className="relative dropdown">
                <button
                  onClick={() => toggleDropdown("Template")}
                  className="border-b-2 border-transparent hover:border-black font-medium text-lg inline-flex items-center"
                >
                  {textContent.template}
                  <IoIosArrowDown
                    className={`ml-1 mt-1 text-sm transition-transform duration-300 ${
                      openDropdown === "Template" ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <Transition
                  show={openDropdown === "Template"}
                  enter="transition ease-out duration-300 transform"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-200 transform"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-4"
                  unmount={true}
                >
                  <div className="absolute left-[-790px] mt-3 w-[1908px] bg-white shadow-lg rounded p-8 flex space-x-16 z-50">
                    <div className="relative left-[29px]">
                      <h2 className="text-[1.2rem]  font-medium mb-2 cursor-pointer">
                        Collection Templates
                      </h2>
                      <Link
                        href="/layout"
                        className=" block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform"
                      >
                        Layout 01
                      </Link>
                      <Link
                        href="/layout"
                        className="block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform mt-2"
                      >
                        Layout 02
                      </Link>
                      <Link
                        href="/layout"
                        className="block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform mt-2"
                      >
                        Layout 03
                      </Link>
                    </div>
                    <div className="relative left-[270px]">
                      <h2 className="text-[1.2rem]  font-medium mb-2 cursor-pointer">
                        Collection Templates
                      </h2>
                      <Link
                        href="/layout"
                        className=" block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform"
                      >
                        Layout 01
                      </Link>
                      <Link
                        href="/layout"
                        className="block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform mt-2"
                      >
                        Layout 02
                      </Link>
                      <Link
                        href="/layout"
                        className="block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform mt-2"
                      >
                        Layout 03
                      </Link>
                    </div>
                  </div>
                </Transition>
              </div>

              <button
                onClick={() => toggleDropdown("Collection")}
                className="border-b-2 border-transparent hover:border-black font-medium text-lg inline-flex items-center"
              >
                {textContent.collection}
                <IoIosArrowDown className="ml-1 mt-1 text-sm" />
              </button>

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
      </nav>
    </header>
  );
};

export default Header;

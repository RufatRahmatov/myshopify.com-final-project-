"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { BiMenu, BiX } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { RiShoppingBag2Line } from "react-icons/ri";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  profileImage?: string;
}

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
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
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData) as User);
    }
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };
  const handleLoginClick = () => {
    window.location.href = "/login"; // Login sayfasına yönlendirme
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
        <div className="relative left-12 font-medium md:block hidden">
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
              <div className="absolute  hidden right-0 mt-2  text-white py-2 px-4 shadow-lg rounded z-50 font-medium">
                <div
                  className="cursor-pointer font-medium  "
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

          <div className="relative dropdown md:block hidden">
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
                Eyeglass
              </span>
            </div>

            <div className="hidden md:flex space-x-8 ml-16 ml-[160px]">
              <Link
                href="/home"
                className="hover:border-b-2 hover:border-black font-medium text-lg"
              >
                {textContent.home}
              </Link>
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
                        href="/aboutus"
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
                  <div
                    className="
        absolute left-[-795px] mt-3 
        w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1915px] 
        bg-white shadow-lg rounded p-8 flex space-x-16 z-50
      "
                  >
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
              <div className="relative dropdown">
                <button
                  onClick={() => toggleDropdown("Collection")}
                  className="border-b-2 border-transparent hover:border-black font-medium text-lg inline-flex items-center"
                >
                  {textContent.collection}
                  <IoIosArrowDown
                    className={`ml-1 mt-1 text-sm transition-transform duration-300 ${
                      openDropdown === "Collection" ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <Transition
                  show={openDropdown === "Collection"}
                  enter="transition ease-out duration-300 transform"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-200 transform"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-4"
                  unmount={true}
                >
                  <div className="absolute left-[-908px] mt-3  w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1900px] bg-white shadow-lg rounded p-8 grid grid-cols-4 gap-8 z-50">
                    <div className="relative left-[24px]">
                      <h2 className="text-[1.05rem] font-medium mb-3 text-black">
                        EYEGLASSES STYLE
                      </h2>
                      <Link
                        href="/eyeglasses"
                        className="block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform"
                      >
                        Eyeglasses
                      </Link>
                      <Link
                        href="/computer-glasses"
                        className="block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform mt-2"
                      >
                        Computer glasses
                      </Link>
                    </div>

                    <div className="relative left-[24px]">
                      <h2 className="text-[1.05rem] font-medium mb-3 text-black">
                        CATEGORY
                      </h2>
                      <Link
                        href="/power-sunglasses"
                        className="block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform "
                      >
                        Power sunglasses
                      </Link>
                      <Link
                        href="/kids-glasses"
                        className="block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform mt-2"
                      >
                        Kids glasses
                      </Link>
                    </div>

                    <div className="relative left-[24px]">
                      <h2 className="text-[1.05rem] font-medium mb-3 text-black">
                        COLLECTION
                      </h2>
                      <Link
                        href="/sunglasses"
                        className="block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform mt-2"
                      >
                        Sunglasses
                      </Link>
                      <Link
                        href="/swimming-glasses"
                        className="block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform mt-2"
                      >
                        Swimming glasses
                      </Link>
                    </div>

                    <div className="relative left-[24px]">
                      <h2 className="text-[1.05rem] font-medium mb-3 text-black">
                        SUNGLASSES
                      </h2>
                      <Link
                        href="/optical-collection"
                        className="block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform mt-2"
                      >
                        Optical Collection
                      </Link>
                      <Link
                        href="/eyewearlabs"
                        className="block font-medium text-[1.05rem] text-gray-600 hover:text-black transition ease-in-out duration-100 transform mt-2"
                      >
                        Eyewearlabs
                      </Link>
                    </div>
                  </div>
                </Transition>
              </div>
              <a
                href="#"
                className="hover:border-b-2 hover:border-black font-medium text-lg"
              >
                {textContent.contactLens}
              </a>
              <Link
                href="/eyeframes"
                className="hover:border-b-2 hover:border-black font-medium text-lg"
              >
                {textContent.eyeframes}
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4 relative left-[380px]">
              <RiSearchLine className="text-2xl cursor-pointer" />
              {user ? (
                <div className="flex items-center space-x-2">
                  <img
                    src={user.profileImage || "/default-profile.png"}
                    alt="User Profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <IoPersonOutline className="text-2xl cursor-pointer" />
                  <span className="text-lg font-medium">
                    Hi, {user.firstname}
                  </span>
                </div>
              ) : (
                <Link href="/login" legacyBehavior>
                  <a className="flex items-center space-x-2">
                    <IoPersonOutline className="text-2xl cursor-pointer" />
                    <span className="text-lg font-medium"></span>
                  </a>
                </Link>
              )}
              <RiShoppingBag2Line
                className="relative right-2 text-2xl cursor-pointer "
                onClick={() => setIsCartOpen(true)}
              />
            </div>

            <Transition show={isCartOpen}>
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setIsCartOpen(false)}
              ></div>

              <div
                className={`fixed right-0 top-0 w-[420px] bg-white h-full z-50 transition ease-in-out transform duration-300 ${
                  isCartOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="absolute top-4 right-4 text-2xl"
                >
                  &times;
                </button>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-center">
                    Your cart is empty
                  </h2>
                  <button className="  flex justify-center mt-4 px-4 py-2 border-2 border-black bg-black text-white rounded-full font-medium hover:bg-white hover:text-black ransition ease-in-out transform duration-300">
                    Continue Shopping
                  </button>
                  <div className="mt-6">
                    <img
                      src="https://maxmod-goggles.myshopify.com/cdn/shop/collections/6.webp?v=1713439281&width=1500"
                      alt="Eyeglasses"
                      className="w-full rounded-xl mt-[500px]"
                    />
                    <p className="text-center mt-2 font-bold text-lg">
                      Eyeglasses
                    </p>
                    <p className="text-center text-gray-600 font-medium">
                      7 items
                    </p>
                  </div>
                </div>
              </div>
            </Transition>

            <div className="relative">
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

              <div
                className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg z-50 transform ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out`}
              >
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-4">Menu</h2>
                  <ul className="space-y-4">
                    {[
                      "Home",
                      "Pages",
                      "Template",
                      "Collection",
                      "Contact Lens",
                      "Eyeframes",
                    ].map((item) => (
                      <li key={item} className="hover:text-gray-700">
                        <a
                          href="#"
                          className="flex justify-between items-center"
                        >
                          {item}
                          <span className="text-gray-500">→</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6">
                  <button
                    className="absolute top-4 right-4 text-2xl text-black focus:outline-none"
                    onClick={() => setIsOpen(false)}
                  >
                    <BiX />
                  </button>

                  <div className="flex flex-col h-full justify-between ">
                    <div className=" relative space-y-8 mt-[100px]">
                      <button
                        onClick={handleLoginClick}
                        className="flex items-center text-black font-medium text-lg hover:underline"
                      >
                        <span className="mr-2">👤</span> Log in
                      </button>
                      <p className="text-black text-sm font-medium">
                        United States | AZE | English
                      </p>
                    </div>

                    <div className="flex flex-col  space-y-6 mt-[40px]">
                      <div className="flex space-x-6 text-2xl text-black">
                        <RiTwitterXLine />
                        <FaFacebook />
                        <FaYoutube />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {isOpen && (
                <div
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 bg-black bg-opacity-50 z-40"
                />
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

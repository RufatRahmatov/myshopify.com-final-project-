"use client";

import { useState } from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
// import Image from "next/image";
const Footer = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections((prevSections) =>
      prevSections.includes(section)
        ? prevSections.filter((s) => s !== section)
        : [...prevSections, section]
    );
  };

  return (
    <footer className="bg-black text-white mt-10">
      <div className="relative  top-10 hidden md:block max-w-7xl mx-auto px-4 py-8 max-w-[1840px] ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h4 className="font-bold text-2xl mb-4">CONTACT INFO</h4>
            <div className=" relative top-6 space-y-2.5  ">
              <p className="">Address: 4800 San Mateo Ln NE</p>
              <p>Call Us: (+91) - 540-025-124553</p>
              <p>Email: test@example.com</p>
              <p>Hours: 9:00 - 18:00, Mon - Sat</p>
            </div>
          </div>

          <div className="">
            <h4 className="font-bold text-2xl mb-4">INFORMATION</h4>
            <ul className="relative top-6 space-y-2.5 ">
              {["Home", "Search", "Blog", "About us", "Contact"].map((item) => (
                <li key={item} className=" border-white pb-1">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-2xl mb-4">PRODUCT</h4>
            <ul className="relative top-6 space-y-2.5">
              {[
                "All products",
                "Solutions at Eyewearlabs",
                "ClarityPrime Glass",
                "Gaming Glasses",
                "Eyewearlab",
              ].map((item) => (
                <li key={item} className="  pb-1">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-2xl mb-4">SHOP</h4>
            <ul className=" relative top-6 space-y-2.5">
              {[
                "All collections",
                "Computer glasses",
                "Eyeglasses",
                "Power sunglasses",
                "Swimming glasses",
              ].map((item) => (
                <li key={item} className=" pb-1">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-2xl mb-4">OUR SERVICE</h4>
            <ul className="relative top-6 space-y-2.5">
              {[
                "Kids glasses",
                "Sunglasses",
                "Privacy Policy",
                "Terms of Service",
                "Refund Policy",
              ].map((item) => (
                <li key={item} className=" pb-1">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-between mt-24">
          <div className="flex space-x-4">
            <div>
              <div className="font-medium">Country/region</div>
              <button className=" flex bg-white text-black font-medium px-6 py-2 rounded-lg mt-4">
                United State | AZE
                <IoIosArrowDown className="relative left-2 top-1" />
              </button>
            </div>
            <div>
              {" "}
              <div className="font-medium">Language</div>
              <button className=" flex bg-white text-black font-medium px-6 py-2 rounded-lg mt-4">
                English
                <IoIosArrowDown className="relative left-2 top-1" />
              </button>
            </div>
          </div>
          <div>
            <div className="font-medium text-center">Payments Available</div>
            <div className="mt-4 flex gap-3">
              <div>
                <img
                  className="w-10 bg-white py-2 px-1 rounded-sm"
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                  alt="Visa"
                />
              </div>

              <div>
                <img
                  className="w-10 bg-white py-2 px-1 rounded-sm"
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                />
              </div>

              <div>
                <img
                  className="w-10 bg-white py-2 px-1 rounded-sm"
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                  alt="Visa"
                />
              </div>

              <div>
                <img
                  className="w-10 bg-white py-2 px-1 rounded-sm"
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="font-medium ">Join Our Social Media</div>
            <div className="flex  gap-4 justify-and mt-6 cursor-pointer">
              <div>
                <a href="https://www.facebook.com">
                  <FaFacebook className="text-xl hover:text-gray-400" />
                </a>
              </div>
              <div>
                <a href="https://www.youtube.com">
                  {" "}
                  <FaYoutube className="text-2xl hover:text-gray-400" />
                </a>
              </div>
              <div>
                <a href="https://www.twitter.com">
                  {" "}
                  <BsTwitterX className="text-xl hover:text-gray-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden px-4 py-8">
        {["CONTACT INFO", "INFORMATION", "PRODUCT", "SHOP", "OUR SERVICE"].map(
          (section) => (
            <div key={section} className="mb-4">
              <button
                onClick={() => toggleSection(section)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="font-bold">{section}</span>
                {openSections.includes(section) ? (
                  <IoRemoveSharp className="text-xl" />
                ) : (
                  <IoAddSharp className="text-xl" />
                )}
              </button>

              {openSections.includes(section) && (
                <div className="mt-2 pl-4 space-y-2">
                  {section === "CONTACT INFO" && (
                    <>
                      <p>Address: 4800 San Mateo Ln NE</p>
                      <p>Call Us: (+91) - 540-025-124553</p>
                      <p>Email: test@example.com</p>
                      <p>Hours: 9:00 - 18:00, Mon - Sat</p>
                    </>
                  )}

                  {section === "INFORMATION" && (
                    <ul>
                      {["Home", "Search", "Blog", "About us", "Contact"].map(
                        (item) => (
                          <li
                            key={item}
                            className="hover:border-b-2 border-white pb-1"
                          >
                            <a href="#">{item}</a>
                          </li>
                        )
                      )}
                    </ul>
                  )}

                  {section === "PRODUCT" && (
                    <ul>
                      {[
                        "All products",
                        "Solutions at Eyewearlabs",
                        "ClarityPrime Glass",
                        "Gaming Glasses",
                        "Eyewearlab",
                      ].map((item) => (
                        <li
                          key={item}
                          className="hover:border-b-2 border-white pb-1"
                        >
                          <a href="#">{item}</a>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section === "SHOP" && (
                    <ul>
                      {[
                        "All collections",
                        "Computer glasses",
                        "Eyeglasses",
                        "Power sunglasses",
                        "Swimming glasses",
                      ].map((item) => (
                        <li
                          key={item}
                          className="hover:border-b-2 border-white pb-1"
                        >
                          <a href="#">{item}</a>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section === "OUR SERVICE" && (
                    <ul>
                      {[
                        "Kids glasses",
                        "Sunglasses",
                        "Privacy Policy",
                        "Terms of Service",
                        "Refund Policy",
                      ].map((item) => (
                        <li
                          key={item}
                          className="hover:border-b-2 border-white pb-1"
                        >
                          <a href="#">{item}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          )
        )}

        <div className="mt-4">
          <div className="flex justify-between">
            <div>Country/region</div>
            <div>Language</div>
          </div>

          <div className="flex justify-center space-x-4 mt-4">
            <FaFacebook />
            <FaYoutube />
            <BsTwitterX />
          </div>

          <div className="mt-4">Payments Available</div>
        </div>
      </div>

      <div className=" flex justify-between bg-black text-white font-medium text-center py-4 mx-10 mt-10">
        <p className="text-sm">
          © 2024, maxmod-theme-goggles (password-1) Powered by Shopify
        </p>
        <p className="text-sm space-x-4">
          <a href="#" className="hover:underline">
            Refund policy
          </a>
          <a href="#" className="hover:underline">
            Privacy policy
          </a>
          <a href="#" className="hover:underline">
            Terms of service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

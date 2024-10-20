"use client";

import { useState } from "react";
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";

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
      <div className="hidden md:block max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h4 className="font-bold mb-4">CONTACT INFO</h4>
            <p>Address: 4800 San Mateo Ln NE</p>
            <p>Call Us: (+91) - 540-025-124553</p>
            <p>Email: test@example.com</p>
            <p>Hours: 9:00 - 18:00, Mon - Sat</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">INFORMATION</h4>
            <ul className="space-y-2">
              {["Home", "Search", "Blog", "About us", "Contact"].map((item) => (
                <li key={item} className="hover:border-b-2 border-white pb-1">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">PRODUCT</h4>
            <ul className="space-y-2">
              {[
                "All products",
                "Solutions at Eyewearlabs",
                "ClarityPrime Glass",
                "Gaming Glasses",
                "Eyewearlab",
              ].map((item) => (
                <li key={item} className="hover:border-b-2 border-white pb-1">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">SHOP</h4>
            <ul className="space-y-2">
              {[
                "All collections",
                "Computer glasses",
                "Eyeglasses",
                "Power sunglasses",
                "Swimming glasses",
              ].map((item) => (
                <li key={item} className="hover:border-b-2 border-white pb-1">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">OUR SERVICE</h4>
            <ul className="space-y-2">
              {[
                "Kids glasses",
                "Sunglasses",
                "Privacy Policy",
                "Terms of Service",
                "Refund Policy",
              ].map((item) => (
                <li key={item} className="hover:border-b-2 border-white pb-1">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <div className="flex space-x-4">
            <div>Country/region</div>
            <div>Language</div>
          </div>
          <div>Payments Available</div>
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
            <FaTwitter />
          </div>

          <div className="mt-4">Payments Available</div>
        </div>
      </div>

      <div className="bg-black text-white text-center py-4">
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

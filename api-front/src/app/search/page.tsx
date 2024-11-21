"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { glassesData } from "../data/glasses";
import Layouts from "../_layouts/layout";

const Spinner = () => {
  return (
    <div
      className="animate-spin inline-block h-10 w-10 border-4 border-current border-t-transparent text-black rounded-full"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

const Search: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [filteredGlasses, setFilteredGlasses] = useState(glassesData);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setQuery(value);

    const filtered = glassesData.filter((glass) =>
      glass.name.toLowerCase().includes(value)
    );
    setFilteredGlasses(filtered);
  };

  return (
    <Layouts>
      <main>
        {loading ? (
          <div className="min-h-screen flex items-center justify-center ">
            <Spinner />
          </div>
        ) : (
          <div className="relative  min-h-screen flex items-center justify-center ">
            <div className="w-full max-w-3xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={handleSearch}
                  placeholder="Search for eyeglasses..."
                  className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />

                <div className="absolute left-3 top-2.5 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.9 14.32a8 8 0 111.414-1.414l4.243 4.243a1 1 0 01-1.414 1.414l-4.243-4.243zM8 14a6 6 0 100-12 6 6 0 000 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {query && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 p-4 z-10">
                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2 px-2 border-b pb-2">
                          Suggestions
                        </h3>
                        <ul>
                          <li className="text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 cursor-pointer">
                            Kids Glasses
                          </li>
                          <li className="text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 cursor-pointer">
                            Swimming Glasses
                          </li>
                          <li className="text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 cursor-pointer">
                            Power Sunglasses
                          </li>
                        </ul>
                        <div className="mt-6">
                          <h3 className="text-lg font-medium mb-2 px-2 border-b pb-2">
                            Pages
                          </h3>
                          <ul>
                            <li className="text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 cursor-pointer">
                              About us
                            </li>
                            <li className="text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 cursor-pointer">
                              Home-all-layout
                            </li>
                            <li className="text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 cursor-pointer">
                              Contact
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-span-2">
                        <h3 className="text-lg font-bold mb-2">Products</h3>
                        <div className="grid grid-cols-1 gap-4">
                          {filteredGlasses.map((glass) => (
                            <div
                              key={glass.id}
                              className="flex items-center space-x-4 border-b pb-2 last:border-b-0"
                            >
                              <Image
                                src={glass.image}
                                alt={glass.name}
                                width={50}
                                height={50}
                                className="rounded"
                              />
                              <div>
                                <h3 className="font-medium text-sm">
                                  {glass.name}
                                </h3>
                                <p className="text-gray-500 text-xs">
                                  Price: ${glass.price}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-blue-500 mt-4 text-sm">
                      Search for &quot;{query}&quot; →
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </Layouts>
  );
};

export default Search;

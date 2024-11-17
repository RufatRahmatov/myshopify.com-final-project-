"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Layouts from "../_layouts/layout";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
interface Color {
  name: string;
  price: number;
  image: string;
  hoverImage: string;
}

interface Product {
  id: string;
  title: string;
  category: string;
  basePrice: number;
  colors: Color[];
}

interface Filter {
  type: string;
  value: string | number | [number, number];
}

const Eyeframes: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<{
    color: string;
    priceRange: [number, number];
    category: string;
  }>({
    color: "",
    priceRange: [0, 10000],
    category: "",
  });
  const [selectedFilters, setSelectedFilters] = useState<Filter[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list" | "compact">("grid");

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/eyeframs");
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (filters.color) {
      filtered = filtered.filter((product) =>
        product.colors.some((color) => color.name === filters.color)
      );
    }

    if (filters.category) {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.priceRange) {
      filtered = filtered.filter(
        (product) =>
          product.basePrice >= filters.priceRange[0] &&
          product.basePrice <= filters.priceRange[1]
      );
    }

    setFilteredProducts(filtered);
  }, [filters, products]);

  const handleFilterChange = (
    type: string,
    value: string | number | [number, number]
  ) => {
    if (type === "priceRange" && Array.isArray(value)) {
      setFilters({ ...filters, priceRange: value });
    } else if (typeof value === "string" || typeof value === "number") {
      setFilters({ ...filters, [type]: value });
    }
    if (!selectedFilters.some((filter) => filter.value === value)) {
      setSelectedFilters([...selectedFilters, { type, value }]);
    }
  };

  const handleRemoveFilter = (value: string | number | [number, number]) => {
    const updatedFilters = selectedFilters.filter(
      (filter) => filter.value !== value
    );
    setSelectedFilters(updatedFilters);

    if (typeof value === "string" || typeof value === "number") {
      setFilters({ ...filters, [value]: "" });
    }
  };

  return (
    <Layouts>
      <main>
        <div className="flex">
          {/* Filter Sidebar */}
          <div className="w-1/4 p-4 border-r">
            <h3 className="text-lg font-bold mb-4">Filter:</h3>

            {/* Selected Filters */}
            {selectedFilters.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold">Selected Filters:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedFilters.map((filter) => (
                    <div
                      key={String(filter.value)}
                      className="bg-gray-200 px-4 py-2 rounded-full flex items-center gap-2"
                    >
                      <p className="text-xs">
                        {filter.type}: {filter.value}
                      </p>
                      <button
                        className="text-red-500 text-xs font-bold"
                        onClick={() => handleRemoveFilter(filter.value)}
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  className="mt-2 text-sm text-blue-500 underline"
                  onClick={() => {
                    setFilters({
                      color: "",
                      priceRange: [0, 10000],
                      category: "",
                    });
                    setSelectedFilters([]);
                  }}
                >
                  Remove all
                </button>
              </div>
            )}

            {/* Accordion Style Filters */}
            <div className="mb-6">
              <details className="group">
                <summary className="text-sm font-semibold cursor-pointer flex justify-between items-center">
                  Availability
                  <span className="group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="flex flex-col mt-2 gap-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      onChange={() =>
                        handleFilterChange("availability", "In Stock")
                      }
                    />
                    <span className="text-sm">In Stock</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      onChange={() =>
                        handleFilterChange("availability", "Out Of Stock")
                      }
                    />
                    <span className="text-sm">Out Of Stock</span>
                  </label>
                </div>
              </details>
            </div>

            <div className="mb-6">
              <details className="group">
                <summary className="text-sm font-semibold cursor-pointer flex justify-between items-center">
                  Price
                  <span className="group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="mt-2">
                  <p className="text-xs text-gray-500 mb-2">
                    The highest price is Rs.{" "}
                    {Math.max(...products.map((p) => p.basePrice), 0)}
                  </p>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      placeholder="From"
                      className="border rounded px-2 py-1 text-sm w-20"
                      onChange={(e) =>
                        handleFilterChange("priceRange", [
                          Number(e.target.value),
                          filters.priceRange[1],
                        ])
                      }
                    />
                    <input
                      type="number"
                      placeholder="To"
                      className="border rounded px-2 py-1 text-sm w-20"
                      onChange={(e) =>
                        handleFilterChange("priceRange", [
                          filters.priceRange[0],
                          Number(e.target.value),
                        ])
                      }
                    />
                  </div>
                </div>
              </details>
            </div>

            <div className="mb-6">
              <details className="group">
                <summary className="text-sm font-semibold cursor-pointer flex justify-between items-center">
                  Color
                  <span className="group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {[
                    "Black",
                    "Blue",
                    "Gold",
                    "Gray",
                    "Green",
                    "Orange",
                    "Pink",
                    "Red",
                    "Silver",
                    "White",
                  ].map((color) => (
                    <label key={color} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={color}
                        onChange={() => handleFilterChange("color", color)}
                      />
                      <span className="text-sm">{color}</span>
                    </label>
                  ))}
                </div>
              </details>
            </div>

            <div className="mb-6">
              <details className="group">
                <summary className="text-sm font-semibold cursor-pointer flex justify-between items-center">
                  Brand
                  <span className="group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="flex flex-col mt-2 gap-2">
                  {["Electronics", "Glass", "Optical"].map((brand) => (
                    <label key={brand} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={brand}
                        onChange={() => handleFilterChange("category", brand)}
                      />
                      <span className="text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </details>
            </div>
          </div>

          {/* Products Section */}
          <div className="w-3/4 p-4">
            <div className="flex justify-start gap-4 mb-4">
              <button onClick={() => setViewMode("grid")}>
                <TfiLayoutGrid4Alt className="text-2xl" />
              </button>
              <button onClick={() => setViewMode("list")}>
                <BsGrid3X3GapFill className="text-2xl" />
              </button>
              <button onClick={() => setViewMode("compact")}>
                <TfiLayoutGrid2Alt className="text-2xl" />
              </button>
            </div>

            <div
              className={`grid gap-4 ${
                viewMode === "grid"
                  ? "grid-cols-3"
                  : viewMode === "list"
                  ? "grid-cols-1"
                  : "grid-cols-2"
              }`}
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={product.colors[0]?.image || ""}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="w-full rounded-lg"
                  />
                  <h3 className="text-lg font-bold mt-2">{product.title}</h3>
                  <p className="text-sm text-gray-600">{product.category}</p>
                  <p className="text-sm text-gray-800 font-semibold">
                    Rs. {product.basePrice}
                  </p>
                  <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded mt-2 hover:bg-blue-600">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layouts>
  );
};

export default Eyeframes;

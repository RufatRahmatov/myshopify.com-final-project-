"use client";

import { useState, useEffect } from "react";
import ProductCard from "../_components/productcard";
import Modal from "../_components/productmodal";
import Layout from "../_components/layout/layout";
import TopBar from "../_components/topbar/topbar";

interface Product {
  _id?: string;
  name: string;
  product: string;
  category: string;
  addedDate?: string;
  price: number;
  quantity: number;
  status: string;
  image: string;
  __v?: number;
}

const defaultProduct: Product = {
  name: "",
  product: "",
  category: "",
  price: 0,
  quantity: 0,
  status: "active",
  image: "",
};

export default function Product() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/shop-cards");
      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSave = async (product: Product) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/shop-cards${
          product._id ? `/${product._id}` : ""
        }`,
        {
          method: product._id ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        }
      );

      if (response.ok) {
        fetchProducts();
        setIsModalOpen(false);
        setCurrentProduct(null);
      } else {
        console.error("Error saving product");
      }
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/shop-cards/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== id)
        );
      } else {
        console.error("Error deleting product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const openModal = (product: Product | null = defaultProduct) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout>
      <TopBar />
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold  ">Product Management</h1>
          <button
            onClick={() => openModal()}
            className="flex items-center gap-1 bg-black text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg hover:bg-white hover:text-black font-medium border-2 border-black text-xs sm:text-sm transition duration-300 "
          >
            Add Product
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onEdit={() => openModal(product)}
                onDelete={() => handleDelete(product._id!)}
              />
            ))
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>
        {isModalOpen && (
          <Modal
            product={currentProduct!}
            onSave={handleSave}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </Layout>
  );
}

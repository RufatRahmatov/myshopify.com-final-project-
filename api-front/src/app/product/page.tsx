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
  const [products, setProducts] = useState<Product[]>([]); // Başlangıçta boş bir dizi
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Modal durumu
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null); // Seçili ürün

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
        fetchProducts(); // Ürünleri yeniden yükle
        setIsModalOpen(false); // Modal'ı kapat
        setCurrentProduct(null); // Seçili ürünü sıfırla
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
    setCurrentProduct(product); // Yeni ürün eklemek için varsayılan ürün bilgisi veya düzenleme için seçili ürünü ayarla
    setIsModalOpen(true); // Modal'ı aç
  };

  useEffect(() => {
    fetchProducts(); // Sayfa yüklendiğinde ürünleri getir
  }, []);

  return (
    <Layout>
      <TopBar />
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Product Management</h1>
          <button
            onClick={() => openModal()} // Yeni ürün eklemek için modal'ı aç
            className="bg-green-500 text-white px-4 py-2 rounded-md"
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
                onEdit={() => openModal(product)} // Düzenleme için modal'ı aç
                onDelete={() => handleDelete(product._id!)} // Ürünü sil
              />
            ))
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>
        {isModalOpen && (
          <Modal
            product={currentProduct!} // Modal'da gösterilecek ürün
            onSave={handleSave} // Kaydetme işlevi
            onClose={() => setIsModalOpen(false)} // Modal'ı kapatma işlevi
          />
        )}
      </div>
    </Layout>
  );
}

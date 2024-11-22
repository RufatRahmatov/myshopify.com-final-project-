"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Layout from "../_components/layout/layout";
import TopBar from "../_components/topbar/topbar";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
interface Product {
  _id: string;
  product: string;
  category: string;
  addedDate: string;
  price: number;
  quantity: number;
  status: string;
  image: string;
  __v?: number;
}

const Table: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/shop-cards");
      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/shop-cards/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      if (response.ok && result.success) {
        setProducts((prev) => prev.filter((product) => product._id !== id));
        alert("Product deleted successfully");
      } else {
        alert("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setIsEditing(true);
  };

  const handleUpdate = async () => {
    if (!selectedProduct) return;

    try {
      const response = await fetch(
        `http://localhost:3001/api/shop-cards/${selectedProduct._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(selectedProduct),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setProducts((prev) =>
          prev.map((product) =>
            product._id === selectedProduct._id ? selectedProduct : product
          )
        );
        alert("Product updated successfully");
      } else {
        alert("Failed to update product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      setIsEditing(false);
      setSelectedProduct(null);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout>
      <TopBar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
          <h2 className="text-lg font-bold mb-4">Products</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 border border-gray-200">#</th>
                  <th className="p-4 border border-gray-200 text-left">
                    Product
                  </th>
                  <th className="p-4 border border-gray-200 text-left">
                    Category
                  </th>
                  <th className="p-4 border border-gray-200 text-left">
                    Added Date
                  </th>
                  <th className="p-4 border border-gray-200 text-right">
                    Price
                  </th>
                  <th className="p-4 border border-gray-200 text-right">
                    Quantity
                  </th>
                  <th className="p-4 border border-gray-200 text-center">
                    Status
                  </th>
                  <th className="p-4 border border-gray-200 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product: Product, index) => (
                  <tr key={product._id} className="hover:bg-gray-50">
                    <td className="p-4 border border-gray-200 text-center">
                      {index + 1}
                    </td>
                    <td className="p-4 border border-gray-200 flex items-center space-x-4">
                      <Image
                        width={40}
                        height={40}
                        src={`http://localhost:3001/${product.image.replace(
                          "\\",
                          "/"
                        )}`}
                        alt={product.product}
                        className="w-10 h-10 rounded"
                      />
                      <div>
                        <p className="font-medium">{product.product}</p>
                      </div>
                    </td>
                    <td className="p-4 border border-gray-200">
                      {product.category}
                    </td>
                    <td className="p-4 border border-gray-200">
                      {new Date(product.addedDate).toLocaleDateString()}
                    </td>
                    <td className="p-4 border border-gray-200 text-right">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="p-4 border border-gray-200 text-right">
                      {product.quantity}
                    </td>
                    <td className="p-4 border border-gray-200 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          product.status.toLowerCase() === "active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {product.status}
                      </span>
                    </td>
                    <td className="p-4 border border-gray-200 text-center space-x-6">
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => handleEdit(product)}
                      >
                        <MdEdit />
                      </button>
                      <button
                        className="text-red-500 hover:underline"
                        onClick={() => deleteProduct(product._id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {isEditing && selectedProduct && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-lg font-bold mb-4">Edit Product</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUpdate();
                }}
              >
                <div className="mb-4">
                  <label className="block text-sm font-medium">
                    Product Name
                  </label>
                  <input
                    type="text"
                    value={selectedProduct.product}
                    onChange={(e) =>
                      setSelectedProduct({
                        ...selectedProduct,
                        product: e.target.value,
                      })
                    }
                    className="border p-2 rounded w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Category</label>
                  <input
                    type="text"
                    value={selectedProduct.category}
                    onChange={(e) =>
                      setSelectedProduct({
                        ...selectedProduct,
                        category: e.target.value,
                      })
                    }
                    className="border p-2 rounded w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Price</label>
                  <input
                    type="number"
                    value={selectedProduct.price}
                    onChange={(e) =>
                      setSelectedProduct({
                        ...selectedProduct,
                        price: parseFloat(e.target.value),
                      })
                    }
                    className="border p-2 rounded w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Quantity</label>
                  <input
                    type="number"
                    value={selectedProduct.quantity}
                    onChange={(e) =>
                      setSelectedProduct({
                        ...selectedProduct,
                        quantity: parseInt(e.target.value, 10),
                      })
                    }
                    className="border p-2 rounded w-full"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-gray-200 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Table;

"use client";

import { useState } from "react";

interface Product {
  _id?: string;
  name: string;
  product: string;
  category: string;
  price: number;
  quantity: number;
  status: string;
  image: string;
}

interface ModalProps {
  product: Product; // Modal'a gelen ürün
  onSave: (product: Product) => Promise<void>; // Kaydetme işlevi
  onClose: () => void; // Modal'ı kapatma işlevi
}

export default function ProductModal({ product, onSave, onClose }: ModalProps) {
  const [formData, setFormData] = useState<Product>(product);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "price" || name === "quantity" ? parseFloat(value) : value, // Sayısal alanları dönüştür
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSave(formData); // Kaydetme işlevi
    onClose(); // Modal'ı kapatma
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-1/3">
        <h2 className="text-lg font-semibold mb-4">
          {product._id ? "Edit Product" : "Add Product"}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border mb-4 p-2 rounded-md"
            required
          />
          <input
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
            placeholder="Product"
            className="w-full border mb-4 p-2 rounded-md"
            required
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full border mb-4 p-2 rounded-md"
            required
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full border mb-4 p-2 rounded-md"
            required
          />
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className="w-full border mb-4 p-2 rounded-md"
            required
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border mb-4 p-2 rounded-md"
          >
            <option value="active">active</option>
            <option value="inactive">inactive</option>
            <option value="sold">sold</option>
          </select>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full border mb-4 p-2 rounded-md"
          />
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";

interface Product {
  _id: string;
  name: string;
  category: string;
  date: string;
  price: string;
  quantity: number;
  status: string;
  image: string;
  rating: number;
}

const Tables: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3001/api/products/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setProducts((prev) => prev.filter((product) => product._id !== id));
        alert("Product deleted successfully");
      } else {
        alert("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
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
                <th className="p-4 border border-gray-200 text-right">Price</th>
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
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 rounded"
                    />
                    <div>
                      <p className="font-medium">{product.name}</p>
                    </div>
                  </td>
                  <td className="p-4 border border-gray-200">
                    {product.category}
                  </td>
                  <td className="p-4 border border-gray-200">{product.date}</td>
                  <td className="p-4 border border-gray-200 text-right">
                    {product.price}
                  </td>
                  <td className="p-4 border border-gray-200 text-right">
                    {product.quantity}
                  </td>
                  <td className="p-4 border border-gray-200 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        product.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="p-4 border border-gray-200 text-center space-x-2">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => alert("Edit functionality coming soon")}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => deleteProduct(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Tables;

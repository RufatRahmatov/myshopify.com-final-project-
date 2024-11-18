"use client";

interface Product {
  _id?: string;
  name: string;
  price: number;
  image: string; // Tam URL veya kısmi yol olabilir
  product: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onEdit: () => void;
  onDelete: () => void;
}

export default function ProductCard({
  product,
  onEdit,
  onDelete,
}: ProductCardProps) {
  const imageUrl = product.image.startsWith("http")
    ? product.image
    : `http://localhost:3001/${product.image.replace("\\", "/")}`;

  return (
    <div className="border rounded-2xl bg-white overflow-hidden border-2 border-gray-300 flex flex-col items-center hover:shadow-lg cursor-pointer transition duration-300">
      <img
        src={imageUrl}
        alt={product.name}
        className="w-[400px] h-[200px] object-cover overflow-hidden bg-white rounded-2xl mb-4 transform transition-transform duration-300 hover:scale-105"
      />

      <div className="mb-4">
        {" "}
        <h2 className="text-lg font-medium">{product.product}</h2>
        <p className=" font-medium ">{product.category}</p>
        <p className="text-gray-600 font-medium">${product.price}</p>
      </div>

      <div className="mb-4 flex space-x-6">
        <button
          onClick={onEdit}
          className="bg-black hover:bg-white hover:text-black text-white px-7 py-2 rounded-md transition duration-300 border-2 border-black"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-white text-black hover:bg-black hover:text-white  px-5 py-2 rounded-md transition duration-300 border-2 border-black"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

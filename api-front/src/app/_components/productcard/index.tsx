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
  // Eğer image bir URL içeriyorsa onu olduğu gibi kullan, değilse localhost'u ekle
  const imageUrl = product.image.startsWith("http")
    ? product.image
    : `http://localhost:3001/${product.image.replace("\\", "/")}`;

  return (
    <div className="border p-4 rounded-md shadow-md flex flex-col items-center">
      <img
        src={imageUrl}
        alt={product.name}
        className="w-32 h-32 object-cover mb-4"
      />
      <h2 className="text-lg font-semibold">{product.product}</h2>
      <p>{product.category}</p>
      <p className="text-gray-600">${product.price}</p>
      <div className="mt-4 flex space-x-2">
        <button
          onClick={onEdit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiShoppingBasketLine } from "react-icons/ri";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const Checkout: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [country, setCountry] = useState("United States");
  const [isLoading, setIsLoading] = useState(false);

  const initializeCart = async () => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        const parsedCart: CartItem[] = JSON.parse(storedCart);
        const total = parsedCart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        setCartItems(parsedCart);
        setTotalPrice(total);

        await axios.post("http://localhost:3001/api/payments", {
          items: parsedCart,
          totalPrice: total,
        });
      }
    } catch (error) {
      console.error("Error initializing cart:", error);
      toast.error("Failed to initialize cart!");
    }
  };

  const clearCart = async () => {
    try {
      await axios.delete("http://localhost:3001/api/payments");
      setCartItems([]);
      setTotalPrice(0);
      localStorage.removeItem("cart");
      toast.success("Cart cleared successfully!");
    } catch (error) {
      console.error("Error clearing cart:", error);
      toast.error("Failed to clear cart!");
    }
  };

  useEffect(() => {
    initializeCart();
  }, []);

  const handlePayNow = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Payment successful!");
      await clearCart();
    } catch (error) {
      console.error("Payment failed:", error);
      toast.error("Payment failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto max-w-8xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Contact</h2>
              <Link
                href="/login"
                className="text-black font-medium text-[18px] hover:text-blue-600 transition duration-400"
              >
                Log in
              </Link>
            </div>
            <input
              type="email"
              placeholder="Email or mobile phone number"
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md"
            />
            <label className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              Email me with news and offers
            </label>

            <h2 className="text-2xl font-bold mb-4">Delivery</h2>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md"
            >
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="United States">United States</option>
              <option value="Turkey">Turkey</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
            </select>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name (optional)"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md"
            />
            <div className="grid grid-cols-3 gap-4 mt-4">
              <input
                type="text"
                placeholder="City"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="State"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="ZIP code"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <label className="flex items-center mt-4">
              <input type="checkbox" className="mr-2" />
              Save this information for next time
            </label>

            <h2 className="text-2xl font-bold mt-6 mb-4">Payment</h2>
            <div className="bg-white p-4 rounded-md shadow-md">
              <input
                type="text"
                placeholder="Card number"
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md"
              />
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Expiration date (MM / YY)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Security code"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Name on card"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <button
              onClick={handlePayNow}
              className="w-full mt-6 px-4 py-3 bg-black border-2 border-black text-white font-bold rounded-md hover:bg-white hover:text-black transition duration-300 flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : (
                "Pay now"
              )}
            </button>
          </div>

          <div>
            <h2 className="flex items-center justify-between text-2xl font-bold mb-4">
              Order Summary
              <RiShoppingBasketLine className="cursor-pointer hover:text-blue-600 transition duration-400" />
            </h2>
            <div className="bg-white p-4 rounded-md shadow-md">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center mb-4 border-b pb-4"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="object-cover rounded-md"
                  />
                  <div className="flex-1 mx-4">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-600">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                  <p className="font-bold">${item.price * item.quantity}</p>
                </div>
              ))}
              <div className="flex justify-between border-t pt-4">
                <p className="text-lg font-bold">Total</p>
                <p className="text-lg font-bold">${totalPrice.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkout;

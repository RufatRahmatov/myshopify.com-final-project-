"use client";

import React, { useState } from "react";
import { FiMail } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaVisible, setCaptchaVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setCaptchaVisible(true);
    }, 2000);
  };

  const handleCaptchaVerification = () => {
    alert("Captcha verified! Password reset link sent.");
    setCaptchaVisible(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Reset Your Password
        </h2>
        <p className="text-center text-gray-600 mb-6">
          We will send you an email to reset your password
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <FiMail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-full text-white font-medium transition-all duration-300 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black hover:bg-gray-800"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <AiOutlineLoading3Quarters className="animate-spin mx-auto text-lg" />
            ) : (
              "Submit"
            )}
          </button>
        </form>

        <button
          type="button"
          className="w-full mt-4 text-black text-sm font-medium hover:underline"
          onClick={() => alert("Cancel reset password process.")}
        >
          Cancel
        </button>
      </div>

      {captchaVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold mb-4">CAPTCHA Verification</h3>
            <p className="text-sm text-gray-600 mb-4">
              Please complete the CAPTCHA below to proceed.
            </p>

            <div className="grid grid-cols-3 gap-2 mb-4">
              {[...Array(9)].map((_, idx) => (
                <div
                  key={idx}
                  className="w-20 h-20 border rounded-md bg-gray-200 cursor-pointer"
                  onClick={handleCaptchaVerification}
                >
                  <img
                    src={`https://via.placeholder.com/80?text=CAPTCHA+${
                      idx + 1
                    }`}
                    alt={`CAPTCHA ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <button
              className="bg-black text-white py-2 px-6 rounded-full font-medium hover:bg-gray-800"
              onClick={handleCaptchaVerification}
            >
              Verify
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;

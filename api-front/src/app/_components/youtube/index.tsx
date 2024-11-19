import React, { useState } from "react";
import Image from "next/image";

const VideoBanner: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="relative -mt-[65px] flex items-center justify-center min-h-screen">
      <div className="relative w-full max-w-[1810px] h-[650px] bg-gray-200 rounded-3xl overflow-hidden">
        <div className="relative w-full h-full">
          {!showVideo ? (
            <>
              <Image
                src="https://maxmod-goggles.myshopify.com/cdn/shop/files/1_2.webp?v=1713442186&width=3840"
                alt="Background"
                fill
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                onClick={handlePlayClick}
              >
                <div className="bg-black rounded-full p-6 flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-4.586-2.65A1 1 0 009 9.18v5.64a1 1 0 001.166.972l4.586-2.65a1 1 0 000-1.732z"
                    />
                  </svg>
                </div>
              </div>
            </>
          ) : (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/2lxN4R-Sc4U"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;

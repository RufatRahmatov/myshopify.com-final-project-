import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoBanner: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="relative -mt-[65px] flex items-center justify-center min-h-screen">
      <div className="relative w-full max-w-[1810px] h-[650px] bg-gray-200 rounded-3xl overflow-hidden">
        {!showVideo ? (
          <div
            className="flex items-center justify-center w-full h-full cursor-pointer"
            onClick={handlePlayClick}
          >
            <img
              src="https://maxmod-goggles.myshopify.com/cdn/shop/files/1_2.webp?v=1713442186&width=3840"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative right-[560px] mb-[390px] z-10 text-white">
              <p className="text-md font-medium mb-10">
                Buy One, Get One 50% Off
              </p>
              <h1 className="text-2xl md:text-4xl font-medium mt-2">
                Unwrap The Magic: Exclusive The <br />
                <span className="mt-2"> Sunglasses Collection Offer!</span>
              </h1>
            </div>
            <div className="relative right-[300px] z-10 mt-6 bg-black rounded-full p-3 flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 bg-black rounded-full text-white "
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
        ) : (
          <YouTube
            videoId="D0UnqGm_miA"
            className=" absolute inset-0 w-full h-full"
            opts={{
              playerVars: {
                autoplay: 1,
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default VideoBanner;

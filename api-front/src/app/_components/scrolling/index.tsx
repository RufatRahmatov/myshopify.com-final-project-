import React from "react";

const ScrollingText: React.FC = () => {
  return (
    <div className="relative mt-32 overflow-hidden whitespace-nowrap mt-10 w-full">
      <div
        className="text-4xl font-medium flex items-center"
        style={{
          animation: "scroll 25s linear infinite",
        }}
      >
        <span className="mr-8">
          ON YOUR FIRST ORDER + FLAT $0% OFF + FREE SHIPPING
        </span>
        <span className="mr-8">
          ON YOUR FIRST ORDER + FLAT 40% OFF + FREE SHIPPING
        </span>
        <span className="mr-8">
          ON YOUR FIRST ORDER + FLAT $0% OFF + FREE SHIPPING
        </span>
        <span className="mr-8">
          ON YOUR FIRST ORDER + FLAT 40% OFF + FREE SHIPPING
        </span>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollingText;

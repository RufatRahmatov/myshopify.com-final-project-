"use client";

import { RxShare2 } from "react-icons/rx";

const ShareButton = () => {
  const handleShare = async () => {
    const url = window.location.href;
    const title = "Check out this page!";
    const text = "Here is an interesting page you might like.";

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
        console.log("Link successfully shared!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Your browser does not support the Web Share API.");
    }
  };

  return (
    <div
      className="flex flex-start items-center gap-2 ml-[115px] cursor-pointer"
      onClick={handleShare}
    >
      <RxShare2 />
      <span>Share</span>
    </div>
  );
};

export default ShareButton;

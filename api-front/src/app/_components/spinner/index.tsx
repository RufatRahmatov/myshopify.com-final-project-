import React from "react";

export default function Spiner() {
  return (
    <div
      className="animate-spin inline-block size-5 border-[3px] border-current border-t-transparent text-white-600 rounded-full"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

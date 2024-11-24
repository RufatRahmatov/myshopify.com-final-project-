"use client";
import React, { useState, useEffect } from "react";

import Spiner from "./_components/spiner";

import SignIn from "./signin/page";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spiner />
      </div>
    );
  }

  return <SignIn />;
}

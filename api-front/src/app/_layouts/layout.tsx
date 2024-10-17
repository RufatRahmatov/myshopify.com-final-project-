"use client";

import React from "react";
import Header from "../_components/header";
import Footer from "../_components/footer";

export default function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
}

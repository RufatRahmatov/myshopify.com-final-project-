"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { LuLogOut } from "react-icons/lu";

const LogoutIcon: React.FC = () => {
  const router = useRouter();

  const handleLogoutClick = () => {
    router.push("/signin");
  };

  return (
    <button onClick={handleLogoutClick} className="flex items-center">
      <LuLogOut className="text-2xl cursor-pointer" />
    </button>
  );
};

export default LogoutIcon;

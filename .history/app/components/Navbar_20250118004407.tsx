import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" alt="logo" width={114} height={30} />
        </Link>
      </nav>
      
    </header>
  );
};
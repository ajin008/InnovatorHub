import { auth, signOut, signIn } from "@/auth";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();
  return(
    <header className="p">
        <nav></nav>
    </header>
  )
};

export default Navbar;

import { auth, signOut, signIn } from "@/auth";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();
  return(
    headers
  )
};

export default Navbar;

import { auth,signOut,signIn } from "@/auth";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" alt="logo" width={114} height={30} />
        </Link>
        <div className="flex items-center gap-5">
            {session && session?.user?(
                <>
                <Link href="/startup/create">
                <span>Create</span></Link>
                <button onClick={signOut}>
                    <span>logout</span>
                </button>
                <link  href={`/user`} />
                </>
            )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

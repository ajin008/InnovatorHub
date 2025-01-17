import { auth, signOut, signIn } from "@/auth";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" alt="logo" width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5">
            {session && session?.user?(
                <>
                  <Link href="/startup/create">
                  <span>create</span>
                  </Link>

                  <button onClick={si}>
                    <span>logout</span>
                  </button>
                </>
            )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

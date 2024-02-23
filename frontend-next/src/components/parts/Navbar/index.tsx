"use client";

import Link from "next/link";
import { deleteCookie, getCookie } from "cookies-next";

const Navbar = ({ token }: { token: string }) => {
  // const token = getCookie("token");
  const logout = () => {
    deleteCookie("token");
    deleteCookie("userId");
  };
  return (
    <nav className="flex justify-between w-full p-5 bg-slate-500">
      <Link href="/">
        <h1 className="text-3xl">Todo App</h1>
      </Link>
      {token ? (
        <button onClick={logout}>
          <h1 className="text-3xl">Log out</h1>
        </button>
      ) : (
        <Link href="/auth/login">
          <h1 className="text-3xl">Login</h1>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;

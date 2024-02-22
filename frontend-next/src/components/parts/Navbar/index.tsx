import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full p-5 bg-slate-500">
      <Link href="/">
        <h1 className="text-3xl">Todo App</h1>
      </Link>
      <Link href="/auth/login">
        <h1 className="text-3xl">Login</h1>
      </Link>
    </nav>
  );
};

export default Navbar;

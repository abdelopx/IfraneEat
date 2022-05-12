import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="flex justify-between px-5 py-4 items-center">
      <div>Logo Here</div>
      <div className="flex gap-6">
        <Link href="/">
          <a className="bg-green-500 drop-shadow-md text-white px-5 py-2 rounded-full text-sm font-semibold">About us</a>
        </Link>
        <Link href="/">
          <a className="bg-green-500 drop-shadow-md text-white px-5 py-2 rounded-full text-sm font-semibold">Contact us</a>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

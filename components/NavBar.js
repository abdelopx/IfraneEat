import React from "react";
import Link from "next/link";

import Image from "next/image";

import logo from '../public/logo.svg'

function NavBar() {
  return (
    <nav className="flex justify-between px-5 py-4 items-center bg-green-500">
      <h1 className="text-3xl text-white font-semibold">🍕 IfraneEat</h1>
      <div className="flex gap-6">
        <Link href="/">
          <a className="bg-white  drop-shadow-md text-green-500 px-5 py-2 rounded-full text-md font-medium transition hover:scale-110 ease-in duration-175">About us</a>
        </Link>
        <Link href="/">
          <a className="bg-white drop-shadow-md text-green-500 px-5 py-2 rounded-full text-md font-medium transition hover:scale-110 ease-in duration-175">Contact us</a>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="h-24 w-full max-w-[1240px] mx-auto flex justify-between items-center px-4">
      {/* left */}
      <div className="text-white font-bold text-xl flex gap-4 items-center">
        {/* image  */}
        <Image
          className="w-14"
          width={80}
          height={80}
          src="/ssunewlogo.png"
          alt="logo"
        />
        <h1 className="text-xl font-black">
          Auxilliary <br />
          Services
        </h1>
      </div>

      {/* Hamburger menu  */}
      <div className="lg:hidden text-white">
        <FaBars size={20} />
      </div>

      {/* right  */}
      <div className="h-full hidden lg:flex items-center gap-16 text-white">
        <ul className="flex justify-center items-center uppercase text-lg gap-8">
          <li>Home</li>
          <li>Services</li>
          <li>Rental</li>
          <li>Contact Us</li>
        </ul>
        <div className="flex items-center gap-8 text-xl font-bold">
          <Link href="/login">
            <button>Login</button>
          </Link>
          <Link href="signup">
            <button className="py-3 border border-yellow-300/90 px-6 rounded-xl bg-yellow-300/90">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="h-24 w-full bg-blue-900/70 mx-auto flex justify-between items-center px-4">
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
      <div
        onClick={() => setNav(true)}
        className="lg:hidden text-white cursor-pointer"
      >
        <FaBars size={20} />
      </div>

      {/* Navbar Menu overlay  */}
      <div
        className={
          nav
            ? "fixed lg:hidden top-0 left-0 w-full h-screen bg-blue-950/80 z-20"
            : "hidden"
        }
      />

      {/* Hamburger Menu  */}
      <div
        className={
          nav
            ? "fixed h-[75%] w-[90%] lg:hidden text-blue-900 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 py-10 bg-white rounded-2xl z-20 ease-in duration-300"
            : "fixed h-[75%] w-[90%] text-blue-900 left-1/2 top-[-100%] transform -translate-x-1/2 -translate-y-1/2 py-10 bg-white rounded-2xl z-10 ease-in duration-300"
        }
      >
        <ul className="p-5 w-full flex flex-col items-center space-y-3">
          <li className="cursor-pointer hover:bg-blue-500 w-full py-3 rounded-full text-center hover:text-white">
            <Link onClick={() => setNav(false)} href="/">
              Home
            </Link>
          </li>

          <li className="cursor-pointer hover:bg-blue-500 w-full py-3 rounded-full text-center hover:text-white">
            <Link onClick={() => setNav(false)} href="/services">
              Services
            </Link>
          </li>

          <li className="cursor-pointer hover:bg-blue-500 w-full py-3 rounded-full text-center hover:text-white">
            <Link onClick={() => setNav(false)} href="/rentals">
              Rental
            </Link>
          </li>

          <li className="cursor-pointer hover:bg-blue-500 w-full py-3 rounded-full text-center hover:text-white">
            <Link onClick={() => setNav(false)} href="/contacts">
              Contact Us
            </Link>
          </li>

          <li className="w-full flex flex-col space-y-4">
            <Link
              onClick={() => setNav(false)}
              href="/login"
              className="w-full text-center font-semibold border-2 border-blue-400 hover:bg-blue-400 hover:text-white duration-300 px-6 py-2 rounded-full cursor-pointer"
            >
              Login
            </Link>
            <Link
              onClick={() => setNav(false)}
              href="/signup"
              className="w-full text-center font-semibold border-2 border-blue-400 hover:bg-yellow-300 hover:border-yellow-300 hover:text-white duration-300 px-6 py-2 rounded-full cursor-pointer"
            >
              Sign Up
            </Link>
          </li>
        </ul>

        <div
          onClick={() => setNav(false)}
          className="absolute top-2 right-2 flex justify-center items-center p-3 rounded-full hover:bg-gray-300 duration-300 h-10 w-10 mx-auto cursor-pointer"
        >
          <FaTimes size={20} />
        </div>
      </div>

      {/* right  */}
      <div className="h-full hidden lg:flex items-center gap-16 text-white">
        <ul className="flex justify-center items-center uppercase text-lg gap-8">
          <Link className="hover:text-blue-200/90" href="/">
            <li>Home</li>
          </Link>
          <Link className="hover:text-blue-200/90" href="/services">
            <li>Services</li>
          </Link>
          <Link className="hover:text-blue-200/90" href="/rentals">
            <li>Rental</li>
          </Link>
          <Link className="hover:text-blue-200/90" href="/contacts">
            <li>Contact Us</li>
          </Link>
        </ul>
        <div className="flex items-center gap-8 text-xl font-bold">
          <Link className="hover:text-blue-200/90" href="/login">
            <button>Login</button>
          </Link>
          <Link href="signup">
            <button className="py-3 border bg-yellow-300/90 hover:bg-yellow-400 duration-300 px-6 rounded-xl ">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

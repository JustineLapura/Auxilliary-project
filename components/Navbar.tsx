"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavMenu from "./NavMenu";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <motion.div
      className="fixed h-24 w-full bg-blue-900/90 mx-auto flex justify-between items-center px-4 z-20"
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ type: "tween" }}
    >
      {/* left */}
      <motion.div
        className="text-white font-bold text-xl flex gap-4 items-center"
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5 }}
      >
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
      </motion.div>

      <motion.div
        onClick={() => setNav(true)}
        className="lg:hidden text-white cursor-pointer"
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <FaBars size={20} />
      </motion.div>

      {/* Navbar Menu overlay  */}
      <div
        className={
          nav
            ? "fixed lg:hidden top-0 left-0 w-full h-screen bg-blue-950/80 z-20"
            : "hidden"
        }
      />

      {/* Hamburger menu  */}
      <NavMenu nav={nav} setNav={setNav} />

      {/* right  */}
      <motion.div
        className="h-full hidden lg:flex items-center gap-16 text-white"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5 }}
      >
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
            <button className="py-3 border border-yellow-400 bg-yellow-400 hover:bg-yellow-300 hover:scale-105 duration-300 px-6 rounded-xl ">
              Sign Up
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;

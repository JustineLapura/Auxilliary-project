import Link from "next/link";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

type NavMenuProps = {
  nav: boolean;
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavMenu = ({ nav, setNav }: NavMenuProps) => {
  return (
    <>
      {/* Hamburger Menu  */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className={
          nav
            ? "fixed h-[75%] w-[90%] lg:hidden text-blue-900 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-2xl z-20 ease-in duration-300"
            : "fixed h-[75%] w-[90%] text-blue-900 left-1/2 top-[-100%] transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-2xl z-10 ease-in duration-300"
        }
      >
        <div className="h-full w-full rounded-xl bg-white border">
          <ul className="p-5 mt-8 w-full flex flex-col items-center space-y-3">
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
        </div>

        <div
          onClick={() => setNav(false)}
          className="absolute top-5 right-5 flex justify-center items-center p-3 rounded-full hover:bg-gray-300 duration-300 h-10 w-10 mx-auto cursor-pointer"
        >
          <FaTimes size={20} />
        </div>
      </motion.div>
    </>
  );
};

export default NavMenu;

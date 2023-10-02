"use client";
import Link from "next/link";
import React from "react";
import { RxSketchLogo, RxDashboard } from "react-icons/rx";
import { FiSettings, FiClock } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaTooth, FaDesktop } from "react-icons/fa";
import { motion } from "framer-motion";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <motion.div
        className="fixed top-[100px] w-20 lg:w-40 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between"
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "tween" }}
      >
        <div className="flex flex-col items-center uppercase text-sm font-bold w-full">
          <Link href="/admin">
            <motion.div
              className="group w-full flex justify-between items-center gap-1 px-2 lg:mr-3 lg:hover:bg-gray-100 "
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, type: "tween" }}
            >
              <div className="bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                <FaDesktop size={20} />
              </div>
              <h1 className="hidden lg:block text-xs">Dashboard</h1>
            </motion.div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2 my-1"></span>
          <Link href="/admin/bookings">
            <motion.div
              className="group w-full flex justify-between items-center gap-2 px-2 lg:mr-3 lg:hover:bg-gray-100 "
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3, type: "tween" }}
            >
              <div className="bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                <RxDashboard size={20} />
              </div>
              <h1 className="hidden lg:block text-xs">Bookings</h1>
            </motion.div>
          </Link>
          <Link href="/admin/rented-facilities">
            <motion.div
              className="group w-full flex justify-between items-center gap-4 px-2 lg:hover:bg-gray-100"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4, type: "tween" }}
            >
              <div className="bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                <FiClock size={20} />
              </div>
              <h1 className="hidden lg:block text-xs">
                Rented <br /> Facilities
              </h1>
            </motion.div>
          </Link>
          <Link href="/admin/add-facilities">
            <motion.div
              className="group w-full flex justify-between items-center gap-4 px-2 lg:hover:bg-gray-100"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5, type: "tween" }}
            >
              <div className="bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                <FaTooth size={20} />
              </div>
              <h1 className="hidden lg:block text-xs">
                Add <br /> Facilities
              </h1>
            </motion.div>
          </Link>
          <Link href="/">
            <motion.div
              className="group w-full flex justify-between items-center gap-4 px-2 lg:hover:bg-gray-100"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.6, type: "tween" }}
            >
              <div className="bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                <FiSettings size={20} />
              </div>
              <h1 className="hidden lg:block text-xs">
                Manage <br /> Dorms
              </h1>
            </motion.div>
          </Link>
          <Link href="/">
            <motion.div
              className="group w-full flex justify-between items-center gap-4 px-2 lg:hover:bg-gray-100"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.7, type: "tween" }}
            >
              <div className="bg-gray-100 group-hover:bg-white hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                <FiSettings size={20} />
              </div>
              <h1 className="hidden lg:block text-xs">Dorms List</h1>
            </motion.div>
          </Link>
        </div>
      </motion.div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;

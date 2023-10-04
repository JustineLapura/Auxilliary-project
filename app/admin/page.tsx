"use client";
import React from "react";
import Facilities from "@/components/admin/Dashboard/Facilities";
import Dormitories from "@/components/admin/Dashboard/Dormitories";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full lg:flex justify-between items-center gap-4 py-6 px-8">
        <motion.h1
          className="text-2xl lg:text-5xl font-black text-gray-950 text-center"
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween" }}
        >
          Welcome Admin!
        </motion.h1>
        <motion.div
          className="flex gap-4 text-lg lg:text-2xl font-bold text-gray-500"
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 16 }}
        >
          <p>September 26, 2023</p>
          <p>Moday, 12:28 PM</p>
        </motion.div>
      </div>

      {/* Faciliities  */}
      <div className="w-full">
        <Facilities />

        <motion.div
          className="w-full h-[1px] bg-gray-300/90 shadow my-8 mx-6"
          initial={{  x: '100vw' }}
          animate={{  x: 0 }}
        />

        <Dormitories />
      </div>
    </div>
  );
};

export default page;

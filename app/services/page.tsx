"use client"
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className='relative h-screen w-full  bg-[url("/SSU.jpg")] bg-no-repeat bg-cover bg-center'>
      {/* <div className="relative z-10">
          <Navbar />
        </div> */}
      <div className="absolute top-0 left-0 h-full w-full bg-blue-500/50"></div>

      <div className="flex justify-center items-center h-full w-full">
        <motion.h1 className="text-5xl md:text-7xl font-black text-white z-10 mb-36 tracking-widest"
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        >
          SERVICES
        </motion.h1>
      </div>

      {/*image slider  */}
      <motion.div
        className="absolute bottom-0 h-20 w-full flex justify-center items-center bg-blue-900 blur"
        initial={{ y: 120 }}
        animate={{ y: 0 }}
        transition={{ type: "tween" }}
      />
    </div>
  );
};

export default page;

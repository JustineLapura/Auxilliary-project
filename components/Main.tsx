"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div className='relative h-screen w-full  bg-[url("/SSU.jpg")] bg-no-repeat bg-cover bg-center'>
      <div className="absolute top-0 left-0 h-full w-full bg-blue-500/50"></div>
      <div className="relative px-4 h-full w-full flex flex-col gap-8 items-center justify-center text-white font-bold">
        {/* Main Text */}
        <motion.div
          className="grid place-items-center gap-2 lg:gap-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
          transition={{ delay: 2 }}
        >
          <h1 className="text-3xl font-black sm:text-4xl lg:text-5xl text">
            Book, Create, Celebrate
          </h1>
          <h1 className="text-lg sm:text-2xl lg:text-5xl font-black">
            Unleash the Magic of our Spaces
          </h1>
          {/* Main button  */}
          <Link href="/rentals">
            <motion.button
              className="py-3 px-6 rounded-xl mt-4 bg-yellow-300/90 font-bold shadow-xl"
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              Check Availability
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/*image slider  */}
      <motion.div
        className="absolute bottom-0 h-20 w-full flex justify-center items-center bg-blue-900"
        initial={{ y: 120 }}
        animate={{ y: 0 }}
      />
    </div>
  );
};

export default Main;

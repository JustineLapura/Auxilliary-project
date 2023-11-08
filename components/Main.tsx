"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Main = () => {
  const isLoggedinData: string | null = localStorage.getItem("isLoggedin");

  const [isLoggedin, setIsLoggedin] = useState<boolean>(
    isLoggedinData === "true"
  );

  useEffect(() => {
    setIsLoggedin(isLoggedinData === "true");
  }, [isLoggedin]);

  console.log(isLoggedin);

  return (
    <div className='relative h-screen w-full  bg-[url("/SSU.jpg")] bg-no-repeat bg-cover bg-center'>
      <div className="absolute top-0 left-0 h-full w-full bg-blue-500/50"></div>
      <motion.div
        className="fixed top-28 right-5 h-10 bg-gray-100 rounded-lg z-20"
        initial={{ x: 500 }}
        animate={{ x: 0 }}
      >
        {isLoggedin && (
          <p className="text-green-500 font-bold px-3 py-2">
            You are logged in successfuly!
          </p>
        )}
      </motion.div>
      <div className="relative px-4 h-full w-full flex flex-col gap-8 items-center justify-center text-white font-bold">
        {/* Main Text */}
        <div className="grid place-items-center gap-2 lg:gap-4 text-center">
          <motion.h1
            className="text-3xl font-black sm:text-4xl lg:text-5xl text"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.3,
              type: "spring",
              stiffness: 100,
            }}
          >
            Book, Create, Celebrate
          </motion.h1>
          <motion.h1
            className="text-lg sm:text-2xl lg:text-5xl font-black"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.3,
              type: "spring",
              stiffness: 100,
            }}
          >
            Unleash the Magic of our Spaces
          </motion.h1>
          {/* Main button  */}
          <Link href="/rentals">
            <motion.button
              className="py-3 px-6 rounded-xl mt-4 bg-yellow-300/90 font-bold shadow-xl"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.3,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                boxShadow: "0px 0px 8px rgb(255, 255, 255)",
              }}
            >
              Check Availability
            </motion.button>
          </Link>
        </div>
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

export default Main;

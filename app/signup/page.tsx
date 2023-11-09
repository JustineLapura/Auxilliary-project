"use client";

import Link from "next/link";
import React, { useState, useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import { motion } from "framer-motion";
import UsersContext from "@/contextApi/UsersContext";
import { useRouter } from "next/navigation";


const Page = () => {
  const { users,
    setSelectedUser,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirm,
    setPasswordConfirm,
    errorMessage,
    setErrorMessage,
    handleFormSubmit
   } = useContext(UsersContext)
  const router = useRouter();

  const [isHovered, setIsHovered] = useState(false);

  // Event handler for when the mouse enters the element
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Event handler for when the mouse leaves the element
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="h-full w-full py-32 bg-gradient-to-b from-blue-500 to-yellow-300 flex justify-center items-center text-gray-900">
      <motion.div
        className="w-[80%] md:w-[40%] py-4 px-6 mt-6 rounded-xl flex flex-col items-center gap-6 bg-white/30"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
      >
        <h1 className="mt-2 text-xl md:text-2xl text-white font-bold">
          Create an Account
        </h1>
        <div className="relative flex justify-center overflow-hidden text-gray-800 font-semibold rounded-lg w-2/3 md:w-1/3 bg-gray-300/70 border-none gap-4 px-2">
          <div
            className="h-full w-1/2 text-center py-2 rounded-xl ps-1 z-10"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/login" className="w-full">
              <h1>Login</h1>
            </Link>
          </div>
          <div className="h-full w-full text-center py-2 ps-2 rounded-xl z-10">
            <h1>SignUp</h1>
          </div>
          {/* background  */}
          <div
            className={
              isHovered
                ? "absolute left-0 h-full w-1/2 rounded-lg bg-gradient-to-l from-yellow-100 to-yellow-400/80 duration-300 ease-in transform"
                : "absolute right-0 h-full w-1/2 rounded-lg bg-gradient-to-l from-yellow-100 to-yellow-400/80 duration-300 ease-in transform"
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            className="py-2 px-4 rounded-full bg-white/80 shadow-lg"
            type="text"
            placeholder="Firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            className="py-2 px-4 rounded-full bg-white/80 shadow-lg"
            type="text"
            placeholder="Lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            className="py-2 px-4 rounded-full bg-white/80 shadow-lg"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="py-2 px-4 rounded-full bg-white/80 shadow-lg"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="py-2 px-4 rounded-full bg-white/80 shadow-lg"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            className="py-2 px-4 rounded-full bg-white/80 shadow-lg"
            type="password"
            placeholder="Confirm Password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
        </div>
        {errorMessage && (
          <motion.p
            className="w-full text-red-500 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: [1, 0, 1] }}
          >
            {errorMessage}
          </motion.p>
        )}
        <div className="flex gap-2">
          <Link href="/">
            <button className="py-2 px-3 rounded-lg bg-red-500/80 font-bold shadow-xl text-white ">
              <AiFillHome size={25} />
            </button>
          </Link>
          <button
            className="py-2 px-8 rounded-lg bg-blue-500 font-bold shadow-xl text-white "
            onClick={handleFormSubmit}
          >
            Sign Up
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;

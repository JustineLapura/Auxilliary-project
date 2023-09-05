import Image from "next/image";
import Link from "next/link";
import React from "react";
import {AiFillHome} from "react-icons/ai"

const page = () => {
  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-blue-500 to-yellow-300 flex justify-center items-center text-gray-900">
      <div className="flex justify-evenly items-center bg-gray-300/30 rounded-xl h-[450px] w-[300px] md:w-2/3 overflow-hidden">
        <div className="hidden lg:flex justify-center items-center bg-gray-300/50 h-full w-full">
          <Image
            className="w-1/2 hidden lg:flex"
            width={100}
            height={100}
            src="/ssunewlogo.png"
            alt="logo"
          />
        </div>
        <div className="flex flex-col gap-8 justify-center items-center px-16">
          <div className="">
            <Image
              className="w-24 lg:hidden"
              width={100}
              height={100}
              src="/ssunewlogo.png"
              alt="logo"
            />
          </div>
          <div className="flex justify-center overflow-hidden font-semibold rounded-lg w-1/2 bg-gray-300/70 border-none gap-4">
            <div className="h-full w-1/2 bg-gradient-to-r from-yellow-100 to-yellow-400/80 text-center py-2 rounded-xl">
              <h1>Login</h1>
            </div>
            <Link href="/signup">
              <div className="h-full w-full text-center py-2 pe-1">
                <h1>SignUp</h1>
              </div>
            </Link>
          </div>
          <input
            className="py-2 px-4 rounded-full bg-white/80 shadow-lg"
            type="text"
            placeholder="Username"
          />
          <input
            className="py-2 px-4 rounded-full bg-white/80 shadow-lg"
            type="text"
            placeholder="Password"
          />
          <div className="flex gap-2">
          <Link href="/">
            <button className="py-2 px-3 rounded-lg bg-red-500/80 font-bold shadow-xl text-white ">
              <AiFillHome size={25} />
            </button>
          </Link>
          <button className="py-2 px-8 rounded-lg bg-blue-500 font-bold shadow-xl text-white ">
            Login
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default page;

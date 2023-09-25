import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className='relative h-screen w-full  bg-[url("/SSU.jpg")] bg-no-repeat bg-cover bg-center'>
      <div className="absolute top-0 left-0 h-full w-full bg-blue-500/50"></div>

      <div className="flex justify-center items-center h-full w-full">
        <h1 className="text-5xl md:text-7xl font-black text-white z-10 mb-36 tracking-widest">
          CONTACTS
        </h1>
      </div>

      {/*image slider  */}
      <div className="absolute bottom-0 h-20 w-full flex justify-center items-center bg-blue-900 blur"></div>
    </div>
  );
};

export default page;
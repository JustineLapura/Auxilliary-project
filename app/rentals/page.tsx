import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const page = () => {
  const facilities = [
    {
      img: "/SSU.jpg",
      name: "Audio Visual Center",
    },
    {
      img: "/SSU.jpg",
      name: "Conference Room",
    },
    {
      img: "/SSU.jpg",
      name: "Convention Center",
    },
    {
      img: "/SSU.jpg",
      name: "RIC-AVC",
    },
    {
      img: "/SSU.jpg",
      name: "CAS-AVC",
    },
    {
      img: "/SSU.jpg",
      name: "Function Room (COED)",
    },
  ];

  return (
    <div className="h-full w-full">
      <div className='relative h-screen w-full  bg-[url("/SSU.jpg")] bg-no-repeat bg-cover bg-center'>
        <div className="relative z-10">
          <Navbar />
        </div>
        <div className="absolute top-0 left-0 h-full w-full bg-blue-500/50"></div>

        <div className="flex justify-center items-center h-full w-full">
          <h1 className="text-5xl md:text-7xl font-black text-white z-10 mb-36 tracking-widest">
            FACILITIES
          </h1>
        </div>

        {/*image slider  */}
        <div className="absolute bottom-0 h-20 w-full flex justify-center items-center bg-blue-900 blur"></div>
      </div>
      <div className="h-full w-full max-w-[960px] mx-auto py-12">
        <h1 className="text-center mb-10 text-blue-950 uppercase font-black text-3xl md:text-5xl">
          Facilities
        </h1>
        <div className="grid place-items-center gap-20 sm:grid-cols-2 md:grid-cols-3 mt-16">
          {facilities.map((facility) => (
            <div key={facility.name} className="h-[200px] w-[200px] text-center flex flex-col justify-center items-center gap-4">
              <Image
                className="rounded-xl h-full w-full hover:scale-105 duration-200 transform"
                width={100}
                height={100}
                src="/SSU.jpg"
                alt="logo"
              />
              <div className="">
                <h1 className="text-xl text-blue-950 font-bold ">
                  {facility.name}
                </h1>
              </div>
              <button className="py-1 px-3 rounded-full text-sm bg-blue-600 text-white hover:bg-blue-700 hover:text-blue-200">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { facilities } from "../facilities";


const Page = () => {
  return (
    <div className="h-full w-full pt-24">
      <div className="h-full w-full max-w-[960px] mx-auto py-12">
        <h1 className="text-center mb-10 text-blue-950 uppercase font-black text-5xl md:text-5xl">
          Facilities
        </h1>
        <div className="grid place-items-center gap-20 lg:gap-36 sm:grid-cols-2 md:grid-cols-3 mt-16">
          {facilities.map((facility) => (
            <div
              key={facility.name}
              className="h-[300px] w-[300px] text-center flex flex-col justify-center items-center gap-4"
            >
              <Image
                className="rounded-xl h-full w-full hover:scale-105 duration-200 transform -z-10"
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
              <Link href={`/rentals/${facility.id}`}>
                <button className="py-1 px-3 rounded-full text-sm bg-blue-600 text-white hover:bg-blue-700 hover:text-blue-200">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

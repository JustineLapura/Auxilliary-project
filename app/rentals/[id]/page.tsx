"use client";
import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { facilities } from "../page";
import Image from "next/image";
import Link from "next/link";

interface RouteParams {
  id: number; // Assuming 'id' is a string, change the type if it's different
}

const page = (params: { params: RouteParams }) => {
  const [facility, setFacility] = useState<
    { id: number; img: string; name: string }[]
  >([]); // Provide the correct type for the state

  const { id } = params.params;
  const displayedFacility = facility[id - 1];
  // console.log(id);

  // console.log(facilities);

  useEffect(() => {
    setFacility(facilities);
  });
  return (
    <div className="w-full min-h-screen px-6 pt-10">
      {displayedFacility ? (
        <div className="lg:flex justify-between items-center gap-16">
          <Image
            className="w-full md:w-[1/2] rounded-lg"
            width={200}
            height={200}
            src={displayedFacility.img}
            alt={displayedFacility.name}
          />
          <div className=" w-full h-full">
            <div className="w-full flex justify-between items-center my-4">
              <div className="w-[2/3]">
                <h1 className="text-2xl md:text-4xl font-black text-blue-950">
                  {displayedFacility.name}
                </h1>
              </div>
              <div className="flex md:hidden items-center w-[1/3] space-x-1">
                
                <button className="py-2 px-4 rounded-full bg-blue-800 text-xs text-white font-semibold hover:bg-blue-600 hover:text-blue-100 hover:scale-105 duration-300">
                  Book now
                </button>
              </div>
            </div>
            <div className="text-gray-900 p-5">
              <p className="font-bold md:text-lg">Details</p>
              <ul className="p-5 text-sm md:text-base">
                <li className="flex gap-2 items-center">
                  <FaCircle size={5} />
                  Government Agencies - ₱8,000/ 8hour
                </li>
                <li className="flex gap-2 items-center">
                  <FaCircle size={5} />
                  Non-Government Agencies - ₱9,000/ 8hour
                </li>
                <li className="flex gap-2 items-center">
                  <FaCircle size={5} />
                  Others - ₱10,000/ 8hour
                </li>
              </ul>
            </div>
            <div className="hidden lg:block mb-12">
              
              <button className="py-3 px-6 rounded-full bg-blue-800 text-lg text-white font-semibold hover:bg-blue-600 hover:text-blue-100 hover:scale-105 duration-300">
                Book now
              </button>
            </div>
            <div className="w-full max-w-[600px] flex justify-between md:text-2xl">
              <h1 className="">How was your Experience?</h1>
              <div className="flex justify-between items-center gap-3 text-yellow-500">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Faicility Not Found!</h1>
      )}
    </div>
  );
};

export default page;

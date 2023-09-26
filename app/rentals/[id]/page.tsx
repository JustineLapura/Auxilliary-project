"use client";
import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { facilities } from "@/app/facilities";
import Image from "next/image";

interface RouteParams {
  id: number; // Assuming 'id' is a string, change the type if it's different
}

const Page = ({ params }: { params: RouteParams }) => {
  const [facility, setFacility] = useState<
    { id: number; img: string; name: string }[]
  >([]); // Provide the correct type for the state

  const [isBooking, setIsBooking] = useState(false);

  const { id } = params;
  const displayedFacility = facility[id - 1];
  // console.log(id);

  // console.log(facilities);
  const closeBookingModal = () => {
    setIsBooking(false);
  };

  useEffect(() => {
    setFacility(facilities);
  }, []);
  return (
    <div className="w-full h-full px-6 pt-10">
      {displayedFacility ? (
        <div className="w-full h-ful lg:flex justify-between items-center gap-16">
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
                <button
                  onClick={() => setIsBooking(true)}
                  className="py-2 px-4 rounded-full bg-blue-800 text-xs text-white font-semibold hover:bg-blue-600 hover:text-blue-100 hover:scale-105 duration-300"
                >
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
              <button onClick={() => setIsBooking(true)} className="py-3 px-6 rounded-full bg-blue-800 text-lg text-white font-semibold hover:bg-blue-600 hover:text-blue-100 hover:scale-105 duration-300">
                Book now
              </button>
            </div>
            <div className="w-full max-w-[600px] flex justify-between md:text-2xl pb-8 md:pb-0">
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

      {/* Modal overlay  */}
      <div
        onClick={closeBookingModal}
        className={
          isBooking ? "fixed top-0 left-0 w-full h-full bg-blue-900/60" : ""
        }
      />

      {/* Booking Modal */}
      <div
        className={
          isBooking
            ? "fixed h-[300px] w-[400px] flex flex-col gap-6 justify-evenly items-center text-blue-900 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-white rounded-2xl z-20 ease-in duration-300"
            : "fixed h-[300px] w-[400px] flex flex-col gap-6 justify-evenly items-center text-blue-900 left-1/2 top-[-100%] transform -translate-x-1/2 -translate-y-1/2 py-10 bg-white rounded-2xl z-20 ease-in duration-300"
        }
      >
        {displayedFacility && (
          <h1 className="text-xl text-center font-bold text-gray-900">
            Are you sure you want to book <br/> {displayedFacility.name}?
          </h1>
        )}
        <div className="space-x-4 text-lg font-bold">
          <button onClick={closeBookingModal} className="px-6 py-2 bg-red-500 text-white rounded-full hover:scale-105 duration-300">
            No
          </button>
          <button onClick={closeBookingModal} className="px-6 py-2 bg-blue-900 text-white rounded-full hover:scale-105 duration-300">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;

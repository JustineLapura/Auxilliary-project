import Sidebar from "@/components/admin/Sidebar";
import React from "react";
import { RxSketchLogo, RxDashboard } from "react-icons/rx";
import { FiSettings, FiClock } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaTooth, FaDesktop } from "react-icons/fa";

const page = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full lg:flex justify-between items-center gap-4 py-6 px-8">
        <h1 className="text-2xl lg:text-5xl font-black text-gray-950 text-center">
          Welcome Admin!
        </h1>
        <div className="flex gap-4 text-lg lg:text-2xl font-bold text-gray-500">
          <p>September 26, 2023</p>
          <p>Moday, 12:28 PM</p>
        </div>
      </div>

      {/* Faciliities  */}
      <div className="w-full">
        <div className="w-full h-full pb-5 px-5">
          <h1 className="flex gap-4 text-lg lg:text-2xl font-bold text-gray-600 my-3">Faciilities</h1>
          <div className="w-full grid md:grid-cols-3 place-items-center gap-4 lg:gap-10">
            {/* card1 */}
            <div className="w-[300px] h-[100px] flex justify-between items-center p-4 rounded-lg bg-blue-500 text-white hover:scale-105 hover:bg-blue-600 duration-200">
              <FaDesktop className="w-1/4 h-full" size={25} />
              <h1 className="text-lg md:text-xl text-white font-bold">Total User</h1>
            </div>
            {/* card2 */}
            <div className="w-[300px] h-[100px] flex justify-between items-center p-4 rounded-lg bg-blue-500 text-white hover:scale-105 hover:bg-blue-600 duration-200">
              <FaTooth className="w-1/4 h-full" size={25} />
              <h1 className="text-lg md:text-xl text-white font-bold">Total Facilities</h1>
            </div>
            {/* card3 */}
            <div className="w-[300px] h-[100px] flex justify-between items-center p-4 rounded-lg bg-blue-500 text-white hover:scale-105 hover:bg-blue-600 duration-200">
              <FaDesktop className="w-1/4 h-full" size={25} />
              <h1 className="text-lg md:text-xl text-white font-bold">Total Reservations</h1>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-300/90 shadow my-8 mx-6" />

        <div className="w-full h-full pb-5 px-5">
          <h1 className="flex gap-4 text-lg lg:text-2xl font-bold text-gray-600 my-3">Dormitories</h1>
          <div className="w-full grid md:grid-cols-3 place-items-center gap-4 lg:gap-10">
            {/* card1 */}
            <div className="w-[300px] h-[100px] flex justify-between items-center p-4 rounded-lg bg-yellow-500 hover:scale-105 hover:bg-yellow-600 duration-200">
              <FaDesktop className="w-1/4 h-full" size={25} />
              <h1 className="text-lg md:text-xl text-gray-900 font-bold">Total User</h1>
            </div>
            {/* card2 */}
            <div className="w-[300px] h-[100px] flex justify-between items-center p-4 rounded-lg bg-yellow-500 hover:scale-105 hover:bg-yellow-600 duration-200">
              <FaTooth className="w-1/4 h-full" size={25} />
              <h1 className="text-lg md:text-xl text-gray-900 font-bold">Total Facilities</h1>
            </div>
            {/* card3 */}
            <div className="w-[300px] h-[100px] flex justify-between items-center p-4 rounded-lg bg-yellow-500 hover:scale-105 hover:bg-yellow-600 duration-200">
              <FaDesktop className="w-1/4 h-full" size={25} />
              <h1 className="text-lg md:text-xl text-gray-900 font-bold">Total Reservations</h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default page;

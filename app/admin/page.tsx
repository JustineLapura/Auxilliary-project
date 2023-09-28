import Sidebar from "@/components/admin/Sidebar";
import React from "react";
import { RxSketchLogo, RxDashboard } from "react-icons/rx";
import { FiSettings, FiClock } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaTooth, FaDesktop } from "react-icons/fa";
import Facilities from "@/components/admin/Dashboard/Facilities";
import Dormitories from "@/components/admin/Dashboard/Dormitories";

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
        <Facilities />

        <div className="w-full h-[1px] bg-gray-300/90 shadow my-8 mx-6" />

        <Dormitories />
      </div>
    </div>
  );
};

export default page;

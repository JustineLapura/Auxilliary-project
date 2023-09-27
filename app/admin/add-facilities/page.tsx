"use client";
import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const page = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="w-full p-5">
      <div className="flex justify-between items-center text-lg font-bold">
        <h1 className="text-gray-900 text-3xl md:text-5xl">Facilties</h1>
        <button onClick={() => setNav(true)} className="flex text-white bg-green-500/90 hover:bg-green-600 py-2 sm:py-3 px-5 rounded-lg">
          + Add <span className="hidden sm:block ps-2">Facility</span>
        </button>
      </div>

      <div className="w-full flex justify-between items-center mt-12">
        <h1 className=" text-sm lg:text-xl font-semibold text-gray-700">
          Showing 1 entries
        </h1>

        <div className="hidden sm:flex items-center gap-2">
          <h1 className="text-gray-900 font-bold">Search</h1>
          <input
            className="border-2 border-gray-300 py-1 ps-8"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="relative sm:hidden">
          <input
            className="border-2 border-gray-300 py-2 ps-8 w-[150px]"
            type="text"
            name=""
            id=""
            placeholder="Search..."
          />
          <FaSearch
            className="sm:hidden absolute top-2 left-1 text-gray-500"
            size={25}
          />
        </div>
      </div>

      {/* Facility Table  */}
      <div className="w-full mt-10 hidden sm:block">
        <table className="w-full">
          <thead className="text-left text-2xl">
            <tr>
              <th>ID</th>
              <th>Facility Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-sm sm:text-base font-semibold text-gray-600">
            <tr>
              <td>1</td>
              <td>AVC-RIC</td>
              <td>
                <button className="py-1 px-5 border bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                  View
                </button>
                <button className="py-1 px-4 ms-2 border bg-red-500 hover:bg-red-600 text-white rounded-lg">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>AVC-RIC</td>
              <td>
                <button className="py-1 px-5 border bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                  View
                </button>
                <button className="py-1 px-4 ms-2 border bg-red-500 hover:bg-red-600 text-white rounded-lg">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>AVC-RIC</td>
              <td>
                <button className="py-1 px-5 border bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                  View
                </button>
                <button className="py-1 px-4 ms-2 border bg-red-500 hover:bg-red-600 text-white rounded-lg">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Facility Grid  */}
      <div className="w-full sm:hidden grid gap-4 place-items-center mt-10">
        {/* card 1  */}
        <div className="w-[95%] border bg-gray-200 rounded-lg text-center p-5 space-y-2 hover:scale-105 duration-200">
          <div className="flex justify-between items-center">
            <h1 className="text-gray-500">ID 1</h1>
            <button className="py-1 px-[18px] border bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
              View
            </button>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-900 font-bold">AVC_RIC</p>
            <button className="py-1 px-4 border bg-red-500 hover:bg-red-600 text-sm text-white rounded-lg">
              Delete
            </button>
          </div>
        </div>
        {/* card 1  */}
        <div className="w-[95%] border bg-gray-100 rounded-lg text-center p-5 space-y-2 hover:scale-105 duration-200">
          <div className="flex justify-between items-center">
            <h1 className="text-gray-500">ID 1</h1>
            <button className="py-1 px-[18px] border bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
              View
            </button>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-900 font-bold">AVC_RIC</p>
            <button className="py-1 px-4 border bg-red-500 hover:bg-red-600 text-sm text-white rounded-lg">
              Delete
            </button>
          </div>
        </div>
        {/* card 1  */}
        <div className="w-[95%] border bg-gray-100 rounded-lg text-center p-5 space-y-2 hover:scale-105 duration-200">
          <div className="flex justify-between items-center">
            <h1 className="text-gray-500">ID 1</h1>
            <button className="py-1 px-[18px] border bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
              View
            </button>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-900 font-bold">AVC_RIC</p>
            <button className="py-1 px-4 border bg-red-500 hover:bg-red-600 text-sm text-white rounded-lg">
              Delete
            </button>
          </div>
        </div>
      </div>

      {/*Modal Overlay  */}
      <div
        className={
          nav ? "fixed top-0 left-0 h-screen w-full bg-blue-900/60 z-20" : ""
        }
      />

      {/* Add Facility Modal  */}
      <div
        className={
          nav
            ? "fixed w-[90%] max-w-[600px] h-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 z-20 rounded-lg space-y-6 p-5 ease-in duration-300"
            : "fixed w-[90%] max-w-[600px] h-[90%] top-[-100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 z-20 rounded-lg space-y-6 p-5 ease-in duration-300"
        }
      >
        <h1 className="font-bold text-2xl">Add Facility</h1>

        <div className="w-full mt-8">
          <h1 className="text-lg font-semibold">Facility Name:</h1>
          <input
            className="border w-full rounded-lg py-2 text-lg ps-2 mt-1"
            type="text"
            name=""
            id=""
          />
        </div>

        <div className="w-full">
          <h1 className="text-lg font-semibold">Facility Image:</h1>
          <input
            className="border w-full rounded py-2 bg-white ps-2"
            type="file"
            name="facilityImage"
            id="facilityImage"
            accept="image/*"
          />
        </div>

        <div className="w-full">
          <h1 className="text-lg font-semibold">Facility Details:</h1>
          <textarea
            className="border w-full rounded-lg text-lg py-2 ps-2 mt-1"
            name="facilityDetails"
            id="facilityDetails"
            rows={5}
          ></textarea>
        </div>
        <div className="w-full flex justify-center items-center mt-4">
          <button onClick={() => setNav(false)} className="text-white bg-blue-500 font-bold py-2 px-5 rounded hover:bg-blue-600 hover:scale-105 duration-300 ">
            Submit
          </button>
        </div>

        {/* close button  */}
        <div
          onClick={() => setNav(false)}
          className="absolute top-[-16px] right-2 cursor-pointer hover:bg-gray-300 duration-200 rounded-full p-3"
        >
          <FaTimes />
        </div>
      </div>
    </div>
  );
};

export default page;

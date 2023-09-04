import React from "react";
import { FaPeopleCarry, FaWarehouse } from "react-icons/fa"
import { BsFillBuildingFill } from "react-icons/bs"

const Categories = () => {
  return (
    <div className="h-full w-full flex justify-center items-center py-20 text-3xl font-bold text-blue-900 px-6">
      <div className="grid lg:grid-cols-3 gap-20">
        <div className="flex flex-col justify-center items-center gap-8">
          <h1>Total of Facilities</h1>
          <FaPeopleCarry size={100}/>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <h1>Total of Venues</h1>
          <FaWarehouse size={100}/>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <h1>Total of Dormitories</h1>
          <BsFillBuildingFill size={100}/>
        </div>
      </div>
    </div>
  );
};

export default Categories;

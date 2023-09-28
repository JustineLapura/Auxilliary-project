import React from "react";

const CostumersGrid = () => {
  return (
    <div className="sm:hidden grid gap-4 place-items-center mt-8">
      {/* card 1 */}
      <div className="w-[90%] p-5 bg-gray-100 border-gray-200 font-semibold text-gray-500 rounded-lg space-y-2 hover:scale-105 duration-200 cursor-pointer">
        <div className="flex justify-between items-center ">
          <h1 className="text-gray-900 font-bold">Jireh Lapura</h1>
          <p>09/22/2021</p>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-blue-500 font-bold">SSU Gymnasium</h1>
          <p>2:00 PM</p>
        </div>
      </div>
      {/* card 1 */}
      <div className="w-[90%] p-5 bg-gray-100 border-gray-200 font-semibold text-gray-500 rounded-lg space-y-2 hover:scale-105 duration-200 cursor-pointer">
        <div className="flex justify-between items-center ">
          <h1 className="text-gray-900 font-bold">Jireh Lapura</h1>
          <p>09/22/2021</p>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-blue-500 font-bold">Conference Room</h1>
          <p>2:00 PM</p>
        </div>
      </div>
      {/* card 1 */}
      <div className="w-[90%] p-5 bg-gray-100 border-gray-200 font-semibold text-gray-500 rounded-lg space-y-2 hover:scale-105 duration-200 cursor-pointer">
        <div className="flex justify-between items-center ">
          <h1 className="text-gray-900 font-bold">Jireh Lapura</h1>
          <p>09/22/2021</p>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-blue-500 font-bold">Convention Center</h1>
          <p>2:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default CostumersGrid;

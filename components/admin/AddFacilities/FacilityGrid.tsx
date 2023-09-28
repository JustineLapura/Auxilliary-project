import React from "react";

const FacilityGrid = () => {
  return (
    <div className="w-full sm:hidden grid gap-4 place-items-center mt-10">
      {/* card 1  */}
      <div className="w-[95%] border bg-gray-100 rounded-lg text-center p-5 space-y-2 hover:scale-105 duration-300">
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
      <div className="w-[95%] border bg-gray-100 rounded-lg text-center p-5 space-y-2 hover:scale-105 duration-300">
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
      <div className="w-[95%] border bg-gray-100 rounded-lg text-center p-5 space-y-2 hover:scale-105 duration-300">
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
  );
};

export default FacilityGrid;

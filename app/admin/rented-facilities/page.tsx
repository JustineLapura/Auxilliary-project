import React from "react";

const page = () => {
  return (
    <div className="w-full h-full min-h-[85vh] p-5 md:flex flex-col justify-between">
      <h1 className="text-2xl md:text-4xl font-bold mt-4">Rented Facilites</h1>
      <div className="w-full mt-10 hidden sm:block">
        <table className="w-full rounded-lg">
          <thead className="md:text-2xl text-left">
            <tr>
              <th>Facility Name</th>
              <th>Booked By</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-xs md:text-base font-semibold text-gray-700">
              <td>SSU Gymnasium</td>
              <td>Jireh Lapura</td>
              <td>09/22/2021</td>
              <td>2:00 PM</td>
            </tr>
            <tr className="text-xs md:text-base font-semibold text-gray-700 py-2">
              <td>Conference Room</td>
              <td>Jireh Lapura</td>
              <td>09/22/2021</td>
              <td>2:00 PM</td>
            </tr>
            <tr className="text-xs md:text-base font-semibold text-gray-700 py-2">
              <td>Convention Center</td>
              <td>Jireh Lapura</td>
              <td>09/22/2021</td>
              <td>2:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Costumers grid  */}
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

      <div className="w-full max-w-[1000px] flex justify-between items-center mt-12">
        <h1 className=" text-sm lg:text-xl font-semibold text-gray-700">
          Showing page 1 out of 10
        </h1>

        <div className="flex justify-between items-center w-[130px] md:w-[200px] h-[35px] md:h-[40px] rounded text-center text-gray-600 font-semibold border border-gray-300 shadow">
          <div className="w-2/5 h-full bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300 duration-200">
            <h1 className="">Prev</h1>
          </div>
          <div className="w-1/5 h-full flex justify-center items-center text-white bg-blue-700 border-blue-700">
            <h1>1</h1>
          </div>
          <div className="w-2/5 h-full bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300 duration-200">
            <h1>Next</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

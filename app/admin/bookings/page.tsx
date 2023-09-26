import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full min-h-[100%] p-5">
      <div className="">
        <h1 className="text-xl lg:text-3xl mb-6 font-bold my-4 text-gray-700">
          Bookings
        </h1>
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-8">
          <select
            className="w-[300px] border-2 rounded p-2 text-center border-gray-700"
            name="bookingStatus"
            id="bookingStatus"
          >
            <option value="confirmed">Filter by faciliities:</option>
            <option value="cancelled">Option 1</option>
            <option value="pending">Option 2</option>
          </select>
          <input
            type="text"
            className="w-[300px] border-2 rounded p-2 text-center border-gray-700"
            placeholder="Start Time"
          />
          <input
            type="text"
            className="w-[300px] border-2 rounded p-2 text-center border-gray-700"
            placeholder="End Time"
          />
          <select
            className="w-[300px] border-2 rounded p-2 text-center border-gray-700"
            name="bookingStatus"
            id="bookingStatus"
          >
            <option value="confirmed">Filter by Booking Date:</option>
            <option value="cancelled">Option 1</option>
            <option value="pending">Option 2</option>
          </select>
          <select
            className="w-[300px] border-2 rounded p-2 text-center border-gray-700"
            name="bookingStatus"
            id="bookingStatus"
          >
            <option value="confirmed">Filter by Booking Status:</option>
            <option value="cancelled">Option 1</option>
            <option value="pending">Option 2</option>
          </select>
        </div>
      </div>

      {/* Constumers Table  */}
      <div className="w-full mt-12">
        <table className="w-full">
          <thead>
            <tr className="lg:font-bold text-xs lg:text-lg">
              <th>No.</th>
              <th>Booking No.</th>
              <th>Customer's Name</th>
              <th>Facility</th>
              <th>Booking Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Booking Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-xs text-center font-semibold py-6 md:text-base">
              <td>1</td>
              <td>12345</td>
              <td>John Doe</td>
              <td>Conference Room</td>
              <td>2023-09-26</td>
              <td>09:00 AM</td>
              <td>10:00 AM</td>
              <td>Confirmed</td>
            </tr>
            <tr className="text-xs text-center font-semibold py-6 md:text-base">
              <td>1</td>
              <td>12345</td>
              <td>John Doe</td>
              <td>Conference Room</td>
              <td>2023-09-26</td>
              <td>09:00 AM</td>
              <td>10:00 AM</td>
              <td>Confirmed</td>
            </tr>
            <tr className="text-xs text-center font-semibold py-6 md:text-base">
              <td>1</td>
              <td>12345</td>
              <td>John Doe</td>
              <td>Conference Room</td>
              <td>2023-09-26</td>
              <td>09:00 AM</td>
              <td>10:00 AM</td>
              <td>Confirmed</td>
            </tr>
            {/* Add more data rows here */}
          </tbody>
        </table>
      </div>

      <div className="w-full max-w-[1000px] flex justify-between items-center mt-12">
        <h1 className=" text-sm lg:text-xl font-semibold text-gray-700">
          Showing Page 1 out of 10
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

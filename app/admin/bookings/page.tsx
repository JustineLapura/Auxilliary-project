import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full min-h-[100%] p-5">
      <div className="">
        <h1 className="text-xl lg:text-3xl mb-6 font-bold my-4 text-gray-700">
          Bookings
        </h1>
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 place-items-center gap-8 px-8">
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
      <div className="hidden md:block w-full mt-12">
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

      {/* Costumers grid  */}
      <div className="md:hidden w-full grid place-items-center gap-4 mt-8">
        {/* Card 1 */}
        <div className="border bg-gray-100 rounded-xl w-[85%] p-5 font-semibold text-gray-600 hover:scale-105 duration-200">
          <Link href="/admin/bookings/1">
            <div className="flex justify-between items-center py-2">
              <p>No. 1</p>
              <p>Book # 12345</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p>John Doe</p>
              <p> 2023-09-26</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p>Start: 09:00 AM</p>
              <p>End: 10:00 AM</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p className="text-green-500">Conference Room</p>
              <p>Pending</p>
            </div>
          </Link>
        </div>
        {/* Card 1 */}
        <div className="border bg-gray-100 rounded-xl w-[85%] p-5 font-semibold text-gray-600 hover:scale-105 duration-200">
          <Link href="/admin/bookings/2">
            <div className="flex justify-between items-center py-2">
              <p>No. 2</p>
              <p>Book # 12345</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p>John Doe</p>
              <p> 2023-09-26</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p>Start: 09:00 AM</p>
              <p>End: 10:00 AM</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p className="text-green-500">Conference Room</p>
              <p className="text-blue-500">Approved</p>
            </div>
          </Link>
        </div>
        {/* Card 1 */}
        <div className="border bg-gray-100 rounded-xl w-[85%] p-5 font-semibold text-gray-600 hover:scale-105 duration-200">
          <Link href="/admin/bookings/3">
            <div className="flex justify-between items-center py-2">
              <p>No. 3</p>
              <p>Book # 12345</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p>John Doe</p>
              <p> 2023-09-26</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p>Start: 09:00 AM</p>
              <p>End: 10:00 AM</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p className="text-green-500">Conference Room</p>
              <p className="text-red-500">Cancelled</p>
            </div>
          </Link>
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

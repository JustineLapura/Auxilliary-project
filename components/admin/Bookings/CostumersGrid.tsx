import Link from "next/link";
import React from "react";

const CostumersGrid = () => {
  return (
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
  );
};

export default CostumersGrid;

import React from "react";

const CostumersTable = () => {
  return (
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
  );
};

export default CostumersTable;

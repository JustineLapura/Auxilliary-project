import React from "react";

const FacilityTable = () => {
  return (
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
  );
};

export default FacilityTable;

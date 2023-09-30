import React from "react";
import FacilityTableCard from "./FacilityTableCard";

const facilities = [
  {
    id: 1,
    facilityName: "AVC_RIC",
  },
  {
    id: 2,
    facilityName: "Convention Center",
  },
  {
    id: 3,
    facilityName: "Conference Room",
  },
];

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
          {facilities.map((facility) => (
            <FacilityTableCard
              id={facility.id}
              facilityName={facility.facilityName}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacilityTable;

import React from "react";
import FacilityTableCard from "./FacilityTableCard";

type FacilityProps = {
  facilities: {
    id: number;
    img: string;
    name: string;
  }[];
};

const FacilityTable = ({ facilities }: FacilityProps) => {
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
          {facilities &&
            facilities.map((facility: { id: number; img:string; name: string }) => (
              <FacilityTableCard
                key={facility.id}
                id={facility.id}
                img={facility.img}
                facilityName={facility.name}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacilityTable;

import React from "react";
import FacilityGridCard from "./FacilityGridCard";

const facilities = [
  {
    id: 1,
    facilityName: "AVC_RIC"
  },
  {
    id: 2,
    facilityName: "Convention Center"
  },
  {
    id: 3,
    facilityName: "Conference Room"
  }
]

const FacilityGrid = () => {
  return (
    <div className="w-full sm:hidden grid gap-4 place-items-center mt-10">
      {facilities.map(facility => (
        <FacilityGridCard id={facility.id} facilityName={facility.facilityName} />
      ))}
    </div>
  );
};

export default FacilityGrid;

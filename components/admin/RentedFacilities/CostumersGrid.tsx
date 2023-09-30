import React from "react";
import RentedFacilityGridCards from "./RentedFacilityGridCards";

const rentedFacilities = [
  {
    facility: "Conference Room",
    name: "Jireh Lapura",
    date: "09/22/2021",
    time: "2:00 PM",
  },
  {
    facility: "SSU Gymnasium",
    name: "Justine Lapura",
    date: "09/25/2021",
    time: "8:00 AM",
  },
  {
    facility: "Convention Room",
    name: "Jethro Lapura",
    date: "09/31/2021",
    time: "5:00 PM",
  },
];

const CostumersGrid = () => {
  return (
    <div className="sm:hidden grid gap-4 place-items-center mt-8">
      {rentedFacilities.map((rentedFacility) => (
        <RentedFacilityGridCards
          facility={rentedFacility.facility}
          name={rentedFacility.name}
          date={rentedFacility.date}
          time={rentedFacility.time}
        />
      ))}
    </div>
  );
};

export default CostumersGrid;

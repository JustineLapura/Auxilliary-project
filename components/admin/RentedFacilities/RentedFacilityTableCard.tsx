import React from "react";

type RentedFacilityProps = {
    facility: string;
    name: string;
    date: string;
    time: string;
}

const CostumersTableCard = ({facility, name, date, time} : RentedFacilityProps) => {
  return (
    <>
      <tr className="text-xs md:text-base font-semibold text-gray-700">
        <td>{facility}</td>
        <td>{name}</td>
        <td>{name}</td>
        <td>{time}</td>
      </tr>
    </>
  );
};

export default CostumersTableCard;

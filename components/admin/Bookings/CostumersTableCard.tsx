import React from "react";

type CostumerTableCardProps = {
  costumer: {id: number;
  bookId: number;
  name: string;
  facility: string;
  date: string;
  startTime: string;
  endTime: string;
  status: string;}
};

const CostumersTableCard = ({
  costumer
}: CostumerTableCardProps) => {
  return (
    <>
      <tr className="text-xs text-center font-semibold py-6 md:text-base">
        <td>{costumer.id}</td>
        <td>{costumer.bookId}</td>
        <td>{costumer.name}</td>
        <td>{costumer.facility}</td>
        <td>{costumer.date}</td>
        <td>{costumer.startTime}</td>
        <td>{costumer.endTime}</td>
        <td>{costumer.status}</td>
      </tr>
    </>
  );
};

export default CostumersTableCard;

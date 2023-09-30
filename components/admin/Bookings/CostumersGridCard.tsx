import Link from "next/link";
import React from "react";

type CostumerGridCardProps = {
  costumer: {
    id: number;
    bookId: number;
    name: string;
    facility: string;
    date: string;
    startTime: string;
    endTime: string;
    status: string;
  };
};

const CostumersGridCard = ({ costumer }: CostumerGridCardProps) => {
  return (
    <div className="border bg-gray-100 rounded-xl w-[85%] p-5 font-semibold text-gray-600 hover:scale-105 duration-200">
      <Link href="/admin/bookings/1">
        <div className="flex justify-between items-center py-2">
          <p>{costumer.id}</p>
          <p>{costumer.bookId}</p>
        </div>
        <div className="flex justify-between items-center py-2">
          <p>{costumer.name}</p>
          <p>{costumer.date}</p>
        </div>
        <div className="flex justify-between items-center py-2">
          <p>Start: {costumer.startTime}</p>
          <p>End: {costumer.endTime}</p>
        </div>
        <div className="flex justify-between items-center py-2">
          <p className="text-green-500">{costumer.facility}</p>
          <p>{costumer.status}</p>
        </div>
      </Link>
    </div>
  );
};

export default CostumersGridCard;

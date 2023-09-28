import CostumersGrid from "@/components/admin/Bookings/CostumersGrid";
import CostumersTable from "@/components/admin/Bookings/CostumersTable";
import Filters from "@/components/admin/Bookings/Filters";
import PaginationSection from "@/components/admin/Bookings/PaginationSection";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full min-h-[100%] p-5">
      {/* Filters  */}
      <Filters />

      {/* Constumers Table  */}
      <CostumersTable />

      {/* Costumers grid  */}
      <CostumersGrid />

      {/* Pagination Section  */}
      <PaginationSection />
    </div>
  );
};

export default page;

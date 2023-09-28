import PaginationSection from "@/components/admin/Bookings/PaginationSection";
import CostumersGrid from "@/components/admin/RentedFacilities/CostumersGrid";
import CostumersTable from "@/components/admin/RentedFacilities/CostumersTable";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full min-h-[85vh] p-5 md:flex flex-col justify-between">
      <h1 className="text-2xl md:text-4xl font-bold mt-4">Rented Facilites</h1>
      {/* Costumers Table  */}
      <CostumersTable />

      {/* Costumers grid  */}
      <CostumersGrid />

      <PaginationSection />
    </div>
  );
};

export default page;

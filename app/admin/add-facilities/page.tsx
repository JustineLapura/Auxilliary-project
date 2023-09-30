"use client";
import AddFacilityModal from "@/components/admin/AddFacilities/AddFacilityModal";
import DeleteFacilityModal from "@/components/admin/AddFacilities/DeleteFacilityModal";
import FacilityGrid from "@/components/admin/AddFacilities/FacilityGrid";
import FacilityTable from "@/components/admin/AddFacilities/FacilityTable";
import TopHeader from "@/components/admin/AddFacilities/TopHeader";
import React, { useState } from "react";

const page = () => {
  const [addModal, setAddModal] = useState(false);

  return (
    <div className="w-full p-5">
      {/* Top Header Section  */}
      <TopHeader setAddModal={setAddModal}/>

      {/* Facility Table  */}
      <FacilityTable />

      {/* Facility Grid  */}
      <FacilityGrid />

      {/*Modal Overlay  */}
      <div
        className={
          addModal
            ? "fixed top-0 left-0 h-screen w-full bg-blue-900/60 z-20"
            : ""
        }
      />

      {/* Add Facility Modal  */}
      <AddFacilityModal addModal={addModal} setAddModal={setAddModal}  />

    </div>
  );
};

export default page;

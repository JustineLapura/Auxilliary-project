"use client";
import AddFacilityModal from "@/components/admin/AddFacilities/AddFacilityModal";
import FacilityGrid from "@/components/admin/AddFacilities/FacilityGrid";
import FacilityTable from "@/components/admin/AddFacilities/FacilityTable";
import TopHeader from "@/components/admin/AddFacilities/TopHeader";
import React, { useEffect, useState } from "react";
import { facilities } from "@/app/facilities";
import { motion } from "framer-motion";

const page = () => {
  const [addModal, setAddModal] = useState(false);
  const [facilitiesData, setFacilitiesData] = useState<
    { id: number; img: string; name: string }[]
  >([]);

  useEffect(() => {
    setFacilitiesData(facilities);
  }, []);

  return (
    <div
      className="w-full p-5"
    >
      {/* Top Header Section  */}
      <motion.div
        className=""
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", damping: 16 }}
      >
        <TopHeader
          facilitiesCount={facilitiesData.length}
          setAddModal={setAddModal}
        />
      </motion.div>

      {/* Facility Table  */}
      <FacilityTable facilities={facilitiesData} />

      {/* Facility Grid  */}
      <FacilityGrid facilities={facilitiesData} />

      {/*Modal Overlay  */}
      <div
        className={
          addModal
            ? "fixed top-0 left-0 h-screen w-full bg-blue-900/60 z-20"
            : ""
        }
      />

      {/* Add Facility Modal  */}
      <AddFacilityModal addModal={addModal} setAddModal={setAddModal} />
    </div>
  );
};

export default page;

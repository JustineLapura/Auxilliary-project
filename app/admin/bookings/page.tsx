"use client"
import CostumersGrid from "@/components/admin/Bookings/CostumersGrid";
import CostumersTable from "@/components/admin/Bookings/CostumersTable";
import Filters from "@/components/admin/Bookings/Filters";
import PaginationSection from "@/components/admin/Bookings/PaginationSection";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div
      className="flex flex-col justify-between w-full h-full min-h-[100%] p-5"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "tween" }}
    >
      {/* Filters  */}
      <Filters />

      {/* Constumers Table  */}
      <CostumersTable />

      {/* Costumers grid  */}
      <CostumersGrid />

      {/* Pagination Section  */}
      <PaginationSection />
    </motion.div>
  );
};

export default page;

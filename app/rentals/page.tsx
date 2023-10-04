"use client";
import React from "react";
import { facilities } from "../facilities";
import RentalFacilityCards from "@/components/rentals/RentalFacilityCards";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="h-full w-full pt-24">
      <div className="h-full w-full max-w-[960px] mx-auto py-12">
        <motion.h1
          className="text-center mb-10 text-blue-950 uppercase font-black text-5xl md:text-5xl"
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Facilities
        </motion.h1>
        <motion.div
          className="grid place-items-center gap-20 lg:gap-36 sm:grid-cols-2 md:grid-cols-3 mt-16"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.7 }}
        >
          {facilities.map((facility) => (
            <RentalFacilityCards
            key={facility.id}
              id={facility.id}
              img={facility.img}
              facilityName={facility.name}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Page;

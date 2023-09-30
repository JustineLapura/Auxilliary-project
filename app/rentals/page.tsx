import React from "react";
import { facilities } from "../facilities";
import RentalFacilityCards from "@/components/rentals/RentalFacilityCards";




const Page = () => {
  return (
    <div className="h-full w-full pt-24">
      <div className="h-full w-full max-w-[960px] mx-auto py-12">
        <h1 className="text-center mb-10 text-blue-950 uppercase font-black text-5xl md:text-5xl">
          Facilities
        </h1>
        <div className="grid place-items-center gap-20 lg:gap-36 sm:grid-cols-2 md:grid-cols-3 mt-16">
          {facilities.map((facility) => (
            <RentalFacilityCards id={facility.id} img={facility.img} facilityName={facility.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

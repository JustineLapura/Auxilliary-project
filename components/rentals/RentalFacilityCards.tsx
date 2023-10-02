import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type RentalFacilityCardsProps = {
  id: number;
  img: string;
  facilityName: string;
};

const RentalFacilityCards = ({
  id,
  img,
  facilityName,
}: RentalFacilityCardsProps) => {
  return (
    <div
      key={id}
      className="h-[300px] w-[300px] text-center flex flex-col justify-center items-center gap-4"
    >
      <motion.div className="w-full h-full" whileHover={{ scale: 1.1 }}>
        <Image
          className="rounded-xl h-full w-full transform -z-10"
          width={100}
          height={100}
          src={img}
          alt="logo"
        />
      </motion.div>
      <div className="">
        <h1 className="text-xl text-blue-950 font-bold ">{facilityName}</h1>
      </div>
      <Link href={`/rentals/${id}`}>
        <button className="py-1 px-3 rounded-full text-sm bg-blue-600 text-white hover:bg-blue-700 hover:text-blue-200">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default RentalFacilityCards;

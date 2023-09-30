"use client";
import React, { useEffect, useState } from "react";
import { facilities } from "@/app/facilities";
import FacilityCard from "@/components/rentals/FacilityCard";
import BookingModal from "@/components/rentals/BookingModal";

interface RouteParams {
  id: number; // Assuming 'id' is a string, change the type if it's different
}

const Page = ({ params }: { params: RouteParams }) => {
  const [facility, setFacility] = useState<
    { id: number; img: string; name: string }[]
  >([]); // Provide the correct type for the state

  const [isBooking, setIsBooking] = useState(false);

  const { id } = params;
  const displayedFacility = facility[id - 1];
  // console.log(id);

  // console.log(facilities);
  const closeBookingModal = () => {
    setIsBooking(false);
  };

  useEffect(() => {
    setFacility(facilities);
  }, []);
  return (
    <div className="w-full h-full px-6 pt-32">
      {displayedFacility ? (
        <FacilityCard
          id={displayedFacility.id}
          img={displayedFacility.img}
          name={displayedFacility.name}
          setIsBooking={() => setIsBooking(true)}
        />
      ) : (
        <h1>Faicility Not Found!</h1>
      )}

      {/* Modal overlay  */}
      <div
        onClick={closeBookingModal}
        className={
          isBooking ? "fixed top-0 left-0 w-full h-full bg-blue-900/60" : ""
        }
      />

      {/* Booking Modal */}
      <BookingModal displayedFacility={displayedFacility} isBooking={isBooking} closeBookingModal={closeBookingModal}  />
    </div>
  );
};

export default Page;

import React from "react";

type BookingModalProps = {
  displayedFacility: {
    id: number;
    img: string;
    name: string;
  };
  isBooking: boolean;
  closeBookingModal: () => void;
};

const BookingModal = ({displayedFacility, isBooking, closeBookingModal} : BookingModalProps) => {
  return (
    <div
      className={
        isBooking
          ? "fixed h-[300px] w-[400px] flex flex-col gap-6 justify-evenly items-center text-blue-900 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-white rounded-2xl z-20 ease-in duration-300"
          : "fixed h-[300px] w-[400px] flex flex-col gap-6 justify-evenly items-center text-blue-900 left-1/2 top-[-100%] transform -translate-x-1/2 -translate-y-1/2 py-10 bg-white rounded-2xl z-20 ease-in duration-300"
      }
    >
      {displayedFacility && (
        <h1 className="text-xl text-center font-bold text-gray-900">
          Are you sure you want to book <br /> {displayedFacility.name}?
        </h1>
      )}
      <div className="space-x-4 text-lg font-bold">
        <button
          onClick={closeBookingModal}
          className="px-6 py-2 bg-red-500 text-white rounded-full hover:scale-105 duration-300"
        >
          No
        </button>
        <button
          onClick={closeBookingModal}
          className="px-6 py-2 bg-blue-900 text-white rounded-full hover:scale-105 duration-300"
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default BookingModal;

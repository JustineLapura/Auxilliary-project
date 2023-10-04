import React from "react";
import { FaDesktop, FaTooth } from "react-icons/fa";
import { motion } from "framer-motion";

const Dormitories = () => {
  return (
    <div className="w-full h-full pb-5 px-5">
      <motion.h1
        className="flex gap-4 text-lg lg:text-2xl font-bold text-gray-600 my-3"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.6, type: "spring", damping: 16 }}
      >
        Dormitories
      </motion.h1>
      <motion.div className="w-full grid md:grid-cols-3 place-items-center gap-4 lg:gap-10"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.8, type: "spring", damping: 16 }}>
        {/* card1 */}
        <motion.div className="w-[300px] h-[100px] flex justify-between items-center p-4 rounded-lg bg-yellow-500 hover:scale-105 hover:bg-yellow-600 duration-200">
          <FaDesktop className="w-1/4 h-full" size={25} />
          <h1 className="text-lg md:text-xl text-gray-900 font-bold">
            Total User
          </h1>
        </motion.div>
        {/* card2 */}
        <motion.div className="w-[300px] h-[100px] flex justify-between items-center p-4 rounded-lg bg-yellow-500 hover:scale-105 hover:bg-yellow-600 duration-200">
          <FaTooth className="w-1/4 h-full" size={25} />
          <h1 className="text-lg md:text-xl text-gray-900 font-bold">
            Total Facilities
          </h1>
        </motion.div>
        {/* card3 */}
        <motion.div className="w-[300px] h-[100px] flex justify-between items-center p-4 rounded-lg bg-yellow-500 hover:scale-105 hover:bg-yellow-600 duration-200">
          <FaDesktop className="w-1/4 h-full" size={25} />
          <h1 className="text-lg md:text-xl text-gray-900 font-bold">
            Total Reservations
          </h1>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dormitories;

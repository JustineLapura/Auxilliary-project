import React from "react";
import Navbar from "./Navbar";


const Main = () => {
  return (
    <div className='relative h-screen w-full  bg-[url("/SSU.jpg")] bg-no-repeat bg-cover bg-center'>
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="absolute top-0 left-0 h-full w-full bg-blue-500/50"></div>
      <div className="relative px-4 h-full w-full flex flex-col gap-8 mt-[150px] items-center text-white font-bold">
        {/* Main Text */}
        <div className="grid place-items-center gap-2 lg:gap-4 text-center">
          <h1 className="text-3xl font-black sm:text-4xl lg:text-5xl text">
            Book, Create, Celebrate
          </h1>
          <h1 className="text-lg sm:text-2xl lg:text-5xl font-black">
            Unleash the Magic of our Spaces
          </h1>
        </div>

        {/* Main button  */}
        <button className="py-3 px-6 rounded-lg bg-yellow-300/90 font-bold shadow-xl">
          Check Availability
        </button>
      </div>

      {/*image slider  */}
      <div className="absolute bottom-0 h-20 w-full flex justify-center items-center bg-blue-900">
        
      </div>
    </div>
  );
};

export default Main;

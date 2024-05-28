import React from "react";
import TopDashboardNav from "../utils/TopDashboardNav";

const More = () => {
  return (
    <div
      className=" flex  h-full min-h-screen flex-col 
items-center justify-start mb-32 md:mb-0
"
    >
      <div className=" flex lg:items-center md:items-end items-center justify-enter flex-col  w-full">
        <TopDashboardNav />
        <div
          className="  w-full flex items-start justify-start
   mb-2
   md:px-16 px-12 flex-col "
        >
          <span className=" text-xl font-semibold text-secondary">More</span>
          <p className=" text-sm text-gray-500"></p>
        </div>

        <div className="  flex items-center justify-start   ">
          {/* head data */}
        </div>
        <div className="flex items-center  text-center break-words justify-center   mt-16 px-16 w-full  gap-10 flex-wrap">
          {/* lower data */}
        </div>
      </div>
    </div>
  );
};

export default More;

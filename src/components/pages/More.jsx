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
   lg:px-16 md:px-12 px-5 flex-col  "
        >
          <span className=" text-xl font-semibold text-secondary">More</span>
          <p className=" text-sm text-gray-500">View more setting</p>
        </div>

        {/* head data */}
        <div className="  flex items-start justify-start w-full gap-2  lg:px-16 md:px-12 sm:px-10 px-5 flex-col  ">
          <div className=" flex items-center justify-center gap-2">
            <div className=" flex items-center justify-center text-base font-semibold   bg-[#ffc7d6] w-12 h-12 rounded-full  ">
              KS
            </div>
            <p className=" text-secondary text-base font-semibold">User name</p>
          </div>

          <div className="  flex items-center justify-start w-full  lg:px-16 md:px-12 sm:px-10 px-5 bg-[#094063] text-base font-semibold text-white  rounded-lg py-3 mt-5">
            <div className=" w-1/3 flex items-center justify-center flex-col gap-6 p-2 border-r">
              <p>Plans</p>
              <p>0</p>
            </div>
            <div className=" w-1/3 flex items-center justify-center flex-col gap-6 p-2 border-r">
              <p>Active</p>
              <p>0</p>
            </div>
            <div className=" w-1/3 flex items-center justify-center flex-col gap-6 p-2">
              <p>Inactive</p>
              <p>0</p>
            </div>
          </div>
        </div>

        <div className="flex items-center  text-center break-words justify-center   mt-16 px-16 w-full  gap-10 flex-wrap">
          {/* lower data */}
        </div>
      </div>
    </div>
  );
};

export default More;

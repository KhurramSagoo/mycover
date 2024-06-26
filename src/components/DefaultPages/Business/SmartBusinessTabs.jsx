import React, { useState } from "react";
import hmo from "../../../assets/business/smartBusinessTabs/e-hmo-id.png";
import self from "../../../assets/business/smartBusinessTabs/self-inspection.png";
import peace from "../../../assets/business/smartBusinessTabs/peace-of-mind.png";
import claim from "../../../assets/business/smartBusinessTabs/instant-claim.png";

const SmartBusinessTabs = ({ tabData, headTitle, headDetail }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="lg:py-[120px] md:py-[100px] sm:py-[80px] py-[50px]  px-4 bg-[#f8fcfb] w-full lg:px-16  h-full">
      <div className="my-4 px-4 flex items-center md:justify-start justify-center flex-col flex-wrap md:items-start w-full md:w-1/2">
        <p className="my-4 text-secondary md:text-2xl lg:text-4xl  text-[22px] font-extrabold text-wrap">
          {headTitle && headTitle}
        </p>
        <p className="my-4 text-gray-500 text-sm md:text-xl  font-medium text-wrap ">
          {headDetail && headDetail}
        </p>
      </div>

      {/* buttons tabs */}
      <div className="flex justify-center items-center w-full overflow-x-auto flex-wrap">
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={`md:text-secondary text-xs font-medium lg:w-1/4  rounded lg:rounded-none text-gray-400 md:py-5 px-5 py-3 m-1 md:m-0 ${
              activeTab === index
                ? " bg-primary  md:text-primary md:border-b-0  lg:bg-[#f8fcfb] md:bg-gray-100 md:border-2 border-gray-100  text-white"
                : " bg-gray-200 border md:bg-white"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* card */}
      <div className="lg:mt-12 mt-5 flex md:flex-row flex-col items-center bg-inherit w-full justify-center min-h-fit py-0  ">
        {activeTab !== null && (
          <div className=" flex-col md:flex-row sm:flex-col  flex-wrap flex md:items-end md:justify-center items-center justify-center w-full h-full min-h-fit ">
            <div className=" flex items-center justify-center md:items-start md:justify-start flex-col md:flex-row flex-wrap  w-full lg:w-1/2 md:p-28  ">
              <p
                className=" text-[24px]
                         mb-6
                         text-secondary
                         font-bold"
              >
                {tabData[activeTab].title}
              </p>
              <p className="text-sm md:text-base text-center text-gray-500 mt-1 mb-4 font-medium">
                {tabData[activeTab].detail}
              </p>
            </div>
            <div className=" lg:w-1/2 w-full md:px-12 flex items-center justify-center py-5">
              <img
                loading="lazy"
                className="lg:w-96 md:w-72 w-52"
                src={tabData[activeTab].image}
                alt={tabData[activeTab].title}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartBusinessTabs;

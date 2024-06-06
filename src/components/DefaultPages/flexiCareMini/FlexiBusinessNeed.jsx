import React, { useState } from "react";
import hmo from "../../../assets/business/smartBusinessTabs/e-hmo-id.png";
import self from "../../../assets/business/smartBusinessTabs/self-inspection.png";
import peace from "../../../assets/business/smartBusinessTabs/peace-of-mind.png";
import claim from "../../../assets/business/smartBusinessTabs/instant-claim.png";

const FlexiBusinessNeed = ({ tabData, headTitle, headDetail }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="lg:py-[120px] md:py-[100px] sm:py-[80px] py-[50px]  px-4 bg-[#f8fcfb] w-full lg:px-16  h-full">
      <div className="my-4 px-4 flex items-center justify-center flex-col flex-wrap w-full">
        <p className="my-4 text-secondary md:text-3xl sm:text-2xl lg:text-5xl  text-xl font-extrabold text-wrap">
          {headTitle && headTitle}
        </p>
        <p className="my-4 text-gray-600 text-sm md:text-base  font-medium text-wrap w-2/3 ">
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
          <div className=" flex-col md:flex-row sm:flex-col  flex-wrap flex  items-center justify-center w-full h-full min-h-fit ">
            <div className=" flex items-center justify-center md:items-start md:justify-start flex-col md:flex-row flex-wrap px-5  w-full lg:w-1/2 md:p-5  gap-5  ">
              <p
                className=" text-xl md:text-3xl
                         mb-6
                         text-secondary
                         font-medium"
              >
                {tabData[activeTab].title}
              </p>
              <p className="text-sm md:text-base  text-gray-600 mt-1 font-medium flex items-start justify-start lg:w-2/3 w-full break-words">
                {tabData[activeTab].detail}
              </p>

              {/* extra para */}
              <div className=" flex items-start justify-start flex-col gap-5 w-full">
                {tabData[activeTab].extra &&
                  tabData[activeTab].extra.map((item, index) => (
                    <div
                      key={index}
                      className=" flex items-center  justify-start gap-5"
                    >
                      <img src={item.image && item.image} alt="" />
                      <p className="text-base text-gray-600 font-medium">
                        {item.line && item.line}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <div className=" lg:w-1/2 w-full md:px-12 px-5 flex items-center justify-center py-5">
              <img
                loading="lazy"
                className="sm:w-full w-full"
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

export default FlexiBusinessNeed;

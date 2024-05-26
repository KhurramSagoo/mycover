import React, { useState } from "react";

const BusinessOneStopTab = ({ tabData, solution, head, detail }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full mx-auto flex items-center justify-center flex-col lg:flex-row md:px-16 sm:px-8 px-4 my-10">
      <div className="w-full lg:w-1/2 ">
        <header className="flex md:items-start md:justify-start items-start justify-center flex-col w-full">
          <p className="md:text-xl text-sm mb-4 text-primary font-medium">
            {solution}
          </p>
          <p className="md:text-4xl text-xl mb-4 w-full lg:w-[500px] font-extrabold text-wrap text-secondary !leading-snug">
            {head}
          </p>
          <p className="md:text-xl text-sm font-medium mb-4 text-black">
            {detail}
          </p>
        </header>

        {/* tabs */}
        <div className="flex md:flex-col font-medium items-start justify-center w-full rounded-lg flex-row bg-lime-0">
          {tabData.map((tab, index) => (
            <div
              className={`shadow-md lg:w-[560px] w-full mb-4 flex items-center lg:justify-start justify-start pl-2 h-[70px] cursor-pointer flex-wrap ${
                activeTab === index
                  ? "opacity-100 font-bold "
                  : "opacity-50 hover:opacity-100"
              } sm:w-96 w-full`}
              key={index}
              onClick={() => setActiveTab(index)}
              style={{
                borderLeftColor: tab.borderColor,
                borderLeftWidth: "4px",
              }}
            >
              <button className="w-auto h-auto">{tab.head}</button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 md:px-8 sm:px-4 px-0 my-12 h-full min-h-[450px]">
        {/* Render tab content */}
        {tabData.map((tab, index) => (
          <div
            key={index}
            className={`${
              activeTab === index ? "block" : "hidden"
            } flex items-baseline justify-center flex-col bg-[#f8fcfb] p-5`}
          >
            {tab.video && (
              <video
                controls
                autoPlay
                onPlay={activeTab}
                autoFocus
                loop
                src={tab.video}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessOneStopTab;

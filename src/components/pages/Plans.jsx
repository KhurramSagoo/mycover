import React, { useState } from "react";
import TabProps from "../TabProps";
import heart from "../../assets/heart.svg";
import auto from "../../assets/auto.svg";
import aeroplane from "../../assets/aeroplane.svg";
import TopDashboardNav from "../utils/TopDashboardNav";

const Plans = () => {
  const [selectTab, setSelectTab] = useState(0);
  console.log(selectTab);

  const tabs = [
    {
      head: "Health",
      cards: [
        {
          name: "Flexi Care",
          image: heart,
          bg: "#fce7f6",
        },
        {
          name: "Flexi Care Mini",
          image: heart,
          bg: "#ebe9fe",
        },
      ],
    },
    {
      head: "Auto",
      cards: [
        {
          name: "Comprehensive Cover",
          image: auto,
          bg: "#ebe9fe",
        },
        {
          name: "Monthly Comprehensive Cover",
          image: auto,
          bg: "#ffead5",
        },
        {
          name: "Third Party",
          image: auto,
          bg: "#d1fadf",
        },
        {
          name: "Mini Comprehensive",
          image: auto,
          bg: "#d1e9ff",
        },
      ],
    },
    {
      head: "Travel",
      cards: [
        {
          name: "Travel Insurance",
          image: aeroplane,
          bg: "#ffead5",
        },
      ],
    },
  ];

  return (
    <div
      className=" flex max-w-[1200px] h-full min-h-screen flex-col 
items-center justify-start
  "
    >
      <div className=" flex lg:items-center md:items-end items-center justify-enter flex-col max-w-[1000px]  w-full">
        <TopDashboardNav />
        <div
          className=" w-full flex items-start justify-start
     mb-2
     md:px-16 px-12 flex-col "
        >
          <span className=" text-xl font-bold text-secondary">All Plans</span>
          <p className=" text-sm text-gray-500">Find the perfect cover</p>
        </div>

        <div className="  flex items-center justify-start   ">
          {tabs.map((item, index) => (
            <div
              onClick={() => setSelectTab(index)}
              key={index}
              className={`text-base md:px-10 lg:px-16  py-2 border-l-0 cursor-pointer ${
                selectTab === index
                  ? " border-b-4 border-primary"
                  : " border-b-4 border-b-gray-200 "
              } `}
            >
              <p
                className={`text-base  px-5 py-2  ${
                  selectTab === index
                    ? "font-bold  text-primary "
                    : " text-gray-500 font-normal "
                } `}
              >
                {item.head}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center  text-center break-words justify-center   mt-16 px-16 w-full  gap-12 flex-wrap">
          {tabs[selectTab].cards.map((item, index) => (
            <div
              key={index}
              className=" flex items-center justify-center flex-col w-32 h-auto rounded-md border p-2 cursor-pointer"
            >
              <div
                className=" flex items-end rounded-md justify-center w-full gap"
                style={{ backgroundColor: item.bg }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className=" w-20 h-20 object-contain pt-5"
                />
              </div>
              <p className=" text-sm font-medium text-secondary">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;

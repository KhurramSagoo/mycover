import React, { useState } from "react";
import TabProps from "../TabProps";
import heart from "../../assets/heart.svg";
import auto from "../../assets/auto.svg";
import aeroplane from "../../assets/aeroplane.svg";
import TopDashboardNav from "../utils/TopDashboardNav";

const CompareSvg = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.03356 13.4399C8.86023 13.5133 8.67356 13.5799 8.47356 13.6466L7.42023 13.9933C4.77356 14.8466 3.38023 14.1333 2.52023 11.4866L1.66689 8.85328C0.813561 6.20661 1.52023 4.80661 4.16689 3.95328L5.19356 3.61328C5.06689 3.93328 4.96023 4.29995 4.86023 4.71328L4.20689 7.50661C3.47356 10.6466 4.54689 12.3799 7.68689 13.1266L8.80689 13.3933C8.88023 13.4133 8.96023 13.4266 9.03356 13.4399Z"
      fill="#4FBFA3"
    ></path>
    <path
      d="M11.4465 2.14009L10.3331 1.88009C8.10646 1.35342 6.77979 1.78675 5.99979 3.40009C5.79979 3.80675 5.63979 4.30009 5.50646 4.86675L4.85313 7.66009C4.19979 10.4468 5.05979 11.8201 7.83979 12.4801L8.95979 12.7468C9.34646 12.8401 9.70646 12.9001 10.0398 12.9268C12.1198 13.1268 13.2265 12.1534 13.7865 9.74675L14.4398 6.96009C15.0931 4.17342 14.2398 2.79342 11.4465 2.14009Z"
      fill="#4FBFA3"
    ></path>
  </svg>
);

const Plans = () => {
  const [selectTab, setSelectTab] = useState(0);

  const tabs = [
    {
      head: "Health",
      btn: "Compare products",
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
          <span className=" text-xl font-semibold text-secondary">
            All Plans
          </span>
          <p className=" text-sm text-gray-500">Find the perfect cover</p>
        </div>

        <div className="  flex items-center justify-start   ">
          {tabs.map((item, index) => (
            <div
              onClick={() => setSelectTab(index)}
              key={index}
              className={`text-base px-0
              sm:px-5 md:px-10 lg:px-16  py-2 border-l-0 cursor-pointer ${
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
        <div className="flex items-center  text-center break-words justify-center   mt-16 px-16 w-full  gap-10 flex-wrap">
          {tabs[selectTab].cards.map((item, index) => (
            <div
              key={index}
              className=" flex items-center justify-between flex-col w-48 min-h-32 h-auto rounded-md border p-3 cursor-pointer"
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
              <p className=" text-sm font-medium text-secondary mt-2">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        {/* compare button */}
        <div className="flex items-center  text-center break-words justify-center   mt-16 px-16 w-full  gap-10 flex-wrap cursor-pointer">
          {tabs[selectTab].btn && (
            <div className=" flex items-center justify-center gap-2 text-primary font-medium border py-4 px-6 rounded-lg border-primary">
              <CompareSvg />
              <p>{tabs[selectTab].btn}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Plans;

import React from "react";
import TabProps from "../TabProps";
import heart from "../../assets/heart.svg";
import auto from "../../assets/auto.svg";
import aeroplane from "../../assets/aeroplane.svg";
import TopDashboardNav from "../utils/TopDashboardNav";

const Plans = () => {
  const images = {
    health: heart,
    auto: auto,
    travel: aeroplane,
  };

  const tabs = [
    {
      label: "Health",
      value: "health",
      title: "There is no pending Claims At the Moment",
      detail: "",
      images: {
        image1: heart,
        image2: heart,
      },
    },
    {
      label: "Auto",
      value: "auto",
      title: "",
      detail: "",
      images: {
        image1: auto,
        image2: auto,
      },
    },
    {
      label: "Travel",
      value: "travel",
      title: "",
      detail: "",
      images: {
        image1: aeroplane,
        image2: aeroplane,
      },
    },
    {
      label: "Rejected",
      value: "rejected",
      title: "",
      detail: "",
    },
  ];

  return (
    <div className=" flex max-w-[1200px] h-full min-h-screen flex-col w-full">
      <TopDashboardNav />
      <div className="w-full flex items-center justify-start mt-5 px-12 max-w-[1050px] mx-auto">
        <span className="text-xl font-medium text-blue-900">Plans </span>
      </div>
      <div>
        <TabProps tabs={tabs} images={images} />
      </div>
    </div>
  );
};

export default Plans;

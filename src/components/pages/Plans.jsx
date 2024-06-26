import React, { useState } from "react";
import TabProps from "../TabProps";
import heart from "../../assets/heart.svg";
import auto from "../../assets/auto.svg";
import aeroplane from "../../assets/aeroplane.svg";
import TopDashboardNav from "../utils/TopDashboardNav";
import { toast } from "react-toastify";
import PlansCardsDrawerSheet from "../utils/PlansCardsDrawerSheet";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import DrawerComponent from "./plans/health/DrawerComponent";

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
  const [selectPlan, setSelectPlan] = useState(null);
  const [getTheWholeData, setGetTheWholeData] = useState({
    head: "",
    title: "",
  });

  const tabs = [
    {
      head: "Health",
      btn: "Compare products",
      cards: [
        {
          title: "Flexi Care",
          image: heart,
          bg: "#fce7f6",
          drawerComponent: <DrawerComponent />,
        },
        {
          title: "Flexi Care Mini",
          image: heart,
          bg: "#ebe9fe",
          drawerComponent: <DrawerComponent />,
        },
      ],
    },
    {
      head: "Auto",
      cards: [
        {
          title: "Comprehensive Cover",
          image: auto,
          bg: "#ebe9fe",
        },
        {
          title: "Monthly Comprehensive Cover",
          image: auto,
          bg: "#ffead5",
        },
        {
          title: "Third Party",
          image: auto,
          bg: "#d1fadf",
        },
        {
          title: "Mini Comprehensive",
          image: auto,
          bg: "#d1e9ff",
        },
      ],
    },
    {
      head: "Travel",
      cards: [
        {
          title: "Travel Insurance",
          image: aeroplane,
          bg: "#ffead5",
        },
      ],
    },
  ];

  const getTheCard = (tabIndex, cardIndex) => {
    if (tabIndex !== 0) {
      setSelectTab(tabIndex);
    } else {
      setSelectTab(0);
    }

    setSelectPlan(cardIndex);
    if (cardIndex !== null) {
      const selectedTab = tabs[tabIndex];
      const selectedCard = selectedTab.cards[cardIndex];
      // console.log(selectedCard);
      const selectedData = {
        head: selectedTab.head,
        title: selectedCard.title,
      };
      setGetTheWholeData(selectedData);
      console.log(getTheWholeData);
      // toast.success(
      //   `Selected Plan: ${selectedCard.title} from Tab: ${selectedTab.head}`
      // );
    }
  };

  // Updated getTheCard function
  const handleTabChange = (tabIndex) => {
    setSelectTab(tabIndex);
    setSelectPlan(null);
    setGetTheWholeData({
      head: tabs[tabIndex].head,
      title: tabs[tabIndex].cards[0],
    });
  };

  return (
    <div className="flex h-full min-h-screen flex-col items-center justify-start mb-32 md:mb-0 ">
      <div className="flex lg:items-center md:items-end items-center justify-enter flex-col w-full">
        <TopDashboardNav />
        <div className="w-full flex items-start justify-start mb-2 md:px-16 px-12 flex-col">
          <span className="text-xl font-semibold text-secondary">
            All Plans
          </span>
          <p className="text-sm text-gray-500">Find the perfect cover</p>
        </div>

        <div className="flex items-center justify-start">
          {tabs.map((tab, tabIndex) => (
            <div
              onClick={() => handleTabChange(tabIndex)}
              key={tabIndex}
              className={`text-base px-0 sm:px-5 md:px-10 lg:px-16 py-2 border-l-0 cursor-pointer ${
                selectTab === tabIndex
                  ? "border-b-4 border-primary"
                  : "border-b-4 border-b-gray-200"
              }`}
            >
              <p
                className={`text-base px-5 py-2 ${
                  selectTab === tabIndex
                    ? "font-bold text-primary"
                    : "text-gray-500 font-normal"
                }`}
              >
                {tab.head}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center text-center break-words justify-center mt-16 px-16 w-full gap-10 flex-wrap">
          {tabs[selectTab].cards.map((card, cardIndex) => (
            <Sheet key={cardIndex} className="">
              <SheetTrigger>
                <div
                  key={cardIndex}
                  className={`flex items-center justify-between flex-col w-48 min-h-40 h-auto rounded-md border p-3 cursor-pointer ${
                    selectPlan === cardIndex ? " bg-primary" : ""
                  }`}
                  onClick={() => getTheCard(selectTab, cardIndex)}
                >
                  <div
                    className="flex items-end rounded-md justify-center w-full"
                    style={{ backgroundColor: card.bg }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-20 h-20 object-contain pt-5"
                    />
                  </div>
                  <p
                    className={`text-sm font-medium ${
                      selectPlan === cardIndex
                        ? " text-white"
                        : "text-secondary"
                    }  mt-2 `}
                  >
                    {card.title}
                  </p>
                </div>
              </SheetTrigger>

              {/* <SheetContent>
                <SheetHeader>
                  <SheetTitle>{getTheWholeData.head}</SheetTitle>
                  <SheetDescription>
                    
                    {getTheWholeData.title}</SheetDescription>
                </SheetHeader>
              </SheetContent> */}

              <SheetContent className="  w-72 border-b-2 sm:w-full h-auto">
                <SheetHeader>
                  <SheetTitle className=" w-full rounded-md">
                    <div className=" flex items-center  justify-center text-secondary text-xl font-bold ">
                      <p>{getTheWholeData.head}</p>
                      {/* <p>({value})</p> */}
                    </div>
                  </SheetTitle>
                  <SheetDescription>
                    {/* {value === 0 && (
              <div className=" mt-10 h-screen flex items-center justify-start flex-col gap-5">
                <div className=" text-xl font-bold text-black text-center break-words">
                  {detail}
                </div>
                <div className=" text-base font text-gray-500 text-center break-words">
                  {subDetail}
                </div>
                <div className=" text-xl font-bold text-center break-words bg-[#eff8ff] rounded-full w-36 h-36 ">
                  <img src={search} alt="" />
                </div>
              </div>
            )} */}
                    <div
                      className=" flex items-start  justify-start  w-full 
               text-secondary text-xl font-semibold my-5 flex-col"
                    >
                      <p>{getTheWholeData.title}</p>
                      <p className=" text-base font-normal">
                        Get quality cover
                      </p>
                    </div>
                    {tabs[selectTab]?.cards[selectPlan]?.drawerComponent && (
                      <DrawerComponent />
                    )}
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          ))}
        </div>

        {/* compare button */}
        <div className="flex items-center text-center break-words justify-center mt-16 px-16 w-full gap-10 flex-wrap cursor-pointer">
          {tabs[selectTab].btn && (
            <div className="flex items-center justify-center gap-2 text-primary font-medium border py-4 px-6 rounded-lg border-primary">
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

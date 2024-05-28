import { useState } from "react";
import TabProps from "../TabProps";
import TopDashboardNav from "../utils/TopDashboardNav";
import search from "../../assets/dashboard/doc-search.svg";
const Cover = () => {
  const [selectTab, setSelectTab] = useState(0);
  // console.log(selectTab);
  const tabs = [
    {
      label: "Account",
      value: "account",
      title: "Active plans Empty",
      detail:
        "You don't have any active plans, go to Plans page to buy new plan",
    },
    {
      label: "Pending",
      value: "pending",
      title: "Pending plans Empty",
      detail: "There is no pending plans to be activated at the moment",
    },
    {
      label: "Expired",
      value: "expired",
      title: "Expired plans Empty",
      detail: "There is no expired plans to be renewed at the moment.",
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
          className=" w-full flex items-center justify-start
       mb-2
       md:px-16 px-12 "
        >
          <span className=" text-xl font-bold text-secondary">My Cover</span>
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
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center text-center break-words justify-center flex-col mt-16 px-16">
          <img src={search} alt="" />
          <h2 className="text-base font-medium text-gray-500">
            {tabs[selectTab].title}
          </h2>
          <p className="text-sm font-medium text-gray-400">
            {tabs[selectTab].detail}
          </p>
        </div>
        {/* <div className=" w-full">
        <TabProps tabs={tabs} />
      </div> */}
      </div>
    </div>
  );
};

export default Cover;

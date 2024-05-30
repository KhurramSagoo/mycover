import bell from "../../assets/bell.svg";
import React, { useState } from "react";

import down from "../../assets/chevron-down.svg";
import profile from "../../assets/profile.svg";
import exit from "../../assets/exit.png";

import DropDownMenuComponent from "./DropDownMenuComponent";
import DrawerSheet from "./DrawerSheet";

const TopDashboardNav = () => {
  return (
    <div
      className="  w-full pr-20
bg-white  h-[100px] flex items-center  justify-end "
    >
      <DrawerSheet
        head={
          <div className=" rounded-full border cursor-pointer mx-2">
            <img src={bell} alt="" />
          </div>
        }
        title={"To Dos"}
        detail={"No Pending To-Dos"}
        value={0}
        subDetail={"To-dos will appear here when you have any"}
      />
      <div className=" flex items-center justify-center cursor-pointer">
        <DropDownMenuComponent down={down} profile={profile} exit={exit} />
      </div>
    </div>
  );
};

export default TopDashboardNav;

// head, title, detail, subDetail, value

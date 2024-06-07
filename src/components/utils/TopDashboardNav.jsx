import bell from "../../assets/bell.svg";
import React, { useState } from "react";
import logo from "../../assets/navbar-logo.svg";

import down from "../../assets/chevron-down.svg";
import profile from "../../assets/profile.svg";
import exit from "../../assets/exit.png";

import DropDownMenuComponent from "./DropDownMenuComponent";
import DrawerSheet from "./DrawerSheet";
import { useNavigate } from "react-router-dom";

const TopDashboardNav = () => {
  const navigate = useNavigate();
  return (
    <div className="  w-full pr-20bg-white  h-[100px] flex items-center  justify-between md:px-10 px-5">
      <div className=" cursor-pointer" onClick={() => navigate("/")}>
        <img src={logo} alt="" className=" flex md:hidden" />
      </div>
      <div className=" flex items-center justify-center">
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
    </div>
  );
};

export default TopDashboardNav;

// head, title, detail, subDetail, value

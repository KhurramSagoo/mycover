import bell from "../../assets/bell.svg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import down from "../../assets/chevron-down.svg";
import profile from "../../assets/profile.svg";
import exit from "../../assets/exit.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

const TopDashboardNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  return (
    <div
      className=" max-w-[1200px] w-full float-left ms-auto me-5  xl:pr-40
bg-menuIcon  h-[100px] flex items-center  justify-end"
    >
      <div className=" rounded-full border cursor-pointer mx-2">
        <img src={bell} alt="" />
      </div>
      <div
        className=" flex items-center justify-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <div
          className=" rounded-full bg-teal-500 w-10 h-10 flex items-center justify-center text-md font-medium text-white mx-2 "
          onClick={toggleDropdown}
        >
          <span>KS</span>
        </div>
        {/* <span>
          <img src={down} alt="" />
        </span> */}
      </div>
      {isDropdownOpen && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <img src={down} alt="" className="w-[15px]" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" bg-white w-[250px] mt-12 mr-28 shadow rounded-xl flex items-start ps-8 h-28 flex-col justify-center ">
            <DropdownMenuLabel>
              <div className=" flex items-center justify-center hover:bg-gray-100 cursor-pointer py-5 w-full ">
                <img src={profile} alt="" className="mr-3" />
                <span>My Account</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuLabel>
              <div className=" flex items-center justify-center hover:bg-gray-100 cursor-pointer py-2 w-full">
                <img src={exit} alt="" className=" w-5 mr-2" />
                <span>Logout</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      {/* <div className=" flex items-center justify-end">
        <div className=" flex items-start justify-center flex-col md:flex-row text-2xl font-semibold ms-3  text-gray-500 hidden ">
          <p>Hello,</p>
          <p>
            User{" "}
            <span role="img" aria-label="Wave">
              👋
            </span>
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default TopDashboardNav;

// import React from "react";

// const Navbar = () => {
//   const navigate = useNavigate();
//   return (

//   );
// };

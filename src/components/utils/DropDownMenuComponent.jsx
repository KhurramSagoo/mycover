import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const DropDownMenuComponent = ({ down, profile, exit }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className=" flex items-center justify-center">
          <div className=" rounded-full bg-teal-500 w-10 h-10 flex items-center justify-center text-md font-medium text-white mx-2 ">
            <span>KS</span>
          </div>
          <img src={down} alt="" className="w-[15px]" />
        </div>
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
  );
};

export default DropDownMenuComponent;

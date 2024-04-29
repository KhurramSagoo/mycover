import React from "react";
import bell from "../assets//bell.svg";

const Navbar = () => {
  return (
    <div className=" xl:container bg-menuIcon h-28 flex items-center justify-between px-5 m-0">
      <div className=" flex items-center justify-center">
        <div className=" rounded-full bg-teal-500 w-10 h-10 flex items-center justify-center text-md font-medium text-white ">
          KS
        </div>
        <div className=" flex items-start justify-center flex-col md:flex-row text-1xl font-semibold ms-3  ">
          <p>Hello,</p>
          <p>
            User{" "}
            <span role="img" aria-label="Wave">
              👋
            </span>
          </p>
        </div>
      </div>
      <div className=" rounded-full border cursor-pointer">
        <img src={bell} alt="" />
      </div>
    </div>
  );
};

export default Navbar;

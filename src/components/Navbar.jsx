import React from "react";
import bell from "../assets//bell.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div
      className=" max-w-[1000px] w-full px-5
    bg-menuIcon  h-[100px] flex items-center  justify-between"
    >
      <div className=" flex items-center justify-center">
        <div className=" rounded-full bg-teal-500 w-10 h-10 flex items-center justify-center text-md font-medium text-white ">
          KS
        </div>
        <div className=" flex items-start justify-center flex-col md:flex-row text-2xl font-semibold ms-3  text-gray-500 ">
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

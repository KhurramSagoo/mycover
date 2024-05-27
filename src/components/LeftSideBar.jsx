import navbarlogo from "../assets/navbar-logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ReferFriend from "./ReferFriend";

import home from "../assets/dashboard/home.svg";
import homeActive from "../assets/dashboard/home-mobile-active.svg";
import cover from "../assets/dashboard/mycover.svg";
import coverActive from "../assets/dashboard/cover-active.svg";
import plans from "../assets/dashboard/plans.svg";
import plansActive from "../assets/dashboard/plans-active.svg";
import wallet from "../assets/dashboard/wallet-inactive.svg";
import walletActive from "../assets/dashboard/wallet-active.svg";
import claim from "../assets/dashboard/claim-inactive.svg";
import claimActive from "../assets/dashboard/claim-active.svg";
import more from "../assets/dashboard/more-square.svg";
import moreActive from "../assets/dashboard/active-more.svg";

const myArray = [
  {
    name: "Home",
    inactive: home,
    active: homeActive,
    route: "/dashboard",
  },
  {
    name: "My Cover",
    inactive: cover,
    active: coverActive,
    route: "/dashboard/mycover",
  },
  {
    name: "Plans",
    inactive: plans,
    active: plansActive,
    route: "/dashboard/plans",
  },
  {
    name: "Wallet",
    inactive: wallet,
    active: walletActive,
    route: "/dashboard/wallet",
  },
  {
    name: "Claim",
    inactive: claim,
    active: claimActive,
    route: "/dashboard/claim",
  },
  {
    name: "More",
    inactive: more,
    active: moreActive,
    route: "/dashboard/more",
  },
];

const LeftSideBar = () => {
  const [activeItem, setActiveItem] = useState(0);
  const navigate = useNavigate();

  const handleClick = (index) => {
    setActiveItem(index);
    navigate(myArray[index].route);
  };

  return (
    <div className="flex flex-col fixed top-0 left-0 bottom-0 bg-white w-[290px] max-h-screen h-screen overflow-y-hidden items-start justify-start">
      <div
        className="cursor-pointer fixed h-[50px] w-[290px] top-0 left-0 flex items-center justify-start mt-4 px-6 py-4"
        onClick={() => navigate("/")}
      >
        <img src={navbarlogo} alt="" className="" loading="lazy" />
      </div>
      <div className="pt-[80px] w-full">
        {myArray.map((item, index) => (
          <div
            className={`flex items-center h-[52px] justify-start ps-4
             mb-6 cursor-pointer w-ful  ${
               activeItem === index
                 ? "bg-menuIcon border-e-4 border-primary bg-[#fafaff]"
                 : "hover:bg-menuIcon hover:border-e-4 hover:border-primary"
             }`}
            key={index}
            onClick={() => handleClick(index)}
          >
            <img
              loading="lazy"
              src={activeItem === index ? item.active : item.inactive}
              alt={item.name}
              className="mx-4"
            />
            <span
              className={` text-base font-medium ${
                activeItem === index ? "text-primary" : "text-gray-500"
              } `}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>

      <div
        className="flex items-center justify-start h-full w-full flex-col
      bg-[#f4f3ff] rounded-lg]
      "
      >
        <ReferFriend />
      </div>
    </div>
  );
};

export default LeftSideBar;

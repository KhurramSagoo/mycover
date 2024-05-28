// import navbarlogo from "../assets/navbar-logo.svg";
// import plans from "../assets/plans.svg";
// import plane from "../assets/plane.svg";
// import mycover from "../assets/mycover.svg";
// import motor from "../assets/motor.svg";
// import home from "../assets/home.svg";
// import flexicare from "../assets/flexicare.svg";
// import claim from "../assets/claim-active.svg";
// import more from "../assets/active-more.svg";
// import wallet from "../assets/wallet.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import ReferFriend from "./ReferFriend";

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
    image: home,
    imageActive: homeActive,
    route: "/dashboard",
  },
  {
    name: "My Cover",
    image: cover,
    imageActive: coverActive,
    route: "/dashboard/mycover",
  },
  {
    name: "Plans",
    image: plans,
    imageActive: plansActive,
    route: "/dashboard/plans",
  },
  //   {
  //     name: "Wallet",
  //     image: wallet,
  //     route: "/dashboard/wallet",
  //   },
  //   {
  //     name: "Claim",
  //     image: claim,
  //     route: "/dashboard/claim",
  //   },
  {
    name: "More",
    image: more,
    imageActive: moreActive,
    route: "/dashboard/more",
  },
];

const MobileFooter = () => {
  const [activeItem, setActiveItem] = useState(0);
  const navigate = useNavigate();

  const handleClick = (index) => {
    setActiveItem(index);
    navigate(myArray[index].route);
  };
  return (
    <div
      className=" fixed bottom-0 left-0 right-0 bg-white flex items-center justify-between  h-28
    sm:hidden
    "
    >
      {/* <div
        className=" cursor-pointer p-5 my-2 w-full sticky overflow-auto"
        onClick={() => navigate("/")}
      >
        <img src={navbarlogo} alt="" />
      </div> */}
      {myArray.map((item, index) => (
        <div
          className={` flex items-center flex-col justify-center py-10 my-1 hover:bg-menuIcon cursor-pointer w-full hover:border-t-2 hover:border-green-500 ${
            activeItem === index ? "bg-menuIcon" : ""
          }`}
          key={index}
          onClick={() => handleClick(index)}
        >
          {activeItem === index ? (
            <img
              loading="lazy"
              src={item.imageActive}
              alt={item.name}
              className=" mx-4"
            />
          ) : (
            <img
              loading="lazy"
              src={item.image}
              alt={item.name}
              className=" mx-4"
            />
          )}

          <span
            className={`
          
          ${activeItem === index ? " font-medium text-primary" : ""}
          `}
          >
            {item.name}
          </span>
        </div>
      ))}
      {/* <ReferFriend /> */}
    </div>
  );
};

export default MobileFooter;

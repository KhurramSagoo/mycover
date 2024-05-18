import navbarlogo from "../assets/navbar-logo.svg";
import plans from "../assets/plans.svg";
import plane from "../assets/plane.svg";
import mycover from "../assets/mycover.svg";
import motor from "../assets/motor.svg";
import home from "../assets/home.svg";
import flexicare from "../assets/flexicare.svg";
import claim from "../assets/claim-active.svg";
import more from "../assets/active-more.svg";
import wallet from "../assets/wallet.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ReferFriend from "./ReferFriend";

const myArray = [
  {
    name: "Home",
    image: home,
    route: "/protected/dashboard",
  },
  {
    name: "My Cover",
    image: mycover,
    route: "/protected/mycover",
  },
  {
    name: "Plans",
    image: plans,
    route: "/protected/plans",
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
    route: "/protected/more",
  },
];

const MobileFooter = () => {
  const [activeItem, setActiveItem] = useState(null);
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
          className={` flex items-center flex-col justify-start p-5 my-1 hover:bg-menuIcon cursor-pointer w-full hover:border-t-2 hover:border-green-500 ${activeItem === index ? "bg-menuIcon" : ""
            }`}
          key={index}
          onClick={() => handleClick(index)}
        >
          <img
            loading="lazy"
            src={item.image} alt={item.name} className=" mx-4" />
          <span>{item.name}</span>
        </div>
      ))}
      {/* <ReferFriend /> */}
    </div>
  );
};

export default MobileFooter;

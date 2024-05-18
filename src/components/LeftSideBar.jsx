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
  {
    name: "Wallet",
    image: wallet,
    route: "/protected/wallet",
  },
  {
    name: "Claim",
    image: claim,
    route: "/protected/claim",
  },
  {
    name: "More",
    image: more,
    route: "/protected/more",
  },
];

const LeftSideBar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  const handleClick = (index) => {
    setActiveItem(index);
    navigate(myArray[index].route);
  };
  return (
    <div className=" flex flex-col fixed top-0 left-0 bottom-0 bg-white w-[290px] max-h-screen h-screen overflow-y-auto">
      <div
        className=" cursor-pointer fixed h-[50px] w-[290px] top-0 left-0
        flex items-center justify-start ml-6 mt-5
        "
        onClick={() => navigate("/")}
      >
        <img src={navbarlogo} alt="" className="" loading="lazy" />
      </div>
      <div className=" mt-[60px]">
        {myArray.map((item, index) => (
          <div
            className={` flex items-center justify-start p-5 my-1 hover:bg-menuIcon cursor-pointer w-full hover:border-e-2 hover:border-green-500 ${activeItem === index ? "bg-menuIcon" : ""
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
      </div>

      <div className=" flex items-center justify-center w-full flex-col">
        <ReferFriend />
      </div>
    </div>
  );
};

export default LeftSideBar;

import React from "react";
import health from "../assets/flexicare.svg";
import auto from "../assets/motor.svg";
import travel from "../assets/plane.svg";
import Center from "./Center";

const data = [
  {
    title: "Health",
    image: health,
  },
  {
    title: "Auto",
    image: auto,
  },
  {
    title: "Travel",
    image: travel,
  },
  // {
  //   title: "",
  //   image: "",
  // },
];

const Header = () => {
  return (
    <div className="container mx-auto p-7  bg-menuIcon flex items-start justify-start flex-col w-[800px] shadow">
      <p className=" text-lg my-2 justify-start flex items-center flex-row">
        We&#39;ve got you covered
      </p>
      <div className=" flex items-start justify-between rounded flex-col sm:flex-row flex-wrap w-full cursor-pointer">
        {data.map((item, index) => (
          <div
            key={index}
            className=" bg-white flex items-center justify-around    "
          >
            <img src={item.image} alt="" className=" w-36" />

            {/* <p>{item.title}</p> */}
          </div>
        ))}
      </div>

      <Center />
    </div>
  );
};

export default Header;

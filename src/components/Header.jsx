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
    <div className=" bg-white mx-auto xl:py-5  flex items-start justify-start flex-col w-full  max-w-[1000px] shadow-md">
      <p className=" text-2xl font-semibold p-5 justify-start flex items-center flex-col">
        We&#39;ve got you covered
      </p>
      <div className=" w-full flex item-center justify-around">
        {data.map((item, index) => (
          <div key={index} className=" ">
            <img
              src={item.image}
              alt=""
              className=" sm:w-48 sm:h-40 w-[76px] h-[64px] sm:object-cover object-none  rounded-lg bg-white cursor-pointer "
            />

            {/* <p>{item.title}</p> */}
          </div>
        ))}
      </div>
      <div className=" mx-auto bg-menuIcon ">
        <Center />
      </div>
    </div>
  );
};

export default Header;

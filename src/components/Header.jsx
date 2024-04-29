import React from "react";
import health from "../assets/flexicare.svg";
import auto from "../assets/motor.svg";
import travel from "../assets/plane.svg";

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
];

const Header = () => {
  return (
    <div className=" xl:container  bg-menuIcon flex items-start justify-start my-4 flex-col w-full">
      <p className=" text-lg my-2">We&#39;ve got you covered</p>
      <div className=" flex items-start justify-between rounded flex-col sm:flex-row flex-wrap">
        {data.map((item, index) => (
          <div
            key={index}
            className=" w-36 bg-white flex items-center justify-center flex-col mx-5 "
          >
            <img src={item.image} alt="" className=" w-72" />

            {/* <p>{item.title}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;

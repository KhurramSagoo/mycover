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
    <div className="flex  h-full min-h-screen flex-col w-full  items-center justify-center ">
      <div className="  lg:px-20 md:px-10   flex items-start justify-start flex-col bg-white w-full px-5">
        <p className=" text-2xl text-gray-500 font-semibold p-5 justify-start flex items-center flex-col">
          We&#39;ve got you covered
        </p>
        <div className=" w-full flex md:item-start md:justify-start items-center justify-center flex-wrap lg:px-5 md:px-3 px-2    gap-10">
          {data.map((item, index) => (
            <div
              key={index}
              className=" bg-[#e6f4f2] hover:border-primary border rounded-md lg:w-[200px] lg:h-[156px]
              sm:w-40 sm:h-[156px] w-[76px] h-[64px]
              flex items-center justify-center flex-wrap flex-col md:flex-row "
            >
              <img
                loading="lazy"
                src={item.image}
                alt=""
                className="  
                object-contain  rounded-lg w-36  cursor-pointer "
              />

              {/* <p>{item.title}</p> */}
            </div>
          ))}
        </div>
      </div>

      <div className=" mx-auto bg-inherit lg:my-12 my-5 sm:my-8  lg:px-20 md:px-10 px-5   ">
        <Center />
      </div>
    </div>
  );
};

export default Header;

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
    <div className=" bg-inherit xl:px-8 px-0 pb-2 flex items-start justify-start flex-col w-full ">
      <div className=" flex items-start justify-start flex-col bg-white w-full px-5">
        <p className=" text-2xl text-gray-500 font-semibold p-5 justify-start flex items-center flex-col">
          We&#39;ve got you covered
        </p>
        <div className=" w-full flex md:item-start md:justify-start items-center justify-center  gap-10">
          {data.map((item, index) => (
            <div
              key={index}
              className=" bg-[#e6f4f2] rounded-md md:w-[200px] md:h-[156px]
              sm:w-full sm:h-[156px] w-[76px] h-[64px]
              flex items-center justify-center flex-wrap flex-col md:flex-row"
            >
              <img
                loading="lazy"
                src={item.image}
                alt=""
                className="  
                object-contain  rounded-lg w-40  cursor-pointer "
              />

              {/* <p>{item.title}</p> */}
            </div>
          ))}
        </div>
      </div>

      <div className=" mx-auto bg-inherit lg:my-12 my-5 sm:my-8 ">
        <Center />
      </div>
    </div>
  );
};

export default Header;

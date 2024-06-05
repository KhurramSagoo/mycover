import { IoNewspaperOutline } from "react-icons/io5";
import { Ri24HoursFill } from "react-icons/ri";
import CustomSVG from "./customSvg/CustomSVG";
import { motion } from "framer-motion";

const BusinessMiddlePart = ({ item, head, detail, top }) => {
  // console.log(item);
  return (
    <div className=" flex items-center justify-center flex-col flex-wrap px-5 w-full xl:h=[500px] lg:h-[550px] md:h-[700px] h-full md:flex-row my-16 py-10">
      <div className=" flex items-center justify-center flex-col p-5 break-words ">
        <p className=" text-base font-medium text-primary  py-5">
          {top && top}
        </p>
        <p className=" text-xl sm:text-2xl md:text-4xl lg:text-5xl  text-[#094063] font-extrabold text-wrap text-center ">
          {head}
        </p>
        <p className="md:text-xl  text-wrap text-center font-normal py-5 mx-auto lg:px-20 px-10 text-sm text-gray-600  ">
          {detail}
        </p>
      </div>
      <div className=" flex items-center justify-center flex-wrap md:flex-row w-full flex-col lg:justify-around">
        {item.map((item, index) => (
          <div
            key={index}
            className=" sm:w-96 break-words flex items-center justify-center flex-col flex-wrap px-3 md:px-5 py-5"
          >
            <div
              className={` rounded-full w-12 h-12 flex items-center justify-center  `}
              style={{ backgroundColor: item.bg }}
            >
              <motion.span
                className="py-2 text-primary"
                animate={{ color: ["#f00", "#00f", "#f00"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 1,
                  repeatDelay: 1,
                }}
              >
                {item.image}
              </motion.span>
            </div>
            <p className=" py-2 text-2xl sm:text-xl  text-[#094063] font-bold text-center">
              {item.title}
            </p>
            <p className=" py-2 text-sm md:text-sm  text-gray-800 font-medium text-center">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessMiddlePart;

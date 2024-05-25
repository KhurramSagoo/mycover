import gadgets from "../../../assets/business/gadgets-circle.svg";
import deliver from "../../../assets/business/deliver-circle-1.svg";
import auto from "../../../assets/business/auto-circle-1.svg";
import health from "../../../assets/business/health-circle-1.svg";
import office from "../../../assets/business/office-content-1.svg";
import travel from "../../../assets/business/travel-circle-1.svg";
import { motion } from "framer-motion";

const BasicProtection = ({ item }) => {
  const SlideData = [
    {
      title: "3rd party body injuries",
      detail:
        "We compensate damages to other drivers on the road, to keep business running smoothly.",
    },
    {
      title: "3rd party body injuries",
      detail:
        "We compensate damages to other drivers on the road, to keep business running smoothly.",
    },
    {
      title: "3rd party body injuries",
      detail:
        "We compensate damages to other drivers on the road, to keep business running smoothly.",
    },
    {
      title: "3rd party body injuries",
      detail:
        "We compensate damages to other drivers on the road, to keep business running smoothly.",
    },
  ];

  return (
    <div className=" flex items-center justify-center lg:flex-row flex-col  lg:px-16 lg:py-12 py-5 md:px-5 sm:px-2 px-2">
      {/* left portion start */}
      <div
        className=" lg:w-3/5  lg:h-[450px] flex md:items-start 
            w-full
            flex-col md:justify-start
            py-lg-10 pt-5
            items-start justify-start
            "
      >
        <p className="md:text-xl text-sm  md:mb-3 mb-0 px-5 mt-10 text-primary font-medium">
          {item.top}
        </p>
        <p
          className="  font-extrabold text-[#094063] w-full md:text-6xl  sm:text-3xl text-4xl 
              md:mb-3 mb-0 px-5 mt-10
                py-4
                "
        >
          {item.head}
          {/* <span className="bg-gradient-to-t  from-yellow-400 from-50% via-10%   to-white to-60%">
            easy
          </span> */}
          {""}
        </p>
        <p className=" text-gray-600  md:px-5 px-5 leading-8 text-lg font-medium ">
          {item.detail}
        </p>
        <button className=" bg-[#4fbfa3] px-6 py-3 my-5 rounded-md mx-5 flex items-start justify-start mr-auto text-white">
          {item.btn}
        </button>
      </div>
      {/* left end */}

      {/* right start */}
      <div className="lg:w-2/5 lg:h-[450px]  h-auto my-5  py-lg-5 w-full px-5 sm:px-10 ">
        <div className="w-full h-full    border-gray-500 flex justify-center items-center flex-col">
          <motion.div
            className="flex flex-col space-y-5"
            initial={{ y: 0 }}
            animate={{ y: [0, -SlideData.length * 10] }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {SlideData.map((slide, index) => {
              return (
                <motion.div
                  key={index}
                  animate={{
                    y: [5, -30, 40, -10, 0, 5],
                    opacity: 20,
                    scale: 1,
                  }}
                  transition={{
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  initial={{ opacity: 50, scale: 0.9 }}
                  exit={{
                    type: "spring",
                    duration: 2,
                    delay: index * 0.3,
                    opacity: 30,
                  }}
                  className=" flex items-start justify-center max-w-[400px] md:h-[150px] h-auto flex-col flex-wrap my-5 shadow-lg px-2 py-3"
                >
                  <p className=" text-sm font-bold text-gray-800 py-2 px-3">
                    {slide.title}
                  </p>
                  <p className=" text-sm font-medium text-gray-700 py-2 px-3">
                    {slide.detail}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BasicProtection;

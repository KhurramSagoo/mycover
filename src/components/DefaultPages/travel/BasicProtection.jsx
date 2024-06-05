import { motion } from "framer-motion";

const BasicProtection = ({ item }) => {
  const SlideData = [
    {
      title: "Compensation for delayed trips",
      detail: "You get protection for every ‘what-ifs’ and unplanned event.",
    },
    {
      title: "Medical evacuation",
      detail:
        "Our unique plan ensures swift repatriation by experts, from anywhere.",
    },
    {
      title: "Compensation for delayed trips",
      detail:
        "We also bear the financial costs of your vehicles if they get stolen. Superfast.",
    },
    {
      title: "Emergency medical expenses abroad",
      detail:
        "Your team gets complete coverage for emergency healthcare care from anywhere.",
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
          className="  font-extrabold text-[#094063] w-full  lg:text-6xl
          sm:text-3xl text-2xl md:mb-3 mb-0 px-5 md:mt-10 mt-0 py-4"
        >
          {item.head}
          {/* <span className="bg-gradient-to-t  from-yellow-400 from-50% via-10%   to-white to-60%">
            easy
          </span> */}
          {""}
        </p>
        <p className=" text-gray-600  md:px-5 px-5 leading-8 md:text-lg text-base font-medium ">
          {item.detail}
        </p>
        <button className=" bg-[#4fbfa3] px-6 py-3 my-5 rounded-md mx-5 flex items-start justify-start mr-auto text-white">
          {item.btn}
        </button>
      </div>
      {/* left end */}

      {/* right start */}
      <div className="lg:w-2/5  h-[400px] my-5 w-full px-5 sm:px-10">
        <div className="w-full h-full border-gray-500 flex justify-center items-center flex-col">
          <motion.div className="flex flex-col space-y-5 md:h-screen h-auto overflow-hidden">
            {SlideData.map((slide, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ y: "-150%", scale: 0.9 }}
                  animate={{ y: "0%", repeatDur: 2 }}
                  exit={{ y: "100%", scale: 1.1 }}
                  transition={{
                    y: {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 3,
                      ease: "backInOut",
                    },
                  }}
                  className="flex items-start justify-center max-w-[400px] md:h-[150px] h-auto flex-col flex-wrap my-5 shadow-lg px-2 py-3"
                >
                  <p className="text-sm font-bold text-gray-800 py-2 px-3">
                    {slide.title}
                  </p>
                  <p className="text-sm font-medium text-gray-700 py-2 px-3">
                    {slide.detail}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className=" flex items-center justify-center text-sm text-primary font-bold mt-10">
          <p className=" cursor-pointer">learn more</p>
        </div>
      </div>
    </div>
  );
};

export default BasicProtection;

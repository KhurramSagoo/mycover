import { useEffect, useState } from "react";
import iphone from "./insuranceTabs/iphone12.png";
import iphone2 from "./insuranceTabs/iphone12-2.png";
import iphone3 from "./insuranceTabs/iphone12-3.png";

// active,inactive icons
import breifcase from "./insuranceTabs/briefcase.svg";
import breifcaseInactive from "./insuranceTabs/briefcaseInactive.svg";
import doc from "./insuranceTabs/document.svg";
import docInactive from "./insuranceTabs/documentInactive.svg";
import like from "./insuranceTabs/like.svg";
import likeInactive from "./insuranceTabs/likeInactive.svg";
import { motion } from "framer-motion";

const IndividualInsuranceClick = () => {
  const [selectedText, setSelectedText] = useState(0);

  const textData = [
    {
      title: "Choose your preferred insurance plan",
      detail:
        "Go ahead, make a choice. We’ve got you! You are provided with an array of insurance policies to choose from. Tastefully fitted to your pocket size, assets and family needs.",
      bg: "#ffead5",
      image: iphone,
      active: breifcase,
      inActive: breifcaseInactive,
    },
    {
      title: "CLet’s get closer!",
      detail:
        "It’s time to cross the tees and dot the I on your Insurance. Fill in your personal and Plan details and hop on to step number 3.",
      bg: "#fce7f6",
      image: iphone2,
      active: doc,
      inActive: docInactive,
    },
    {
      title: "Get insured and enjoy easy coverage!",
      detail:
        "Yes! That’s about it. Now sit back, relax and experience 24/7 seamless insurance coverage.",
      bg: "#ebe9fe",
      image: iphone3,
      active: like,
      inActive: likeInactive,
    },
  ];

  const handleTextClick = (index) => {
    setSelectedText(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedText((prevSelectedText) =>
        prevSelectedText === textData.length - 1 ? 0 : prevSelectedText + 1
      );
    }, 3500); // Change the interval as needed

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="lg:px-16 px-5 min-h-screen w-full bg-[#f8fcfb] lg:pt-20 md:pt-5 pt-5">
      <div className="mb-0 w-full">
        <p className="text-[48px] text-center font-bold text-secondary">
          Get your insurance in <span className="text-primary">1, 2, 3</span>{" "}
          Clicks
        </p>
      </div>

      <div className="flex items-center justify-center w-full flex-col md:flex-row">
        {/* left portion  */}

        <div className="lg:w-1/2 w-full h-[300px] sm:h-[400px] md:h-screen flex items-center justify-center">
          {/* {selectedText !== null && (
            <img
              src={textData[selectedText].image}
              alt=""
              className=" md:w-72 w-40 sm:w-52"
            />
          )} */}
          <div
            className="
            flex items-center justify-center overflow-hidden
          border rounded-full 
          w-72 max-h-72  sm:w-96 sm:max-h-96 md:w-[400px] md:h-[450px]
          "
            style={{ backgroundColor: textData[selectedText].bg }}
          >
            {selectedText !== null && (
              <motion.img
                src={textData[selectedText].image}
                key={textData[selectedText].image}
                // alt={claimData[getBtn].head}
                className=" w-3/5 transition-all duration-1000 ease-in-out"
                initial={{ y: "100%" }}
                animate={{ y: 25 }}
                transition={{ duration: 1 }}
                exit={{ y: "50%" }}
              />
            )}
          </div>
        </div>

        {/* right portion */}
        <div className="flex items-center justify-center lg:w-1/2 w-full  flex-col h-96 sm:h-auto py-5">
          {textData.map((text, index) => (
            <div
              key={index}
              className=" w-full flex items-start justify-start py-5 "
            >
              <div
                className="cursor-pointer flex flex-col items-start gap-5 justify-start"
                onClick={() => handleTextClick(index)}
              >
                <div className=" flex items-center justify-center w-full gap-2  transition-all duration-1000 ease-in-out ">
                  <div className=" flex items-center justify-center w-[10%]">
                    {selectedText === index ? (
                      <img
                        src={textData[index].active}
                        alt={textData[index].title}
                        className="w-12"
                      />
                    ) : (
                      <img
                        src={textData[index].inActive}
                        alt={text.title}
                        className="w-12"
                      />
                    )}
                  </div>
                  <div className=" flex items-start justify-start flex-col gap-2 px-2 w-[90%]">
                    <p
                      className={`md:text-xl text-sm md:my-2 my-0 font-bold ${
                        selectedText === index
                          ? "text-slate-900"
                          : "text-gray-400"
                      }`}
                    >
                      {text.title}
                    </p>
                    <p
                      className={`md:text-md text-xs font-medium ${
                        selectedText === index
                          ? "text-slate-900"
                          : "text-gray-400"
                      }`}
                    >
                      {text.detail}
                    </p>
                  </div>
                </div>
              </div>
              {/* {index < textData.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-8 border-l border-gray-300"></div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndividualInsuranceClick;

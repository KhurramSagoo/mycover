import { useState } from "react";
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
      bg: "#fce7f5",
      image: iphone2,
      active: doc,
      inActive: docInactive,
    },
    {
      title: "Get insured and enjoy easy coverage!",
      detail:
        "Yes! That’s about it. Now sit back, relax and experience 24/7 seamless insurance coverage.",
      bg: "#fce7f6",
      image: iphone3,
      active: like,
      inActive: likeInactive,
    },
  ];

  const handleTextClick = (index) => {
    setSelectedText(index);
  };

  return (
    <div className="px-16 min-h-screen w-full bg-[#f8fcfb] lg:pt-20 md:pt-5 pt-5">
      <div className="mb-0 w-full">
        <p className="text-[48px] text-center font-bold text-secondary">
          Get your insurance in <span className="text-primary">1, 2, 3</span>{" "}
          Clicks
        </p>
      </div>

      <div className="flex items-center justify-center w-full flex-col md:flex-row">
        {/* left portion  */}
        <div className="lg:w-1/2 w-full h-[300px] sm:h-[400px] md:h-screen flex items-center justify-center">
          {selectedText !== null && (
            <img
              src={textData[selectedText].image}
              alt=""
              className=" md:w-72 w-40 sm:w-52"
            />
          )}
        </div>

        {/* right portion */}
        <div className="flex items-center justify-center lg:w-1/2 w-full flex-col">
          {textData.map((text, index) => (
            <div
              key={index}
              className=" w-full flex items-start justify-start "
            >
              <div
                className="cursor-pointer flex flex-col items-start mt-2 mb-5 justify-start"
                onClick={() => handleTextClick(index)}
              >
                <div className=" flex items-center justify-center w-full ">
                  <div className=" flex items-center justify-center w-[10%]">
                    {selectedText && selectedText === index ? (
                      <img
                        src={textData[index].active}
                        alt={textData[index].title}
                        className="w-16"
                      />
                    ) : (
                      <img
                        src={textData[index].inActive}
                        alt={text.title}
                        className="w-12"
                      />
                    )}
                  </div>
                  <div className=" flex items-start justify-start flex-col ml-5 px-2 w-[90%]">
                    <p
                      className={`md:text-xl text-md md:my-2 my-0 font-bold ${
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndividualInsuranceClick;

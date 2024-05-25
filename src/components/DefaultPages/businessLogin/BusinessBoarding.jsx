import { ArrowLeft } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import logo from '../../assets/login/active-more.svg';
import logo from "../../../assets/login/active-more.svg";
import olivia from "./olivia.jpg";
import { RiHeartPulseFill } from "react-icons/ri";

import React from "react";

const tabData = [
  {
    head: "Health",
    cardData: [
      {
        title: "ZenCare(w)",
        detail: "Boost team productivity with quality healthcare at ₦7000.",
      },
      {
        title: "ZenCare Plus(w)",
        detail: "Boost team productivity with quality healthcare at ₦7000.",
      },
      {
        title: "ZenCare Plus(w)",
        detail: "Unlock access to quality Healthcare at ₦2000 per staff .",
      },
      {
        title: "Flexi Care",
        detail: "Unlock access to quality Healthcare at ₦3500 per staff .",
      },
      {
        title: "ZenCare",
        detail: "Boost team productivity with quality healthcare at ₦7000.",
      },
      {
        title: "ZenCare Plus",
        detail: "This reduces staff downtime for ₦18000 per staff.",
      },
    ],
  },
  {
    head: "Gadget",
    cardData: [
      {
        title: "Flexi auto Care Mini",
        detail:
          "This plan provides you with instant access to high-quality healthcare.",
        icon: RiHeartPulseFill,
      },
      {
        title: "Flexi auto Care",
        detail:
          "This plan provides you with instant access to high-quality healthcare.",
        icon: RiHeartPulseFill,
      },
    ],
  },
  {
    head: "Auto",
    cardData: [
      {
        title: "Flexi travel Care Mini",
        detail:
          "This plan provides you with instant access to high-quality healthcare.",
        icon: RiHeartPulseFill,
      },
      {
        title: "Flexi travel Care",
        detail:
          "This plan provides you with instant access to high-quality healthcare.",
        icon: RiHeartPulseFill,
      },
    ],
  },
  {
    head: "Others",
    cardData: [
      {
        title: "Flexi travel Care Mini",
        detail:
          "This plan provides you with instant access to high-quality healthcare.",
        icon: RiHeartPulseFill,
      },
      {
        title: "Flexi travel Care",
        detail:
          "This plan provides you with instant access to high-quality healthcare.",
        icon: RiHeartPulseFill,
      },
    ],
  },
];

const BusinessBoarding = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedCard, setSelectedCard] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCardSelect = (index, cardIndex, head, title) => {
    setSelectedCard({
      head,
      index,
      title,
      cardIndex,
    });

    // console.log(head, title)
  };

  const handleGetCovered = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/business-boarding-next");
    }, 500);
  };

  return (
    <div className="container">
      {/* <div className='bg-[#e6f4f2] flex items-center justify-center w-28 rounded-xl px-2 py-2 h32 text-gray-600 cursor-pointer transition-opacity duration-500 ease-in-out opacity-80 hover:opacity-100' onClick={() => navigate(-1)}>
                <ArrowLeft /> <button className='text-sm text-gray-600 font-medium'>Go Back</button>
            </div> */}
      <div className=" pt-6 flex items-center flex-col justify-center w-full px-5 md:px-0">
        <img src={olivia} alt="Logo" className=" rounded-full w-12 mb-4" />
        <p className="text-3xl font-semibold ">Hi there, I'm Olivia</p>
        <p className="text-gray-800 text-base font-medium mb-4">
          What cover would you like to get?
        </p>
      </div>
      <br />
      <div className="flex items-center justify-center w-full mx-auto flex-wrap gap-2 md:gap-0  mb-6 pb-2 ">
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={` w-32  border border-1 md:text-md text-[16px] font-medium px-10 py-4 ${
              activeTab === index
                ? " text-[#439687]  border-b-green-600  border-b-4 transition-all duration-100 ease-in-out text-base font-semibold"
                : "text-gray-800 font-medium"
            }`}
            onClick={() => {
              setActiveTab(index);
              setSelectedCard({});
            }}
          >
            {tab.head}
          </button>
        ))}
      </div>

      {/* cards */}
      <div className="pt-6 flex items-center justify-center flex-col w-full md:flex-row flex-wrap  px-5 sm:px-8">
        {tabData.map((tab, index) => (
          <div
            key={index}
            className={`flex w-full items-center lg:justify-center justify-center flex-col flex-wrap pt-12 gap-5   md:flex-row ${
              activeTab === index ? "" : "hidden"
            }`}
          >
            {tab.cardData.map((card, cardIndex) => (
              <div
                key={cardIndex}
                className={`${
                  selectedCard.cardIndex === cardIndex &&
                  selectedCard.index === index
                    ? "text-gray-500 border-primary "
                    : "text-gray-500"
                } transition cursor-pointer duration-700 ease-in-out shadow flex items-start   justify-start flex-col border border-gray-200 rounded w-full md:w-[260px] md:h-[148px] flex-wrap h-auto p-5 `}
                onClick={() =>
                  handleCardSelect(index, cardIndex, tab.head, card.title)
                }
              >
                <div className="flex items-start justify-center my-2 flex-col w-full flex-wrap md:flex-row ">
                  <div className="flex justify-start w-full mb-2">
                    <input
                      type="radio"
                      name={`cardSelection-${index}`}
                      checked={
                        selectedCard.cardIndex === cardIndex &&
                        selectedCard.index === index
                      }
                      onChange={() =>
                        handleCardSelect(index, cardIndex, tab.head, card.title)
                      }
                      className={`form-radio ${
                        selectedCard.cardIndex === cardIndex &&
                        selectedCard.index === index
                          ? " caret-fuchsia-900 "
                          : " text-secondary"
                      }`}
                    />
                  </div>
                  <div className="flex items-start justify-start gap-2 flex-col">
                    <div
                      className={`${
                        selectedCard.cardIndex === cardIndex &&
                        selectedCard.index === index
                          ? "text-blue-500"
                          : ""
                      }`}
                    >
                      {/* <div className="">
                                                {React.createElement(card.icon)}
                                            </div> */}
                    </div>
                    <p className="text-base text-gray-800 font-bold ">
                      {card.title}
                    </p>
                    <p className="text-xs break-words text-gray-600 font-medium">
                      {card.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center py-10 sm:px-8 px-5">
        <button
          className="w-full py-5 bg-primary text-white rounded-lg max-w-[500px]"
          onClick={handleGetCovered}
          disabled={Object.keys(selectedCard).length === 0}
        >
          {loading ? "Loading... please wait" : "Get Covered"}
        </button>
      </div>
    </div>
  );
};

export default BusinessBoarding;

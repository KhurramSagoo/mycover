import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import arrow from "./arrow-right-green.svg";

// cards images
import image from "../../../assets/cardscarousel/image.jpg";
import image1 from "../../../assets/cardscarousel/image1.jpg";
import image2 from "../../../assets/cardscarousel/image2.jpg";
import imageGirl3 from "../../../assets/cardscarousel/image3.jpg";
import imageGirl4 from "../../../assets/cardscarousel/image4.jpg";
import imageGirl5 from "../../../assets/cardscarousel/image5.jpg";
import image6 from "../../../assets/cardscarousel/image6.jpg";
import image7 from "../../../assets/cardscarousel/image7.jpg";
import imageGirl8 from "../../../assets/cardscarousel/image8.jpg";
const IndividualCarousel = () => {
  const [scrollDirection, setScrollDirection] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);

  const animationVariants = {
    hidden: { x: `${scrollDirection * 100}%` },
    visible: { x: "0%" },
    exit: { x: `${-scrollDirection * 100}%` },
  };

  const cardData = [
    {
      name: "John Doe",
      userName: "johndoe123",
      image: image,
      bg: "#7a5af8",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Smith",
      userName: "janesmith456",
      image: image1,
      bg: "#2E90FA",
      detail: "Pellentesque habitant morbi tristique senectus et netus et ",
    },
    {
      name: "Alice Johnson",
      userName: "alicej",
      image: imageGirl3,
      bg: "#EE46BC",
      detail:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Bob Brown",
      userName: "bobbrown789",
      image: image2,
      bg: "#7a5af8",
      detail: "Ut enim ad minim veniam, quis nostrud exercitation ullamco t.",
    },
    {
      name: "Emily Davis",
      userName: "emilydavis",
      image: imageGirl4,
      bg: "#2E90FA",
      detail:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse .",
    },
    {
      name: "David Wilson",
      userName: "davidw123",
      image: image6,
      bg: "#EE46BC",

      detail: "Excepteur sint occaecat cupidatat non proident, sunt in culpa .",
    },
    {
      name: "Sarah Lee",
      userName: "sarahlee789",
      image: imageGirl5,
      bg: "#2E90FA",

      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do .",
    },
    {
      name: "Michael Miller",
      userName: "michaelm",
      image: image7,
      bg: "#7a5af8",
      detail: "Pellentesque habitant morbi tristique senectus et netus et .",
    },
    {
      name: "Olivia Martinez",
      userName: "oliviam",
      image: imageGirl8,
      bg: "#2E90FA",
      detail:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem .",
    },
    {
      name: "James Brown",
      userName: "jamesb",
      image: "",
      bg: "#EE46BC",
      detail:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit .",
    },
  ];

  return (
    <div className="pt-16 px-4 my-0 h-[500px] flex items-center justify-center  flex-col md:h-screen">
      <div className="w-full text-center lg:py-12 md:py-12 sm:py-8 py-4">
        <span className="text-5xl sm:text-5xl md:text-7xl lg:text-[140px]  text-secondary font-bold">
          See, It <span className="text-primary ml-4">Works!</span>
        </span>
      </div>

      <div className="relative overflow-hidden w-full">
        <motion.div
          className="flex w-full"
          initial={{
            x: "-100%",
          }}
          animate="visible"
          exit="exit"
          variants={animationVariants}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 60,
              ease: "linear",
            },
          }}
        >
          {cardData.map((card, index) => (
            // <div
            //   key={index}
            //   className="lg:basis-1/3 md:basis-1/2 sm:basis-1/2 basis-full"
            // >
            <div key={index} className=" w-full">
              <div
                className=" shadow-md rounded-lg mx-5
                          w-[284px]
                          h-auto
                          p-6
                          md:w-[360px]
                           min-h-[184px]
                          md:min-h-[220px]
                          hover:border hover:border-primary bg-gray-100 flex items-start justify-center  flex-col  hover:bg-[#d6f0ea] border-gray-400"
              >
                <div className="flex items-center  justify-start text-secondary">
                  {card.image ? (
                    <img
                      src={card.image}
                      alt=""
                      className=" w-12 rounded-full object-cover h-12 "
                    />
                  ) : (
                    <div
                      className={`w-12 h-12 rounded-full text-white flex items-center justify-center font-bold text-xl bg-[${card.bg}] `}
                    >
                      {card.name.slice(0, 1).toUpperCase()}
                    </div>
                  )}
                  <div className="ml-4">
                    <p className="text-sm font-bold text-secondary">
                      {card.name}
                    </p>
                    <p className="text-xs">@ {card.userName}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 font-medium text-wrap break-words mt-6">
                  Detail: {card.detail}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex items-center justify-center my-12 cursor-pointer">
        <p className="underline text-primary text-xl cursor-pointer">
          Join The Genius Community!
        </p>
        <img loading="lazy" src={arrow} alt="" className="ml-2 hover:ml-3" />
      </div>
    </div>
  );
};

export default IndividualCarousel;

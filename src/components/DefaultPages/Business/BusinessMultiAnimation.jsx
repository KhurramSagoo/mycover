import React from "react";
import image1 from "../../../assets/business/multianimation/aiico.svg";
import image2 from "../../../assets/business/multianimation/allianz.svg";
import image3 from "../../../assets/business/multianimation/axa-mansard.svg";
import image4 from "../../../assets/business/multianimation/custodian.svg";
import image5 from "../../../assets/business/multianimation/hygeia.svg";
import image6 from "../../../assets/business/multianimation/leadway.svg";
import image7 from "../../../assets/business/multianimation/reliance.svg";
import image8 from "../../../assets/business/multianimation/sti.svg";
import { motion } from "framer-motion";

const BusinessMultiAnimation = () => {
  const imagesData = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
    {
      image: image4,
    },
    {
      image: image5,
    },
    {
      image: image6,
    },
    {
      image: image7,
    },
    {
      image: image8,
    },
  ];
  return (
    <div className=" md:py-16 py-12 lg:h-[400px] p-5 h-auto bg-[#f8fcfb]">
      <div className=" lg:px-12 lg:pt-4 px-2 pt-2 flex items-center justify-center md:flex-row flex-col ">
        {/* left portion */}
        <div className=" lg:w-3/5 md:w-1/2 px-4 mb-6  flex items-start justify-start ">
          <div className=" flex items-center justify-center overflow-hidden flex-wrap-reverse  ">
            {imagesData.map((images, index) => (
              <motion.div
                className="  rounded-lg bg-gray-200 flex items-center justify-center mx-2 px-10 py-2 my-2"
                key={index}
                initial={{ x: "150%" }}
                animate={{ x: -200 }}
                exit={{ x: "100%" }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  repeatDelay: 0.5,
                  delay: index * 0.3,
                }}
              >
                <img src={images.image} alt="" className=" w-32 h-8 mx-2 " />
              </motion.div>
            ))}
          </div>
        </div>

        {/* right portion */}
        <div
          className=" lg-w-2/5 md:w-1/2 lg:ml-6 lg:px-6 px-2 md-h-[300px]
                h-[260px]
                "
        >
          <p className=" lg:mt-4 mt-2 mb-4 text-xl font-bold text-secondary lg:mb-6 lg:text-[24px]">
            Can't find what you'are looking for?
          </p>
          <p className=" lg:mb-12 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            necessitatibus et. Molestias.
          </p>
          <button className=" bg-primary text-white py-3 px-6 w-[150px] rounded-md">
            Let's talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessMultiAnimation;

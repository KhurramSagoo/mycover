import React from "react";
import { motion } from "framer-motion";
import image1 from "../../../assets/business/multianimation/aiico.svg";
import image2 from "../../../assets/business/multianimation/allianz.svg";
import image3 from "../../../assets/business/multianimation/axa-mansard.svg";
import image4 from "../../../assets/business/multianimation/custodian.svg";
import image5 from "../../../assets/business/multianimation/hygeia.svg";
import image6 from "../../../assets/business/multianimation/leadway.svg";
import image7 from "../../../assets/business/multianimation/reliance.svg";
import image8 from "../../../assets/business/multianimation/sti.svg";

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
    {
      image: image3,
    },
    {
      image: image5,
    },
  ];

  return (
    <div className="md:py-16 py-12 lg:h-[400px] p-5 h-auto bg-[#f1f6f5]">
      <div className="lg:px-12 lg:pt-4 px-2 pt-2 flex items-center justify-center md:flex-row flex-col">
        {/* left portion */}
        <div className="lg:w-3/5 md:w-1/2 px-4 mb-6 flex items-start justify-start flexco">
          <div className="flex items-center justify-center overflow-hidden flex-col">
            <motion.div
              className="flex"
              initial={{ x: "-25%" }}
              animate={{ x: "0%" }}
              exit={{ x: "25%" }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 5,
                  ease: "linear",
                },
              }}
            >
              {imagesData.map((images, index) => (
                <div
                  key={index}
                  className="rounded-2xl w-52 h-12 bg-white flex items-center justify-center mx-2 my-2"
                >
                  <img src={images.image} alt="" className="w-full h-8 mx-2" />
                </div>
              ))}
            </motion.div>
            <motion.div
              className="flex"
              initial={{ x: "25%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-25%" }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 3,
                  ease: "linear",
                },
              }}
            >
              {imagesData.map((images, index) => (
                <div
                  key={index}
                  className="rounded-xl w-52 h-12 bg-white flex items-center justify-center mx-2 my-2"
                >
                  <img src={images.image} alt="" className="w-full h-8 mx-2" />
                </div>
              ))}
            </motion.div>
            <motion.div
              className="flex"
              initial={{ x: "-15%" }}
              animate={{ x: "0%" }}
              exit={{ x: "15%" }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 4,
                  ease: "linear",
                },
              }}
            >
              {imagesData.map((images, index) => (
                <div
                  key={index}
                  className="rounded-xl w-52 h-12 bg-white flex items-center justify-center mx-2 my-2"
                >
                  <img src={images.image} alt="" className="w-full h-8 mx-2" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* right portion */}
        <div className="lg-w-2/5 md:w-1/2 lg:ml-6 lg:px-6 px-2 md-h-[300px] h-[260px]">
          <p className="lg:mt-4 mt-2 mb-4 text-xl font-bold text-secondary lg:mb-6 lg:text-[24px]">
            Can't find what you're looking for?
          </p>
          <p className="lg:mb-12 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            necessitatibus et. Molestias.
          </p>
          <button className="bg-primary text-white py-3 px-6 w-[150px] rounded-md">
            Let's talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessMultiAnimation;

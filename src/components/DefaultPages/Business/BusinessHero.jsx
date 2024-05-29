import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gadgets from "../../../assets/business/gadgets-circle.svg";
import deliver from "../../../assets/business/deliver-circle-1.svg";
import auto from "../../../assets/business/auto-circle-1.svg";
import health from "../../../assets/business/health-circle-1.svg";
import office from "../../../assets/business/office-content-1.svg";
import travel from "../../../assets/business/travel-circle-1.svg";
import home from "../../../assets/business/home-centered.png";
import hero from "../../../assets/business/home/hero-ping-blob.svg";

const BusinessHero = ({ item }) => {
  const images = [
    { src: deliver, angle: 30, hover: "Logistics Cover" },
    { src: travel, angle: 90, hover: "Travel Cover" },
    { src: office, angle: 150, hover: "Office Cover" },
    { src: auto, angle: 210, hover: "Auto Cover" },
    { src: gadgets, angle: 270, hover: "Gadget Cover" },
    { src: health, angle: 330, hover: "Health Cover" },
  ];

  const calculatePosition = (angle, radius) => {
    const radians = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radians);
    const y = radius * Math.sin(radians);
    return { x, y };
  };

  const angles = [30, 90, 150, 210, 270, 330];
  const [radius, setRadius] = useState(120);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateRadius = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const newRadius = width / 3;
        setRadius(newRadius);
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);

    return () => {
      window.removeEventListener("resize", updateRadius);
    };
  }, []);

  return (
    <div className="flex items-center min-h-screen justify-center lg:flex-row flex-col lg:mt-10 md:mt-24 lg:px-16 md:px-5 sm:px-2 px-2 lg:h-screen h-full">
      {/* left portion start */}
      <div className="lg:w-3/5 lg:h-[500px] flex md:items-center w-full flex-col md:justify-center py-lg-5 pt-20 items-start justify-start">
        <p className="font-extrabold text-[#094063] w-full md:text-6xl sm:text-3xl text-2xl md:mb-3 mb-0 px-5 mt-10 py-4 !leading-snug">
          Insurance made
          <span className="mx-2 bg-gradient-to-t from-yellow-400 via-orange-50 to-white">
            easy
          </span>
          for your business
        </p>

        <p className="text-gray-600 md:px-5 px-5 leading-8 text-lg font-medium">
          {item?.detail}
        </p>
        <button className="bg-[#4fbfa3] px-6 py-3 my-5 rounded-md mx-5 flex items-start justify-start mr-auto text-white">
          {item?.btn}
        </button>
      </div>
      {/* left end */}

      {/* right start */}
      <div
        className="lg:w-2/5 lg:h-[500px] flex items-center h-auto my-5 flex-col justify-center py-lg-5 w-full px-10 sm:px-20"
        ref={containerRef}
      >
        <div className="md:w-96 md:h-96 w-52 h-52 sm:w-72 sm:h-72 border-2 rounded-full flex items-center justify-center relative">
          <div className="w-32 rounded-full flex items-center justify-center h-32 relative">
            <img src={home} alt="Home" className="w-16 sm:w-full" />
          </div>
          {images.map((image, index) => {
            const { x, y } = calculatePosition(image.angle, radius);
            return (
              <img
                key={index}
                src={image.src}
                alt=""
                className="absolute w-16"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              />
            );
          })}
          <motion.img
            src={hero}
            alt=""
            className="w-4 absolute"
            animate={{
              rotate: [90],
              x: angles.map((angle) => calculatePosition(angle, radius).x),
              y: angles.map((angle) => calculatePosition(angle, radius).y),
              rotateZ: angles,
            }}
            transition={{
              ease: "easeInOut",
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </div>
      </div>
      {/* right end */}
    </div>
  );
};

export default BusinessHero;

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import hero from "../../../assets/business/home/hero-ping-blob.svg";
import comprehensiveAuto from "./assets/travel-big.svg";
import image1 from "./assets/comprehensive-collision-and-damages.png";
import image2 from "./assets/tooth-ache.png";
import image3 from "./assets/comprehensive-crash.png";

const Hero = ({ item }) => {
  const images = [
    { src: image1, angle: 30, hover: "Logistics Cover" },
    { src: image2, angle: 150, hover: "Travel Cover" },
    { src: image3, angle: 270, hover: "Office Cover" },
  ];

  const calculatePosition = (angle, radius) => {
    const radians = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radians);
    const y = radius * Math.sin(radians);
    return { x, y };
  };

  const angles = [30, 150, 270];
  const [radius, setRadius] = useState(360);
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
        <p className="font-extrabold text-[#094063] w-full md:text-6xl sm:text-3xl text-2xl md:mb-3 mb-0 px-5 mt-10 py-4 !leading-snug break-words">
          Take the right
          <span className="mx-2 bg-gradient-to-t from-yellow-400 via-orange-50 to-white">
            cover
          </span>
          with you anywhere you go.
        </p>

        <p className="text-gray-600 md:px-5 px-5 leading-8 text-lg font-medium">
          {item.detail}
        </p>
        <button className="bg-[#4fbfa3] px-6 py-3 my-5 rounded-md mx-5 flex items-start justify-start mr-auto text-white">
          {item.btn}
        </button>
      </div>
      {/* left end */}

      {/* right start */}
      <div
        className="lg:w-2/5 lg:min-h-[500px] flex items-center h-auto my-5 flex-col justify-center py-lg-5 w-full px-10 sm:px-20 mt-12"
        ref={containerRef}
      >
        <div className="md:w-96 md:h-96 w-52 h-52 sm:w-72 sm:h-72 border-2 rounded-full flex items-center justify-center relative">
          <div className="w-32 rounded-full flex items-center justify-center h-32 relative shadow-md">
            <img src={comprehensiveAuto} alt="Home" className="md:w-12 w-8" />
          </div>
          {images.map((image, index) => {
            const { x, y } = calculatePosition(image.angle, radius);
            return (
              <img
                key={index}
                src={image.src}
                alt=""
                className="absolute w-16 border p-1 rounded-full "
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
              rotate: [0, 270, 360],
              x: angles.map((angle) => calculatePosition(angle, radius).x),
              y: angles.map((angle) => calculatePosition(angle, radius).y),
              rotateZ: angles,
            }}
            transition={{
              ease: "easeInOut",
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </div>
      {/* right end */}
    </div>
  );
};

export default Hero;

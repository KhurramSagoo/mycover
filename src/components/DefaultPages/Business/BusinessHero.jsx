import gadgets from "../../../assets/business/gadgets-circle.svg";
import deliver from "../../../assets/business/deliver-circle-1.svg";
import auto from "../../../assets/business/auto-circle-1.svg";
import health from "../../../assets/business/health-circle-1.svg";
import office from "../../../assets/business/office-content-1.svg";
import travel from "../../../assets/business/travel-circle-1.svg";
import { motion } from "framer-motion";

const BusinessHero = ({ item }) => {
  const images = [
    { src: gadgets, angle: 0 },
    { src: health, angle: 60 },
    { src: auto, angle: 120 },
    { src: travel, angle: 180 },
    { src: office, angle: 240 },
    { src: deliver, angle: 300 },
  ];

  const radius = 150;
  const duration = 10;

  return (
    <div className="flex items-center justify-center lg:flex-row flex-col lg:mt-10 md:mt-24 lg:px-16 md:px-5 sm:px-2 px-2 lg:h-screen h-full">
      {/* left portion start */}
      <div className="lg:w-3/5 lg:h-[500px] flex md:items-center w-full flex-col md:justify-center py-lg-5 pt-20 items-start justify-start">
        <p className="font-extrabold text-[#094063] w-full md:text-6xl sm:text-3xl text-4xl md:mb-3 mb-0 px-5 mt-10 py-4">
          {item.head}
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
      <div className="lg:w-2/5 lg:h-[500px] flex items-center h-auto my-5 flex-col justify-center py-lg-5 w-full px-10 sm:px-20">
        <div className="md:w-96 sm:w-72 w-full h-[300px] flex justify-center items-center relative p-0 overflow-hidden">
          {images.map((image, index) => {
            const angle = (index / images.length) * 360;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 30, scale: 2, x: 0, y: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: [x, -x, x],
                  y: [y, -y, y],
                  rotate: [0, 360, 0],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: "linear",
                  opacity: 100,
                }}
                style={{
                  position: "absolute",
                  top: `${50}%`,
                  left: `${50}%`,
                  transform: `translate(${x}px, ${y}px)`,
                }}
                exit={{
                  type: "easeinout",
                  duration: 0.5,
                  delay: index * 0.3,
                  opacity: 0,
                }}
              >
                <img
                  loading="lazy"
                  src={image.src}
                  alt=""
                  className="w-16 h-16 cursor-pointer"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* right end */}
    </div>
  );
};

export default BusinessHero;

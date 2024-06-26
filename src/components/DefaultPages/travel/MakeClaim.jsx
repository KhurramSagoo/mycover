import React, { useState } from "react";
import { motion } from "framer-motion";
import claim from "./assets/report-claim-comprehensive.png";
import picture from "./assets/take-picture-comprehensive.png";
import damage from "./assets/estimate-damage-comprehensive.png";
import paid from "./assets/get-paid-comprehensive.png";

const MakeClaim = () => {
  const [getBtn, setGetBtn] = useState(0);
  const claimData = [
    {
      head: "Report Claim",
      detail:
        "It all starts with a click. Log in to your dashboard from your device.",
      image: claim,
    },
    {
      head: "Take Picture",
      detail:
        "Then it gets easier. Take live pictures of the damages, right from your device.",
      image: picture,
    },
    {
      head: "Estimate damage",
      detail:
        "Name your price. Give us the amount it would take to fix your damages.",
      image: damage,
    },
    {
      head: "Get Paid",
      detail:
        "The sweet part. Your business gets compensated in minutes once the claim is approved.",
      image: paid,
    },
  ];

  return (
    <div className="xl:px-16 lg:px-12 md:px-10 px-5 flex items-center justify-center flex-col bg-[#f8fcfb] xl:h-[1006px] lg:py-36">
      {/* heading */}
      <div className="w-full flex items-start justify-start xl:h-[212px]">
        <div className="max-w-[700px] flex items-start justify-start flex-col">
          <p className="lg:text-5xl md:text-4xl text-3xl px-5 text-secondary font-extrabold py-3">
            Make claims in
            <span className="mx-2">15</span>
            minutes, not 2 months
          </p>
          <p className="md:text-xl text-sm text-gray-600 font-medium px-5 py-3">
            We are online! Our self-inspection process lets your staff report
            incidents in real-time to keep your business running non-stop.
          </p>
        </div>
      </div>

      {/* second full div with left right */}
      <div
        className="flex items-center justify-start
        md:items-start md:justify-around md:flex-row
        flex-wrap w-full flex-col lg:flex-row px-5 md:py-10
      lg:justify-between
      "
      >
        {/* left tabs */}
        <div
          className="md:w-1/3 w-full flex  items-start justify-start 
        md:flex-col flex-row  
        md:items-end md:justify-end
        "
        >
          <div
            className="flex items-start justify-center
          cursor-pointer  flex-row md:flex-col flex-wrap"
          >
            {claimData.map((c, index) => (
              <div
                key={index}
                className={`max-w-full min-w-36 md:w-full  md:py-3 py-2 px-2 md:ps-5 md:min-h-24 h-auto flex md:items-start md:justify-start flex-col cursor-pointer md:my-5 my-1 
                items-center justify-center border mx-1 flex-wrap md:flex-nowrap
                ${
                  getBtn === index
                    ? "md:border-l-4 md:border-r-0 md:border-t-0 md:border-b-0 md:border-purple-600 border border-primary md:bg-inherit  bg-primary   "
                    : "md:border-l-4 md:border-dashed border-gray-200 border-3 bg-gray-200 md:bg-inherit md:border-r-0 md:border-b-0 md:border-t-0 h-auto "
                }`}
                onClick={() => setGetBtn(index)}
              >
                <p
                  className={`cursor-pointer md:text-xl w-full  text-sm md:font-bold transition-colors duration-500 ${
                    getBtn === index
                      ? "md:text-gray-800 text-white font-medium"
                      : "text-gray-600 h-full "
                  }`}
                >
                  {c.head}
                </p>
                {getBtn === index && (
                  <p className="mt-2 text-gray-600 break-words flex-wrap  text-sm md:text-base font-medium hidden md:flex">
                    {c.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* right images */}
        <div
          className="md:w-2/3 w-full flex items-center justify-center 
          flex-col
        md:flex-row
        lg:justify-end
        py-3
        "
        >
          <div
            className=" sm:w-[500px] sm:h-[500px]
             w-[300px] h-[300px]
            flex items-center justify-center overflow-hidden
          border bg-[#e6f4f2] rounded-full  
          "
          >
            {getBtn !== null && (
              <motion.img
                key={getBtn}
                src={claimData[getBtn].image}
                alt={claimData[getBtn].head}
                className="sm:w-[300px] sm:h-[564px] ml-8
                w-[194px] h-[350px] 
                "
                initial={{ y: "100%" }}
                animate={{ y: 150 }}
                transition={{ duration: 1 }}
                exit={{ y: "50%" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeClaim;

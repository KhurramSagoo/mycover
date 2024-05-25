import React, { useState } from "react";
import claim from "./assets/report-claim-comprehensive.png";
import picture from "./assets/take-picture-comprehensive.png";
import damage from "./assets/estimate-damage-comprehensive.png";
import paid from "./assets/get-paid-comprehensive.png";

const MakeClaim = () => {
  const [getBtn, setGetBtn] = useState(null);
  // console.log(getBtn);
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
    <div className=" container flex items-center justify-center flex-col">
      {/* heading */}
      <div className=" w-full flex items-start justify-start">
        <div className=" max-w-[700px] flex items-start justify-start flex-col">
          <p className=" lg:text-5xl md:text-4xl text-3xl px-5 text-secondary font-extrabold py-3 ">
            Make claims in
            <span className=" mx-2 ">15</span>
            minutes, not 2 months
          </p>
          <p className=" md:text-xl text-sm text-gray-600 font-medium px-5 py-3">
            We are online! Our self-inspection process lets your staff report
            incidents in real-time to keep your business running non-stop.
          </p>
        </div>
      </div>

      {/* second full div with left right */}

      <div className=" flex items-center justify-start flex-wrap w-full flex-col md:flex-row ">
        {/* left tabs */}

        <div className=" md:w-1/2 w-full flex items-center justify-center flex-col">
          <div>
            {claimData.map((c, index) => (
              <div key={index} className="  max-w-72 border  py-2 p-3">
                <p
                  className=" cursor-pointer "
                  onClick={() => setGetBtn(index)}
                >
                  {c.head}
                </p>
                {getBtn === index && <p className="mt-2">{c.detail}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* right images */}

        <div className=" md:w-1/2 w-full flex items-center justify-center flex-col">
          <div className=" w-full flex items-center justify-center p-5">
            {getBtn !== null && (
              <img
                src={claimData[getBtn].image}
                alt={claimData[getBtn].head}
                className="w-full max-w-md"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeClaim;

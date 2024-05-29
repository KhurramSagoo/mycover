import { useState } from "react";
import heart from "../../../assets/business/buisnessProtection/health-filled.svg";

const BusinessProtection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      head: "Health",
      cardData: [
        {
          icon: heart,
          title: "Flexicare Mini 1",
          detail:
            "With FlexiCare mini 1, unlock access to quality and affordable healthcare for you and your staff at an affordable price.",
          more: "Learn More 1",
        },
        {
          icon: heart,
          title: "Flexicare Mini 2",
          detail:
            "With FlexiCare mini 2, unlock access to quality and affordable healthcare for you and your staff at an affordable price.",
          more: "Learn More 2",
        },
      ],
    },
    {
      head: "Gadget",
      cardData: [
        {
          icon: heart,
          title: "Flexicare Mini",
          detail:
            "With FlexiCare mini, unlock access to quality and affordable healthcare for you and your staff at an affordable price.",
          more: "Learn More",
        },
      ],
    },
    {
      head: "Auto",
      cardData: [
        {
          icon: heart,
          title: "Flexicare Mini",
          detail:
            "With FlexiCare mini, unlock access to quality and affordable healthcare for you and your staff at an affordable price.",
          more: "Learn More",
        },
      ],
    },
    {
      head: "Others",
      cardData: [
        {
          icon: heart,
          title: "Flexicare Mini",
          detail:
            "With FlexiCare mini, unlock access to quality and affordable healthcare for you and your staff at an affordable price.",
          more: "Learn More",
        },
      ],
    },
  ];

  return (
    <div className="w-full  lg:h-screen h-auto my-16 px-5">
      <div className=" flex items-center justify-center flex-col lg:mx-72 md:mx-32 ">
        <p className="text-center my-2 md:my-4 text-wrap text-primary md:text-xl text-sm">
          We are product driven
        </p>
        <p className="text-secondary md:text-5xl text-xl  font-extrabold my-2 md:my-4 text-center text-wrap leading-relaxed">
          All the protection your business needs in one place
        </p>
        <p className="text-sm font-normal text-gray-500 px-12 text-center text-wrap my-1 md:my-4 md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          sunt voluptatum earum commodi qui? Architecto.
        </p>
      </div>

      {/* tabs button */}
      <div className="flex flex-wrap justify-center">
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={`bg-gray-200 text-gray-500 rounded-lg px-3 py-1 m-2 ${
              activeTab === index ? " bg-primary text-white" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.head}
          </button>
        ))}
      </div>

      {/* card */}
      <div className="mt-5">
        {activeTab !== null && (
          <div className="flex items-center justify-center flex-col sm:flex-row flex-wrap gap-12">
            {tabData[activeTab].cardData.map((card, cardIndex) => (
              <div
                key={cardIndex}
                className="shadow  flex items-start justify-start flex-col border border-gray-200 rounded md:w-[400px] w-full h-[190px] md:h-auto px-5 py-3 sm:m-5 hover:shadow-lg "
              >
                <div className="flex  items-center justify-center mt-3">
                  <img
                    loading="lazy"
                    className=" w-[24px] mr-3"
                    src={card.icon}
                    alt={tabData[activeTab].head}
                  />
                  <p className="text-lg text-secondary font-semibold">
                    {card.title}
                  </p>
                </div>
                <p className="text-sm text-center text-gray-500 mt-1">
                  {card.detail}
                </p>
                <button className=" text-secondary px-4 py-2 mt-3">
                  {card.more}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessProtection;

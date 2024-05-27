import React, { useState } from "react";
// import heart from '../../../assets/business/buisnessProtection/health-filled.svg'
import heart from "./individualTabs/flexicare-mini.svg";
import auto from "./individualTabs/arrow-right-green.svg";
import travel from "./individualTabs/travel-active.svg";

const InsuranceTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabData = [
    {
      head: "Health",
      cardData: [
        {
          icon: heart,
          title: "Flexicare Mini 1",
          price: "₦2,000",
          tagLine:
            "This plan provides you with instant access to high-quality healthcare.",
          detail: [
            {
              one: "Annual medical coverage of up to ₦1,000,000",
            },
            {
              two: "Annual medical coverage of up to ₦1,000,000",
            },
            {
              three: "Admission & Feeding in General wards",
            },
            {
              four: "Up to ₦100,000 for Major & Minor surgeries",
            },
            {
              five: "Up to ₦100,000 in Childbirth, Antenatal Care & CS",
            },
          ],
          buttonText: { text: "Purchase", path: "" },
          more: [{ text: "Learn More" }, { path: "" }],
        },
        {
          icon: heart,
          title: "Flexicare Mini 1",
          price: "₦3,500",
          tagLine:
            "Need an affordable plan that meets all of your health-care needs? This is made for you.",
          detail: [
            {
              one: "Annual medical coverage of up to ₦1,000,000",
            },
            {
              two: "Annual medical coverage of up to ₦1,000,000",
            },
            {
              three: "Admission & Feeding in General wards",
            },
            {
              four: "Up to ₦100,000 for Major & Minor surgeries",
            },
            {
              five: "Up to ₦100,000 in Childbirth, Antenatal Care & CS",
            },
          ],
          buttonText: { text: "Purchase", path: "" },
          more: [{ text: "Learn More" }, { path: "" }],
        },
      ],
    },
    {
      head: "Auto",
      cardData: [
        {
          icon: auto,
          title: "Comprehensive Auto",
          price: "5%",
          tagLine:
            "Protect yourself and your vehicles from all kinds of damages at only 5% of vehicle value.",
          detail: [
            {
              one: "Annual medical coverage of up to ₦1,000,000",
            },
            {
              two: "Annual medical coverage of up to ₦1,000,000",
            },
            {
              three: "Admission & Feeding in General wards",
            },
            {
              four: "Up to ₦100,000 for Major & Minor surgeries",
            },
            {
              five: "Up to ₦100,000 in Childbirth, Antenatal Care & CS",
            },
          ],
          buttonText: { text: "Purchase", path: "" },
          more: [{ text: "Learn More" }, { path: "" }],
        },
        {
          icon: auto,
          title: "Monthly Comprehensive",
          price: "5%",
          tagLine:
            "Minimise vehicle risks with our flexible auto insurance coverage at 0.5% of the vehicle value.",
          detail: [
            {
              one: "Annual medical coverage of up to ₦1,000,000",
            },
            {
              two: "Annual medical coverage of up to ₦1,000,000",
            },
            {
              three: "Admission & Feeding in General wards",
            },
            {
              four: "Up to ₦100,000 for Major & Minor surgeries",
            },
            {
              five: "Up to ₦100,000 in Childbirth, Antenatal Care & CS",
            },
          ],
          buttonText: { text: "Purchase", path: "" },
          more: [{ text: "Learn More" }, { path: "" }],
        },
        {
          icon: auto,
          title: "Mini Comprehensive",
          price: "₦25,000",
          tagLine:
            "Minimise vehicle risks with our flexible auto insurance coverage at 0.5% of the vehicle value.",
          detail: [
            {
              one: "Annual medical coverage of up to ₦1,000,000",
            },
            {
              two: "Annual medical coverage of up to ₦1,000,000",
            },
            {
              three: "Admission & Feeding in General wards",
            },
            {
              four: "Up to ₦100,000 for Major & Minor surgeries",
            },
            {
              five: "Up to ₦100,000 in Childbirth, Antenatal Care & CS",
            },
          ],
          buttonText: { text: "Purchase", path: "" },
          more: [{ text: "Learn More" }, { path: "" }],
        },
      ],
    },
    {
      head: "Travel",
      cardData: [
        {
          icon: travel,
          title: "Travel Insurance",
          price: "5%",
          tagLine:
            "Our travel Insurance plan gives you 360° degrees coverage when you travel outside the country. A few things you don't have to worry about anymore.",
          detail: [
            {
              one: "Annual medical coverage of up to ₦1,000,000",
            },
            {
              two: "Annual medical coverage of up to ₦1,000,000",
            },
            {
              three: "Admission & Feeding in General wards",
            },
            {
              four: "Up to ₦100,000 for Major & Minor surgeries",
            },
            {
              five: "Up to ₦100,000 in Childbirth, Antenatal Care & CS",
            },
          ],
          buttonText: { text: "Purchase", path: "" },
          more: [{ text: "Learn More" }, { path: "" }],
        },
      ],
    },
  ];

  return (
    <div className="w-full p-5 min-h-screen my-5">
      <div className="w-full flex items-center justify-center flex-col">
        <p className="text-secondary text-xl md:text-2xl lg:text-5xl font-bold my-2 md:my-4 text-center text-wrap">
          All Your Insurance Needs Met!
        </p>
        <p className="text-sm font-normal text-gray-500 text-center text-wrap break-words mx-auto my-1 md:my-4 md:text-base max-w-[700px]">
          From your car, to your health, and to that overdue vacation, we’ve
          curated just the best protection that works. When it comes to your
          peace of mind, we have you covered.
        </p>
      </div>

      {/* tabs button */}
      <div className="flex items-center justify-center w-full mx-auto">
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={`bg-white w-40 md:text-sm text-[12px] font-medium border-b-2 text-gray-500 px-5 py-1
                         ${
                           activeTab === index
                             ? "bg-[#ecfdf3] text-gray-600"
                             : ""
                         }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.head}
          </button>
        ))}
      </div>

      {/* card */}
      <div className="mt-5">
        {tabData.map((tab, index) => (
          <div
            key={index}
            className={`flex items-center lg:justify-around justify-center flex-col md:flex-row  ${
              activeTab === index ? "" : "hidden"
            }`}
          >
            {tab.cardData.map((card, cardIndex) => (
              <div
                key={cardIndex}
                className="hover:bg-purple-100 transition min-h-[480px] duration-700 ease-in-out shadow flex items-center justify-center
                 flex-col border border-gray-200 rounded-lg w-[280px] md:w-[380px] h-auto p-6 m-2 sm:m-5 hover:shadow-lg"
              >
                <div className="flex items-center justify-center my-2">
                  <img
                    loading="lazy"
                    className="w-[24px]"
                    src={card.icon}
                    alt={tab.head}
                  />
                  <p className="text-lg text-secondary font-semibold">
                    {card.title}
                  </p>
                </div>
                {/* price */}

                <p className=" font-bold text-xl text-slate-800">
                  {card.price}
                </p>
                <hr className=" border-b w-full mt-5 " />
                <div className="text-sm text-center text-gray-500 mt-1">
                  {/* {Object.values(card.detail[0])[0]}k */}
                  {card.detail.map((detail, index) => (
                    <ul key={index}>
                      <li>{detail.one}</li>
                      <li>{detail.two}</li>
                      <li>{detail.three}</li>
                      <li>{detail.four}</li>
                      <li>{detail.five}</li>
                    </ul>
                  ))}
                </div>
                <div className=" mt-12">
                  <button className="text-secondary px-8 py-2 mt-3 w-[180px] hover:text-whitehover:bg-primary border rounded-full">
                    {card.buttonText.text}
                  </button>
                </div>
                {/* learn more */}
                <div className=" my-4">
                  {card.more.map((more, index) => (
                    <div key={index}>
                      <a
                        href=""
                        className=" font-medium hover:text-primary my-2"
                      >
                        {more.text}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceTabs;

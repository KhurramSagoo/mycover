import TopDashboardNav from "../utils/TopDashboardNav";
import profile from "../../assets/dashboard/more/profile.svg";
import privacy from "../../assets/dashboard/more/privacy.svg";
import support from "../../assets/dashboard/more/support.svg";
import exit from "../../assets/dashboard/more/exit.png";
import right from "../../assets/dashboard/more/chevron-right.svg";
import wallet from "../../assets/dashboard/more/wallet.svg";
import claim from "../../assets/dashboard/more/claims-mob.svg";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import refer from "../../assets/dashboard/more/refer-friend.svg";

const More = () => {
  const [getTabIndex, setGetTabIndex] = useState(0);

  const blueCardHeader = [
    { title: "Planse", value: 0 },
    { title: "Active", value: 0 },
    { title: "Inactive", value: 0 },
  ];
  // console.log(getTabIndex);
  const tabDataMd = [
    {
      title: "Your Account",
      detail: "Your name",
      image: profile,
      right,
    },
    {
      title: "Privacy and Policy",
      detail: "Important information for you and us.",
      image: privacy,
      right,
    },
    {
      title: "Get Help",
      detail: "Talk to us",
      image: support,
      right,
    },
    {
      title: "Log Out",
      detail: "",
      image: exit,
      right,
    },
  ];

  // useEffect(() => {
  //   toast(getTabIndex);
  // }, [getTabIndex]);

  const tabData = [
    {
      head: "Account",

      cards: [
        {
          title: "Youre Account",
          detail: "your name",
          image: profile,
          right,
        },
        {
          title: "Wallet",
          detail: "The sweet part. Manage your funds",
          image: wallet,
          right,
        },
        {
          title: "Claim",
          detail: "Manage and tracks claims",
          image: claim,
          right,
        },
      ],
    },
    {
      head: "Secruity",

      cards: [
        {
          title: "Privacy and Policy",
          detail: "Important information for you and us.",
          image: privacy,
          right,
        },
      ],
    },
    {
      head: "Others",

      cards: [
        {
          title: "Get Help",
          detail: "Talk to us",
          image: support,
          right,
        },
      ],
    },
  ];

  return (
    <div
      className=" flex  h-full min-h-screen flex-col 
items-center justify-start mb-32 md:mb-0
"
    >
      <div className=" flex lg:items-center md:items-end items-center justify-enter flex-col  w-full">
        <TopDashboardNav />
        <div
          className="  w-full flex items-start justify-start
   mb-2
   lg:px-16 md:px-12 px-5 flex-col  "
        >
          <span className=" text-xl font-semibold text-secondary">More</span>
          <p className=" text-sm text-gray-500">View more setting</p>
        </div>

        {/* head data */}
        <div className="  flex items-start justify-start w-full gap-2  lg:px-16 md:px-12 sm:px-10 px-5 flex-col  ">
          <div className=" flex items-center justify-center gap-2">
            <div className=" flex items-center justify-center text-base font-semibold   bg-[#ffc7d6] w-12 h-12 rounded-full  ">
              KS
            </div>
            <p className=" text-secondary text-base font-semibold">User name</p>
          </div>

          <div className="  flex items-center justify-start w-full  lg:px-16 md:px-12 sm:px-10 px-5 bg-[#094063] text-base font-semibold text-white  rounded-lg py-3 mt-5 ">
            {blueCardHeader.map((blue, blueIndex) => (
              <div
                className={`w-1/3 flex items-center justify-center flex-col gap-6 p-2 ${
                  blueIndex !== blueCardHeader.length - 1 ? "border-r" : ""
                }`}
                key={blueIndex}
              >
                <p>{blue?.title}</p>
                <p>{blue?.value}</p>
              </div>
            ))}
          </div>

          {/* account  privacy  , help, log out  */}
          <div className=" w-full  items-start justify-start flex-col hidden md:flex">
            {/* account */}
            {tabDataMd.map((item, index) => (
              <div
                className=" w-full flex items-center justify-between border-b py-2 "
                key={index}
              >
                {/* left */}
                <div className=" flex items-center justify-center gap-5 py-5">
                  <img src={item?.image} alt="" className=" w-6" />
                  <div className=" flex items-start justify-start flex-col">
                    <p className=" text-sm font-semibold text-gray-600">
                      {item?.title}
                    </p>
                    <p className=" text-sm font-medium text-gray-500">
                      {item?.detail}
                    </p>
                  </div>
                </div>

                {/* right */}
                <div>
                  <img src={right} alt="" />
                </div>
              </div>
            ))}

            {/* end tab card */}
          </div>

          {/* sm tabs start */}

          <div className=" flex md:hidden items-center justify-center w-full px-5 ">
            {/* header */}

            {tabData.map((tab, tabIndex) => (
              <div
                className=" flex items-center justify-around flex-wrap w-full py-3 px-3 bg-gray-100"
                key={tabIndex}
              >
                <div
                  className={`  font-medium text-sm  py-2 px-5 rounded-md cursor-pointer ${
                    tabIndex === getTabIndex
                      ? "bg-white text-gray-600"
                      : "text-gray-500  bg-gray-50"
                  }`}
                  onClick={() => setGetTabIndex(tabIndex)}
                >
                  {tab?.head}
                </div>
              </div>
            ))}

            {/* details */}
          </div>
          {/* sm tabs end */}

          {/* tabs data start */}
          {tabData[getTabIndex].cards.map((card, cardIndex) => (
            <div
              className=" w-full md:hidden flex items-center justify-between border-b py-2 cursor-pointer "
              key={cardIndex}
            >
              {/* left */}
              <div className=" flex items-center justify-center gap-5 py-5">
                <img src={card?.image} alt="" className=" w-6" />
                <div className=" flex items-start justify-start flex-col">
                  <p className=" text-sm font-semibold text-gray-600">
                    {card?.title}
                  </p>
                  <p className=" text-sm font-medium text-gray-500">
                    {card?.detail}
                  </p>
                </div>
              </div>

              {/* right */}
              <div>
                <img src={right} alt="" />
              </div>
            </div>
          ))}

          {/* refer start div */}
          <div className=" w-full flex items-center justify-between md:hidden bg-[#f4f3ff] px-5 py-2 rounded-md ">
            <div className=" flex items-center justify-center flex-col gap-2">
              <p className=" text-sm font-semibold">Refer and earn rewards</p>
              <p className=" text-sm font-medium text-primary px-5 py-3 bg-white cursor-pointer">
                Refer friend
              </p>
            </div>
            <div>
              <img src={refer} alt="" />
            </div>
          </div>

          {/* log out button */}
          <div className=" flex items-center justify-center gap-5 py-5 mt-2">
            <img src={exit} alt="" className=" w-6" />
            <div className=" flex items-start justify-start flex-col">
              <p className=" text-sm font-semibold text-red-500 cursor-pointer">
                Log Out
              </p>
              {/* <p className=" text-sm font-medium text-gray-500">
                      {item?.detail}
                    </p> */}
            </div>
          </div>

          {/* end of the header data */}
        </div>

        <div className="flex items-center  text-center break-words justify-center   mt-16 px-16 w-full  gap-10 flex-wrap">
          {/* lower data */}
        </div>
      </div>
    </div>
  );
};

export default More;

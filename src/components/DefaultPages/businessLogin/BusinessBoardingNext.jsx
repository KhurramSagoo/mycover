import { ArrowLeft } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/login/active-more.svg";
import check from "./check-circle-small.svg";
import olivia from "./olivia.jpg";
import ErrorIcon from "@mui/icons-material/Error";

const tabData = [
  {
    image: check,
    text: "Emergency medical expenses.",
  },
  {
    image: check,
    text: "Medical evacuation.",
  },
  {
    image: check,
    text: "Access to gadget insurance claims twice per annum.",
  },
  {
    image: check,
    text: "Compensation for delayed trips.",
  },
  {
    image: check,
    text: "Up to ₦100,000 for Major & Minor surgeries",
  },
  {
    image: check,
    text: "Up to ₦100,000 in Childbirth, Antenatal Care & CS",
  },
];

const BusinessBoardingNext = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGetCovered = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/business-boarding-register");
    }, 500);
  };

  const [selected, setSelected] = useState("Yes");

  const handleClick = (choice) => {
    setSelected(choice);
    // alert(`You selected: ${choice}`);
  };

  return (
    <div className=" mt-4 px-6 pb-12 pt-6">
      <div
        className=" flex
             items-center justify-between md:w-[53%] w-full "
      >
        <div
          className="bg-[#e6f4f2] flex items-center justify-center w-28 rounded-xl px-2 py-2   cursor-pointer transition-opacity duration-500 ease-in-out opacity-80 hover:opacity-100"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft />{" "}
          <button className="text-xs text-black  font-medium">Go Back</button>
        </div>
        <img src={logo} alt="" className=" w-28 hidden md:flex" />
      </div>
      {/* olivia div */}
      <div className=" pt-4 flex items-center flex-col justify-center w-full px-5 md:px-0">
        <img src={olivia} alt="Logo" className=" rounded-full w-12 mb-6" />
        <p className="text-2xl font-bold text-[#439687] mb-2  ">
          Welcome to MyCoverGenius
        </p>
        <p className="text-gray-800 text-sm font-medium  mb-4">
          ZenCare covers you and your staff with quality healthcare at only
          <span className="font-bold mx-1">₦7000</span>
          per person.
        </p>
      </div>

      {/* yes no */}
      {/* <div className=" flex items-center justify-center">

                <div className="mt-6 py-4 px-6 max-w-[565px] w-full flex items-center justify-between bg-[#ebe9fe]">
                    <div className=" flex items-center justify-between">
                        <p className=" text-sm">Unlock waiting Period with ₦2000</p>
                        <ErrorIcon className=" text-green-700 mx-1" />
                    </div>
                    <div className="bg-[#d9d6fe] px-2 py-2 rounded-lg text-sm flex items-center justify-center text-white">
                        <button
                            className={`px-1  ${selected === 'Yes' ? 'bg-[#3C1E96]  rounded' : ' text-black'}`}
                            onClick={() => handleClick('Yes')}
                        >
                            Yes
                        </button>
                        <button
                            className={` px-1 ${selected === 'No' ? 'bg-[#3C1E96] rounded' : 'text-black'}`}
                            onClick={() => handleClick('No')}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div > */}

      {/* <div className=" w-full md:w-[565px] flex items-center justify-center">


                <br />
                <div className=" flex items-center justify-center sm:px-16 px-5 w-full flex-col py-5">
                    <p className=" text-xl font-bold text-secondary">Travel Insurance</p>
                    <p className=" text-gray-500 text-sm  pt-5 font-semibold">Explore the world without worry. Our travel Insurance plan gives you 360° coverage when you travel outside the country.</p>
                </div>

            </div> */}

      <div div className="  flex items-center justify-center mt-6 ">
        <div className="border rounded-lg bg-[#f6fef9] py-6 px-12  max-w-[551px] w-full ">
          {/* card data */}
          <div className=" flex items-start justify-start flex-col">
            {tabData.map((item, index) => (
              <div
                key={index}
                className=" flex items-center justify-center py-2 "
              >
                <img src={item.image} alt="" className=" mr-5" />
                <p className=" text-base text-gray-600 font-medium">
                  {item.text}
                </p>
              </div>
            ))}
            <span className=" cursor-pointer text-sm font-semibold text-[#439687] py-5 ml-5">
              {" "}
              See more benefits
            </span>
          </div>
          <div className=" text-xs font-semibold text-gray-600 border border-[#f79009] bg-[#fffaeb] p-3 rounded-md">
            Important Notice: This plan is exclusively available for individuals
            below the age of 80
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center mt-12 w-full">
        <button
          className=" w-full py-3 px-4 bg-[#439687] text-sm font-bold text-white rounded-lg max-w-[565px] h-[46px]"
          onClick={handleGetCovered}
        >
          {loading ? "Loading... please wait" : "Get Covered"}
        </button>
      </div>
    </div>
  );
};

export default BusinessBoardingNext;

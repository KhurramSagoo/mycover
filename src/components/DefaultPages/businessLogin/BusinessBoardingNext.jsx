import { ArrowLeft } from "@mui/icons-material";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/login/active-more.svg";
import check from "./check-circle-small.svg";
import olivia from "./olivia.jpg";
import ErrorIcon from "@mui/icons-material/Error";
import { DataContext } from "@/components/db/DataProvider";

const tabData = [
  {
    id: 0,
    btn: "Click to Start",
    title:
      "FlexiCare Mini covers you and your staff with quality healthcare at only ₦2000 per person.",
    detail: [
      {
        image: check,
        text: "Access to over 1000 hospitals across Nigeria.",
      },
      {
        image: check,
        text: "Cover for Delivery and Ante-natal Care.",
      },
      {
        image: check,
        text: "Treatment of everyday illnesses, like malaria, e.t.c",
      },
      {
        image: check,
        text: "Cover for 26 different types of surgeries.",
      },
      {
        image: check,
        text: "A digital HMO ID for each person.",
      },
    ],
    note: "Important Notice: This plan is available only for individuals below the age of 70.",
  },
  {
    id: 1,
    btn: "Click to Start",
    title:
      "Flexicare covers you and your staff with quality healthcare at only ₦3500 per person.",
    detail: [
      {
        image: check,
        text: "Access to over 1000 hospitals across Nigeria.",
      },
      {
        image: check,
        text: "Cover for Delivery and Ante-natal Care.",
      },
      {
        image: check,
        text: "Treatment of everyday illnesses, like malaria, e.t.c",
      },
      {
        image: check,
        text: "Cover for 26 different types of surgeries.",
      },
      {
        image: check,
        text: "A digital HMO ID for each person.",
      },
    ],
    note: "Important Notice: This plan is available only for individuals below the age of 70.",
  },
  {
    id: 2,
    btn: "Click to Start",
    title:
      "ZenCare covers you and your staff with quality healthcare at only ₦7,000 per person.",
    detail: [
      {
        image: check,
        text: "Access to over 1200 hospitals across Nigeria.",
      },
      {
        image: check,
        text: "Cover for Delivery and Ante-natal Care.",
      },
      {
        image: check,
        text: "Exclusive access to category B hospitals.",
      },
      {
        image: check,
        text: "Coverage for Chronic illnesses.",
      },
      {
        image: check,
        text: "Special coverage for surgeries.",
      },
    ],
    note: "Important Notice: This plan is exclusively available for individuals below the age of 80",
    unlock: "Unlock waiting Period with ₦2000",
  },
  {
    id: 3,
    btn: "Click to Start",
    title:
      "ZenCare Plus covers you and your staff with quality healthcare at only ₦9,000 per person.",
    detail: [
      {
        image: check,
        text: "Access to over 1200 hospitals across Nigeria.",
      },
      {
        image: check,
        text: "Cover for Delivery and Ante-natal Care.",
      },
      {
        image: check,
        text: "Exclusive access to category B hospitals.",
      },
      {
        image: check,
        text: "Coverage for Chronic illnesses.",
      },
      {
        image: check,
        text: "Special coverage for surgeries.",
      },
    ],
    note: "Important Notice: This plan is exclusively available for individuals below the age of 80",
    unlock: "Unlock waiting Period with ₦2000",
  },
  {
    id: 4,
    btn: "Click to Start",
    title:
      "ZenCare Prime covers you and your staff with quality healthcare at only ₦18,000 per person.",
    detail: [
      {
        image: check,
        text: "Access to over 2400 hospitals across Nigeria.",
      },
      {
        image: check,
        text: "Cover for Delivery and Ante-natal Care.",
      },
      {
        image: check,
        text: "Exclusive access to category B hospitals.",
      },
      {
        image: check,
        text: "Special coverage for surgeries.",
      },
      {
        image: check,
        text: "Dental and eye care treatments.",
      },
    ],
    note: "Important Notice: This plan is exclusively available for individuals below the age of 80",
    unlock: "Unlock waiting Period with ₦5,000",
  },
];

console.log(tabData);
const BusinessBoardingNext = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Yes");
  const [tabId, setTabId] = useState(0);
  const [newIdData, setNewIdData] = useState(0);
  const [getParam, setGetParam] = useState("");

  const paramAndId = () => {
    const productParam = localStorage.getItem("productParam");
    const parsedParam = JSON.parse(productParam);
    const product_id = localStorage.getItem("productId");
    const parsedProductID = JSON.parse(product_id);

    setGetParam(parsedParam);
    setNewIdData(parsedProductID);
  };

  useEffect(() => {
    paramAndId();
  }, [newIdData]);

  const handleGetCovered = () => {
    navigate(`/business-boarding-register?p=${getParam}&signup=userinfo-one`);
    // navigate("/business-boarding-register");
    localStorage.clear();
  };

  const handleClick = (choice, id) => {
    setSelected(choice);
    setTabId(id);
    localStorage.setItem("selectedTabId", id);
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

      {/* main data starts */}

      {
        <div className=" flex items-center justify-center flex-col">
          <div className=" pt-4 flex items-center flex-col justify-center w-full px-5 md:px-0">
            <img src={olivia} alt="Logo" className=" rounded-full w-12 mb-6" />
            <p className="text-2xl font-bold text-[#439687] mb-2  ">
              Welcome to MyCoverGenius
            </p>
            <p className="text-gray-800 text-sm font-medium  mb-4">
              {/* ZenCare covers you and your staff with quality healthcare at only
          <span className="font-bold mx-1">₦7000</span>
          per person. */}
              {tabData[newIdData].title}
            </p>
          </div>

          {/* yes no */}
          {tabData[newIdData].unlock && (
            <div className=" flex items-center justify-center">
              <div className="mt-6 py-4 px-6 max-w-[565px] w-full flex items-center justify-between bg-[#ebe9fe]">
                <div className=" flex items-center justify-between">
                  <p className=" text-sm">{tabData[newIdData].unlock}</p>
                  <ErrorIcon className=" text-green-700 mx-1" />
                </div>
                <div className="bg-[#d9d6fe] px-2 py-2 rounded-lg text-sm flex items-center justify-center text-white">
                  <button
                    className={`px-1  ${
                      selected === "Yes"
                        ? "bg-[#3C1E96]  rounded"
                        : " text-black"
                    }`}
                    onClick={() => handleClick("Yes")}
                  >
                    Yes
                  </button>
                  <button
                    className={` px-1 ${
                      selected === "No" ? "bg-[#3C1E96] rounded" : "text-black"
                    }`}
                    onClick={() => handleClick("No")}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="  flex items-center justify-center mt-6 ">
            <div className="border rounded-lg bg-[#f6fef9] py-6 px-12  max-w-[551px] w-full ">
              {/* card data */}
              <div className=" flex items-start justify-start flex-col">
                {tabData[newIdData].detail.map((item, index) => (
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
                {/* Important Notice: This plan is exclusively available for
                individuals below the age of 80 */}
                {tabData[newIdData].note && tabData[newIdData].note}
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center mt-12 w-full">
            <button
              className=" w-full py-3 px-4 bg-[#439687] text-sm font-bold text-white rounded-lg max-w-[565px] h-[46px]"
              onClick={handleGetCovered}
            >
              {tabData[newIdData].btn && tabData[newIdData].btn}
              {/* {loading ? "Loading... please wait" : "Get Covered"} */}
            </button>
          </div>

          {/* main data ends */}
        </div>
      }
    </div>
  );
};

export default BusinessBoardingNext;

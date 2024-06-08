import { ArrowLeft } from "@mui/icons-material";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/login/active-more.svg";
import olivia from "./olivia.jpg";
import ErrorIcon from "@mui/icons-material/Error";
import { DataContext } from "@/components/db/DataProvider";
import questionMark from "../Business/customSvg/question-success.svg";
import { tabData } from "./tabData";

// dialog
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { toast } from "react-toastify";

// console.log(tabData);
const BusinessBoardingNext = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Yes");
  const [tabId, setTabId] = useState(0);
  const [newIdData, setNewIdData] = useState(0);
  const [getParam, setGetParam] = useState("");
  const [dialogText, setDialogText] = useState("no");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
    const text =
      choice === "Yes"
        ? "Switching to the No-waiting period lets you unlock all the benefits early on. This would cost an extra 5,000 to your plan."
        : "You are switching off the no-waiting period";
    setDialogText(text);
    setTabId(id);
    setIsDialogOpen(true);
    localStorage.setItem("selectedTabId", id);
  };
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    toast.success("Waiting Period Locked, Your Premium Is Now 18,000/Month");
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
        <div className=" cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="" className=" w-28 hidden md:flex" />
        </div>
      </div>
      {/* olivia div */}

      {/* main data starts */}

      {
        <div className=" flex items-center justify-center flex-col">
          <div className=" pt-4 flex items-center flex-col justify-center w-full px-5 md:px-0 cursor-pointer">
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
                  <Dialog>
                    <DialogTrigger>
                      <button
                        className={`px-1 ${
                          selected === "Yes"
                            ? "bg-[#3C1E96] rounded"
                            : "text-black"
                        }`}
                        onClick={() => handleClick("Yes")}
                      >
                        Yes
                      </button>
                      <button
                        className={`px-1 ${
                          selected === "No"
                            ? "bg-[#3C1E96] rounded"
                            : "text-black"
                        }`}
                        onClick={() => handleClick("No")}
                      >
                        No
                      </button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className=" flex items-center justify-center w-full flex-col gap-5">
                          <img src={questionMark} alt="" />
                          <p className=" text-primary text-base font-semibold">
                            Proceed Action
                          </p>
                        </DialogTitle>
                        <DialogDescription className=" flex items-center justify-center flex-col w-full gap-5">
                          {/*on yes */}
                          <p className="text-base text-gray-800 font-medium">
                            {dialogText}
                          </p>
                          <div className="flex items-center justify-between w-full">
                            <DialogPrimitive.Close aria-label="Close">
                              <p className="text-base text-gray-900 font-medium cursor-pointer">
                                Go Back
                              </p>
                            </DialogPrimitive.Close>

                            <DialogPrimitive.Close aria-label="Close">
                              <p
                                className="text-white text-base py-3 px-2 bg-[#439687] cursor-pointer rounded-md"
                                onClick={handleCloseDialog}
                                // onClick={(prev) => {
                                //   handleClick(!prev);
                                //   toast.success(
                                //     "Waiting Period Locked, Your Premium Is Now 18,000/Month"
                                //   );
                                // }}
                              >
                                Yes, I Understand
                              </p>
                            </DialogPrimitive.Close>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
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

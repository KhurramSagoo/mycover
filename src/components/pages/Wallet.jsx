import React, { useState } from "react";
import TopDashboardNav from "../utils/TopDashboardNav";
import WalletIcon from "@mui/icons-material/Wallet";
import copy from "../../assets/dashboard/copy.svg";
import credit from "../../assets/dashboard/credit.svg";
import Transactions from "./Transactions";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Wallet = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="flex h-full min-h-screen flex-col items-center justify-start mb-32 md:mb-0 w-full">
      {step === 1 && (
        <div className="flex lg:items-center md:items-end items-center justify-enter flex-col w-full">
          <TopDashboardNav />

          <div className="  flex lg:items-center md:items-end items-center justify-enter flex-col w-full">
            <div className="w-full flex items-start justify-start mb-2 md:px-16 px-12 flex-col">
              <span className="text-xl font-semibold text-secondary">
                Wallet
              </span>
              <p className="text-sm text-gray-500"></p>
            </div>
            <div className="flex items-center justify-start flex-col md:px-16 px-12 w-full mb-6">
              <div className="md:flex hidden items-start justify-end w-full cursor-pointer">
                <div className="flex items-center justify-center px-3 py-2 rounded-md text-white bg-[#094063]">
                  <WalletIcon />
                  <p className="text-base">Add Money</p>
                </div>
              </div>
              <br />
              <div className="w-full flex items-center justify-center flex-col md:flex-row gap-12">
                <div className="bg-[#094063] max-w-[444px] cursor-pointer w-full h-[180px] p-6 flex items-start justify-center flex-col rounded-lg">
                  <p className="text-xl font-semibold text-white">
                    Wallet Balance
                  </p>
                  <p className="text-5xl font-semibold text-white">₦0</p>
                </div>
                <div className="bg-[#ebe9fe] border max-w-[444px] border-blue-400 cursor-pointer w-full h-[180px] p-6 md:flex hidden items-start justify-center flex-col rounded-lg">
                  <div className="flex items-start justify-start gap-2 border rounded-sm border-gray-500 px-2 py-2">
                    <img src={copy} alt="" />
                    <p className="text-sm font-medium text-gray-500">
                      Copy Account Number
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:hidden items-center text-center break-words justify-center w-full md:px-16 px-12 gap-2 flex-wrap flex-col cursor-pointer">
              <div>
                <img src={credit} alt="" />
              </div>
              <p className="text-xs font-medium text-gray-500">Add Money</p>
            </div>
            <div className="flex items-center justify-between w-full py-3 text-gray-500 text-sm font-semibold text-center break-words mt-5 md:px-16 px-12 flex-wrap">
              <p className="flex items-center justify-center text-secondary cursor-pointer text-base">
                Transactions
              </p>
              <div
                className="flex items-center justify-center gap-2 hover:text-blue-500 text-secondary cursor-pointer"
                onClick={handleNext}
              >
                <p className="text-base">View All</p>
                <ArrowForwardIcon />
              </div>
            </div>
            <div className="md:flex hidden py-3 items-center text-gray-500 text-sm font-semibold text-center break-words justify-center mb-5 w-full md:px-16 px-12 flex-wrap">
              <div className="flex items-center justify-between w-full">
                <div className="w-1/2 flex items-start justify-start">
                  <p>Transaction Type</p>
                </div>
                <div className="w-1/2 flex items-start justify-start">
                  <div className="flex items-center justify-around w-full">
                    <p>Amount(₦)</p>
                    <p>Date</p>
                  </div>
                </div>
              </div>

              <div className="w-full hidden py-5 md:flex items-center justify-center">
                <p className="text-base font-medium text-gray-500">
                  There are no records to show
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 2 && <Transactions onPrevious={handlePrevious} />}
    </div>
  );
};

export default Wallet;

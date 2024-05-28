import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TopDashboardNav from "../utils/TopDashboardNav";

const Transactions = ({ onPrevious }) => {
  const [selectTab, setSelectTab] = useState(0);

  const tabs = [
    { label: "Transactions", value: "", title: "", detail: "" },
    { label: "In Flow", value: "", title: "", detail: "" },
    { label: "Out Flow", value: "", title: "", detail: "" },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-start w-full">
      <div className="flex lg:items-center md:items-end items-center justify-enter flex-col w-full">
        <TopDashboardNav />

        <div className="w-full flex items-center justify-start mb-2 md:px-16 px-12">
          <span
            className="text-xl font-semibold text-secondary flex items-start gap-3 justify-center flex-col cursor-pointer"
            onClick={onPrevious}
          >
            <ArrowBackIcon />
            <p>Transactions</p>
          </span>
        </div>

        <div className="flex items-center justify-start">
          {tabs.map((item, index) => (
            <div
              onClick={() => setSelectTab(index)}
              key={index}
              className={`text-base md:px-8 px-5 lg:px-16 py-2 border-l-0 cursor-pointer ${
                selectTab === index
                  ? "border-b-4 border-primary"
                  : "border-b-4 border-b-gray-200"
              }`}
            >
              <p
                className={`text-base px-5 py-2 ${
                  selectTab === index
                    ? "font-medium text-primary"
                    : "text-gray-500 font-normal"
                }`}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="md:flex hidden py-3 items-center text-gray-500 text-sm font-semibold text-center break-words justify-center mb-12 w-full md:px-16 px-12 flex-wrap">
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
          <div className="w-full hidden py-16 md:flex items-center justify-center">
            <p className="text-base font-medium text-gray-500">
              There are no records to show
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;

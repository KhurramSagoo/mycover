import React, { useState } from "react";
// import {} from "@/components/db/state";
import { hospitals, states } from "@/components/db/flexiCareHospitalsData";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
const FlexiCareAvailableHospitals = () => {
  const [selectedPlan, setSelectedPlan] = useState("ZenCare Prime");
  const [selectedType, setSelectedType] = useState("clinic");
  const [selectedState, setSelectedState] = useState("all");
  const [searchKeyword, setSearchKeyword] = useState("");

  const [showCloseIcon, setShowCloseIcon] = useState(false);

  // console.log(searchKeyword);

  const plans = [
    "ZenCare Prime",
    "ZenCare Plus",
    "Flexi Care",
    "Flexi Care Mini",
    "ZenCare",
  ];

  // console.log(hospitals);

  const types = ["Clinic", "Hospital", "Eye Care", "Dental Clinic", "Pharmacy"];

  const handleFilterChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const filteredHospitals = hospitals.filter((hospital) => {
    return (
      ((selectedPlan === "ZenCare Prime" &&
        hospital.plan === "ZenCare Prime") ||
        (selectedPlan === "ZenCare Plus" && hospital.plan === "ZenCare Plus") ||
        (selectedPlan === "Flexi Care" && hospital.plan === "Flexi Care") ||
        (selectedPlan === "Flexi Care Mini" &&
          hospital.plan === "Flexi Care Mini") ||
        (selectedPlan === "ZenCare" && hospital.plan === "ZenCare")) &&
      ((selectedType === "clinic" && types.includes(hospital.type)) ||
        hospital.type === selectedType) &&
      (selectedState === "all" || hospital.state === selectedState) &&
      // hospital.name.toLowerCase().includes(searchKeyword.toLowerCase())
      hospital.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  });

  // const filteredHospitals = hospitals.filter((hospital) => {
  //   return (
  //     ((selectedPlan === "ZenCare Prime" &&
  //       hospital.plan === "ZenCare Prime") ||
  //       (selectedPlan === "ZenCare" && hospital.plan === "ZenCare")) &&
  //     (selectedType === "Clinic" || hospital.type === selectedType) &&
  //     (selectedState === "all" || hospital.state === selectedState) &&
  //     hospital.name.toLowerCase().includes(searchKeyword.toLowerCase())
  //   );
  // });

  return (
    <div className="lg:py-[120px] md:py-[100px] sm:py-[80px] py-[50px] px-4 bg-[#f8fcfb] w-full lg:px-16 h-full flex items-center justify-center flex-col">
      <div className="my-4 px-4 flex items-center justify-center flex-col flex-wrap w-full">
        <p className="my-4 text-secondary md:text-3xl sm:text-2xl lg:text-5xl text-xl font-extrabold text-wrap">
          View our available hospitals
        </p>
        <p className="my-4 text-gray-600 text-sm md:text-base font-medium text-wrap w-2/3 ">
          Search by Plan, Location, or Hospital name
        </p>
      </div>

      {/* plans tags*/}

      <div className="flex items-center justify-center w-full flex-wrap">
        {plans.map((plan, index) => (
          <button
            onClick={() => setSelectedPlan(plan)}
            className={`m-2 p-2 text-base font-medium ${
              selectedPlan === plan ? " text-primary   " : " text-gray-700"
            }`}
            key={index}
          >
            {plan}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center mb-4 w-full border border-primary px-5 py-2 rounded-md">
        <div className=" w-3/5">
          <SearchIcon className=" text-gray-400 cursor-pointer" />
          <input
            type="text"
            placeholder="Search by name"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className=" p-2 rounded w-4/5  outline-none "
          />
          <CloseIcon className=" text-gray-400 cursor-pointer" />
        </div>
        <select
          value={selectedType}
          onChange={handleFilterChange(setSelectedType)}
          className=" p-2  rounded w-1/5 "
        >
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <select
          value={selectedState}
          onChange={handleFilterChange(setSelectedState)}
          className=" p-2  rounded   w-1/5"
        >
          {states.map((state) => (
            <option key={state} value={state}>
              {state.toLowerCase()}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-between  items-start lg:w-1/2 w-full px-5">
        <div className=" text-primary font-semibold text-base ">
          {/* hospitals searched */}
          {filteredHospitals.length} Hospitals
        </div>
        <div className=" text-primary font-semibold text-base ">
          {/* hospitals searched */}
          <p>State </p>
        </div>
      </div>

      <div
        className="flex flex-wrap justify-start  items-start lg:w-1/2 w-full
       h-96 overflow-y-scroll"
      >
        {filteredHospitals.length > 0 ? (
          filteredHospitals.map((hospital, index) => (
            <div
              key={index}
              className=" hover:bg-gray-200 rounded-md p-4 m-2   w-full flex items-center justify-between"
            >
              <div className=" flex items-start justify-start flex-col">
                {/* no of hospitals searched */}
                <div className=" text-primary font-semibold text-base ">
                  {/* hospitals searched */}
                </div>

                <h3 className="text-base text-gray-600  font-medium">
                  {hospital.name}
                </h3>
                {/* <p>{hospital.plan}</p> */}
                {/* <p>{hospital.type}</p> */}
              </div>
              <div className=" flex items-start justify-start flex-col">
                {/* no of hospitals searched */}

                <h3 className="text-base text-gray-600  font-medium">
                  {hospital.state}
                </h3>
                {/* <p>{hospital.plan}</p> */}
                {/* <p>{hospital.type}</p> */}
              </div>
            </div>
          ))
        ) : (
          <div className=" text-primary font-semibold text-base ">
            {/* 0 {hospital.name} */}
            {/* hospitals searched */}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlexiCareAvailableHospitals;

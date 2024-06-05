import React, { useState } from "react";
import { states } from "@/components/db/state";
import { hospitals } from "@/components/db/flexiCareHospitalsData";
// export const hospitals = [
//   {
//     name: "ZenCare Prime Hospital",
//     type: "Hospital",
//     plan: "ZenCare Prime",
//     state: "lagos",
//   },
//   {
//     name: "ZenCare Plus Clinic",
//     type: "Clinic",
//     plan: "ZenCare Plus",
//     state: "abuja",
//   },
//   {
//     name: "Flexi Care Eye Center",
//     type: "Eye Care",
//     plan: "Flexi Care",
//     state: "enugu",
//   },
//   {
//     name: "Flexi Care Mini Dental",
//     type: "Dental Clinic",
//     plan: "Flexi Care Mini",
//     state: "kano",
//   },
//   { name: "ZenCare Pharmacy", type: "Pharmacy", plan: "ZenCare", state: "oyo" },
//   // Add more dummy data as needed
// ];

const FlexiCareAvailableHospitals = () => {
  const [selectedPlan, setSelectedPlan] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedState, setSelectedState] = useState("all");
  const [searchKeyword, setSearchKeyword] = useState("");

  const plans = [
    "all",
    "ZenCare Prime",
    "ZenCare Plus",
    "Flexi Care",
    "Flexi Care Mini",
    "ZenCare",
  ];

  const types = [
    "all",
    "Clinic",
    "Hospital",
    "Eye Care",
    "Dental Clinic",
    "Pharmacy",
  ];

  const handleFilterChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const filteredHospitals = hospitals.filter((hospital) => {
    return (
      (selectedPlan === "all" || hospital.plan === selectedPlan) &&
      (selectedType === "all" || hospital.type === selectedType) &&
      (selectedState === "all" || hospital.state === selectedState) &&
      hospital.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  });

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
            className={`m-2 p-2 border rounded ${
              selectedPlan === plan ? "bg-primary text-white" : ""
            }`}
            key={index}
          >
            {plan}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className="m-2 p-2 border rounded"
        />
        <select
          value={selectedType}
          onChange={handleFilterChange(setSelectedType)}
          className="m-2 p-2 border rounded"
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
          className="m-2 p-2 border rounded"
        >
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div
        className="flex flex-wrap justify-center  items-center md:w-1/2 w-full
       h-96 overflow-y-scroll"
      >
        {filteredHospitals.length > 0 ? (
          filteredHospitals.map((hospital, index) => (
            <div
              key={index}
              className="bg-white p-4 m-2 border rounded shadow-md w-full flex items-center justify-between"
            >
              <div>
                <h3 className="text-base text-primary font-medium">
                  {hospital.name}
                </h3>
                {/* <p>{hospital.plan}</p> */}
                {/* <p>{hospital.type}</p> */}
              </div>
              <p>{hospital.state}</p>
            </div>
          ))
        ) : (
          <p>No hospitals found matching the criteria.</p>
        )}
      </div>
    </div>
  );
};

export default FlexiCareAvailableHospitals;

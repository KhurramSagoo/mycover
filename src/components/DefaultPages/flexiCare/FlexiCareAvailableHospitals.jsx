import { useState } from "react";
import { hospitals, states } from "@/components/db/flexiCareHospitalsData";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const FlexiCareAvailableHospitals = () => {
  const [selectedPlan, setSelectedPlan] = useState("ZenCare Prime");
  const [selectedType, setSelectedType] = useState("clinic");
  const [selectedState, setSelectedState] = useState("all");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  const plans = [
    "ZenCare Prime",
    "ZenCare Plus",
    "Flexi Care",
    "Flexi Care Mini",
    "ZenCare",
  ];

  const types = ["Clinic", "Hospital", "Eye Care", "Dental Clinic", "Pharmacy"];

  const handleFilterChange = (setter) => (event) => {
    setter(event.target.value);
  };

  // filtered hospitals
  // const filteredHospitals = hospitals.filter((hospital) => {
  //   return (
  //     ((selectedPlan === "ZenCare Prime" &&
  //       hospital.plan === "ZenCare Prime") ||
  //       (selectedPlan === "ZenCare Plus" && hospital.plan === "ZenCare Plus") ||
  //       (selectedPlan === "Flexi Care" && hospital.plan === "Flexi Care") ||
  //       (selectedPlan === "Flexi Care Mini" &&
  //         hospital.plan === "Flexi Care Mini") ||
  //       (selectedPlan === "ZenCare" && hospital.plan === "ZenCare")) &&
  //     ((selectedType === "clinic" && types.includes(hospital.type)) ||
  //       hospital.type === selectedType) &&
  //     ((selectedState === "all" && hospital.state.toLowerCase()) ||
  //       hospital.state.toLowerCase() === selectedState) &&
  //     hospital.name.toLowerCase().includes(searchKeyword.toLowerCase())
  //   );
  // });
  const filteredHospitals = hospitals.filter((hospital) => {
    const matchesPlan =
      hospital.plan.toLowerCase() === selectedPlan.toLowerCase();
    const matchesType =
      hospital.type.toLowerCase() === selectedType.toLowerCase();
    const matchesState =
      selectedState === "All" ||
      hospital.state.toLowerCase() === selectedState.toLowerCase();
    const matchesSearch = hospital.name
      .toLowerCase()
      .includes(searchKeyword.toLowerCase());
    return matchesPlan && matchesType && matchesState && matchesSearch;
  });

  return (
    <div className=" px-4 bg-[#f8fcfb] w-full lg:px-16  lg:h-screen h-auto flex items-center justify-center flex-col">
      <div className="my-4 px-4 flex items-center justify-center flex-col flex-wrap w-full">
        <p className="my-4 text-secondary md:text-3xl sm:text-2xl lg:text-5xl text-xl font-extrabold text-wrap">
          View our available hospitals
        </p>
        <p className="my-4 text-gray-600 text-sm md:text-base font-medium text-wrap text-center">
          Search by Plan, Location, or Hospital name
        </p>
      </div>

      {/* Plan tags */}
      <div className="flex items-center justify-center w-full flex-wrap">
        {plans.map((plan, index) => (
          <button
            onClick={() => setSelectedPlan(plan)}
            className={`m-2 p-2 text-base font-medium ${
              selectedPlan === plan ? " text-primary" : " text-gray-700"
            }`}
            key={index}
          >
            {plan}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center mb-4 lg:w-1/2 w-full border border-primary px-5 py-2 rounded-md">
        <div className=" w-3/5 relative">
          <SearchIcon
            className=" text-gray-400 cursor-pointer absolute left-2 top-3"
            onClick={() => setSearchKeyword(searchKeyword)}
          />
          <input
            type="text"
            placeholder="Search by name"
            value={searchKeyword}
            onChange={(e) => {
              setSearchKeyword(e.target.value);
              setShowCloseIcon(e.target.value.length > 0);
            }}
            className=" p-2 rounded w-4/5 pl-10 outline-none "
          />
          {showCloseIcon && (
            <CloseIcon
              className=" text-gray-400 cursor-pointer absolute right-2 top-3"
              onClick={() => {
                setSearchKeyword("");
                setShowCloseIcon(false);
              }}
            />
          )}
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

      {/* Number of hospitals found */}
      <div className="flex justify-between  items-start lg:w-1/2 w-full px-5">
        <div className=" text-primary font-semibold text-base ">
          {filteredHospitals.length} Hospitals
        </div>
        <div className=" text-primary font-semibold text-base ">
          <p>State</p>
        </div>
      </div>

      {/* List of filtered hospitals */}
      <div className="flex flex-wrap justify-start  items-start lg:w-1/2 w-full h-96 overflow-y-scroll">
        {filteredHospitals.length > 0 ? (
          filteredHospitals.map((hospital, index) => (
            <div
              key={index}
              className=" hover:bg-gray-200 rounded-md p-4 m-2 w-full flex items-center justify-between"
            >
              <div className=" flex items-start justify-start flex-col">
                <div className=" text-primary font-semibold text-base ">
                  {/* Hospital name */}
                </div>
                <h3 className="text-base text-gray-600 font-medium">
                  {hospital.name}
                </h3>
              </div>
              <div className=" flex items-start justify-start flex-col">
                <h3 className="text-base text-gray-600 font-medium">
                  {hospital.state}
                </h3>
              </div>
            </div>
          ))
        ) : (
          <div className=" text-primary font-semibold text-base ">
            {/* No hospitals found */}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlexiCareAvailableHospitals;

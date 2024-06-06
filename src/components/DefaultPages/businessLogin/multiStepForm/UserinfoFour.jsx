import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { stateCityMapping } from "@/components/db/stateCitiesData";
const UserinfoFour = ({
  register,
  handleSubmit,
  errors,
  onSubmit,
  businessName,
  formData,
}) => {
  const navigate = useNavigate();

  const [selectedState, setSelectedState] = useState(formData.state || "");
  const [cities, setCities] = useState(
    selectedState ? stateCityMapping[selectedState] : []
  );

  const handleStateChange = (event) => {
    const newState = event.target.value;
    setSelectedState(newState);
    setCities(stateCityMapping[newState] || []);
  };

  return (
    <div>
      <div className="flex items-center justify-center w-full mt-2 px-12  flex-col  ">
        <div className=" pt-4 flex items-center flex-col justify-center w-full px-5 md:px-0">
          <p className="text-xl font-bold text-black mb-2  ">
            Where’s {businessName} Business located?
          </p>
          <p className="text-gray-800 text-sm font-medium  mb-4">
            Give me your business contact
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex items-center justify-center flex-col "
        >
          {/* state */}
          <div className=" flex items-start justify-center flex-col min-w-[300px] sm:w-full py-0">
            <label
              htmlFor="state"
              className=" text-gray-700 text-xs font-medium "
            >
              State
            </label>
            <select
              defaultValue={formData.state}
              {...register("state", {
                required: "The state field is required",
                onChange: handleStateChange,
              })}
              name="state"
              id=""
              className=" border w-full py-2 outline-teal-600 focus:outline-teal-600"
            >
              {/* states options */}
              {Object.keys(stateCityMapping).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.state && (
              <p className="text-red-500">{errors.state.message}</p>
            )}
          </div>

          {/* city */}
          <div className=" flex items-start justify-center flex-col min-w-[300px] sm:w-full py-0">
            <label
              htmlFor="businessSector"
              className=" text-gray-700 text-xs font-medium "
            >
              city
            </label>
            <select
              defaultValue={formData.city}
              {...register("city", {
                required: "The Business Sector field is required",
              })}
              name="city"
              id=""
              className=" border w-full py-2 outline-teal-600 focus:outline-teal-600"
            >
              {/* cities option */}
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && (
              <p className="text-red-500">{errors.city.message}</p>
            )}
          </div>

          {/* business Address */}
          <div className=" flex items-start justify-center flex-col min-w-[300px] sm:w-full py-0">
            <label htmlFor="businessAddress" className=" text-gray-500">
              Business Address
            </label>
            <input
              type="text"
              placeholder="Enter your Business Address"
              className=" border outline-primary rounded-md py-2 w-full my-1 px-2 "
              {...register("businessAddress", {
                required: "The business address field is required",
              })}
            />
            {errors.businessAddress && (
              <p className="text-red-500">{errors.businessAddress.message}</p>
            )}
          </div>
          <div className=" w-full my-5">
            <button
              className=" bg-[#347469] w-full py-2 rounded-md text-white opacity-90"
              // disabled={!isValid}
              type="submit"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserinfoFour;

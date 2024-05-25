import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const UserinfoTwo = ({
  register,
  handleSubmit,
  errors,
  onSubmit,
  userName,
  formData,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center justify-center w-full mt-2 px-12  flex-col  ">
        <div className=" pt-4 flex items-center flex-col justify-center w-full px-5 md:px-0">
          <p className="text-xl font-bold text-black mb-2  ">
            Awesome! Glad to meet you, {userName}
          </p>
          <p className="text-gray-800 text-sm font-medium  mb-4">
            Tell me your name below.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex items-center justify-center flex-col "
        >
          {/* Business name */}
          <div className=" flex items-start justify-center flex-col min-w-[300px] sm:w-full py-0">
            <label
              htmlFor="businessName"
              className=" text-gray-700 text-xs font-medium"
            >
              Business Name
            </label>
            <input
              defaultValue={formData.businessName}
              type="text"
              placeholder="Enter your Business name"
              className=" border outline-primary rounded-md py-2 w-full my-1 px-2 "
              {...register("businessName", {
                required: "The Business Name field is required",
                // pattern: {
                //     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                //     message: "Invalid email address"
                // }
              })}
            />
            {errors.businessName && (
              <p className="text-red-500">{errors.businessName.message}</p>
            )}
          </div>

          {/* business sector */}
          <div className=" flex items-start justify-center flex-col min-w-[300px] sm:w-full py-0">
            <label
              htmlFor="businessSector"
              className=" text-gray-700 text-xs font-medium "
            >
              Business Sector
            </label>
            <select
              defaultValue={formData.businessSector}
              {...register("businessSector", {
                required: "The Business Sector field is required",
              })}
              name="businessSector"
              id=""
              className=" border w-full py-2 outline-teal-600 focus:outline-teal-600"
            >
              <option value=""></option>
              <option value="Agriculture">Agriculture</option>
              <option value="Commerce">Commerce</option>
              <option value="Education">Education</option>
              <option value="Fashion">Fashion</option>
              <option value="Fintech">Fintech</option>
              <option value="Food">Food</option>
              <option value="Health">Health</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Insurance">Insurance</option>
              <option value="Logistics">Logistics</option>
              <option value="Non-profit">Non-profit</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Sports">Sports</option>
              <option value="Tech">Tech</option>
              <option value="Travel">Travel</option>
              <option value="Other">Other</option>
            </select>
            {errors.businessSector && (
              <p className="text-red-500">{errors.businessSector.message}</p>
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

export default UserinfoTwo;

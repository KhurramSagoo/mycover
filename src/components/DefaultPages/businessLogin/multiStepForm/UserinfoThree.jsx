import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const UserinfoThree = ({
  register,
  handleSubmit,
  errors,
  onSubmit,
  formData,
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-center w-full mt-2 px-12  flex-col  ">
        <div className=" pt-4 flex items-center flex-col justify-center w-full px-5 md:px-0">
          <p className="text-xl font-bold text-black mb-2  ">
            How can I reach you?
          </p>
          <p className="text-gray-800 text-sm font-medium  mb-4">
            Give me your business contact
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex items-center justify-center flex-col "
        >
          {/* email */}

          <div className=" flex items-start justify-center flex-col  min-w-[300px] sm:w-full py-0">
            <label
              htmlFor="businessEmail"
              className=" text-gray-700 text-xs font-medium "
            >
              Business Email
            </label>
            <input
              defaultValue={formData.businessEmail}
              type="email"
              placeholder="Enter your Business email"
              className=" border outline-primary rounded-md py-2 w-full my-1 px-2 "
              {...register("businessEmail", {
                required: "Business Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.businessEmail && (
              <p className="text-red-500">{errors.businessEmail.message}</p>
            )}
          </div>

          {/* phone number */}
          <div className=" flex items-start justify-center flex-col min-w-[300px] sm:w-full py-0">
            <label
              htmlFor="businessPhoneNumber"
              className=" text-gray-700 text-xs font-medium "
            >
              Business Phone Number
            </label>
            <input
              defaultValue={formData.businessPhoneNumber}
              type="text"
              placeholder="Enter your Business phone number"
              className=" border outline-primary rounded-md py-2 w-full my-1 px-2 "
              {...register("businessPhoneNumber", {
                required: "The Business phone field is required",
                pattern: {
                  value: /^(?:\+\d{1,3})?\d{10,12}$/,
                  message: "Invalid phone number",
                },
              })}
            />
            {errors.businessPhoneNumber && (
              <p className="text-red-500">
                {errors.businessPhoneNumber.message}
              </p>
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

export default UserinfoThree;

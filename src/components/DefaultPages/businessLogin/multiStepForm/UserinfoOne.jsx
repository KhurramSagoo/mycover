import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const UserinfoOne = ({
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
        <p className="text-xl font-bold text-black mb-2  ">
          What can I call you?
        </p>
        <p className="text-gray-800 text-sm font-medium  mb-4">
          Tell me your name below.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex items-center justify-center flex-col "
        >
          {/* first name */}
          <div className=" flex items-start justify-center flex-col min-w-[300px] sm:w-full py-0">
            <label
              htmlFor="firstName"
              className=" text-gray-700 text-xs font-medium "
            >
              First Name
            </label>
            <input
              defaultValue={formData.firstName}
              type="text"
              placeholder="Enter your first name"
              className=" border outline-primary rounded-md py-2 w-full my-1 px-2 "
              {...register("firstName", {
                required: "The FirstName field is required",
                // pattern: {
                //     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                //     message: "Invalid email address"
                // }
              })}
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          {/* last name */}
          <div className=" flex items-start justify-center flex-col  min-w-[300px] sm:w-full py-0">
            <label
              htmlFor="lastName"
              className=" text-gray-700 text-xs font-medium "
            >
              Last Name
            </label>
            <input
              defaultValue={formData.lastName}
              type="text"
              placeholder="Enter your last name"
              className=" border outline-primary rounded-md py-2 w-full my-1 px-2 "
              {...register("lastName", {
                required: "The lastName field is required",
                // pattern: {
                //     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                //     message: "Invalid email address"
                // }
              })}
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
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

export default UserinfoOne;

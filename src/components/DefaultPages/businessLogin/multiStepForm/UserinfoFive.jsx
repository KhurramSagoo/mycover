import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import checkGrey from "./small-check-circle-grey.svg";
import checkGreen from "./small-check-circle-green.svg";
import eye from "./eye.svg";
import eyeClose from "./eye-closed.svg";
import { Eye, EyeOff } from "lucide-react";

const UserinfoFive = ({
  register,
  handleSubmit,
  errors,
  onSubmit,
  userName,
  formData,
}) => {
  const [show, setShow] = useState(false);

  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    lowerCase: false,
    upperCase: false,
    specialChar: false,
    number: false,
  });

  const handlePasswordChange = (event) => {
    const password = event.target.value;

    setPasswordCriteria({
      length: password.length >= 8,
      lowerCase: /[a-z]/.test(password),
      upperCase: /[A-Z]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      number: /[0-9]/.test(password),
    });
  };
  const navigate = useNavigate();

  const passwordProperties = [
    {
      property: "8 characters long",
      isValid: passwordCriteria.length,
    },
    {
      property: "One lower case",
      isValid: passwordCriteria.lowerCase,
    },
    {
      property: "One upper case",
      isValid: passwordCriteria.upperCase,
    },
    {
      property: "A special character",
      isValid: passwordCriteria.specialChar,
    },
    {
      property: "A number",
      isValid: passwordCriteria.number,
    },
  ];

  return (
    <div className=" flex items-center justify-center flex-col">
      <div className="flex items-center justify-center w-full lg:w-2/5 md:w-2/3 mt-2 px-0  flex-col  ">
        <div
          className=" pt-4 flex items-center flex-col justify-center w-full 
        px-5 md:px-0"
        >
          <p className="text-xl font-bold text-black mb-2 text-center ">
            Almost in. Create password
          </p>
          <p className="text-gray-800 text-sm font-medium  mb-4 text-center break-words">
            Secure your new account with a strong password. For your eyes only.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex items-center justify-center flex-col "
        >
          {/* password */}
          <div className=" flex items-start justify-center flex-col min-w-[300px] sm:w-full py-0 relative">
            <label
              htmlFor="password"
              className=" text-gray-700 text-xs font-medium "
            >
              Password
            </label>
            <input
              defaultValue={formData.password}
              type={show ? "text" : "password"}
              placeholder="Create a password"
              className="  border  outline-primary rounded-md py-2 w-full my-1 px-2 "
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,}/,
                  // ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,}*
                  message:
                    "Password must be at least 8 characters long and contain one uppercase letter, one lowercase letter, one number, and one special character",
                },
                onChange: handlePasswordChange,
              })}
            />

            {show ? (
              <Eye
                onClick={() => setShow(false)}
                className=" w-5 cursor-pointer absolute right-2 top-7 opacity-60 hover:opacity-80"
              />
            ) : (
              <EyeOff
                // src={eyeClose}
                // alt=""
                onClick={() => setShow(true)}
                className=" w-5 cursor-pointer absolute right-2 top-7 opacity-60 hover:opacity-80"
              />
            )}
            {/* 
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )} */}
          </div>

          <div className=" w-full my-5">
            <div className=" flex items-center justify-center flex-wrap w-full">
              {passwordProperties.map((p, index) => (
                <div className=" flex items-center justify-center" key={index}>
                  <div>
                    <img src={p.isValid ? checkGreen : checkGrey} alt="" />
                  </div>
                  <p className=" text-xs font-medium text-gray-500">
                    {p.property}
                  </p>
                </div>
              ))}
            </div>
            <div className=" flex items-baseline justify-center w-full py-5 ">
              <input
                type="checkbox"
                name="newsLetter"
                id=""
                className=" mr-2"
              />
              <p className=" text-sm text-gray-600">
                Yes, sign me up for
                <span className=" text-primary mx-1 font-medium cursor-pointer">
                  MycoverGenius's
                </span>
                newsletter & Marketing Communication
              </p>
            </div>

            <button
              className=" bg-[#347469] w-full py-2 rounded-md text-white opacity-90"
              // disabled={!isValid}
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserinfoFive;

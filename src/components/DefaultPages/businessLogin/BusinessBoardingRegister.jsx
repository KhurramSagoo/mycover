// import logo from '../../../assets/login/mycover-logo-white.svg'
import lines from "../../../assets/login/cap-lines.svg";
import { ArrowLeft } from "@mui/icons-material";
import { ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import olivia from "./olivia.jpg";
import { useState } from "react";
import logo from "../../../assets/login/active-more.svg";
import UserinfoOne from "./multiStepForm/UserinfoOne";
import UserinfoTwo from "./multiStepForm/UserinfoTwo";
import UserinfoThree from "./multiStepForm/UserinfoThree";
import UserinfoFour from "./multiStepForm/UserinfoFour";
import UserinfoFive from "./multiStepForm/UserinfoFive";
import { toast } from "react-toastify";

const BusinessBoardingRegister = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    if (step < 5) {
      setStep(step + 1);
    } else {
      // console.log("Form submitted:", formData);
      toast.success("Form submitted");
    }
  };

  const userName = formData.firstName;
  const businessName = formData.businessName;

  const navigate = useNavigate();
  return (
    <div className=" w-full flex items-stretch justify-start min-h-screen h-auto">
      {/* left side bar */}
      <div className="hidden md:flex items-start justify-start bg-[#347469] lg:w-[384px] md:w-[313px]  min-h-screen  h-auto relative px-5">
        <div className=" md:px-1 px-5 w-full flex items-center mt-36 justify-start  ">
          <div className=" flex items-start justify-start flex-col py-5 px-2">
            <div className=" flex items-center justify-center py-3">
              <div className=" w-9 h-9 text-primary bg-white rounded-2xl flex items-center justify-center">
                <div className=" rounded-2xl bg-[#9cd3c9] h-8 w-8 flex items-center justify-center">
                  <div className=" rounded-full bg-[#347469] h-2 w-2 flex items-center justify-center"></div>
                </div>
              </div>
              <div className=" flex items-center justify-center text-white ml-5 font-medium">
                Your Details
              </div>
            </div>

            <div className=" flex items-center justify-center py-3">
              <div className=" w-9 h-9 text-primary bg-white rounded-2xl flex items-center justify-center">
                <div className=" rounded-2xl bg-[#9cd3c9] h-8 w-8 flex items-center justify-center">
                  <div className=" rounded-full bg-[#347469] h-2 w-2 flex items-center justify-center"></div>
                </div>
              </div>
              <div className=" flex items-center justify-center text-white ml-5 font-medium">
                Plan Details
              </div>
            </div>
            <div className=" flex items-center justify-center py-3">
              <div className=" w-9 h-9 text-primary bg-white rounded-2xl flex items-center justify-center">
                <div className=" rounded-2xl bg-[#9cd3c9] h-8 w-8 flex items-center justify-center">
                  <div className=" rounded-full bg-[#347469] h-2 w-2 flex items-center justify-center"></div>
                </div>
              </div>
              <div className=" flex items-center justify-center text-white ml-5 font-medium">
                Get Covered
              </div>
            </div>
          </div>
          <div className="w-full absolute bottom-0 right-0 left-0 ">
            <img
              loading="lazy"
              src={lines}
              alt=""
              className=" h-52 w-full opacity-50  object-cover"
            />
          </div>
        </div>
      </div>

      {/* right */}

      <div className=" md:w-3/4 p-3 md:px-5  w-full">
        {/* logo */}

        <div
          className=" flex
             items-center justify-between md:w-[55%] w-full  pt-8 ps-24 "
        >
          <div
            className="bg-[#e6f4f2] flex items-center justify-center w-28 rounded-xl px-2 py-2   cursor-pointer transition-opacity duration-500 ease-in-out opacity-80 hover:opacity-100"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft />{" "}
            <button className="text-xs text-black  font-medium">Go Back</button>
          </div>
          <img src={logo} alt="" className=" w-24 hidden md:flex" />
        </div>
        {/* olivia */}

        <div className=" pt-4 flex items-center flex-col justify-center w-full px-5 md:px-0">
          <img src={olivia} alt="Logo" className=" rounded-full w-12 mb-6" />
        </div>

        {/* next back button form */}
        <div className=" flex items-center justify-between max-w-[300px] mx-auto py-3">
          <div
            className={`bg-[#e6f4f2] flex items-center justify-center rounded-xl  pr-3 w-16 py-0  cursor-pointer transition-opacity duration-500 ease-in-out opacity-70 hover:opacity-100 ${
              step === 1 ? "hidden" : "flex"
            }`}
            onClick={() => setStep(step > 0 && step - 1)}
          >
            <ArrowLeft />{" "}
            <button className="text-xs text-black  font-medium">Back</button>
          </div>
          <div
            className={`bg-[#e6f4f2] flex items-center justify-center rounded-xl  ps-3 w-16 py-0  cursor-pointer transition-opacity duration-500 ease-in-out opacity-70 hover:opacity-100 ${
              step === 5 ? "hidden" : "flex ml-auto"
            }`}
            onClick={() => setStep(step < 5 && step + 1)}
          >
            <button className="text-xs text-black  font-medium">Next</button>
            <ArrowRight />{" "}
          </div>
        </div>

        {/* userinfo multisept form */}
        {step === 1 && (
          <UserinfoOne
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            formData={formData}
          />
        )}
        {step === 2 && (
          <UserinfoTwo
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            userName={userName}
            formData={formData}
          />
        )}
        {step === 3 && (
          <UserinfoThree
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            formData={formData}
          />
        )}
        {step === 4 && (
          <UserinfoFour
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            businessName={businessName}
            formData={formData}
          />
        )}
        {step === 5 && (
          <UserinfoFive
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            businessName={businessName}
            formData={formData}
          />
        )}

        <div className="text-sm  flex items-center justify-center ml-auto font-normal">
          <p className="text-gray-500  cursor-pointer ">
            Already have an account?
            <span
              className=" text-primary ml-2 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Sign In
            </span>
          </p>
        </div>
        {/* <div>
                    <p>Don't have an account? Sign Up</p>
                </div> */}
      </div>
    </div>
  );
};

export default BusinessBoardingRegister;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const UserinfoFour = ({
  register,
  handleSubmit,
  errors,
  onSubmit,
  businessName,
  formData,
}) => {
  const navigate = useNavigate();

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
              {...register("businessSector", {
                required: "The state field is required",
              })}
              name="state"
              id=""
              className=" border w-full py-2 outline-teal-600 focus:outline-teal-600"
            >
              <option value="Abia">Abia</option>
              <option value="Adamawa">Adamawa</option>
              <option value="Akwa Ibom">Akwa Ibom</option>
              <option value="Anambra">Anambra</option>
              <option value="Bauchi">Bauchi</option>
              <option value="Bayelsa">Bayelsa</option>
              <option value="Benue">Benue</option>
              <option value="Borno">Borno</option>
              <option value="Cross River">Cross River</option>
              <option value="Delta">Delta</option>
              <option value="Ebonyi">Ebonyi</option>
              <option value="Edo">Edo</option>
              <option value="Ekiti">Ekiti</option>
              <option value="Enugu">Enugu</option>
              <option value="Federal Capital Territory">
                Federal Capital Territory
              </option>
              <option value="Gombe">Gombe</option>
              <option value="Jigawa">Jigawa</option>
              <option value="Imo">Imo</option>
              <option value="Kaduna">Kaduna</option>
              <option value="Kano">Kano</option>
              <option value="Katsina">Katsina</option>
              <option value="Kebbi">Kebbi</option>
              <option value="Kwara">Kwara</option>
              <option value="Kogi">Kogi</option>
              <option value="Lagos">Lagos</option>
              <option value="Nasarawa">Nasarawa</option>
              <option value="Niger">Niger</option>
              <option value="Ogun">Ogun</option>
              <option value="Ondo">Ondo</option>
              <option value="Osun">Osun</option>
              <option value="Oyo">Oyo</option>
              <option value="Plateau">Plateau</option>
              <option value="Rivers">Rivers</option>
              <option value="Sokoto">Sokoto</option>
              <option value="Taraba">Taraba</option>
              <option value="Yobe">Yobe</option>
              <option value="Zamfara">Zamfara</option>
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
              <option value=""></option>

              <option value="Aba North">Aba North</option>
              <option value="Arochukwu">Arochukwu</option>
              <option value="Aba South">Aba South</option>
              <option value="Bende">Bende</option>
              <option value="Isiala Ngwa North">Isiala Ngwa North</option>
              <option value="Ikwuano">Ikwuano</option>
              <option value="Isiala Ngwa South">Isiala Ngwa South</option>
              <option value="Isuikwuato">Isuikwuato</option>
              <option value="Obi Ngwa">Obi Ngwa</option>
              <option value="Ohafia">Ohafia</option>
              <option value="Osisioma">Osisioma</option>
              <option value="Ugwunagbo">Ugwunagbo</option>
              <option value="Ukwa East">Ukwa East</option>
              <option value="Ukwa West">Ukwa West</option>
              <option value="Umuahia North">Umuahia North</option>
              <option value="Umuahia South">Umuahia South</option>
              <option value="Umu Nneochi">Umu Nneochi</option>
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
                // pattern: {
                //     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                //     message: "Invalid email address"
                // }
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

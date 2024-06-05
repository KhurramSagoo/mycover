import collage from "./assets/travel-collage.png";

const Collage = () => {
  return (
    <div
      className=" p-10 mt-5
        lg:mx-16 md:mx-12 sm:mx-6 mx-2 lg:px-6 lg:py-24 md:px-5 px-2
rounded-lg
        bg-businessInsuranceBg
        flex
         items-center justify-center flex-col md:flex-row 
        "
    >
      <upper
        className=" w-full md:w-1/2 text-primary flex items-start justify-center  flex-col
            mt-12 px-5
            "
      >
        {/* <p className=" text-base md:text-xl">Insurance at your convenience</p> */}
        <p className=" text-white mb-4 text-[22px] md:text-2xl lg:text-5xl  py-5 font-bold flex items-start">
          Get affordable Travel Insurance for you and your Staff
        </p>
        {/* <p className="text-white mb-4 md:text-xl text-base ">
          we have made insurance affordable, seamless and very accessible to
          everyone
        </p> */}
        <button className=" md:px-6 md:py-4 py-2 px-3 bg-primary text-white rounded-lg">
          Get Covered
        </button>
      </upper>

      {/* right div collage */}
      <div className=" w-full md:w-1/2 p-3">
        <img loading="lazy" src={collage} alt="" className=" w-full" />
      </div>
    </div>
  );
};

export default Collage;

const BlueCardsMore = () => {
  return (
    <div className="  flex items-center justify-start w-full  lg:px-16 md:px-12 sm:px-10 px-5 bg-[#094063] text-base font-semibold text-white  rounded-lg py-3 mt-5 flex-wrap">
      <div className=" w-1/3 flex items-center justify-center flex-col gap-6 p-2 border-r">
        <p>Plans</p>
        <p>0</p>
      </div>
      <div className=" w-1/3 flex items-center justify-center flex-col gap-6 p-2 border-r">
        <p>Active</p>
        <p>0</p>
      </div>
      <div className=" w-1/3 flex items-center justify-center flex-col gap-6 p-2">
        <p>Inactive</p>
        <p>0</p>
      </div>
    </div>
  );
};

export default BlueCardsMore;

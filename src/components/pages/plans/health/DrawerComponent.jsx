import { useState } from "react";

const DrawerComponent = () => {
  const [selectTab, setSelectTab] = useState(0);

  const tabs = [
    {
      label: "Benefits",
      title: "",
      detail: "",
    },
    {
      label: "Details",
      title: "",
      detail: "",
    },
    {
      label: "Terms",
      title: "",
      detail: "",
    },
  ];

  return (
    <div
      className=" flex w-full  h-full min-h-screen flex-col 
  items-center justify-start px-5 sm:px-0
    "
    >
      <div className=" flex lg:items-center md:items-end items-center justify-enter flex-col  w-full px-5"></div>

      {/* <div
        className=" w-full flex items-center justify-start
       mb-2
       md:px-16 px-12 "
      >
        <span className=" text-xl font-medium text-secondary">Claims</span>
      </div> */}

      <div className="  flex items-center w-full  justify-center   ">
        {tabs.map((item, index) => (
          <div
            onClick={() => setSelectTab(index)}
            key={index}
            className={`text-base px-2
               md:px-0 lg:px-2  py-2 border-l-0 cursor-pointer ${
                 selectTab === index
                   ? " border-b-4 border-primary"
                   : " border-b-4 border-b-gray-200 "
               } `}
          >
            <p
              className={`text-base  md:px-2 px-1 py-2  ${
                selectTab === index
                  ? "font-medium  text-primary "
                  : " text-gray-500 font-normal "
              } `}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center text-center break-words justify-center flex-col mt-16 px-0">
        <h2 className="text-base font-medium text-gray-500">
          {tabs[selectTab].title}
        </h2>
        {!tabs[selectTab].detail ? (
          <p className="text-sm font-medium text-gray-500">
            {" "}
            There is no pending {tabs[selectTab].label} At the Moment
          </p>
        ) : (
          <p className="text-sm font-medium text-gray-500">
            {tabs[selectTab].detail}
          </p>
        )}
      </div>
    </div>
  );
};

export default DrawerComponent;

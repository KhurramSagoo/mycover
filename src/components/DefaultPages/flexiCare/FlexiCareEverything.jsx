import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tabData } from "./flexiCareEveryThingData";

const FlexiCareEveryThing = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGetCovered = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/business-boarding-register");
    }, 500);
  };

  const [selected, setSelected] = useState("Yes");

  const handleClick = (choice) => {
    setSelected(choice);
  };

  return (
    <div className="my-5 px-6 pb-12 pt-6 w-full h-full">
      {/* Olivia div */}
      <div className="pt-4 flex items-center flex-col break-words justify-center w-full px-5 md:px-0 gap-5">
        <p className="xl:text-5xl md:text-3xl text-xl font-extrabold text-secondary mb-2 lg:w-2/3 md:w-4/5 w-full leading-normal text-center break-words px-5">
          Everything your business needs to enjoy quality health care.
        </p>
        <p className="text-gray-800 text-base font-medium mb-4">
          Choose the plan that suits you best
        </p>
      </div>

      {/* Cards */}
      <div className="flex items-center justify-center my-6 w-full h-full">
        <div className="flex items-start justify-start w-full overflow-x-auto gap-5 h-full py-5">
          {tabData.map((item, index) => (
            <div
              key={index}
              className="flex items-start justify-between gap-10 shadow-custom-lg flex-col lg:min-w-[400px] min-w-[300px] lg:min-h-[585px] min-h-[530px] px-5 py-5 rounded-md h-full"
            >
              <div className=" flex items-start justify-start flex-col">
                <div className="flex items-start justify-start flex-col w-full gap-2">
                  <p className="lg:text-2xl text-base md:text-xl text-primary font-medium">
                    {item.title}
                  </p>
                  <p className="lg:text-3xl text-base sm:text-2xl text-secondary font-semibold">
                    {item.heading}{" "}
                    <span className="text-xl text-gray-500 font-medium">
                      /month
                    </span>
                  </p>
                </div>
                <div className="w-full flex items-center justify-center flex-col gap-5 h-full my-5">
                  {item.card &&
                    item.card.map((card, cardIndex) => (
                      <div
                        className="flex items-center justify-start w-full gap-5"
                        key={cardIndex}
                      >
                        <div
                          className="flex items-center justify-center w-4 h-4 rounded-full bg-[#ecfdf3]"
                          key={cardIndex}
                        >
                          <img src={card.image} alt="" className="" />
                        </div>
                        <p className="lg:text-base text-xs text-gray-700 font-medium">
                          {card.text}
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Button */}
              <div className="w-full flex items-center justify-center flex-col gap-5">
                <button
                  className="w-full py-3 px-4 bg-primary text-sm font-bold text-white rounded-md max-w-[565px] h-[46px]"
                  onClick={handleGetCovered}
                >
                  {loading ? "Loading... please wait" : item.btn}
                </button>

                <span className="cursor-pointer text-sm font-semibold text-[#439687] ml-5">
                  {item.view}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlexiCareEveryThing;

import health from "../assets/health.jpg";
import car from "../assets/car.jpg";
import hand from "../assets/hand.jpg";

const data = [
  {
    image: health,
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis commodi exercitat",
  },
  {
    image: car,
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis commodi exercitat",
  },
  {
    image: hand,
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis commodi exercitat",
  },
];
const InsuranceTips = () => {
  return (
    <div className=" flex items-start justify-start flex-col w-full">
      <p className=" text-xl font-semibold">Insurance Tips</p>
      <div>
        {data.map((item, index) => (
          <div
            key={index}
            className=" flex items-center justify-center text-gray-500 shadow w-full min-h-32 my-5 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.detail}
              className="  w-[150px]  object-cover rounded-md h-[120px]"
            />
            <p className=" text-md p-2 ">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceTips;

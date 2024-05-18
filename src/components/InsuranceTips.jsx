import health from "../assets/health.jpg";
import car from "../assets/car.jpg";
import hand from "../assets/hand.jpg";

const data = [
  {
    image: health,
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ",
  },
  {
    image: car,
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ",
  },
  {
    image: hand,
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ",
  },
];
const InsuranceTips = () => {
  return (
    <div className=" flex items-start justify-start flex-col w-full">
      <p className=" text-xl font-semibold text-secondary">Insurance Tips</p>
      <div>
        {data.map((item, index) => (
          <div
            key={index}
            className=" flex items-center justify-center flex-col lg:flex-row text-gray-500 shadow w-full min-h-32 h-auto  mt-5 cursor-pointer p-5 rounded-lg"
          >
            <img
              loading="lazy"
              src={item.image}
              alt={item.detail}
              className="  w-[150px]  object-cover rounded-md h-[120px]"
            />
            <p className=" text-md p-3 text-center ">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceTips;

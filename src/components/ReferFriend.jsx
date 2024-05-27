import refer from "../assets/refer.svg";

const ReferFriend = () => {
  return (
    <div
      className=" bg-bgRefer flex items-center justify-start
    flex-col w-56 rounded h-72
    "
    >
      <p className=" my-2 text-black font-medium text-base">
        {" "}
        Refer and earn reward
      </p>
      <button className=" bg-white text-green-600 font-medium cursor-pointer p-2 w-40 my-2 text-sm">
        Refer friend
      </button>
      <img loading="lazy" src={refer} alt="" className=" my-2" />
    </div>
  );
};

export default ReferFriend;

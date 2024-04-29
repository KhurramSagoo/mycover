import refer from "../assets/refer.svg";

const ReferFriend = () => {
  return (
    <div
      className=" bg-bgRefer flex items-center justify-center
    flex-col w-56 rounded h-72 m-3
    "
    >
      <p className=" my-2"> Refer and earn reward</p>
      <button className=" bg-white text-green-500 p-2 w-40 my-2">
        Refer friend
      </button>
      <img src={refer} alt="" className=" my-2" />
    </div>
  );
};

export default ReferFriend;

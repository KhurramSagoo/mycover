import bell from "../assets//bell.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div
      className=" max-w-[1000px] mx-auto w-full px-5
    bg-menuIcon  h-[90px] shadow-sm flex items-center  justify-between"
    >
      <div
        className=" flex items-center justify-center"
        onClick={() => navigate("/")}
      >
        <div className=" rounded-full bg-teal-500 w-10 h-10 flex items-center justify-center text-md font-medium text-white cursor-pointer ">
          KS
        </div>
        <div className=" flex items-start justify-center flex-col md:flex-row  font-semibold ms-3  text-secondary  ">
          <p className=" text-base md:text-2xl">Hello,</p>
          <p className=" md:text-2xl text-xl">
            User{" "}
            <span role="img" aria-label="Wave">
              👋
            </span>
          </p>
        </div>
      </div>
      <div className=" rounded-full border cursor-pointer">
        <img loading="lazy" src={bell} alt="" />
      </div>
    </div>
  );
};

export default Navbar;

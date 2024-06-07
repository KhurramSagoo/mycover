import bell from "../assets//bell.svg";
import { useNavigate } from "react-router-dom";
import DrawerSheet from "./utils/DrawerSheet";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex  items-center justify-between  w-full   h-24 px-5 md:px-10    ">
      <div className=" flex items-center justify-center">
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
      <div className=" cursor-pointer">
        <DrawerSheet
          head={<img loading="lazy" src={bell} alt="" />}
          title={"To Dos"}
          detail={"No Pending To-Dos"}
          value={0}
          subDetail={"To-dos will appear here when you have any"}
        />
      </div>
    </div>
  );
};

export default Navbar;

import LeftSideBar from "@/components/LeftSideBar";
import MobileFooter from "@/components/MobileFooter";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="w-full h-full flex flex-row justify-center relative">
        <div className="hidden md:flex items-start justify-start xl:w-[280px] lg:w-[250px] md:w-[200px]">
          <LeftSideBar />
        </div>
        <div className="flex-grow  ">
          <Outlet />
        </div>
      </div>
      <MobileFooter />
    </>
  );
};

export default Layout;

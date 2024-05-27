import LeftSideBar from "@/components/LeftSideBar";
import MobileFooter from "@/components/MobileFooter";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="w-full flex items-start container">
        <div className="hidden md:flex w-[280px]">
          <LeftSideBar />
        </div>
        <div className="flex-grow ">
          <Outlet />
        </div>
      </div>
      <MobileFooter />
    </>
  );
};

export default Layout;

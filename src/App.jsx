import MainContent from "./components/MainContent";
import LeftSideBar from "./components/LeftSideBar";
import { BrowserRouter } from "react-router-dom";
import MobileFooter from "./components/MobileFooter";

const App = () => {
  return (
    <BrowserRouter>
      <div className=" flex">
        <div className="  hidden md:block">
          {/* <LeftSideBar /> */}
        </div>
        {/* <div className=" md:ml-[300px] w-full flex flex-col "> */}
        <MainContent />
        {/* </div> */}
      </div>
      <MobileFooter />
    </BrowserRouter>
  );
};

export default App;

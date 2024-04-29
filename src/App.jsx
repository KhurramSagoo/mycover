import MainContent from "./components/MainContent";
import LeftSideBar from "./components/LeftSideBar";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className=" flex">
        <div className=" w-72 hidden md:block">
          <LeftSideBar />
        </div>
        <div className=" flex-1">
          <MainContent />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

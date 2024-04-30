import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/pages/Dashboard";
import Cover from "../components/pages/Cover";
import Plans from "../components/pages/Plans";
import Wallet from "../components/pages/Wallet";
import Claim from "../components/pages/Claim";
import More from "../components/pages/More";

const MainContent = () => {
  return (
    <div className=" bg-#fafbfd min-h-screen w-full">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/dashboard/mycover" element={<Cover />} />
        <Route exact path="/dashboard/plans" element={<Plans />} />
        <Route exact path="/dashboard/wallet" element={<Wallet />} />
        <Route exact path="/dashboard/claim" element={<Claim />} />
        <Route exact path="/dashboard/more" element={<More />} />
      </Routes>
    </div>
  );
};

export default MainContent;

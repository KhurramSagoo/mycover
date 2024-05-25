import TopNav from "@/components/others/TopNav";
import BusinessBrands from "../Business/BusinessBrands";
import BusinessMiddlePart from "../Business/BusinessMiddlePart";
import BusinessOneStopTab from "../Business/BusinessOneStopTab";
import BusinessProtection from "../Business/BusinessProtection";
import SmartBusinessTabs from "../Business/SmartBusinessTabs";
import EasyWayBusinessInsurance from "../Business/EasyWayBusinessInsurance";
import BusinessMultiAnimation from "../Business/BusinessMultiAnimation";
import BusinessAccrodion from "../Business/BusinessAccrodion";
import BusinessFooter from "../Business/BusinessFooter";
import BusinessHero from "../Business/BusinessHero";
// db
import middlePlans, { heroData, oneStopTabs, accordData } from "./ThirdPartyDB";

const ThirdParty = () => {
  return (
    <div className="   w-full ">
      {/* navbar */}
      <div className=" fixed top-0 right-0 left-0">
        <TopNav />
      </div>

      {/* hero section */}
      {heroData.map((item, index) => (
        <div key={index}>
          <BusinessHero item={item} index={index} />
        </div>
      ))}

      {/* brands */}
      <BusinessBrands />

      {/* middle plans */}
      <BusinessMiddlePart
        item={middlePlans}
        head="Insurance that just suits your business"
        detail="3rd party relieves you of the financial risks involved with vehicle incidents on transit."
      />

      {/* one stop tabs */}
      <BusinessOneStopTab
        tabData={oneStopTabs}
        solution="Why carry papers around?"
        head="The one-stop insurance tool for your business"
        detail="Our web interface enables you to manage your vehicles and riders under the plan conveniently. It also empowers you with data to make better management decisions."
      />

      {/* <BusinessProtection /> */}
      {/* <SmartBusinessTabs /> */}
      <BusinessMultiAnimation />
      {/* <EasyWayBusinessInsurance /> */}
      <div className=" h-28 w-full">
        <br />
      </div>
      <BusinessAccrodion data={accordData} />
      <BusinessFooter />
      {/* <div className=' h-28 w-full'>
            <br />
        </div> */}
    </div>
  );
};

export default ThirdParty;

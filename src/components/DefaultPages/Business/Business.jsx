import TopNav from "../../others/TopNav";
import BusinessHero from "./BusinessHero";
import BusinessBrands from "./BusinessBrands";
import BusinessMiddlePart from "./BusinessMiddlePart";
import BusinessOneStopTab from "./BusinessOneStopTab";
import BusinessProtection from "./BusinessProtection";
import SmartBusinessTabs from "./SmartBusinessTabs";
import EasyWayBusinessInsurance from "./EasyWayBusinessInsurance";
import BusinessMultiAnimation from "./BusinessMultiAnimation";
import BusinessAccrodion from "./BusinessAccrodion";
import BusinessFooter from "./BusinessFooter";

// business db
import middlePlans, {
  heroData,
  oneStopTabs,
  accordData,
  tabsBusinessSmartData,
} from "./BusinessDB";
import { useEffect } from "react";

const Business = () => {
  const tabTitle = () => {
    document.title = "Business";
  };
  useEffect(() => {
    tabTitle();
  }, []);
  return (
    <div className="   w-full ">
      <div className=" fixed top-0 right-0 left-0">
        <TopNav />
      </div>
      {heroData.map((item, index) => (
        <div key={index}>
          <BusinessHero item={item} index={index} />
        </div>
      ))}
      <BusinessBrands />

      {/* middle plans */}
      <BusinessMiddlePart
        item={middlePlans}
        head="Built with your business in mind"
        detail="We enable SMEs, startups or large businesses protect finances and grow with a 360° insurance coverage."
      />

      {/* one stop tabs */}

      <BusinessOneStopTab
        tabData={oneStopTabs}
        solution="One-stop Solution"
        head="The one-stop insurance tool for your business"
        detail="We empower you with data via a web interface for managing plans and staff needed to drive better business decisions."
      />

      <BusinessProtection />
      <SmartBusinessTabs
        tabData={tabsBusinessSmartData}
        headTitle="Smart business insure with MyCovergenius"
        headDetail="Our automated claims process allows you to focus on your KPIs while we take care of your business risks and staff.
      "
      />
      <BusinessMultiAnimation />
      <EasyWayBusinessInsurance />
      <div className=" h-28 w-full">
        <br />
      </div>

      {/* accordion */}

      <BusinessAccrodion data={accordData} />

      <BusinessFooter />
    </div>
  );
};

export default Business;

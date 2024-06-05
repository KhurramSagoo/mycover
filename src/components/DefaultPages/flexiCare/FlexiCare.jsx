import TopNav from "@/components/others/TopNav";
import BusinessBrands from "../Business/BusinessBrands";
import BusinessMiddlePart from "../Business/BusinessMiddlePart";
import BusinessFooter from "../Business/BusinessFooter";
import BusinessAccrodion from "../Business/BusinessAccrodion";
import BusinessMultiAnimation from "../Business/BusinessMultiAnimation";
import Collage from "./Collage";
import BasicProtection from "./BasicProtection";

// db
import middlePlans, {
  heroData,
  accordData,
  basicData,
  tabsBusinessSmartData,
} from "./TravelDB";
import { useEffect } from "react";
import Hero from "./Hero";
import FlexiBusinessNeed from "./FlexiBusinessNeed";
import SmartBusinessTabs from "../Business/SmartBusinessTabs";

const MonthlyComprehensive = () => {
  const tabTitle = () => {
    document.title = "FlexiCare";
  };
  useEffect(() => {
    tabTitle();
  }, []);

  return (
    <div className="w-full">
      {/* navbar */}
      <div className="fixed top-0 right-0 left-0">
        <TopNav />
      </div>

      {/* hero section */}
      {heroData.map((item, index) => (
        <div key={index}>
          <Hero item={item} index={index} />
        </div>
      ))}

      {/* brands */}
      <BusinessBrands />

      {/* middle plans */}
      <BusinessMiddlePart
        item={middlePlans}
        top="Seamless healthcare experience"
        head="Access instant, affordable and quality healthcare"
        detail="We help your business cover the medical costs of your employees."
      />
      {/* basic protection */}
      {basicData.map((item, index) => (
        <div key={index}>
          <BasicProtection item={item} />
        </div>
      ))}
      <br />
      {/* flexi business needs */}
      <FlexiBusinessNeed
        tabData={tabsBusinessSmartData}
        headTitle="Paper-less insurance"
        headDetail="If paperwork and bottleneck processes stress you, then you've come to the right place. Say goodbye to filling long forms on paper. Say hello to the easy life.
      "
      />
      {/* <SmartBusinessTabs/> */}
      {/* multianimation */}
      <BusinessMultiAnimation />
      <Collage />
      <div className="h-28 w-full">
        <br />
      </div>
      <BusinessAccrodion data={accordData} />
      <BusinessFooter />
    </div>
  );
};

export default MonthlyComprehensive;

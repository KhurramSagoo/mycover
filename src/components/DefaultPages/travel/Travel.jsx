import TopNav from "@/components/others/TopNav";
import BusinessBrands from "../Business/BusinessBrands";
import BusinessMiddlePart from "../Business/BusinessMiddlePart";
import BusinessFooter from "../Business/BusinessFooter";
import BusinessAccrodion from "../Business/BusinessAccrodion";
import BusinessMultiAnimation from "../Business/BusinessMultiAnimation";
import Collage from "./Collage";
import BasicProtection from "./BasicProtection";

// db
import middlePlans, { heroData, accordData, basicData } from "./TravelDB";
import { useEffect } from "react";
import Hero from "./Hero";

const MonthlyComprehensive = () => {
  const tabTitle = () => {
    document.title = "Travel";
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
        top="Seamless Travel Insurance experience"
        head="Insurance that goes the extra mile"
        detail="Our cover goes with you, wherever you go so that you experience certainty."
      />
      {/* basic protection */}
      {basicData.map((item, index) => (
        <div key={index}>
          <BasicProtection item={item} />
        </div>
      ))}
      <br />
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

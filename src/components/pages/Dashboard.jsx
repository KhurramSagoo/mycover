import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Header from "../Header";

const Dashboard = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" flex max-w-[1200px] h-full min-h-screen flex-col w-full">
      <div
        className={` w-full px-5
         items-center justify-center fixed top-0 transition-all duration-300 ${
           isScrolled ? "backdrop-blur-md" : ""
         }`}
      >
        <Navbar />
      </div>
      <div className=" flex max-w-[1200px] h-full min-h-screen flex-col w-full mt-32">
        <Header />
      </div>
    </div>
  );
};

export default Dashboard;

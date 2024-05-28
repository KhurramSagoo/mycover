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
    <div className=" flex h-full min-h-screen flex-col w-auto">
      <div
        className={`  lg:px-20 md:px-10 px-5 
         items-center justify-center fixed top-0  lg:left-72 md:left-52 left-0 right-0 transition-all duration-300 ${
           isScrolled ? "backdrop-blur-md" : ""
         }`}
      >
        <Navbar />
      </div>
      <div className=" flex h-full min-h-screen flex-col mt-32 w-auto">
        <Header />
      </div>
    </div>
  );
};

export default Dashboard;

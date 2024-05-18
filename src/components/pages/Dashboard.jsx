import React, { useState, useEffect } from 'react';
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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-menuIcon mx-auto flex items-center justify-center flex-col w-full">
      <div
        className={`max-w-[1200px] w-full items-start justify-center fixed top-0 mx-auto transition-all duration-300 ${isScrolled ? 'backdrop-blur-md' : ''
          }`}
      >
        <Navbar />
      </div>
      <div className="max-w-[1200px] w-full items-start flex justify-center mt-24">
        <Header />
      </div>
    </div>
  );
};

export default Dashboard;

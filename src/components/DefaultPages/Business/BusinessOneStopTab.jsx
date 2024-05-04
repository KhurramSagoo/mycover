import React, { useState } from 'react';
import beneficiaries from '../../../assets/business/solutions-beneficiaries.png';
import claims from '../../../assets/business/solutions-claims.png';
import plans from '../../../assets/business/solutions-plans.png';
import wallet from '../../../assets/business/solution-wallet.png';

const BusinessOneStopTab = () => {
  const [activeTab, setActiveTab] = useState(0); // State to keep track of active tab

  // Tab data with corresponding images
  const tabData = [
    {
      head: "beneficiaries",
      title: 'A host of innovative and tailored plans for every aspect of your business',
      image: beneficiaries,
    },
    {
      head: "claims",
      title: 'An automated claims process so you focus on achieving business goals.',
      image: claims,
    },
    {
      head: "plans",
      title: 'Conveniently manage staff and their insurance plans',
      image: plans,
    },
    {
      head: "wallet",
      title: 'See your claims payout in real-time.',
      image: wallet,
    },
  ];

  return (
    <div className='w-full mx-auto flex items-center justify-center flex-col lg:flex-row md:px-16 sm:px-8 px-2'>
      <div className='w-full lg:w-1/2'>
        <header className='flex md:items-start md:justify-start items-center justify-center flex-col w-full  p-5'>
          <p className='text-xl text-green-500 font-medium'>One-stop Solution</p>
          <p className='text-5xl  font-extrabold text-wrap  text-secondary'>The one-stop insurance tool for your business</p>
          <p className='text-xl font-medium text-gray-500'>We empower you with data via a web interface for managing plans and staff needed to drive better business decisions.</p>
        </header>

        {/* tabs */}
        <div className='flex md:flex-col font-medium items-center justify-center p-5 w-full
        flex-row
      

        
        '>
          {tabData.map((tab, index) => (
            <div
              className={`shadow-md md:w-full border-l-4 border-green-500 my-2 py-3 cursor-pointer whitespace-nowrap ${activeTab === index ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                } sm:w-96 w-full`}
              key={index}
              onClick={() => setActiveTab(index)}
            >
              {tab.head}
            </div>
          ))}
        </div>
      </div>
      <div className='w-full lg:w-1/2  lg:mt-10 p-5 h-full min-h-[400px] ' >
        {/* Render tab image */}
        {tabData.map((tab, index) => (
          <div key={index} className={`${activeTab === index ? 'block' : 'hidden'} flex items-baseline justify-center flex-col`}>
            <li className=' text-primary text-xl font-normal px-2'>{tab.title}</li>
            <img src={tab.image} alt={tab.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessOneStopTab;

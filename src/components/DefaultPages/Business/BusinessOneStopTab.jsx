import React, { useState } from 'react';
import beneficiaries from '../../../assets/business/solutions-beneficiaries.png';
import claims from '../../../assets/business/solutions-claims.png';
import plans from '../../../assets/business/solutions-plans.png';
import wallet from '../../../assets/business/solution-wallet.png';

const BusinessOneStopTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  // Tab data with corresponding images
  const tabData = [
    {
      head: "Beneficiaries",
      title: 'A host of innovative and tailored plans for every aspect of your business',
      image: beneficiaries,
      borderColor: "#7A5AF8 "
    },
    {
      head: "Claims",
      title: 'An automated claims process so you focus on achieving business goals.',
      image: claims,
      borderColor: "#DD2690"

    },
    {
      head: "Plans",
      title: 'Conveniently manage staff and their insurance plans',
      image: plans,
      borderColor: "#2E90FA"

    },
    {
      head: "Wallet",
      title: 'See your claims payout in real-time.',
      image: wallet,
      borderColor: "#12B76A"

    },
  ];

  return (
    <div className='w-full mx-auto flex items-center justify-center flex-col lg:flex-row md:px-16 sm:px-8 px-4 my-10'>
      <div className='w-full lg:w-1/2 '>
        <header className='flex md:items-start md:justify-start items-start justify-center flex-col w-full'>
          <p className='md:text-xl text-sm mb-4 text-primary font-medium'>One-stop Solution</p>
          <p className='md:text-4xl text-xl mb-4 w-full lg:w-[500px]  font-extrabold text-wrap  text-secondary !leading-snug'>The one-stop insurance tool for your business</p>
          <p className='md:text-xl text-sm font-medium mb-4 text-black'>We empower you with data via a web interface for managing plans and staff needed to drive better business decisions.</p>
        </header>

        {/* tabs */}
        <div className='flex md:flex-col font-medium items-start justify-center  w-full rounded-lg flex-row bg-lime-0'>
          {tabData.map((tab, index) => (
            <div
              className={`shadow-md lg:w-[560px] w-full  mb-4 flex items-center lg:justify-start justify-center   pl-2 h-[70px] cursor-pointer whitespace-nowrap ${activeTab === index ? 'opacity-100 font-bold ' : 'opacity-50 hover:opacity-100'} sm:w-96 w-full`}
              key={index}
              onClick={() => setActiveTab(index)}
              style={{ borderLeftColor: tab.borderColor, borderLeftWidth: '4px' }}
            >
              {tab.head}
            </div>
          ))}
        </div>


      </div>
      <div className='w-full lg:w-1/2 md:px-8 sm:px-4 px-0 my-12 h-full min-h-[450px]  ' >
        {/* Render tab image */}
        {tabData.map((tab, index) => (
          <div key={index} className={`${activeTab === index ? 'block' : 'hidden'} flex items-baseline justify-center flex-col bg-[#f8fcfb] p-5 `}>
            <li className=' text-primary text-xl font-normal mb-6 py-6  px-2'>{tab.title}</li>
            <img loading="lazy" src={tab.image} alt={tab.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessOneStopTab;

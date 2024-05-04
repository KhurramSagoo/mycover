import React, { useState } from 'react';
import hmo from '../../../assets/business/smartBusinessTabs/e-hmo-id.png';
import self from '../../../assets/business/smartBusinessTabs/self-inspection.png';
import peace from '../../../assets/business/smartBusinessTabs/peace-of-mind.png';
import claim from '../../../assets/business/smartBusinessTabs/instant-claim.png';

const SmartBusinessTabs = () => {
    const [activeTab, setActiveTab] = useState(0); // State to keep track of active tab

    const tabData = [
        {
            title: "Digital HMO ID",
            detail: "Staff can access quality healthcare with an eHMO ID from anywhere.",
            image: hmo
        },
        {
            title: "Self inspection",
            detail: "Whether you need to protect your car, devices or office space, our self inspection process is easy and convenient.",
            image: self
        },
        {
            title: "Peace of Mind",
            detail: "Some things shouldn't take time and we believe insurance is one of them. We've taken out the worries involved with paperworks and lengthy insurance processes.",
            image: peace
        },
        {
            title: "Instant claim pay-outs",
            detail: "The sweet part. We care about your business, just like you do. That's why we ensure your business gets compensated swiftly, if anything ever goes wrong.",
            image: claim
        },
    ];

    return (
        <div className='py-[120px] px-4 bg-[#e6f4f2]'>
            <div className='my-4 px-4 flex items-center justify-center flex-col flex-wrap md:items-start'>
                <p className='my-4 text-secondary text-[22px] font-extrabold text-wrap text-center'>
                    Smart business insure with MyCovergenius
                </p>
                <p className='my-4 text-gray-500 text-sm font-bold text-wrap text-center'>
                    Our automated claims process allows you to focus on your KPIs while we take care of your business risks and staff.
                </p>
            </div>

            {/* buttons tabs */}
            <div className='flex flex-wrap justify-center'>
                {tabData.map((tab, index) => (
                    <button
                        key={index}
                        className={`md:text-secondary text-gray-400 rounded md:py-5 px-5 py-1 m-2 md:m-0 ${activeTab === index ? ' md:text-primary md:border-b-0  bg-primary md:bg-gray-100 md:border-2 border-gray-200  text-white' : ' bg-gray-200 border-2 md:bg-white'}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* card */}
            <div className='mt-5 p-5 flex md:flex-row flex-col  '>
                {activeTab !== null && (
                    <div className=' flex-col md:flex-row flex-wrap flex items-center justify-center p-6 '>
                        <div className=' flex items-center justify-center flex-col  w-full md:w-1/2 md:p-8'>

                            <p className=' text-[24px]
                         mb-6
                         font-bold'>{tabData[activeTab].title}</p>
                            <p className='text-sm text-center text-gray-500 mt-1 mb-4 font-medium'>{tabData[activeTab].detail}</p>
                        </div>
                        <img
                            className='w-[320px]'
                            src={tabData[activeTab].image} alt={tabData[activeTab].title} />
                        {/* <p className='text-lg font-semibold mt-3'>{tabData[activeTab].title}</p> */}

                    </div>
                )}
            </div>
        </div>
    );
};

export default SmartBusinessTabs;

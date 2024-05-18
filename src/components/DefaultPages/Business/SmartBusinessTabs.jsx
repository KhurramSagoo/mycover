import React, { useState } from 'react';
import hmo from '../../../assets/business/smartBusinessTabs/e-hmo-id.png';
import self from '../../../assets/business/smartBusinessTabs/self-inspection.png';
import peace from '../../../assets/business/smartBusinessTabs/peace-of-mind.png';
import claim from '../../../assets/business/smartBusinessTabs/instant-claim.png';

const SmartBusinessTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

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
        <div className='lg:py-[120px] md:py-[100px] sm:py-[80px] py-[50px]  px-4 bg-[#f8fcfb] w-full h-auto lg:px-16'>
            <div className='my-4 px-4 flex items-start justify-start flex-col flex-wrap md:items-start w-full md:w-1/2'>
                <p className='my-4 text-secondary md:text-2xl lg:text-4xl  text-[22px] font-extrabold text-wrap'>
                    Smart business insure with MyCovergenius
                </p>
                <p className='my-4 text-gray-500 text-sm md:text-xl  font-medium text-wrap '>
                    Our automated claims process allows you to focus on your KPIs while we take care of your business risks and staff.
                </p>
            </div>

            {/* buttons tabs */}
            <div className='flex justify-center items-center flex-nowrap w-full overflow-x-auto'>
                {tabData.map((tab, index) => (

                    <button
                        key={index}
                        className={`md:text-secondary text-xs font-medium lg:w-1/4  rounded lg:rounded-none text-gray-400 md:py-5 px-0 py-0 m-1 md:m-0 ${activeTab === index ? ' bg-primary  md:text-primary md:border-b-0  lg:bg-[#f8fcfb] md:bg-gray-100 md:border-2 border-gray-100  text-white' : ' bg-gray-200 border md:bg-white'}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* card */}
            <div className='lg:mt-12 mt-5 flex md:flex-row flex-col items-center bg-[#e6f4f2] w-full justify-center  '>
                {activeTab !== null && (
                    <div className=' flex-col md:flex-row sm:flex-col  flex-wrap flex md:items-end md:justify-center items-center justify-center w-full    md:h-[450px] h-auto '>
                        <div className=' flex items-center justify-center md:items-start md:justify-start flex-col md:flex-row flex-wrap  w-full md:w-3/5 md:p-28  '>

                            <p className=' text-[24px]
                         mb-6
                         font-bold'>{tabData[activeTab].title}</p>
                            <p className='text-sm md:text-base text-center text-gray-500 mt-1 mb-4 font-medium'>{tabData[activeTab].detail}</p>
                        </div>
                        <div className=' md:w-2/5 w-full md:px-12 flex items-center justify-center md:items-start md:justify-start'>

                            <img

                                loading="lazy"
                                className='w-[320px]'
                                src={tabData[activeTab].image} alt={tabData[activeTab].title} />

                        </div>

                    </div>
                )}
            </div>
        </div >
    );
};

export default SmartBusinessTabs;

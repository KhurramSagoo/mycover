import { icons } from 'lucide-react'
import React from 'react'
import { IoNewspaperOutline } from "react-icons/io5";
import { Ri24HoursFill } from "react-icons/ri";
const BusinessMiddlePart = () => {
    const cardData = [{
        title: "Affordable plans",
        detail: "Grow your business with insurance that fits your budget.",
        image: <IoNewspaperOutline />
    },
    {
        title: "Affordable plans",
        detail: "Grow your business with insurance that fits your budget.",
        image: <Ri24HoursFill />

    },
    {
        title: "Affordable plans",
        detail: "Grow your business with insurance that fits your budget.",
        image: <IoNewspaperOutline />

    },
    ]
    return (
        <div className=' flex items-center justify-center flex-col flex-wrap px-5 w-full lg:h-[500px] md:h-[600px] h-auto md:flex-row my-16 py-10'>

            <div className=' flex items-center justify-center flex-col p-5'>

                <p className=' text-xl sm:text-lg md:text-4xl lg:text-5xl  text-[#094063] font-extrabold text-wrap text-center '>
                    Built with your business in mind
                </p>
                <p className='md:text-xl  text-wrap text-center font-medium py-5 mx-auto lg:px-20 px-10 text-sm text-gray-600  '>
                    We enable SMEs, startups or large businesses protect finances and grow with a 360° insurance coverage.


                </p>
            </div>
            <div className=' flex items-center justify-center flex-wrap md:flex-row w-full flex-col lg:justify-around'>
                {
                    cardData.map((item, index) => (
                        <div key={index}
                            className=' w-72 flex items-center justify-center flex-col flex-wrap p-5'
                        >
                            <span className=' py-2'>{item.image}</span>
                            <p className=' py-2 text-2xl sm:text-xl  text-[#094063] font-bold text-center'>{item.title}</p>
                            <p className=' py-2 text-sm md:text-sm  text-gray-800 font-medium text-center'>{item.detail}</p>


                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default BusinessMiddlePart
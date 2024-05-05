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
        <div className=' flex items-center justify-center flex-col flex-wrap px-5 w-full lg:h-[400px] md:h-[500px] h-auto md:flex-row'>

            <div className=' flex items-center justify-center flex-col p-5'>

                <p className=' text-5xl text-[#094063] font-bold text-wrap text-center '>
                    Built with your business in mind
                </p>
                <p className='text-md  text-wrap text-center '>
                    We enable SMEs, startups or large businesses protect finances and grow with a 360° insurance coverage.


                </p>
            </div>
            <div className=' flex items-center justify-center flex-wrap sm:flex-row w-full lg:justify-around'>
                {
                    cardData.map((item, index) => (
                        <div key={index}
                            className=' w-72 flex items-center justify-center flex-col flex-wrap p-5'
                        >
                            <span>{item.image}</span>
                            <p className=' text-xl sm:text-xl  text-[#094063] font-bold text-center'>{item.title}</p>
                            <p className=' text-sm  text-gray-600 text-center'>{item.detail}</p>


                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default BusinessMiddlePart
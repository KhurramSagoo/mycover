import React from 'react'
import plan from './individualPaperless/affordable-plans.svg'
import setting from './individualPaperless/setting.svg'
import task from './individualPaperless/task.svg'
import dot from './individualPaperless/dotted-line.svg'


const IndividualPaperless = () => {
    const cardData = [
        {
            title: "Affordable plans",
            detail: "You need insurance. We make it affordable.",
            image: plan,
            dot: dot
        },
        {
            title: "Paper is boring. We are 100% Digital",
            detail: "Manage your insurance on your mobile device, anywhere.",
            image: setting,
            dot: dot
        },
        {
            title: "Fast insurance claims, simple!",
            detail: "Make Claims in 15 mins! Take a picture, estimate damage and get paid!",
            image: task,
            dot: null
        },
    ]
    return (
        <div className=' bg-[#f3faf8]  h-full lg:p-16 md:p-12 p-4'>

            {/* uppers section */}
            <div className=' py-4 sm:py-6 '>
                <p className=' md:text-[48px]  text-secondary text-2xl font-bold text-center'>Skip The Hassle & Paper Work!

                </p>
                <br />

                <p className=' md:text-[48px]  text-xl font-bold text-center text-primary'>This Is Easy Insurance!</p>

            </div>

            {/* lower section */}
            <div className='  mt-14 pt-12 flex items-start lg:justify-between  md:justify-between justify-start w-full flex-col sm:flex-row flex-wrap '>
                {
                    cardData.map((item, index) => (
                        <div key={index}
                            className=' flex items-start md:justify-start
                            justify-center
                            flex-col  p-5 md:p-2 lg:p-0
                            sm:w-[400px]
                            w-full
                            '
                        >
                            <div className=' flex items-end justify-center'>

                                <img src={item.image} alt={item.title} className=' w-16' />
                                <img src={item.dot && item.dot
                                }
                                    className='hidden md:flex '
                                    alt="" />
                            </div>
                            <div className=' mt-6'>

                                <p className=' 
                            text-medium font-bold text-secondary break-words '>{item.title}</p>
                                <p className=' text-medium mt-1 text-gray-950'>{item.detail}</p>
                            </div>


                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default IndividualPaperless
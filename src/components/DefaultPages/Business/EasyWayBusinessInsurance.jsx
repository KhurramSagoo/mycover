import React from 'react'
import web from '../../../assets/business/businessInsurance//web-portal.svg'
import mobile from '../../../assets/business/businessInsurance/mobile-app.svg'
import collage from '../../../assets/business/businessInsurance/collage.png'

const EasyWayBusinessInsurance = () => {
    return (
        <div className=' p-6 mt-5
        mx-2

        bg-businessInsuranceBg'>
            <upper className=' w-full text-primary flex items-start justify-center  flex-col
            mt-12 px-4
            '>
                <p>Insurance at your convenience</p>
                <p className=' text-white mb-4 text-[22px] font-bold'>Experience insurancethe easy way</p>
                <p className='text-white mb-4'>we have made insurance affordable, seamless and very accessible to everyone</p>


            </upper>

            <div className=' flex items-center justify-center flex-col lg:flex-row'>

                {/* left portion */}
                <div className=' w-full lg:w-1/2 flex items-start justify-center flex-col lg:items-start lg:px-6 lg:justify-start'>


                    <div className=' mb-6 flex items-center justify-center text-white'>
                        <div className=' flex items-center justify-center flex-wrap'>
                            <img className=' mr-6 w-16' src={web} alt="" />

                        </div>
                        <div className=' py-12'>
                            <p className=' mb-2text-sm font-bold'>For Businesses</p>
                            <detail className=" text-sm mb-2" > Conveniently manage all your insurance plans and staff via our web portal.</detail>
                            <p className=' mb-2 text-primary text-sm'>Get covered now</p>
                        </div>
                    </div>


                    <div className='mb-6 pb-6 flex items-center justify-center text-white'>
                        <div className=' flex items-center justify-center flex-wrap'>
                            <img className=' mr-6 w-16' src={mobile} alt="" />

                        </div>
                        <div>
                            <p className=' mb-2 text-sm font-bold'>For Staff</p>
                            <detail className=" text-sm mb-2" > Your staff also enjoys seamless coverage from our user-friendly mobile platform.</detail>
                            {/* <p className=' mb-2 text-primary text-sm'>Get covered now</p> */}
                        </div>

                    </div>
                </div>

                {/* right div collage */}
                <div className=' w-full lg:w-1/2  p-6'>
                    <img src={collage} alt="" />
                </div>
            </div>



        </div>
    )
}

export default EasyWayBusinessInsurance
import AccordionComponent from '@/components/AccordionComponent'
import { motion } from 'framer-motion';

const BusinessAccrodion = () => {
    return (
        <div className=' py-12 px-4 md:px-12 pb-6 mb-6 w-full  md:py-14 '>
            <div className=' flex items-center md:items-start justify-center  flex-col lg:flex-row
           
            '>

                {/* left side */}
                <div className=' mb-6 sm:pb-6 w-full flex items-center justify-center sm:items-start flex-col sm:px-8 '>
                    <p className=' text-2xl md:text-4xl text-secondary text-center font-extrabold mb-6 md:my-6'> What would you like to know</p>
                    <div className=' flex items-center  w-full justify-start md:my-6'>
                        <button className=' bg-primary py-3 px-9  text-white rounded-md '>Lets talk</button>
                        <p className=' text-md text-primary ml-5 '>Get Started</p>
                    </div>

                </div>

                {/* right side accordion */}
                <div className=' px-4 w-full ' >
                    <AccordionComponent />
                </div>
            </div>
        </div>
    )
}

export default BusinessAccrodion
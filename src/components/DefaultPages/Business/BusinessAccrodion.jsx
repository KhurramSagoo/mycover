import AccordionComponent from '@/components/AccordionComponent'
import { motion } from 'framer-motion';

const BusinessAccrodion = () => {
    const accordData = [
        {
            title: "Are You An Insurance Company?",
            detail: "No, MyCovergenius is Africa's first and leading insurtech platform. We are focused on expanding insurance adoption in Africa by creating unique and relevant products for anyone."
        },
        {
            title: "What Kinds Of Plans Can I Get?",
            detail: "Every plan to suit your business needs. Our plans cover health, vehicles, gadgets, office space, travel and logistics. You can also create unique plans with us, if you don't find what you need."
        },
        {
            title: "How Do I Get Covered?",
            detail: "It's as easy as having a conversation. Choose a plan that suits your business, tell us a bit about your business, complete payment and get an insurance certificate immediately. No paperwork is involved."
        },
        {
            title: "Can I Get A Unique Plan For My Business?",
            detail: "Certainly! That's what we do at mycovergenius. We create tailor-made insurance plans to suit your specific business needs."
        },
    ];
    return (
        <div className=' py-12 px-4 md:px-12 pb-6 mb-6 w-full  md:py-14 '>
            <div className=' flex items-center md:items-start justify-center  flex-col lg:flex-row
           
            '>

                {/* left side */}
                <div className=' mb-6 sm:pb-6 w-full flex items-center justify-center sm:items-start flex-col sm:px-8 '>
                    <p className=' text-2xl  md:text-5xl  text-secondary flex items-center justify-start font-extrabold mb-6 md:my-6'> What would you like to know
                        <br />
                    </p>
                    <span className=' text-primary  text-2xl md:text-5xl lg:text-5xl font-extrabold '>


                    </span>
                    <div className=' flex items-center  w-full justify-start md:my-6'>
                        <button className=' bg-primary py-3 px-9  text-white rounded-md '>Lets talk</button>
                        <p className=' text-md text-primary ml-5 cursor-pointer '>Get Started</p>
                    </div>

                </div>

                {/* right side accordion */}
                <div className=' px-4 w-full ' >
                    <AccordionComponent accordData={accordData} />
                </div>
            </div>
        </div>
    )
}

export default BusinessAccrodion
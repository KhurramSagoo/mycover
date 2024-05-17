import gadgets from '../../../assets/business/gadgets-circle.svg'
import deliver from '../../../assets/business/deliver-circle-1.svg'
import auto from '../../../assets/business/auto-circle-1.svg'
import health from '../../../assets/business/health-circle-1.svg'
import office from '../../../assets/business/office-content-1.svg'
import travel from '../../../assets/business/travel-circle-1.svg'
import { motion } from 'framer-motion';

const BusinessHero = () => {
    const images = [
        { src: gadgets, angle: 60 },
        { src: health, angle: 120 },
        { src: auto, angle: 180 },
        { src: travel, angle: 240 },
        { src: office, angle: 300 },
        { src: deliver, angle: 360 },
    ];

    const radius = 150;
    const centerX = 155;
    const centerY = 150;

    const getImagePosition = (angle) => {
        const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
        const y = centerY + radius * Math.sin((angle * Math.PI) / 180);
        return { x, y };
    };
    return (
        <div className=' flex items-center justify-center lg:flex-row flex-col lg:mt-8 md:mt-24 md:h-screen lg:px-16 md:px-5 sm:px-2 px-2'>

            {/* left portion start */}
            <div className=' lg:w-3/5  lg:h-[500px] flex md:items-center 
            w-full
            flex-col md:justify-center
            py-lg-5 pt-20
            items-start justify-start
            '>

                <p className='  font-extrabold text-[#094063] w-full md:text-6xl  sm:text-3xl text-4xl 
              md:mb-3 mb-0 px-5 mt-10
                py-4
                '>
                    Insurance made <span className='bg-gradient-to-t  from-yellow-400 from-50% via-10%   to-white to-60%'>
                        easy
                    </span>
                    {""} for your business
                </p>
                <p className=' text-gray-600  md:px-5 px-5 leading-8 text-lg font-medium '>
                    Set your business up for success with a seamless insurance platform with tools and products that help you recover from unplanned events quickly.
                </p>
                <button className=' bg-[#4fbfa3] px-6 py-3 my-5 rounded-md mx-5 flex items-start justify-start mr-auto text-white'>Get Covered</button>
            </div>
            {/* left end */}

            {/* right start */}
            <div className='lg:w-2/5 lg:h-[500px] flex items-center h-auto my-5 flex-col justify-center py-lg-5 w-full'>
                <div className='h-96 w-96 rounded-full  border-gray-500 flex justify-center items-center relative p-0'>
                    {images.map((image, index) => {
                        const { x, y } = getImagePosition(image.angle);
                        return (
                            <motion.div
                                key={index}
                                style={{ position: 'absolute', top: y, left: x, zIndex: 1 }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", duration: 0.5, delay: index * 0.1 }}
                            >
                                <img src={image.src} alt="" className=' w-16 cursor-pointer ' />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default BusinessHero
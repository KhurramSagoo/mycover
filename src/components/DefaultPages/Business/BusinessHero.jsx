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
        <div className=' flex items-center justify-center md:flex-row flex-col mt-5 bg-[#ffffff]'>
            <div className=' lg:w-[790px] lg:h-[500px] flex md:items-center 
            w-full
            flex-col md:justify-center
            py-lg-5 pt-20
            items-start justify-start
            '>

                <p className='  text-5xl font-extrabold text-[#094063] w-full
                lg-xs-13 mb-lg-4 mb-3 px-5 line
                py-5
                '>
                    Insurance made easy for your business
                </p>
                <p className=' text-gray-600  font-[500] text-md-20 text-md mb-4 pr-lg-5 mr-xl-4 md:text-xl px-5 py4 text-wrap md:py-5 py-1'>
                    Set your business up for success with a seamless insurance platform with tools and products that help you recover from unplanned events quickly.
                </p>
                <button className=' bg-[#4fbfa3] px-5 py-2 rounded-md mx-5 flex items-start justify-start mr-auto text-white'>Get Covered</button>
            </div>
            <div className='lg:w-[500px] lg:h-[500px] flex items-center h-auto my-5 flex-col justify-center py-lg-5 w-full'>
                <div className='h-96 w-96 rounded-full border border-gray-500 flex justify-center items-center relative p-0'>
                    {images.map((image, index) => {
                        const { x, y } = getImagePosition(image.angle);
                        return (
                            <motion.div
                                key={index}
                                style={{ position: 'absolute', top: y, left: x }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", duration: 0.5, delay: index * 0.1 }}
                            >
                                <img src={image.src} alt="" className=' w-20' />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            {/* <div className=' lg:w-[500px] lg:h-[500px] flex items-center h-auto py-5  flex-col justify-center
            py-lg-5
            '>
                <div className="h-72 w-72 rounded-full border-2 border-gray-500 flex justify-center items-center relative">
                    <motion.div>
                        <img src={gadgets} alt="" className="absolute top-0 left-0 transform rotate-60"  />
                    </motion.div>
                    <img src={health} alt="" className="absolute top-0 left-0 transform rotate-120" />
                    <img src={auto} alt="" className="absolute top-0 left-0 transform rotate-180" />
                    <img src={travel} alt="" className="absolute top-0 left-0 transform rotate-240" />
                    <img src={office} alt="" className="absolute top-0 left-0 transform rotate-300" />
                    <img src={deliver} alt="" className="absolute top-0 left-0 transform rotate-0" />
                </div>
            </div> */}
        </div>
    )
}

export default BusinessHero
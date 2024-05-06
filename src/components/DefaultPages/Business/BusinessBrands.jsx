import React, { useState } from 'react';
import chow from '../../../assets/businessBrands/chowdeck.svg'
import earnipay from '../../../assets/businessBrands/earnipay.svg'
import gigmile from '../../../assets/businessBrands/gigmile.svg'
import sunking from '../../../assets/businessBrands/sunking.svg'
import transtura from '../../../assets/businessBrands/transtura.svg'
import { motion, AnimatePresence } from "framer-motion";

const images = [chow, earnipay, gigmile, sunking, transtura];

const BusinessHero = () => {
    const [currentImages, setCurrentImages] = useState(images);



    return (
        <div>
            <p className=' flex items-start justify-start lg-mx-20 lg:px-20 mx-10 py-5 text-[1.5rem]
             font-medium
            '>Brands covered by us:</p>
            <AnimatePresence>
                <div className=' flex items-center justify-center flex-wrap mt-5 px-5  '>

                    {currentImages.map((item, index) => (
                        <motion.div
                            className=''
                            key={index}
                            initial={{ opacity: 1, y: 80 }}
                            animate={{ opacity: 1, y: 0, }}
                            transition={{
                                duration: 0.3, ease: "linear", repeatDelay: 2,
                                repeat: Infinity
                            }}
                        >
                            <img src={item} alt="" className=' lg:w-52 lg:mx-5 sm:w-36 w-24 mx-2 my-2' />
                        </motion.div>
                    ))}

                </div>
            </AnimatePresence >
        </div >
    );
};

export default BusinessHero;

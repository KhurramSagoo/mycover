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

    // const getRandomDelay = () => Math.random() * 5;


    return (
        <section className=' py-10 md:py-5 md:mb-10 mb-16'>
            <p className=' flex items-start justify-start lg:px-10 mx-10 py-5   lg:text-xl text-gray-600 
             font-bold
            '>Brands covered by us:</p>
            <AnimatePresence>
                <div className=' flex items-center justify-center mt-5 px-5  '>

                    {currentImages.map((item, index) => (
                        <motion.div
                            className=""
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0, }}
                            transition={{
                                duration: 0.4,
                                ease: "linear",
                                repeatDelay: 2,
                                repeat: Infinity,
                                bounce: 1,
                                // delay: getRandomDelay(), // Apply random delay here
                            }}
                        // exit={{ opacity: 0, }}
                        >
                            <img
                                loading="lazy"
                                src={item} alt="" className=' lg:w-52 lg:mx-5 sm:w-36 w-20 md:px-0 px-1 py-2' />
                        </motion.div>
                    ))}

                </div>
            </AnimatePresence >
        </section>
    );
};

export default BusinessHero;

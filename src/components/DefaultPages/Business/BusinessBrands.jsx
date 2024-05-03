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
            <p className=' flex items-start justify-start lg-mx-20 mx-10 py-5 text-[1.5rem]
             font-medium
            '>Brands covered by us:</p>
            <AnimatePresence>
                <div className=' flex items-center justify-center flex-wrap px-5'>

                    {currentImages.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            // exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 1 }}
                            c

                        >
                            <img src={item} alt="" className=' w-36 mx-5 my-5' />
                        </motion.div>


                    ))}

                </div>
            </AnimatePresence>
        </div>
    );
};

export default BusinessHero;

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
                <div className=' flex items-center justify-center flex-wrap mt-5 px-5'>

                    {currentImages.map((item, index) => (
                        // <motion.div
                        //     key={index}
                        //     initial={{ y: 100, opacity: 0 }}
                        //     animate={{ y: -100, opacity: 1 }}
                        //     exit={{ y: 100, opacity: 0 }}
                        //     transition={{ duration: 2, repeat: Infinity }}
                        // >

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                ease: [0, 0.71, 0.2, 1.01],
                                scale: {
                                    type: "spring",
                                    damping: 5,
                                    stiffness: 100,
                                    restDelta: 0.001
                                },
                                // repeat: Infinity
                            }}
                        >
                            <img src={item} alt="" className=' w-24 mx-2' />
                        </motion.div>

                        // </motion.div>

                    ))}

                </div>
            </AnimatePresence >
        </div >
    );
};

export default BusinessHero;

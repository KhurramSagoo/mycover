import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import arrow from './arrow-right-green.svg'

const IndividualCarousel = () => {
    const cardData = [
        {
            name: "John Doe",
            userName: "johndoe123",
            image: "",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            name: "Jane Smith",
            userName: "janesmith456",
            image: "",
            detail: "Pellentesque habitant morbi tristique senectus et netus et "
        },
        {
            name: "Alice Johnson",
            userName: "alicej",
            image: "",
            detail: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            name: "Bob Brown",
            userName: "bobbrown789",
            image: "",
            detail: "Ut enim ad minim veniam, quis nostrud exercitation ullamco t."
        },
        {
            name: "Emily Davis",
            userName: "emilydavis",
            image: "",
            detail: "Duis aute irure dolor in reprehenderit in voluptate velit esse ."
        },
        {
            name: "David Wilson",
            userName: "davidw123",
            image: "",
            detail: "Excepteur sint occaecat cupidatat non proident, sunt in culpa ."
        },
        {
            name: "Sarah Lee",
            userName: "sarahlee789",
            image: "",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ."
        },
        {
            name: "Michael Miller",
            userName: "michaelm",
            image: "",
            detail: "Pellentesque habitant morbi tristique senectus et netus et ."
        },
        {
            name: "Olivia Martinez",
            userName: "oliviam",
            image: "",
            detail: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem ."
        },
        {
            name: "James Brown",
            userName: "jamesb",
            image: "",
            detail: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit ."
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % cardData.length);
        }, 5000); // Change interval time as needed

        return () => clearInterval(interval);
    }, [currentIndex, cardData.length]);

    return (
        <div className='pt-16 px-4 my-8'>
            <div className='w-full text-center lg:py-12'>
                <span className='text-[50px] sm:text-[90px] md:text-[100px] lg:text-[140px] text-secondary font-bold'>See, It{' '}
                    <span className='text-primary ml-4'>Works!</span>
                </span>
            </div>
            <div className='flex justify-center items-center'>
                <AnimatePresence initial={false}>
                    {cardData.slice(currentIndex, currentIndex + (window.innerWidth > 768 ? 3 : 1)).map((card, index) => (
                        <motion.div
                            key={index}
                            className=' p-4 shadow-md rounded-lg w-[350px] mx-4 min-h-28 hover:border hover:border-primary bg-gray-100 
                            hover:bg-[#d6f0ea]
                 border-gray-400'
                            initial={{ x: 1000 }}
                            animate={{ x: 0 }}
                            exit={{ x: -1000 }}
                            transition={{ type: 'spring', stiffness: 80, damping: 10, duration: 1 }}
                        >
                            <div className=' flex items-center 
                            p-2
                            justify-start text-secondary'>
                                <div className=' w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-xl bg-blue-500'>
                                    {card.name.slice(0, 1).toUpperCase()}
                                </div>
                                <div className='ml-2'>


                                    <p className='  text-sm font-bold text-secondary'>{card.name}</p>
                                    <p className=' text-xs'>@ {card.userName}</p>
                                </div>

                            </div>
                            <p className='  text-sm'>Detail: {card.detail}</p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className=' flex items-center justify-center my-12 cursor-pointer'>
                <p className=' underline text-primary  text-xl cursor-pointer'>
                    Join The Genius Community!
                </p>
                <img src={arrow} alt="" className=' ml-2 hover:ml-3' />
            </div>
        </div>
    );
};

export default IndividualCarousel;

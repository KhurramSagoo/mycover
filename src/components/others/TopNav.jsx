import React, { useEffect, useState } from 'react';
import logo from '../../assets/navbar-logo.svg';
import arrowDown from '../../assets/arrow-down.svg';
import menu from '../../assets/hamburger.svg';
import menuClose from '../../assets/hamburger-close.svg';
import DrawerSheet from '../DrawerSheet';

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';



import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Button = ({ children, active, onClick }) => {
    return (
        <motion.button
            onClick={onClick}
            className={`focus:outline-none px-4 h-9 py-2 rounded-full ${active ? 'bg-[#7a5af8]' : 'bg-[#e6e4f9]'}
        text-gray-800 transition-colors duration-300`}
        >
            {children}
        </motion.button>
    );
};




const TopNav = () => {
    const navigate = useNavigate()
    const [activeButton, setActiveButton] = useState('Business');
    const [isOpen, setIsOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);



    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (activeButton === 'Individual') {
            navigate('/individual');
        }
    }, [activeButton, navigate]);


    return (
        <>

            <div className='w-full lg:px-20 flex items-center px-5 justify-between my-0 md:h-[80px] h-[50px] shadow-md ' style={{ backdropFilter: `blur(${scrollY > 0 ? 10 : 0}px)` }}>
                <div className='flex items-center justify-center'>
                    <Sheet>
                        <SheetTrigger>
                            <img src={isOpen ? menuClose : menu} alt="" className='md:hidden' onClick={toggleMenu} />
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle><div className='flex items-center justify-center mx-1'>
                                    <p>Plans</p>
                                    <span className='ml-2'><img src={arrowDown} alt="" /> </span>
                                </div></SheetTitle>
                                <SheetDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                    <img src={logo} alt="" />
                </div>
                <div className={`md:flex hidden items-center justify-center ${isOpen ? 'flex' : 'hidden'}`}>
                    <div className='flex items-center justify-center mx-1'>
                        <p>Plans</p>
                        <span className='ml-2'><img src={arrowDown} alt="" /> </span>
                    </div>
                    <div className='flex items-center justify-center mx-1'>
                        <p>API</p>
                        {/* <span className=' ml-2'><img src={arrowDown} alt="" /> </span> */}
                    </div>
                    {isOpen && <DrawerSheet onClose={toggleMenu} />}
                </div>
                <div>
                    <button className='px-5 py-2 rounded-xl bg-[#4fbfa3] text-white border cursor-pointer'
                        onClick={() => navigate("/protected/dashboard")}
                    >Dashboard</button>
                </div>

            </div>
            <div className='flex ml-20 mt-8 items-center justify-center rounded-full bg-[#e6e4f9] w-[180px] '>
                <Button active={activeButton === 'Business'}
                    onClick={() => {
                        setActiveButton('Business');
                        navigate('/');
                    }}
                >
                    Business
                </Button>
                <Button active={activeButton === 'Individual'}
                    onClick={() => {
                        setActiveButton('Individual');
                        navigate('/individual');
                    }}
                >
                    Individual
                </Button>
            </div>
        </>
    )
}

export default TopNav;

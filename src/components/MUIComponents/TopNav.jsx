import React, { useState } from 'react';
import logo from '../../assets/navbar-logo.svg';
import arrowDown from '../../assets/arrow-down.svg';
import menu from '../../assets/hamburger.svg';
import menuClose from '../../assets/hamburger-close.svg';
import DrawerSheet from '../DrawerSheet';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const TopNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='w-full flex items-center px-5 justify-between my-0 md:h-[80px] h-[50px] shadow-md bg-white'>
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
                {isOpen && <DrawerSheet onClose={toggleMenu} />} {/* Render DrawerSheet when isOpen is true */}

            </div>
            <div>
                <button className='px-5 py-2 rounded-xl bg-[#4fbfa3] text-white border cursor-pointer'>Dashboard</button>
            </div>
        </div>
    )
}

export default TopNav;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import arrow from "./arrow-right-green.svg";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const IndividualCarousel = () => {
    const cardData = [
        {
            name: "John Doe",
            userName: "johndoe123",
            image: "",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            name: "Jane Smith",
            userName: "janesmith456",
            image: "",
            detail: "Pellentesque habitant morbi tristique senectus et netus et ",
        },
        {
            name: "Alice Johnson",
            userName: "alicej",
            image: "",
            detail: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            name: "Bob Brown",
            userName: "bobbrown789",
            image: "",
            detail: "Ut enim ad minim veniam, quis nostrud exercitation ullamco t.",
        },
        {
            name: "Emily Davis",
            userName: "emilydavis",
            image: "",
            detail: "Duis aute irure dolor in reprehenderit in voluptate velit esse .",
        },
        {
            name: "David Wilson",
            userName: "davidw123",
            image: "",
            detail: "Excepteur sint occaecat cupidatat non proident, sunt in culpa .",
        },
        {
            name: "Sarah Lee",
            userName: "sarahlee789",
            image: "",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do .",
        },
        {
            name: "Michael Miller",
            userName: "michaelm",
            image: "",
            detail: "Pellentesque habitant morbi tristique senectus et netus et .",
        },
        {
            name: "Olivia Martinez",
            userName: "oliviam",
            image: "",
            detail: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem .",
        },
        {
            name: "James Brown",
            userName: "jamesb",
            image: "",
            detail: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit .",
        },
    ];

    return (
        <div className="pt-16 px-4 my-8 h-[500px] flex items-center justify-center  flex-col md:h-screen">
            <div className="w-full text-center lg:py-12 md:py-12 sm:py-8 py-4">
                <span className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl  text-secondary font-bold">
                    See, It <span className="text-primary ml-4">Works!</span>
                </span>
            </div>
            <div className="w-full">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                        indicators: false,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                >
                    <CarouselContent>
                        {cardData.map((card, index) => (
                            <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2  basis-full">
                                <div
                                    className="p-4 shadow-md rounded-lg w-[350px] mx-4 min-h-52 hover:border hover:border-primary bg-gray-100 flex items-start justify-center flex-col  hover:bg-[#d6f0ea] border-gray-400"
                                >
                                    <div
                                        className="flex items-center p-2 justify-start text-secondary"
                                    >
                                        <div className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-xl bg-blue-500">
                                            {card.name.slice(0, 1).toUpperCase()}
                                        </div>
                                        <div className="ml-2">
                                            <p className="text-sm font-bold text-secondary">
                                                {card.name}
                                            </p>
                                            <p className="text-xs">@ {card.userName}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm">Detail: {card.detail}</p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* <CarouselPrevious /> */}
                    {/* <CarouselNext /> */}
                </Carousel>
            </div>

            <div className="flex items-center justify-center my-12 cursor-pointer">
                <p className="underline text-primary text-xl cursor-pointer">
                    Join The Genius Community!
                </p>
                <img src={arrow} alt="" className="ml-2 hover:ml-3" />
            </div>
        </div>
    );
};

export default IndividualCarousel;

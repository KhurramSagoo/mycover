import { ArrowLeft } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/login/active-more.svg';
import { RiHeartPulseFill } from "react-icons/ri";
import React from 'react'

const tabData = [
    {
        head: "Health",
        cardData: [
            {
                title: "Flexi health Care Mini",
                detail: "This plan provides you with instant access to high-quality healthcare.",
                icon: RiHeartPulseFill
            },
            {
                title: "Flexi health Care",
                detail: "This plan provides you with instant access to high-quality healthcare.",
                icon: RiHeartPulseFill
            }
        ]
    },
    {
        head: "Auto",
        cardData: [
            {
                title: "Flexi auto Care Mini",
                detail: "This plan provides you with instant access to high-quality healthcare.",
                icon: RiHeartPulseFill
            },
            {
                title: "Flexi auto Care",
                detail: "This plan provides you with instant access to high-quality healthcare.",
                icon: RiHeartPulseFill
            }
        ]
    },
    {
        head: "Travel",
        cardData: [
            {
                title: "Flexi travel Care Mini",
                detail: "This plan provides you with instant access to high-quality healthcare.",
                icon: RiHeartPulseFill
            },
            {
                title: "Flexi travel Care",
                detail: "This plan provides you with instant access to high-quality healthcare.",
                icon: RiHeartPulseFill
            }
        ]
    }
];

const OnBoarding = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedCard, setSelectedCard] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleCardSelect = (index, cardIndex, head, title) => {
        setSelectedCard({
            head, index, title, cardIndex
        });
    };

    const handleGetCovered = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/boarding-next");
        }, 2000);
    };

    return (
        <div className="p-5 h-screen">
            <div className='bg-[#e6f4f2] flex items-center justify-center w-28 rounded-xl px-2 py-2 h32 text-gray-600 cursor-pointer transition-opacity duration-500 ease-in-out opacity-80 hover:opacity-100' onClick={() => navigate(-1)}>
                <ArrowLeft /> <button className='text-sm text-gray-600 font-medium'>Go Back</button>
            </div>
            <div className="flex items-center justify-center w-full">
                <img src={logo} alt="Logo" />
            </div>
            <br />
            <div className="flex items-center justify-center w-full flex-col py-10">
                <p className="text-3xl font-semibold text-secondary">Let’s Get You <span className="text-primary">Covered!</span> 🥳</p>
                <p className="text-gray-500">Heavily insured zone</p>
            </div>
            <div className='flex items-center justify-center w-full mx-auto mt-5'>
                {tabData.map((tab, index) => (
                    <button
                        key={index}
                        className={`border w-52 md:text-md text-[16px] font-medium border-b-2 text-gray-500 px-5 py-1 ${activeTab === index ? 'text-white transition-all duration-700 ease-in-out border-primary bg-primary border-b-0' : ''}`}
                        onClick={() => {
                            setActiveTab(index);
                            setSelectedCard({});
                        }}
                    >
                        <span className={activeTab === index ? 'px-5 py-1 rounded-lg' : ''}>{tab.head}</span>
                    </button>
                ))}
            </div>
            <div className='mt-5 flex items-center justify-center md:flex-col w-full flex-row flex-wrap'>
                {tabData.map((tab, index) => (
                    <div key={index} className={`flex w-full items-center lg:justify-around justify-center flex-col px-12 md:flex-row ${activeTab === index ? '' : 'hidden'}`}>
                        {tab.cardData.map((card, cardIndex) => (
                            <div
                                key={cardIndex}
                                className={`${selectedCard.cardIndex === cardIndex && selectedCard.index === index ? 'text-gray-500 border-primary ' : 'text-gray-500'} transition cursor-pointer duration-700 ease-in-out shadow flex items-start justify-start flex-col border border-gray-200 rounded-lg w-full md:w-[260px] md:h-[140px] flex-wrap h-auto p-3 m-2 sm:m-5`}
                                onClick={() => handleCardSelect(index, cardIndex, tab.head, card.title)}
                            >
                                <div className='flex items-start justify-center my-2 flex-col w-full'>
                                    <div className='flex justify-start w-full my-2'>
                                        <input
                                            type="radio"
                                            name={`cardSelection-${index}`}
                                            checked={selectedCard.cardIndex === cardIndex && selectedCard.index === index}
                                            onChange={() => handleCardSelect(index, cardIndex, tab.head, card.title)}
                                            className="form-radio text-blue-500"
                                        />
                                    </div>
                                    <div className="flex items-center justify-center gap-2">
                                        <div className={`${selectedCard.cardIndex === cardIndex && selectedCard.index === index ? 'text-blue-500' : ''}`}>
                                            {React.createElement(card.icon)}
                                        </div>
                                        <p className='text-base font-medium'>{card.title}</p>
                                    </div>
                                    <p className='text-xs break-words'>{card.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center py-10">
                <button className="w-full py-5 bg-primary text-white rounded-lg max-w-[500px]" onClick={handleGetCovered}>
                    {loading ? "Loading... please wait" : "Get Covered"}
                </button>
            </div>
        </div>
    );
};

export default OnBoarding;

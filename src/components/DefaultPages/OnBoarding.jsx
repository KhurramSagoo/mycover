import { ArrowLeft } from "@mui/icons-material"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"

const tabData = [
    {
        head: "Health",
        cardData: [
            {
                title: "Flexi Care Mini",
                detail: "This plan provides you with instant access to high-quality healthcare.",
            },
            {
                title: "Flexi Care",
                detail: "This plan provides you with instant access to high-quality healthcare.",
            },
        ]
    },
    {
        head: "Auto",
        cardData: [
            {
                title: "Flexi Care Mini",
                detail: "This plan provides you with instant access to high-quality healthcare.",
            },
            {
                title: "Flexi Care",
                detail: "This plan provides you with instant access to high-quality healthcare.",
            },
        ]
    },
    {
        head: "Travel",
        cardData: [
            {
                title: "Flexi Care Mini",
                detail: "This plan provides you with instant access to high-quality healthcare.",
            },
            {
                title: "Flexi Care",
                detail: "This plan provides you with instant access to high-quality healthcare.",
            },
        ]
    },
]

const OnBoarding = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [activeTab, setActiveTab] = useState(0);
    const [selectedCards, setSelectedCards] = useState(0);
    const navigate = useNavigate();

    const handleBack = () => {
        console.log("clicked")
    }

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleCardSelect = (head, title, index, cardIndex) => {
        setSelectedCards({
            head, title, cardIndex, index
        });
    }

    return (
        <div className="p-5 h-screen">
            <div className='bg-[#e6f4f2] flex items-center justify-center w-28 rounded-xl px-2 py-2 h32 text-gray-600 cursor-pointer' onClick={() => navigate(-1)}>
                <ArrowLeft /> <button className='text-sm text-gray-600 font-medium'>Go Back</button>
            </div>
            <div>
                <img src="" alt="" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex items-center justify-center w-full mx-auto'>
                    {tabData.map((tab, index) => (
                        <button
                            key={index}
                            className={`bg-white w-40 md:text-sm text-[12px] font-medium border-b-2 text-gray-500 px-5 py-1 ${activeTab === index ? 'bg-[#ecfdf3] text-gray-600' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            <span className={activeTab === index ? 'text-blue-500' : ''}>{tab.head}</span>
                        </button>
                    ))}
                </div>
                <div className='mt-5'>
                    {tabData.map((tab, index) => (
                        <div key={index} className={`flex items-center lg:justify-around justify-center flex-col sm:flex-row ${activeTab === index ? '' : 'hidden'}`}>
                            {tab.cardData.map((card, cardIndex) => (
                                <div
                                    key={cardIndex}
                                    className={`transition duration-500 ease-in-out shadow flex items-start justify-start flex-col border border-gray-200 rounded-lg w-[280px] md:w-[380px] h-auto p-6 m-2 sm:m-5 hover:shadow-lg ${selectedCards[tab.head] === card.title ? 'bg-blue-200' : ''}`}
                                    onClick={() => handleCardSelect(index, cardIndex, tab.head, card.title)}
                                >
                                    <input
                                        type="radio"
                                        name={tab.head}
                                        value={card.title}
                                        checked={selectedCards[tab.head] === card.title}
                                        {...register(`${tab.head}`)}
                                    />
                                    <div className='flex items-start justify-center my-2 flex-col'>
                                        <p className='text-base text-secondary font-bold'>{card.title}</p>
                                        <p className='text-sm text-secondary font-normal'>{card.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                {/* <button type="submit">Submit</button> */}
            </form>
        </div>
    )
}

export default OnBoarding

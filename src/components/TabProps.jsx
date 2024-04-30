import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const TabProps = ({ tabs, images }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].value);

    const handleTabClick = (value) => {
        setActiveTab(value);
    };

    return (
        <div className="w-full flex items-center justify-center">
            <Tabs defaultValue={tabs[0].value} className="w-[500px]">
                <TabsList className="flex items-center justify-center border-b-4">
                    {tabs.map((tab) => (
                        <TabsTrigger
                            key={tab.value}
                            value={tab.value}
                            className={`sm:w-full text-gray-500 w-22  font-medium p-4 mx-2 ${activeTab === tab.value ? "border-b-4 border-green-600" : ""
                                }`}
                            onClick={() => handleTabClick(tab.value)}
                        >
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <div className=" h-36">

                </div>
                {tabs.map((tab) => (
                    <TabsContent
                        key={tab.value}
                        value={tab.value}
                        className="flex items-center justify-center flex-col px-12"
                    >
                        <div className="flex items-center justify-center">
                            {

                                images &&
                                <div className=" w-36 h-36 shadow-md rounded-xl flex items-center justify-center flex-col">

                                    <img src={images[tab.value]} alt={tab.label} className="w-24 h-24" />
                                    {tab.value}
                                </div>
                            }
                        </div>
                        <span className="text-gray-500 font-medium text-center">
                            {tab.title}
                        </span>
                        <span className="text-gray-500 text-wrap text-center">
                            {tab.detail}
                        </span>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
};

export default TabProps;

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const CoverTabs = () => {
  const [activeTab, setActiveTab] = useState("account");

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="w-full flex items-center justify-center">
      <Tabs defaultValue="account" className="w-[500px]">
        <TabsList className="flex items-center justify-center border-b-4">
          <TabsTrigger
            value="account"
            className={`sm:w-36 w-22 p-4 mx-2 ${activeTab === "account" ? " border-b-4 border-green-600" : ""}`}
            onClick={() => handleTabClick("account")}
          >
            Account
          </TabsTrigger>
          <TabsTrigger
            value="pending"
            className={`sm:w-36 w-22 p-4 mx-2 ${activeTab === "pending" ? " border-b-4 border-green-600" : ""}`}
            onClick={() => handleTabClick("pending")}
          >
            Pending
          </TabsTrigger>
          <TabsTrigger
            value="expired"
            className={`sm:w-36 w-22 p-4 mx-2 ${activeTab === "expired" ? " border-b-4 border-green-600" : ""}`}
            onClick={() => handleTabClick("expired")}
          >
            Expired
          </TabsTrigger>
        </TabsList>
        <div className="h-36">

        </div>

        <TabsContent
          value="account"
          className="flex items-center justify-center flex-col px-12"
        >
          <span className="text-gray-500 font-medium text-center">
            Active plans Empty
          </span>
          <span className="text-gray-500 text-wrap text-center">
            You don't have any active plans, go to Plans page to buy new plan
          </span>
        </TabsContent>

        <TabsContent
          value="pending"
          className="flex items-center justify-center flex-col px-12"
        >
          <span className="text-gray-500 font-medium">
            Pending plans Empty
          </span>
          <span className="text-gray-500 text-wrap text-center">
            There is no pending plans to be activated at the moment.
          </span>
        </TabsContent>
        <TabsContent
          value="expired"
          className="flex items-center justify-center flex-col px-12"
        >
          <span className="text-gray-500 font-medium">
            Expired plans Empty
          </span>
          <span className="text-gray-500 text-wrap text-center">
            There is no expired plans to be renewed at the moment.
          </span>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CoverTabs;

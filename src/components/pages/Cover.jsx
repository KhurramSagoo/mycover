import TabProps from "../TabProps";
import TopDashboardNav from "../utils/TopDashboardNav";
const Cover = () => {
  const tabs = [
    {
      label: "Account",
      value: "account",
      title: "Active plans Empty",
      detail: "You don't have any active plans, go to Plans page to buy new plan",
    },
    {
      label: "Pending",
      value: "pending",
      title: "Pending plans Empty",
      detail: "There is no pending plans to be activated at the moment",
    },
    {
      label: "Expired",
      value: "expired",
      title: "Expired plans Empty",
      detail: "There is no expired plans to be renewed at the moment.",
    },
  ];
  return (
    <div className=" max-w-[1200px]  bg-menuIcon h-screen">
      <TopDashboardNav />
      <div
        className=" w-full flex items-center justify-start
       mt-5
       px-12 max-w-[900px] mx-auto"
      >
        <span className=" text-xl font-medium text-blue-900">My Cover</span>
      </div>
      <div>
        <TabProps tabs={tabs} />
      </div>
    </div>
  );
};

export default Cover;

import TabProps from "../TabProps";
import TopDashboardNav from "../utils/TopDashboardNav";
const Cover = () => {
  const tabs = [
    {
      label: "Account",
      value: "account",
      title: "Active plans Empty",
      detail:
        "You don't have any active plans, go to Plans page to buy new plan",
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
    <div className=" flex max-w-[1200px] h-full min-h-screen flex-col w-full">
      <TopDashboardNav />
      <div
        className=" w-full flex items-center justify-start
       mt-5
       px-12 "
      >
        <span className=" text-xl font-medium text-secondary">My Cover</span>
      </div>
      <div className=" w-full">
        <TabProps tabs={tabs} />
      </div>
    </div>
  );
};

export default Cover;

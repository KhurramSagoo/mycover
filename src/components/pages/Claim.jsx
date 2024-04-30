import TabProps from "../TabProps";
import TopDashboardNav from "../utils/TopDashboardNav";

const Claim = () => {
  const tabs = [
    {
      label: "Pending",
      value: "pending",
      title: "There is no pending Claims At the Moment",
      detail: "",
    },
    {
      label: "Approved",
      value: "approved",
      title: "",
      detail: "",
    },
    {
      label: "Settled",
      value: "settled",
      title: "",
      detail: "",
    },
    {
      label: "Rejected",
      value: "rejected",
      title: "",
      detail: "",
    },
  ];

  return (
    <div className=" max-w-[1200px]  bg-menuIcon h-screen">
      <TopDashboardNav />
      <div
        className=" w-full flex items-center justify-start
       mt-5
       px-12 max-w-[1050px] mx-auto"
      >
        <span className=" text-xl font-medium text-blue-900">Claim</span>
      </div>
      <div>
        <TabProps tabs={tabs} />
      </div>
    </div>
  );
};

export default Claim;

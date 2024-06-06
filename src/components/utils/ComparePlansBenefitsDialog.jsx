import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ComparePlansBenefitsDialog = ({ note }) => {
  const careBtnData = [
    {
      name: "Flexi Care Mini",
      amount: "₦ 2,000",
      btn: "Get Covered",
    },
    {
      name: "Flexi Care ",
      amount: "₦ 3,500",
      btn: "Get Covered",
    },
    {
      name: "ZenCare",
      amount: "₦ 7,000",
      btn: "Get Covered",
    },
    {
      name: "ZenCare Plus",
      amount: "₦ 9,000",
      btn: "Get Covered",
    },
    {
      name: "ZenCare Prime",
      amount: "₦ 18,000",
      btn: "Get Covered",
    },
  ];

  return (
    <Dialog className="w-full">
      <DialogTrigger>
        <div className="flex items-center justify-center text-loginBg gap-5 border rounded-md border-loginBg w-72 py-3 px-5 cursor-pointer">
          <img src={note} alt="" />
          <p>Compare Plans Benefits</p>
        </div>
      </DialogTrigger>
      <DialogContent className="w-full max-w-full">
        <DialogHeader>
          <DialogDescription className="w-full">
            <div className="flex items-center justify-center flex-col h-full w-full overscroll-y-auto overflow-x-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-start justify-start flex-col text-gray-600 font-medium px-5">
                  <p>Monthly Price</p>
                  <p>
                    This is a subscription-based plan and would be renewed
                    monthly, automatically
                  </p>
                </div>

                <div className="flex items-start justify-start gap-5">
                  {careBtnData.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center flex-col gap-2"
                    >
                      <p className="  text-base font-semibold text-primary">
                        {item.name}
                      </p>
                      <p className=" text-xl font-bold  ">{item.amount}</p>
                      <p className=" rounded-md px-7 py-3 bg-primary text-white text-base">
                        {item.btn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ComparePlansBenefitsDialog;

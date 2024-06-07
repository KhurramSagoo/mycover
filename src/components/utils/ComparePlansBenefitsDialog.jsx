import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ComparePlansBenefitsDialog = ({ note }) => {
  const navigate = useNavigate();

  const careBtnData = [
    {
      name: "Flexi Care Mini",
      amount: "₦ 2,000",
      btn: "Get Covered",
    },
    {
      name: "Flexi Care",
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

  const handleButtonClick = (name) => {
    let productParam;
    let productId;

    switch (name) {
      case "Flexi Care Mini":
        productParam = "miniflexicare";
        productId = 20;
        break;
      case "Flexi Care":
        productParam = "flexicare";
        productId = 21;
        break;
      case "ZenCare":
        productParam = "zencare";
        productId = 22;
        break;
      case "ZenCare Plus":
        productParam = "zencareplus";
        productId = 23;
        break;
      case "ZenCare Prime":
        productParam = "zencareprime";
        productId = 24;
        break;
      default:
        productParam = "defaultparam";
        productId = 0;
    }

    const url = `/business-boarding-next?p=${productParam}&product_id=${productId}`;
    // navigate(url);
    window.open(url, "_blank");
  };

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
                      <p className="text-base font-semibold text-primary">
                        {item.name}
                      </p>
                      <p className="text-xl font-bold">{item.amount}</p>
                      <button
                        className="rounded-md px-7 py-3 bg-primary text-white text-base"
                        onClick={() => handleButtonClick(item.name)}
                      >
                        {item.btn}
                      </button>
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

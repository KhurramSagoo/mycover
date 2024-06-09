import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DataContext } from "../db/DataProvider";

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

  // const handleButtonClick = (name) => {
  //   const selectedPlan = careBtnData.find((plan) => plan.name === name);

  //   const { id } = selectedPlan;
  //   // const productParam = planName.toLowerCase().replace(/\s+/g, "");

  //   setIdData(id);
  //   // localStorage.setItem("productParam", productParam);

  //   // Use setTimeout to ensure state is set before navigation
  //   setTimeout(() => {
  //     // const url = `/business-boarding-next?p=${productParam}&product_id=${id}`;
  //     // window.open(url, "_blank");
  //   });
  // };

  const handleButtonClick = (name) => {
    // const selectedPlan = careBtnData.find((plan) => plan.name === name);
    // c productParam = name.toLowerCase().replace(/\s+/g, "");
    let productId = 0;
    let productParam;
    // let productId;

    switch (name) {
      case "Flexi Care Mini":
        productParam = "flexicaremini";
        productId = 0;
        break;
      case "Flexi Care":
        productParam = "flexicare";
        productId = 1;
        break;
      case "ZenCare":
        productParam = "zencare";
        productId = 2;
        break;
      case "ZenCare Plus":
        productParam = "zencareplus";
        productId = 3;
        break;
      case "ZenCare Prime":
        productParam = "zencareprime";
        productId = 4;
        break;
    }

    localStorage.setItem("productParam", JSON.stringify(productParam));

    localStorage.setItem("productId", JSON.stringify(productId));
    const url = `/business-boarding-next?p=${productParam}&product_id=${productId}`;
    // navigate(url);
    window.open(url, "_blank");
  };

  return (
    <Dialog className="w-full overflow-x-auto max-w-full">
      <DialogTrigger>
        <div className="flex items-center justify-center text-loginBg gap-5 border rounded-md border-loginBg w-72 py-3 px-5 cursor-pointer">
          <img src={note} alt="" />
          <p>Compare Plans Benefits</p>
        </div>
      </DialogTrigger>
      <DialogContent className="w-full max-w-full overflow-x-auto ">
        <DialogHeader>
          <DialogDescription className="flex items-center justify-center h-full  ">
            <div className="flex items-start justify-start flex-col text-gray-600 font-medium px-5 ">
              <p>Monthly Price</p>
              <p>
                This is a subscription-based plan and would be renewed monthly,
                automatically
              </p>
            </div>

            {/* buttons list */}
            <div className="flex items-start justify-start gap-5   w-full">
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
                    className="rounded-md lg:px-7 py-2 w-36  bg-primary text-white text-base"
                    onClick={() => handleButtonClick(item.name)}
                  >
                    {item.btn}
                  </button>
                </div>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ComparePlansBenefitsDialog;

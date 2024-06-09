import React, { useEffect, useState } from "react";
import logo from "../../assets/navbar-logo.svg";
import arrowDown from "../../assets/arrow-down.svg";
import menu from "../../assets/hamburger.svg";
import menuClose from "../../assets/hamburger-close.svg";
import DrawerSheet from "../DrawerSheet";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// icons
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EastIcon from "@mui/icons-material/East";
import PersonIcon from "@mui/icons-material/Person";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Btn from "../utils/Btn";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

const TopNav = () => {
  const btnsData = [
    { title: "Business", route: "/" },
    { title: "Individual", route: "/individual" },
  ];
  // console.log(typeof btns);
  const [innerW, setInnerW] = useState(window.innerWidth);
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("Business");
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const [showDialog, setShowDialog] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const innderWidthHandle = () => {
    setInterval(() => {
      setInnerW(window.innerWidth);
    }, 300);
  };

  useEffect(() => {
    const handleResize = () => {
      setInnerW(window.innerWidth);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const loginHandle = () => {
    setShowDialog(true);
  };

  return (
    <>
      <div
        className=" w-full lg:px-12 flex items-center sm:px-5 px-5 justify-between my-0 md:h-[80px] h-[70px] shadow-md  "
        style={{
          backdropFilter: `blur(${scrollY > 0 ? 5 : 0}px)`,
        }}
      >
        <div className="flex items-center justify-center">
          <Sheet>
            <SheetTrigger>
              <img
                src={isOpen ? menuClose : menu}
                alt=""
                className="md:hidden"
                onClick={toggleMenu}
              />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center justify-center mx-1">
                    <p>Plans</p>
                    <span className="ml-2">
                      <img src={arrowDown} alt="" />{" "}
                    </span>
                  </div>
                </SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <img
            loading="lazy"
            src={logo}
            alt=""
            className=" md:w-36
                    w-24
                    cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div
          className={`md:flex hidden items-center justify-center ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <HoverCard>
            <HoverCardTrigger>
              <div className="flex items-center justify-center mx-1">
                <p>Plans</p>
                <span className="ml-2">
                  <img src={arrowDown} alt="" />{" "}
                </span>
              </div>
            </HoverCardTrigger>
            <HoverCardContent>
              The React Framework – created and maintained by @vercel.
            </HoverCardContent>
          </HoverCard>

          <div className="flex items-center justify-center mx-1">
            <p>API</p>
            {/* <span className=' ml-2'><img src={arrowDown} alt="" /> </span> */}
          </div>
          {isOpen && <DrawerSheet onClose={toggleMenu} />}
        </div>
        <div className=" flex items-center justify-center">
          <Dialog>
            <DialogTrigger>
              <button
                className="md:px-5 md:text-sm px-3 text-xs py-2 border-none rounded-full mx-2 font-medium text-[#439687] cursor-pointer"
                onClick={loginHandle}
              >
                Login
              </button>
              {/* <Btn title="Login" handle={loginHandle} /> */}
            </DialogTrigger>
            <DialogContent className=" transition-all ease-in-out">
              <DialogHeader>
                <DialogTitle>
                  <div className=" text-center flex flex-col items-center justify-center">
                    <p className=" text-primary my-3 text-xl font-bold ">
                      Log in to an Account
                    </p>
                    <p className=" my-2 text-base text-gray-500 ">
                      Select the account type
                    </p>
                  </div>
                </DialogTitle>
                <DialogDescription>
                  <div className=" flex flex-col items-center justify-around cursor-pointer">
                    <div
                      className=" flex items-center justify-around w-full my-5 border rounded-lg p-5 hover:border-primary hover:text-primary "
                      onClick={() => navigate("/business-login")}
                    >
                      <div className=" rounded-full w-12 h-12 bg-slate-200 flex items-center justify-center hover:bg-green-50 hover:text-primary">
                        <BusinessCenterIcon />
                      </div>
                      <div className=" flex items-start justify-start flex-col ml-5">
                        <p className=" text-gray-600  text-base font-medium">
                          Log in as a business account
                        </p>
                        <p className=" text-xs text-gray-500 ">
                          Login to your Business account
                        </p>
                      </div>
                      <div className=" ">
                        <EastIcon />
                      </div>
                    </div>
                    <div
                      className=" flex items-center justify-around w-full my-5 border rounded-lg p-5 hover:border-primary hover:text-primary "
                      onClick={() => navigate("/login")}
                    >
                      <div className=" rounded-full w-12 h-12 bg-slate-200 flex items-center justify-center hover:bg-green-50 hover:text-primary">
                        <PersonIcon />
                      </div>
                      <div className=" flex items-start justify-start flex-col ml-5">
                        <p className=" text-gray-600  text-base font-medium">
                          Log in to personal account
                        </p>
                        <p className=" text-xs text-gray-500 ">
                          Login to your Individual account
                        </p>
                      </div>
                      <div className=" ">
                        <EastIcon />
                      </div>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          {/* {innerW} */}

          <button
            className="md:px-5 md:text-sm px-3 text-xs py-2 border-none rounded-full bg-[#4fbfa3] text-white border cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>
        </div>
      </div>
      <div className="flex ml-20 mt-3 items-center justify-center rounded-full bg-[#e6e4f9] w-[180px]">
        {btnsData.map((btn) => (
          <div key={btn.title}>
            <button
              onClick={() => {
                setActiveButton(btn.title);
                navigate(btn.route);
              }}
              className={`focus:outline-none text-sm px-4 h-8 py-1 rounded-full ${
                activeButton === btn.title
                  ? "bg-[#7a5af8] text-white font-semibold"
                  : "bg-[#e6e4f9]"
              }
              text-gray-800 transition-colors duration-300`}
            >
              {btn.title}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopNav;

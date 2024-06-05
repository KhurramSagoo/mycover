import { createBrowserRouter } from "react-router-dom";
import Business from "./../components/DefaultPages/Business/Business";
import Individual from "./../components/DefaultPages/individual/Individual";
import Dashboard from "./../components/pages/Dashboard";
import Cover from "./../components/pages/Cover";
import Plans from "./../components/pages/Plans";
import Wallet from "./../components/pages/Wallet";
import Claim from "./../components/pages/Claim";
import More from "./../components/pages/More";
import Layout from "./Layout";
import Login from "@/components/DefaultPages/Login";
import OnBoarding from "@/components/DefaultPages/OnBoarding";
import BoardingNext from "@/components/DefaultPages/BoardingNext";
import RegisterPersonal from "@/components/DefaultPages/RegisterPersonal";
import BusinessLogin from "@/components/DefaultPages/businessLogin/BusinessLogin";
import BusinessBoarding from "@/components/DefaultPages/businessLogin/BusinessBoarding";
import BusinessBoardingNext from "./../components/DefaultPages/businessLogin/BusinessBoardingNext";
import BusinessBoardingRegister from "@/components/DefaultPages/businessLogin/BusinessBoardingRegister";
import ThirdParty from "./../components/DefaultPages/thirdParty/ThirdParty";
import MonthlyComprehensive from "@/components/DefaultPages/monthlyComprehensive/MonthlyComprehensive";
import Travel from "@/components/DefaultPages/travel/Travel";

export const ROOT = "/";
export const BUSINESS = "/business";
export const INDIVIDUAL = "/individual";
export const LOGIN = "/login";

// personal
export const ONBOARDING = "/onboarding";
export const BOARDINGNEXT = "/boarding-next";
export const REGISTERPERSONAL = "/register-personal";

// business
export const BUSINESSLOGIN = "/business-login";
export const BUSINESSBOARDING = "/business-boarding";
export const BUSINESSBOARDINGNEXT = "/business-boarding-next";
export const BUESINESSBOARDINGREGISTER = "/business-boarding-register";

// third party
export const THIRDPARTY = "/thirdparty";
// monthly comprehensive
export const MONTHLYCOMPREHENSIVE = "/monthly-comprehensive";
// travel
export const TRAVEL = "/travel";

// protected
// export const PROTECTED = "/protected";
export const DASHBOARD = "/dashboard";
export const MYCOVER = "/dashboard/mycover";
export const PLANS = "/dashboard/plans";
export const WALLET = "/dashboard/wallet";
export const CLAIM = "/dashboard/claim";
export const MORE = "/dashboard/more";

export const router = createBrowserRouter([
  { path: ROOT, element: <Business /> },
  { path: INDIVIDUAL, element: <Individual /> },
  { path: LOGIN, element: <Login /> },
  { path: ONBOARDING, element: <OnBoarding /> },
  { path: BUSINESSBOARDING, element: <BusinessBoarding /> },
  { path: BOARDINGNEXT, element: <BoardingNext /> },
  { path: REGISTERPERSONAL, element: <RegisterPersonal /> },
  { path: BUSINESSLOGIN, element: <BusinessLogin /> },
  { path: BUESINESSBOARDINGREGISTER, element: <BusinessBoardingRegister /> },
  { path: THIRDPARTY, element: <ThirdParty /> },
  { path: MONTHLYCOMPREHENSIVE, element: <MonthlyComprehensive /> },
  { path: TRAVEL, element: <Travel /> },
  {
    path: BUSINESSBOARDINGNEXT,
    element: <BusinessBoardingNext />,
  },
  {
    path: DASHBOARD,
    element: <Layout />,
    children: [
      { path: DASHBOARD, element: <Dashboard /> },
      { path: MYCOVER, element: <Cover /> },
      { path: PLANS, element: <Plans /> },
      { path: WALLET, element: <Wallet /> },
      { path: CLAIM, element: <Claim /> },
      { path: MORE, element: <More /> },
    ],
  },
]);

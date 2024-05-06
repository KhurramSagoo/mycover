import { createBrowserRouter } from "react-router-dom";
import Business from './../components/DefaultPages/Business/Business';
import Individual from './../components/DefaultPages/individual/Individual';
import Dashboard from './../components/pages/Dashboard';
import Cover from "./../components/pages/Cover";
import Plans from "./../components/pages/Plans";
import Wallet from "./../components/pages/Wallet";
import Claim from "./../components/pages/Claim";
import More from "./../components/pages/More";
import Layout from "./Layout";

export const ROOT = "/"
export const BUSINESS = "/business"
export const INDIVIDUAL = "/individual"

export const PROTECTED = "/protected"
export const DASHBOARD = "/protected/dashboard"

export const MYCOVER = "/protected/mycover"
export const PLANS = "/protected/plans"
export const WALLET = "/protected/wallet"
export const CLAIM = "/protected/claim"
export const MORE = "/protected/more"

export const router = createBrowserRouter([
    { path: ROOT, element: <Business /> },
    { path: INDIVIDUAL, element: <Individual /> },
    {
        path: PROTECTED, element: <Layout />,
        children: [
            { path: DASHBOARD, element: <Dashboard /> },
            { path: MYCOVER, element: <Cover /> },
            { path: PLANS, element: <Plans /> },
            { path: WALLET, element: <Wallet /> },
            { path: CLAIM, element: <Claim /> },
            { path: MORE, element: <More /> },

        ]
    },
])
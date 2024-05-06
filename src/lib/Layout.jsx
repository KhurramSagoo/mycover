import LeftSideBar from '@/components/LeftSideBar'
import MobileFooter from '@/components/MobileFooter'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>

            <div className=" flex">
                <div className="  hidden md:block">
                    <LeftSideBar />
                </div>
                <div className=" md:ml-[300px] w-full flex flex-col ">
                    <Outlet />
                </div>
            </div>
            <MobileFooter />
        </div>
    )
}

export default Layout
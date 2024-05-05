import TopNav from '../../MUIComponents/TopNav'
import DrawerSheet from '../../DrawerSheet'
import BusinessHero from './BusinessHero'
import BusinessBrands from './BusinessBrands'
import BusinessMiddlePart from './BusinessMiddlePart'
import BusinessOneStopTab from './BusinessOneStopTab'
import BusinessProtection from './BusinessProtection'
import SmartBusinessTabs from './SmartBusinessTabs'
import EasyWayBusinessInsurance from './EasyWayBusinessInsurance'
import BusinessMultiAimation from './BusinessMultiAimation'
import BusinessAccrodion from './BusinessAccrodion'
import BusinessFooter from './BusinessFooter'

const Business = () => {
    return (
        <div className=' h-[1200px] w-full '>
            <div className=' fixed top-0 right-0 left-0'>
                <TopNav />
            </div>
            <BusinessHero />
            <BusinessBrands />
            <BusinessMiddlePart />
            <BusinessOneStopTab />
            <BusinessProtection />
            <SmartBusinessTabs />
            <BusinessMultiAimation />
            <EasyWayBusinessInsurance />
            <div className=' h-28 w-full'>
                <br />
            </div>
            <BusinessAccrodion />
            <BusinessFooter />
            {/* <div className=' h-28 w-full'>
                <br />
            </div> */}
        </div>
    )
}

export default Business
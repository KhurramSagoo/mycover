import TopNav from '../../others/TopNav'
import BusinessHero from './BusinessHero'
import BusinessBrands from './BusinessBrands'
import BusinessMiddlePart from './BusinessMiddlePart'
import BusinessOneStopTab from './BusinessOneStopTab'
import BusinessProtection from './BusinessProtection'
import SmartBusinessTabs from './SmartBusinessTabs'
import EasyWayBusinessInsurance from './EasyWayBusinessInsurance'
import BusinessMultiAnimation from './BusinessMultiAnimation'
import BusinessAccrodion from './BusinessAccrodion'
import BusinessFooter from './BusinessFooter'

const Business = () => {
    return (
        <div className='   w-full '>
            <div className=' fixed top-0 right-0 left-0'>
                <TopNav />
            </div>
            <BusinessHero />
            <BusinessBrands />
            <BusinessMiddlePart />
            <BusinessOneStopTab />
            <BusinessProtection />
            <SmartBusinessTabs />
            <BusinessMultiAnimation />
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
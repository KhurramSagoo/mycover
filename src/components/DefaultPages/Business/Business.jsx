import TopNav from '../../MUIComponents/TopNav'
import DrawerSheet from '../../DrawerSheet'
import BusinessHero from './BusinessHero'
import BusinessBrands from './BusinessBrands'
import BusinessMiddlePart from './BusinessMiddlePart'
import BusinessOneStopTab from './BusinessOneStopTab'

const Business = () => {
    return (
        <div className=' h-[1200px] w-full '>
            <div className=' fixed top-0 right-0 left-0'>

                <TopNav />
            </div>
            <div>
                <BusinessHero />

            </div>
            <div>

                <BusinessBrands />
            </div>
            <BusinessMiddlePart />
            <BusinessOneStopTab />



        </div>
    )
}

export default Business
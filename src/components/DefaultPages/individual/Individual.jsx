import TopNav from '@/components/others/TopNav'
import HeroSection from './HeroSection'
import IndividualCarousel from './IndividualCarousel'
import IndividualPaperless from './IndividualPaperless'
import InsuranceTabs from './InsuranceTabs'

const Individual = () => {
    return (
        <div>
            <div className=' fixed top-0 right-0 left-0'>
                <TopNav />
            </div>
            <div className=' lg:mt-40 mt-28'>

                <HeroSection />
            </div>
            <IndividualCarousel />
            <IndividualPaperless />
            <InsuranceTabs />

        </div>

    )
}

export default Individual
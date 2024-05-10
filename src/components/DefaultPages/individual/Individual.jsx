import TopNav from '@/components/others/TopNav'
import HeroSection from './HeroSection'
import IndividualCarousel from './IndividualCarousel'
import IndividualPaperless from './IndividualPaperless'
import InsuranceTabs from './InsuranceTabs'
import IndividualAccordion from './IndividualAccordion'
import BusinessFooter from '../Business/BusinessFooter'

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
            <IndividualAccordion />
            <BusinessFooter />

        </div>

    )
}

export default Individual
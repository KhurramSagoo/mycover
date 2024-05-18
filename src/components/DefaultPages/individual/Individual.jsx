import TopNav from '@/components/others/TopNav'
import HeroSection from './HeroSection'
import IndividualCarousel from './IndividualCarousel'
import IndividualPaperless from './IndividualPaperless'
import InsuranceTabs from './InsuranceTabs'
import IndividualAccordion from './IndividualAccordion'
import BusinessFooter from '../Business/BusinessFooter'
import IndividualInsuranceClick from './IndividualInsuranceClick'
import Collage from './collage/Collage'

const Individual = () => {
    return (
        <div>
            <div className=' fixed top-0 right-0 left-0'>
                <TopNav />
            </div>
            <div className='  sm:mt-40 mt-28'>

                <HeroSection />
            </div>
            <IndividualCarousel />
            <IndividualPaperless />
            <InsuranceTabs />
            <IndividualInsuranceClick />
            <IndividualAccordion />
            <div className=' relative h-52'>
                <div className=' absolute -bottom-20  right-0 left-0'>
                    <Collage />
                </div>
            </div>
            <BusinessFooter />

        </div>

    )
}

export default Individual
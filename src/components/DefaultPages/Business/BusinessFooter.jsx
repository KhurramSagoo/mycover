import logo from '../../../assets/navbar-logo.svg';
import fb from '../../../assets/business/businessFooter/social-facebook.svg'
import twitter from '../../../assets/business/businessFooter/social-twitter.svg'
import insta from '../../../assets/business/businessFooter/social-instagram.svg'
import linkedIn from '../../../assets/business/businessFooter/social-linkedIn.svg'


const BusinessFooter = () => {
    return (
        <div className=' lg:py-12 = bg-[#101828] w-full'>

            <div className='lg:mt-20 lg:w-full flex items-start justify-start h-[84px] lg:px-16 p-5'><img src={logo} alt="" /></div>

            <section className=' lg:pt-6 flex lg:px-16 lg:items-start text-white justify-between w-full flex-col-reverse md:flex-row'>
                <div className=' lg:px-4 p-5'>
                    <div className=' flex lg:mb-6 mb-4 items-start justify-start'>
                        <p className=' pr-2'>Office:</p>
                        <p className=' text-gray-500 text-sm'>Plot 8, Provinces Street, Lekki Phase1, Lagos, Nigeria.</p>
                    </div>
                    <div className=' flex lg:mb-6  mb-4 items-start justify-start'>
                        <p className=' pr-2'>Email:</p>
                        <a href='mailto:hello@mycovergenius.com'
                            className=' text-gray-500 text-sm'
                        >hello@mycovergenius.com</a>
                    </div>
                    <div className=' flex lg:mb-6 mb-4 items-start justify-start'>
                        <p className='pr-2'>Phone:</p>
                        <a href='tel:+2349070008899'
                            className=' text-gray-500 text-sm'
                        >+234 9070008899</a>
                    </div>
                    <div className=' lg:pt-4 w-full flex items-start justify-start'>
                        <img src={fb} alt="" className=' pr-4' />
                        <img src={insta} alt="" className=' pr-4' />
                        <img src={linkedIn} alt="" className=' pr-4' />
                        <img src={twitter} alt="" className=' pr-4' />

                    </div>
                </div>

                <div className=' flex items-start justify-between w-full flex-wrap p-5'>

                    <div className=' lg:pl-4 flex lg:mb-4 lg:items-start lg:justify-start flex-col p-2'>
                        <p className=' text-xl mb-6 font-bold'>Quick Links</p>
                        <p className=' py-2 mb-4 text-gray-400  text-sm'>Home</p>
                        <p className=' py-2 mb-4 text-gray-400 text-sm'>Login</p>
                        <p className=' py-2 mb-4 text-gray-400 text-sm'>News</p>

                    </div>
                    <div className=' lg:pl-4 flex lg:mb-4 lg:items-start lg:justify-start flex-col p-2'>
                        <p className=' text-xl mb-6 font-bold'>Products</p>
                        <p className=' py-2 mb-4 text-gray-400'>FlexiCare Mini</p>
                        <p className=' py-2 mb-4 text-gray-400 '>FlexiCare</p>
                        <p className=' py-2 mb-4 text-gray-400 text-sm'>Montly Comprehensive</p>
                        <p className=' py-2 mb-4 text-gray-400 text-sm'>Third Party</p>
                        <p className=' py-2 mb-4 text-gray-400 text-sm'>Gadget</p>
                        <p className=' py-2 mb-4 text-gray-400 text-sm'>Travel</p>

                    </div>
                    <div className=' lg:pl-4 flex lg:mb-4 lg:items-start lg:justify-start flex-col p-2'>
                        <p className=' text-xl mb-6 font-bold'>Company</p>
                        <p className=' py-2 mb-4 text-gray-400 text-sm'>Resources</p>
                    </div>
                    <div className=' lg:pl-4 flex lg:mb-4 lg:items-start lg:justify-start flex-col p-2'>
                        <p className=' text-xl mb-6 font-bold'>Legal</p>
                        <p className=' py-2 mb-4 text-gray-400 text-sm'>Privacy Policy</p>
                        <p className=' py-2 mb-4 text-gray-400 text-sm'>Cookie Policy</p>
                        <p className=' py-2 mb-4 text-gray-400 text-sm'>Terms & Conditions</p>
                    </div>

                </div>


            </section>
            <div className=' w-full text-wrap text-center mx-auto text-white text-sm font-medium'>Copyright © 2024 MyCoverGenius Ltd. All rights reserved.</div>

        </div>
    )
}

export default BusinessFooter
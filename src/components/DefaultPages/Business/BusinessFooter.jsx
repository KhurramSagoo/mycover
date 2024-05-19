import logo from '../../../assets/navbar-logo.svg';
import fb from '../../../assets/business/businessFooter/social-facebook.svg'
import twitter from '../../../assets/business/businessFooter/social-twitter.svg'
import insta from '../../../assets/business/businessFooter/social-instagram.svg'
import linkedIn from '../../../assets/business/businessFooter/social-linkedIn.svg'
import { Link, useNavigate } from 'react-router-dom';


const BusinessFooter = () => {
    const navigate = useNavigate()
    return (
        <div className=' lg:py-12 pt-20 sm:px-5   px-3 bg-[#101828] w-full'>

            <div className='lg:mt-20 lg:w-full flex items-start justify-start h-[84px] lg:px-16 p-5'><img
                loading="lazy"
                src={logo} alt="" /></div>

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
                        <a href="https://www.facebook.com" target='_blank'>
                            <img loading="lazy" src={fb} alt="" className='  pr-4' />
                        </a>
                        <a href="https://www.instagram.com" target='_blank'>
                            <img loading="lazy" src={insta} alt="" className=' pr-4' />
                        </a>
                        <a href="https://www.linkedin.com" target='_blank'>
                            <img loading="lazy" src={linkedIn} alt="" className=' pr-4' />
                        </a>
                        <a href="https://www.twitter.com" target='_blank'>
                            <img loading="lazy" src={twitter} alt="" className=' pr-4' />
                        </a>

                    </div>
                </div>

                <div className=' flex items-start justify-between w-full flex-wrap p-5 text-sm'>

                    <div className=' lg:pl-4 flex lg:mb-4 lg:items-start lg:justify-start flex-col p-2'>
                        <a className=' text-xl mb-6 font-bold'>Quick Links</a>
                        <a className=' py-2 mb-4 text-gray-500 cursor-pointer  text-sm'>Home</a>
                        <a className=' py-2 mb-4 text-gray-500 cursor-pointer text-sm'>Login</a>
                        <a className=' py-2 mb-4 text-gray-500 cursor-pointer text-sm'>News</a>

                    </div>
                    <div className=' lg:pl-4 flex lg:mb-4 lg:items-start lg:justify-start flex-col p-2'>
                        <a className=' text-xl mb-6 font-bold'>Products</a>
                        <a className=' py-2 mb-4 text-gray-500 cursor-pointer'>FlexiCare Mini</a>
                        <a className=' py-2 mb-4 text-gray-500 cursor-pointer '>FlexiCare</a>
                        <a className=' py-2 mb-4 text-gray-500 cursor-pointer text-sm'>Montly Comprehensive</a>
                        <a className=' py-2 mb-4 text-gray-500 cursor-pointer text-sm'>Third Party</a>
                        <a className=' py-2 mb-4 text-gray-500 cursor-pointer text-sm'>Gadget</a>
                        <a className=' py-2 mb-4 text-gray-500 cursor-pointer text-sm'>Travel</a>

                    </div>
                    <div className=' lg:pl-4 flex lg:mb-4 lg:items-start lg:justify-start flex-col p-2'>
                        <a className=' text-xl mb-6 font-bold cursor-pointer'>Company</a>
                        <a className=' py-2 mb-4 text-gray-500 cursor-pointer text-sm'>Resources</a>
                    </div>
                    <div className=' lg:pl-4 flex lg:mb-4 lg:items-start lg:justify-start flex-col p-2'>
                        <a className=' text-xl mb-6 font-bold'>Legal</a>
                        <a className=' py-2 mb-4 text-gray-500 text-sm cursor-pointer'>Privacy Policy</a>
                        <a className=' py-2 mb-4 text-gray-500 text-sm cursor-pointer'>Cookie Policy</a>
                        <a className=' py-2 mb-4 text-gray-500 text-sm cursor-pointer'>Terms & Conditions</a>
                    </div>

                </div>


            </section>
            <div className=' w-full text-wrap text-center mx-auto text-white text-sm font-medium p-5'>Copyright © 2024 MyCoverGenius Ltd. All rights reserved.</div>

        </div>
    )
}

export default BusinessFooter
import icon from '../../../assets/individual/pointer.svg'
import mobile from './mobile-app.png'

const HeroSection = () => {
    return (
        <div className=' lg:mx-12 md:mx-6 px-5 flex items-center justify-center xl:flex-row flex-col '>
            {/* left portion */}
            <div className='  xl:w-3/5 mx-0 py-5'>
                <p className=" lg:text-6xl  md:text-5xl sm:text-3xl text-3xl  leading-tight md:font-black  md:leading-snug
                 break-words 
                text-wrap lg:pt-12  lg:mb-6  text-secondary font-extrabold">Insurance,
                    <br />
                    made just <span className=" text-primary">for you</span></p>
                {/* <p className=" font-bold pt-20 lg:pt-5 lg:mt-5 text-blue text-lg md:text-5xl xs:text-3xl leading-13 lg:leading-13 xs:leading-13 lg:mb-4 mb-3 text-secondary">Insurance,
                    <br />
                    made just <span className=" text-primary">for you</span></p> */}
                <p className=" lg:mb-4 md:text-xl text-base lg:me-48  mb-2 text-gray-600 font-medium leading-snug pt-5">
                    Experience instant insurance that truly protects you, your family & the things you love.
                </p>
                <div className=" flex items-end justify-start xl:my-0 my-8">

                    <button className=" px-9 py-3 text-white bg-primary rounded-full ">Get Covered</button>
                    <img loading="lazy" src={icon} alt="" className='  w-[42px] ml-4' />
                </div>

            </div>

            {/* right portion */}
            <div className=' xl:w-2/5 lg:w-full lg:my-0 xl:my-4 my-0y flex items-center justify-center'>
                <img loading="lazy" src={mobile} alt="" className=' lg:w-[385px] sm:w-3/5 w-2/3' />

            </div>

        </div>
    )
}

export default HeroSection
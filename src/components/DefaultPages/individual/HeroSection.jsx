import icon from '../../../assets/individual/pointer.svg'
import mobile from './mobile-app.png'

const HeroSection = () => {
    return (
        <div className=' lg:mx-16 mx-2 flex items-center justify-center xl:flex-row flex-col'>
            {/* left portion */}
            <div className=' lg:ps-4 lg:pe-16  lg:py-12 lg:w-3/5 mx-6 py-2'>
                <p className=" lg:text-[60px] 
                text-[30px] break-words 
                text-wrap lg:mt-12 lg:pt-12 lg:mb-6  text-secondary font-extrabold">Insurance,
                    <br />
                    made just <span className=" text-primary">for you</span></p>
                {/* <p className=" font-bold pt-20 lg:pt-5 lg:mt-5 text-blue text-lg md:text-5xl xs:text-3xl leading-13 lg:leading-13 xs:leading-13 lg:mb-4 mb-3 text-secondary">Insurance,
                    <br />
                    made just <span className=" text-primary">for you</span></p> */}
                <p className=" lg:mb-4 lg:text-[20px] text-[16px] mb-2 text-secondary">
                    Experience instant insurance that truly protects you, your family & the things you love.
                </p>
                <div className=" flex items-end justify-start my-8">

                    <button className=" px-9 py-3 text-white bg-primary rounded-full ">Get Covered</button>
                    <img src={icon} alt="" className='  w-[42px] ml-4' />
                </div>

            </div>

            {/* right portion */}
            <div className=' lg:w-2/5 my-4 flex items-center justify-center'>
                <img src={mobile} alt="" className=' lg:w-[385px] w-[298px]' />

            </div>

        </div>
    )
}

export default HeroSection
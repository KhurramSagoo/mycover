import React from 'react'
import ring from './ring-right.svg'
import people from './people.png'


const Collage = () => {
    return (
        <div className=' lg:mx-20 md:mx-10 mx-0 lg:mt-16 md:mt-10 mt-2 h-auto '>

            <div className=' md:px-5 px-2  lg:mx-auto md:mx-5 mx-0 bg-gradient-to-r from-blue-950 to-teal-500 relative w-full  h-auto rounded-xl md:h-96 flex-col lg:flex-row '>
                <div className=' flex items-start justify-start flex-col md:p-16 p-4 md:h-auto h-72 md:w-2/3 w-full'>
                    {/* Add content here */}
                    <p className=' text-white lg:text-5xl md:text-2xl text-xl font-bold my-5 '>Insurance made easy for everyone</p>
                    <button className=' bg-primary mt-3 text-white py-3 px-10 rounded-full cursor-pointer'>Get Started</button>

                </div>

                <div className=' absolute md:top-20 md:right-20 top-10 right-0  '>
                    <img src={people} alt="" className='lg:w-[390px] md:w-72 w-52 object-cover' />
                </div>
            </div>

        </div>
    )
}

export default Collage
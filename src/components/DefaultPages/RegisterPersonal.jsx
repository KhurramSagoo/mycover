import logo from '../../assets/login/mycover-logo-white.svg'
import lines from '../../assets/login/cap-lines.svg'
import { ArrowLeft } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"




const RegisterPersonal = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm()
    const onSubmit = (data) => console.log(data)

    const navigate = useNavigate()
    return (
        <div className=' w-full flex items-stretch justify-start min-h-screen h-auto'>

            {/* left side bar */}
            <div className='hidden md:flex items-start justify-start bg-loginBg md:w-1/3  min-h-screen  h-auto relative'>
                <div className=" lg:px-12 lg:pt-[60px] md:px-6 px-5  ">
                    <div className='  py-6 mb-12'>

                        <img
                            loading="lazy"
                            src={logo} alt="" className=' w-[160px]' />
                    </div>

                    <div className=' w-full flex items-start justify-start md:pr-8 pr-0  text-white mt-12 mb-4'>
                        <p className=' lg:text-3xl !leading-normal  md:text-2xl font-semibold break-words pl-0 '>Get ready to enjoy insurance that truly covers you</p>
                    </div>
                    <div className=' flex items-start justify-start flex-col py-5'>
                        <div className=' flex items-center justify-center py-3'>
                            <div className=' w-11 h-11 text-primary bg-white rounded-full flex items-center justify-center'>1</div>
                            <div className=' flex items-center justify-center text-white ml-5 font-medium'>
                                Personal Details
                            </div>

                        </div>
                        <div className=' flex items-center justify-center py-3'>
                            <div className=' w-11 h-11 text-primary bg-white rounded-full flex items-center justify-center'>2</div>
                            <div className=' flex items-center justify-center text-white ml-5 font-medium'>

                                Plan Details
                            </div>

                        </div>
                        <div className=' flex items-center justify-center py-3'>
                            <div className=' w-11 h-11 text-primary bg-white rounded-full flex items-center justify-center'>3</div>
                            <div className=' flex items-center justify-center text-white ml-5 font-medium'>
                                Get Covered
                            </div>

                        </div>


                    </div>
                    <div className='w-full absolute bottom-0 right-0 left-0 '>
                        <img
                            loading="lazy"
                            src={lines} alt="" className=' h-52 w-full opacity-50  object-cover' />
                    </div>

                </div>

            </div>


            {/* right */}
            <div className=' md:w-2/3 p-3 md:px-5  w-full'>
                <div className=' bg-[#e6f4f2] flex items-center justify-center w-28 rounded-xl px-2 py-2 ml-5 text-gray-600 cursor-pointer '
                    onClick={() => navigate(-1)}
                >
                    <ArrowLeft /> <p className=' text-sm text-gray-600 font-medium'>Go Back</p>

                </div>

                {/* heading */}
                <div className='md:mt-10 md:px-4 md:py-6 px-2 py-3'>
                    <div className=' w-full flex items-center justify-center flex-col'>
                        <p className=' text-secondary text-4xl text-center break-words font-bold'>Welcome To MyCoverGenius! 😊 </p>
                        <p className='md:text-xl sm:text-base text-sm py-4 text-gray-500'>We’d like to meet you</p>
                    </div>

                </div>

                {/* form */}
                <div className='flex items-center justify-center w-full mt-2 px-12  flex-col  '>
                    <form onSubmit={handleSubmit(onSubmit)} className=' flex items-center justify-center flex-col '>


                        {/* first name */}
                        <div className=' flex items-start justify-center flex-col min-w-[300px] sm:w-full py-0'>

                            <label htmlFor="firstName" className=' text-gray-500'>First Name</label>
                            <input type="text" placeholder='Enter your first name' className=' border outline-primary rounded-md py-2 w-full my-1 px-2 '
                                {...register("firstName",
                                    {
                                        required: "The FirstName field is required",
                                        // pattern: {
                                        //     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                                        //     message: "Invalid email address"
                                        // }
                                    })}
                            />
                            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                        </div>

                        {/* last name */}
                        <div className=' flex items-start justify-center flex-col  min-w-[300px] sm:w-full py-0'>

                            <label htmlFor="lastName" className=' text-gray-500'>Last Name</label>
                            <input type="text" placeholder='Enter your last name' className=' border outline-primary rounded-md py-2 w-full my-1 px-2 '
                                {...register("lastName",
                                    {
                                        required: "The lastName field is required",
                                        // pattern: {
                                        //     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                                        //     message: "Invalid email address"
                                        // }
                                    })}
                            />
                            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                        </div>

                        {/* email */}

                        <div className=' flex items-start justify-center flex-col  min-w-[300px] sm:w-full py-0'>

                            <label htmlFor="email" className=' text-gray-500'>Email Address</label>
                            <input type="email" placeholder='Enter your email Address' className=' border outline-primary rounded-md py-2 w-full my-1 px-2 '
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>

                        {/* phone number */}
                        <div className=' flex items-start justify-center flex-col min-w-[300px] sm:w-full py-0'>

                            <label htmlFor="lastName" className=' text-gray-500'>Phone Number</label>
                            <input type="text" placeholder='Enter your phone number' className=' border outline-primary rounded-md py-2 w-full my-1 px-2 '
                                {...register("phone",
                                    {
                                        required: "The phone field is required",
                                        pattern: {
                                            value: /^(?:\+\d{1,3})?\d{10,12}$/,
                                            message: "Invalid phone number"
                                        }

                                    })}
                            />
                            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                        </div>
                        {/* referral */}
                        <div className=' flex items-start justify-center flex-col  min-w-[300px] sm:w-full py-0'>

                            <label htmlFor="lastName" className=' text-gray-500'>Phone Number</label>
                            <input type="text" placeholder='Enter referral code' className=' border outline-primary rounded-md py-2 w-full my-1 px-2 '
                                {...register("phone",
                                    {
                                        // required: "The phone field is required",
                                        // pattern: {
                                        // value: /^(?:\+\d{1,3})?\d{10,12}$/,
                                        // message: "Invalid phone number"
                                        // }

                                    })}
                            />
                            {/* {errors.phone && <p className="text-red-500">{errors.phone.message}</p>} */}
                        </div>

                        {/* password */}
                        {/* <div className=' flex items-start justify-center flex-col  w-[500px] py-3'>

                            <label htmlFor="password" className=' text-gray-500'>Password</label>
                            <input type="password"
                                placeholder='Type your password'

                                className=' border rounded-md outline-primary py-2 w-full my-2 px-2 '
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters"
                                    }
                                })}
                            />
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                        </div> */}


                        {/* <div className='text-sm float-right flex items-center justify-center ml-auto font-normal'>
                            <p className='text-primary  cursor-pointer '>Forgot Password?</p>
                        </div> */}
                        <div className=' w-full my-5'>
                            <button className=' bg-primary w-full py-2 rounded-md text-white opacity-90'
                            // disabled={!isValid}
                            >Login</button>
                        </div>




                    </form>
                </div>
                <div className='text-sm  flex items-center justify-center ml-auto font-normal'>
                    <p className='text-gray-500  cursor-pointer '

                    >Already have an account?
                        <span className=' text-primary ml-2 cursor-pointer'
                            onClick={() => navigate("/login")}
                        >

                            Sign In
                        </span>
                    </p>
                </div>
                {/* <div>
                    <p>Don't have an account? Sign Up</p>
                </div> */}


            </div>
        </div>
    )
}

export default RegisterPersonal
import logo from '../../assets/login/mycover-logo-white.svg'
import lines from '../../assets/login/cap-lines.svg'
import { ArrowLeft } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"




const Login = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm()
    const onSubmit = (data) => console.log(data)

    const navigate = useNavigate()
    return (
        <div className=' w-full flex items-start justify-start h-screen'>

            {/* left side bar */}
            <div className='hidden md:flex items-start justify-start bg-loginBg md:w-1/3  h-screen relative'>
                <div className=" lg:px-[60px] lg:pt-[60px] md:px-8  ">
                    <div className='  py-6 mb-12'>

                        <img src={logo} alt="" className=' w-[160px]' />
                    </div>

                    <div className=' w-full flex items-start justify-start md:pr-8 pr-0  text-white'>
                        <p className=' lg:text-3xl md:text-2xl font-medium break-words pl-0 '>Get ready to enjoy insurance that truly covers you</p>
                    </div>
                    <div className='w-full absolute bottom-0 right-0 left-0 '>
                        <img src={lines} alt="" className=' opacity-50  object-contain' />
                    </div>

                </div>

            </div>


            {/* right */}
            <div className=' md:w-2/3 w-full p-2 md:px-5'>
                <div className=' bg-[#e6f4f2] flex items-center justify-center w-28 rounded-xl px-2 py-2 ml-5 h32 text-gray-600 cursor-pointer '
                    onClick={() => navigate("/")}
                >
                    <ArrowLeft /> <p className=' text-sm text-gray-600 font-medium'>Go Back</p>

                </div>

                {/* heading */}
                <div className='md:mt-16 md:px-4 md:py-8 px-2 py-6'>
                    <div className=' w-full flex items-center justify-center flex-col'>
                        <p className=' text-secondary text-4xl font-bold'>Hey, Welcome Back 😊 </p>
                        <p className=' text-sm py-4 text-gray-500'>Seeing you always delight us. Please log in</p>
                    </div>

                </div>

                {/* form */}
                <div className='flex items-center justify-center w-full mt-2 px-12  flex-col'>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className=' flex items-start justify-center flex-col  w-[500px] py-5'>

                            <label htmlFor="email" className=' text-gray-500'>Email Address</label>
                            <input type="email" placeholder='Enter your email Address' className=' border outline-primary rounded-md py-2 w-full my-2 px-2 '
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            {isValid && <p className="text-red-500">khurrm</p>}
                        </div>
                        <div className=' flex items-start justify-center flex-col  w-[500px] py-5'>

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
                            <div className='text-sm float-right flex items-center justify-center ml-auto font-normal'>
                                <p className='text-primary  cursor-pointer '>Forgot Password?</p>
                            </div>
                            <div className=' w-full my-5'>
                                <button className=' bg-primary w-full py-2 rounded-md text-white opacity-90'
                                // disabled={!isValid}
                                >Login</button>
                            </div>
                        </div>




                    </form>
                </div>
                <div className='text-sm  flex items-center justify-center ml-auto font-normal'>
                    <p className='text-gray-500  cursor-pointer '

                    >Don't have an account?
                        <span className=' text-primary ml-2 cursor-pointer'
                            onClick={() => navigate("/onboarding")}
                        >

                            Sign Up
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

export default Login
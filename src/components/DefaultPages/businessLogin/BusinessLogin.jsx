import bg from '../../../assets/businessLogin/covered.jpeg'
import logo from '../../../assets/navbar-logo.svg'
import { ArrowLeft } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"




const BusinessLogin = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm()
    const onSubmit = (data) => console.log(data)
    const navigate = useNavigate()
    return (
        <div className=' w-full flex items-start justify-start md:h-screen h-auto'>

            {/* left side bar */}
            <div className='hidden md:flex items-start justify-start  md:w-1/3  h-screen'
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
            </div>
            {/* right */}
            <div className=' md:w-2/3 w-full p-4 md:px-5 flex items-center justify-center flex-col  '>
                {/* heading */}
                {/* <div className=' flex items-center justify-center'>
                </div> */}
                {/* form */}
                <div className='flex items-start justify-center md:w-[360px]  w-full mt-3  flex-col  '>
                    {/* logo */}
                    <div className='w-full'>
                        <div className=' py-12 flex items-center justify-center'>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className=' w-full flex items-start justify-center flex-col '>
                        <p className=' text-secondary text-4xl mt-12 mb-2 font-bold text-center  break-words'>Hi Boss, </p>
                        <p className=' text-sm mb-12 font-medium text-black'>Login to your account to continue</p>
                    </div>
                    <div className='w-full flex items-start justify-center flex-col  ' >

                        <form onSubmit={handleSubmit(onSubmit)}>


                            <label htmlFor="email" className=' text-black text-sm font-medium pb-2'>Email Address*</label>
                            <input type="email" placeholder='Enter your email Address' className=' border   outline-primary rounded-md mb-2  py-2 w-full my-2 px-2 '
                                style={{
                                    width: "100%"
                                }}

                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                            />
                            {errors.email && <p className="text-[#fe0f6f] text-sm font-medium">{errors.email.message}</p>}

                            <label htmlFor="password" className=' text-black text-sm font-medium pb-2'>Password</label>
                            <input type="password"
                                placeholder='Type your password'

                                className=' border rounded-md outline-primary py-2 mb-2 w-full  px-2 '
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters"
                                    }
                                })}
                            />
                            {errors.password && <p className="text-[#fe0f6f] text-sm font-medium">{errors.password.message}</p>}
                            <div className='text-sm float-right flex items-center justify-center ml-auto font-normal'>
                                <p className='text-red-500 text-sm font-semibold  cursor-pointer  mb-6 '>Forgot Password ?</p>
                                {/* </div> */}



                            </div>

                            <div className=' w-full my-5'>
                                <button className=' bg-[#439687] w-full py-2 rounded-md text-white opacity-90'
                                // disabled={!isValid}
                                >Login</button>
                            </div>


                        </form>
                        <div className=' w-full'>

                            <div className='text-sm  flex items-center justify-center ml-auto font-normal'>
                                <p className='text-black font-medium  cursor-pointer '

                                >Don't have an account?
                                    <span className=' text-primary ml-2 cursor-pointer font-medium text-sm'
                                        onClick={() => navigate("/business-boarding")}
                                    >

                                        Sign Up
                                    </span>
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
                {/* <div>
                    <p>Don't have an account? Sign Up</p>
                </div> */}


            </div>
        </div>
    )
}

export default BusinessLogin
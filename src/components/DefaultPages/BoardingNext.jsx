import { ArrowLeft } from "@mui/icons-material"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import logo from '../../assets/login/active-more.svg'
import check from '../../assets/login/check-1.svg'

const tabData = [
    {
        image: check,
        text: "Emergency medical expenses."
    },
    {
        image: check,
        text: "Medical evacuation."
    },
    {
        image: check,
        text: "Access to gadget insurance claims twice per annum."
    },
    {
        image: check,
        text: "Compensation for delayed trips."
    },
]


const BoardingNext = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();



    const handleGetCovered = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/register-personal")
        }, 2000);
    }

    return (
        <div className="p-5 h-screen">
            <div className='bg-[#e6f4f2] flex items-center justify-center w-28 rounded-xl px-2 py-2 h32 text-gray-600 cursor-pointer transition-opacity duration-500 ease-in-out opacity-80 hover:opacity-100' onClick={() => navigate(-1)}>
                <ArrowLeft /> <button className='text-sm text-gray-600  font-medium'>Go Back</button>
            </div>
            <div>

                <div className=" flex items-center justify-center w-full pt-3">
                    <img src={logo} alt="" />
                </div>
                <br />
                <div className=" flex items-center justify-center sm:px-16 px-5 w-full flex-col py-5">
                    <p className=" text-xl font-bold text-secondary">Travel Insurance</p>
                    <p className=" text-gray-500 text-sm  pt-5 font-semibold">Explore the world without worry. Our travel Insurance plan gives you 360° coverage when you travel outside the country.</p>
                </div>

            </div>

            <div className="  flex items-center justify-center">
                <div className="border rounded-lg bg-[#f6fef9] p-5  max-w-[600px] w-full ">

                    {/* card data */}
                    <div className=" flex items-start justify-start flex-col">
                        {
                            tabData.map((item, index) => (

                                <div key={index} className=" flex items-center justify-center py-2 ">
                                    <img src={item.image} alt="" className=" mr-5" />
                                    <p className=" text-sm text-gray-600 font-medium">{item.text}</p>

                                </div>
                            ))
                        }
                        <span className=" cursor-pointer text-primary py-5 ml-5"> Learn More</span>

                    </div>


                </div>


            </div>
            <div className=" flex items-center justify-center py-10 w-full">
                <button className=" w-full py-5 bg-primary text-white rounded-lg max-w-[600px]" onClick={handleGetCovered}>
                    {loading ? "Loading... please wait" : "Get Covered"}
                </button>
            </div>
        </div >
    )
}

export default BoardingNext

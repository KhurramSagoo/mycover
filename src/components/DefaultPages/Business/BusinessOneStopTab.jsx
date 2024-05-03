import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const BusinessOneStopTab = () => {
  return (
    <div className=' w-full mx-auto flex items-center justify-center flex-col md:flex-row px-5  py-36'>
      <div className=' w-full md:w-1/2'>


        <header className=' flex md:items-start md:justify-start items-center justify-center flex-col w-full md:w-[400px]'>
          <p className=' text-xl text-green-500 font-medium'>One-stop Solution</p>
          <p className=' text-4xl font-bold  text-wrap tex-[#094063]'>The one-stop insurance tool for your business</p>
          <p className=' text-xl font-medium text-gray-500'>We empower you with data via a web interface for managing plans and staff needed to drive better business decisions.</p>
        </header>
        <div className='flex flex-col font-medium'>
          <h2 className=' shadow-md border-l-4 border-green-500 my-2 py-3 opacity-70 hover:opacity-100 w-96'>Plans</h2>
          <h2 className=' shadow-md border-l-4 border-green-500 my-2 py-3 opacity-70 hover:opacity-100 w-96'>Plans</h2>
          <h2 className=' shadow-md border-l-4 border-green-500 my-2 py-3 opacity-70 hover:opacity-100 w-96'>Plans</h2>
          <h2 className=' shadow-md border-l-4 border-green-500 my-2 py-3 opacity-70 hover:opacity-100 w-96'>Plans</h2>
          <h2 className=' shadow-md border-l-4 border-green-500 my-2 py-3 opacity-70 hover:opacity-100 w-96'>Plans</h2>


        </div>


      </div>
      <div >



      </div>

    </div>
  )
}

export default BusinessOneStopTab
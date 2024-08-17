import React from 'react'
import { FiBell } from "react-icons/fi";
import { GrInstallOption } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center pt-5 '>
        <div className='text-white font-bold text-lg flex flex-row'>
            <button className='text-white bg-[#1f1f1f] rounded-full p-2 font-semibold text-lg  ml-4 mt-2'>    <IoIosArrowBack /></button>
            <button className='text-white bg-[#1f1f1f] rounded-full p-2 font-semibold text-lg  ml-4 mt-2'> <IoIosArrowForward /></button>
    
       


        </div>
        <div className='flex flex-row'>
            <button className='bg-white text-black rounded-full p-2 font-semibold text-sm px-4'>Explore Premium</button>
            <button className='flex items-center text-white bg-[#1f1f1f] rounded-full p-2 font-semibold text-sm px-4 ml-4'>
      <GrInstallOption className='mr-2' /> 
      Install App
    </button>            
    <button  className='text-white bg-[#1f1f1f] rounded-full p-2 font-semibold text-lg  ml-4 mt-2'><FiBell /></button>
    <button  className='text-blue-100 bg-[#1f1f1f] p-2 px-1.5 rounded-full text-sm font-semibold   ml-4 mt-2 mr-3'> <span className='bg-slate-300 p-2 px-3 rounded-full'>H</span></button>
        </div>
    </div>
  )
}

export default Navbar
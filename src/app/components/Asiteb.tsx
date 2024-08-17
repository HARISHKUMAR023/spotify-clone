import React from 'react'
import Image from 'next/image'
import { GoPlus } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";
import { IoReorderFourOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";


const Asiteb = () => {
  const artist=[
    {
      image:'https://i.scdn.co/image/ab6761610000101f63035d24f85b41502eadd230',
      name:'achu',
      patsion:'Artist'
    },
    {
      image:'https://i.scdn.co/image/ab6761610000101fe46e5a243ecae091adc27853',
      name:'achu',
      patsion:'Artist'
    },
    {
      image:'https://i.scdn.co/image/ab6761610000101fe3db904722b53578c9677dbe',
      name:'achu',
      patsion:'Artist'
    }
    ,
    {
      image:'https://i.scdn.co/image/ab6761610000101f42389d59e94635ebcbda35dd',
      name:'achu',
      patsion:'Artist'
    }
    ,
    {
      image:'https://i.scdn.co/image/ab6761610000101f0f0be2054fe9594026a6b843',
      name:'achu',
      patsion:'Artist'
    }
    // ,
    // {
    //   image:'https://i.scdn.co/image/ab6761610000101f63035d24f85b41502eadd230',
    //   name:'achu',
    //   patsion:'Artist'
    // }
  ]
  return (
    <div className='bg-[#121212] mt-3 mx-2 py-5 px-2'>
      <div className='flex text-white justify-between'>
  <div className='flex items-center'>
    <svg 
      data-encore-id="icon" 
      role="img" 
      aria-hidden="true" 
      viewBox="0 0 24 24" 
      className="Svg-sc-ytk21e-0 bneLcE text-white w-6 h-6" 
      fill="currentColor"
    >
      <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
    </svg>
    <h3 className='ml-2'>Your Library</h3>
  </div>
  
  <div className='flex items-center'>
    <GoPlus className='mx-2 text-lg text-white' />
    <FaArrowRight className='text-white' />
  </div>
</div>
<button className='rounded-full bg-white/30 text-white p-2 px-4 text-sm mt-5'>Artist</button>

<div className='flex justify-between items-center text-white mt-6'>
<IoIosSearch  className='h-6 w-6'/>

  <div className='flex items-center'>
    <h3 className='text-slate-200 mx-2'>Recents</h3>
    <IoReorderFourOutline  className='h-6 w-6'/>

  </div>
</div>

      {artist.map((artists, index)=>(
        <div className='flex items-center my-4' key={index}>
        <Image src={artists.image}alt={artists.name} height={500} width={500} className='h-12 w-12 rounded-full'/>
        <div className='ml-4'>
        <p className='text-white'>
         {artists.name}
        </p>
        <p className=' text-sm text-slate-300'>{artists.patsion}</p>
        </div>
       
       </div>
      ))}


    </div>
  )
}

export default Asiteb
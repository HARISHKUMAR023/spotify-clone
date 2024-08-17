import React from 'react'
import Image from 'next/image'

const Card = () => {
  // Array of objects, each containing image URL, title, and description
  const cards = [
    {
      imgSrc: "https://i.scdn.co/image/ab67706f00000002d46223b553e2f5b1fb524599",
      title: "Hot Hit Tamil",
      description: "Tune into the Hottest tracks of Kollywood!",
    },
    {
      imgSrc: "https://i.scdn.co/image/ab67616d00001e0222ba5a29334eddd767c55bb0",
      title: "Pop Hits",
      description: "Top hits in the Pop genre for you!",
    },
    {
      imgSrc: "https://i.scdn.co/image/ab67616d00001e02dfe6cfcd34e433d548501824",
      title: "Chill Vibes",
      description: "Relax and unwind with chill beats.",
    },
    {
      imgSrc: "https://i.scdn.co/image/ab67616d00001e0204da3075c8f89b8e5764b9bd",
      title: "Chill Vibes",
      description: "Relax and unwind with chill beats.",
    },
    {
      imgSrc: "https://i.scdn.co/image/ab67616d00001e023790f4a6ab5674708b8fa36f",
      title: "Chill Vibes",
      description: "Relax and unwind with chill beats.",
    },
  
    // Add more objects to the array as needed
  ];

  return (
    <div className=''>
      <div className='flex justify-between  items-center mx-3 mt-3'>
        <h3 className='text-white  font-bold text-2xl'>Recommand for today</h3>
        <h3 className='text-slate-300  font-bold text-sm'>Show all</h3>
      </div>
      <div className='flex flex-wrap '>
      {cards.map((card, index) => (
        <div 
          key={index} 
          className='group hover:bg-[#1f1f1f] w-44 h-auto p-2 m-3 rounded-md relative'
        >
          <Image
            src={card.imgSrc}
            alt={card.title}
            width={160}
            height={160}
            className='h-40 w-40 rounded-md'
          />
          <p className='text-white py-1'>{card.title}</p>
          <p className='text-gray-300 text-sm'>{card.description}</p>
          
          {/* Button will be hidden by default and visible on hover */}
          <button 
            className='group-hover:visible invisible bg-green-400 w-10 h-10 rounded-full p-2 absolute bottom-4 right-4'
          >
            <svg 
              data-encore-id="icon" 
              role="img" 
              aria-hidden="true" 
              viewBox="0 0 24 24" 
              className="Svg-sc-ytk21e-0 bneLcE"
            >
              <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
            </svg>
          </button>
        </div>
      ))}
      </div>
    
    </div>
  )
}

export default Card

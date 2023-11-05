import React from 'react'

function Card({image,text,price}) {
  return (
    <div>
      <div className='bg-[#1F1D2A] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2'>
        <img src={image} className='w-40 object-over -mt-20 shadow-lg rounded-full'/>
        <p className='text-xl'>{text}</p>
        <span className='text-gray-400'>{price}</span>
      </div>
    </div>
  )
}

export default Card
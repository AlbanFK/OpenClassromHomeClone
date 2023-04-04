import React from 'react'

function SavoirCard({image, text, title}) {
  return (
    <div className='w-full md:w-1/3'>
      <div className='w-full md:p-3 flex justify-center p-3'>
            <img className='rounded-full' src={image} alt="image" />
      </div>
      <p className='text-xl font-bold text-center mb-2'>{title}</p>
      <p className='text-base font-normal text-center'>{text}</p>
    </div>
  )
}

export default SavoirCard

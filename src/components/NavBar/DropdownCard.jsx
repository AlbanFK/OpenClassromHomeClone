import React from 'react'

function DropdownCard({title, text, icon}) {
  return (
    <div className='py-2 px-4 rounded-md ml-2 whitespace-pre-wrap max-w-[354px] h-fit min-h-[48px] 
     hover:bg-primary_a1 cursor-pointer flex gap-3'
     >
      <div className='bg-primary_a1 flex flex-none items-center justify-center w-8 h-8 rounded-full'>
        {icon}
      </div>
      <div className=' grow'>
        <p className='text-base font-bold overflow-hidden text-ellipsis'>
            {title}
        </p>
        <p className='font-normal text-xs text-mygray'>
            {text}
        </p>
      </div>
    </div>
  )
}

export default DropdownCard

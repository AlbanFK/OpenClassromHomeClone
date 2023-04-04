import React from 'react'
import StorieBody from './StorieBody'
import StorieImg from './StorieImg'
import StorieTitle from './StorieTitle'


function Storie() {
  return (
    <div className=' w-full bg-[#99abf6] min-h-[400px] mt-6'>
        <div className='lg:flex w-11/12 middle_md:w-8/12 lg:w-11/12 mx-auto pt-8'>
            <div className='w-full lg:hidden'>
                <StorieTitle/>
            </div>
            <div className='lg:flex w-full justify-center'>
                <StorieImg/>
                <StorieBody/>
            </div>
        </div>
    </div>
  )
}

export default Storie

import React from 'react'
import HeroDesc from './HeroDesc'
import HeroImg from './HeroImg'

function Hero() {
  return (
    <div className=' w-full bg-[#fffaee] min-h-[400px]'>
        <div className='lg:flex w-11/12 middle_md:w-8/12 lg:w-11/12 mx-auto'>
            <HeroDesc/>
            <HeroImg/>
        </div>
        
    </div>
  )
}

export default Hero

import React from 'react'
import CandidatureDesc from './CandidatureDesc'
import VideoFrame from './VideoFrame'

function Candidature() {
  return (
    <div className=' w-full bg-white min-h-[400px]'>
        <div className='lg:flex w-11/12 middle_md:w-8/12 lg:w-11/12 mx-auto gap-3'>
            <CandidatureDesc/>
            <VideoFrame/>
        </div> 
    </div>
  )
}

export default Candidature

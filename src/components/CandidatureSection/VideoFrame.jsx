import React from 'react'
import styles from './style.module.css'


function VideoFrame() {
  return (
    <div className={`w-full lg:w-5/12 xl:w-6/12  flex justify-center lg:pt-20 ${styles.videoContainer}`}>
        <iframe 
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
    </div>
  )
}

export default VideoFrame

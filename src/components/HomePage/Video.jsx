import React from 'react'
import { FaPlay } from 'react-icons/fa'

const Video = () => {
  return (
    <div className="video_area video_bg overlay">
    <div className="video_area_inner text-center">
      <span>Montana Sea View</span>
      <h3>Relax and Enjoy your <br /> Vacation </h3>
      <a href="https://www.youtube.com/watch?v=vLnPwxZdW4Y" className="video_btn popup-video">
        <FaPlay />
      </a>
    </div>
  </div>  )
}

export default Video
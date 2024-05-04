import React from 'react';

const Video = () => {
  return (
    <div className="video_area video_bg overlay" style={{ height: '500px', width: '100%', position: 'relative', overflow: 'hidden' }}>
      <video autoPlay loop muted className="w-100 h-100 position-absolute top-0 left-0">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;

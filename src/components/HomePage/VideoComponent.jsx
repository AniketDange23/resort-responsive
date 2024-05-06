import React from 'react';

function VideoComponent() {
  return (
    <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
      {/* 16:9 aspect ratio */}
      <video
        autoPlay  // Autoplay the video
        loop      // Loop the video
        muted     // Mute the video (optional, remove if not needed)
        style={{ position: 'absolute', top: '70px', left: 0, width: '100%', height: '100%' }} // Set video to fill its container
      >
        <source src="/video.mp4" type="video/mp4" />
        {/* Add more <source> tags for different video formats (e.g., WebM, Ogg) */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoComponent;

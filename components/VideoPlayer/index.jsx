import React from 'react'

const VideoPlayer = (property) => {
  return (
    <div>
      <video
        style={{ width: '100%', height: '100%' }}
        autoPlay
        loop
        // src="/videos/tulumBeach.mp4"
        src={property.video}
        className="main p-0 m-0 videoBg"
        type="video/mp4"
      ></video>
    </div>
  )
}

export default VideoPlayer

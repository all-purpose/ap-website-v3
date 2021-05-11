import React, {useState, useRef} from 'react';
import './BackgroundVideo.scss';

const BackgroundVideo = props => {

  const {
    id,
    url,
    type,
    title,
    playbackRate
  } = props

  const [isPlaying, setPlayVideo] = useState(true) // Set default to true as background videos play automatically

  const videoRef = useRef()

  const setPlayBack = () => {
    if (!url) {
      return false
    }
    videoRef.current.playbackRate = playbackRate
  }

  const handlePlayPauseClick = () => {
    if (isPlaying === true) {
      videoRef.current.pause()
      setPlayVideo(false)
    } else {
      videoRef.current.play()
      setPlayVideo(true)
    }
  }

  const outputBtnContent = () => {

    if (isPlaying === true) {
      return (
        <>
          <span className="video-control--icon pause">
            {/* Carbon pause--filled  */}
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <path d="M12,6H10A2,2,0,0,0,8,8V24a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V8a2,2,0,0,0-2-2Z"/><path d="M22,6H20a2,2,0,0,0-2,2V24a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V8a2,2,0,0,0-2-2Z"/><rect style={{fill:'none'}} width="32" height="32"/>
            </svg>
          </span>
          <span className="video-control--text">Pause</span>
        </>
      )

    } else {
      return (
        <>
          <span className="video-control--icon play">
            {/* Carbon play--filled--alt  */}
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <path d="M7,28a1,1,0,0,1-1-1V5a1,1,0,0,1,1.4819-.8763l20,11a1,1,0,0,1,0,1.7525l-20,11A1.0005,1.0005,0,0,1,7,28Z"/>
              <rect style={{fill:'none'}} width="32" height="32"/>
            </svg>
          </span>
          <span className="video-control--text align-middle">Play</span>
        </>
      )
      
    }

  }

  return (
    <>
      <video
          autoPlay
          loop
          muted
          playsInline
          id={id}
          ref={videoRef}
          onCanPlay={() => setPlayBack()}
          title={title}
      >
        <source
          src={url}
          type={type}
        />
      </video>
      <div className="flex justify-end mt-4">
        <button 
          className="video-controls--play-pause"
          onClick={() => handlePlayPauseClick()}
        >
          {outputBtnContent()} 
        </button>
      </div>
    </>
  )

}

export default BackgroundVideo;


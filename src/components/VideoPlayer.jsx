import React, { useState, useRef, useEffect } from 'react';
import "../styles/VideoPlayer.css";
import sampleVideo from '../../dist/assets/video/portfolioVideo.mp4';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  const handlePlayButtonClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleVideoLoaded = () => {
    setDuration(videoRef.current.duration);
  };

  const handleProgressChange = (event) => {
    const newTime = (event.target.value / 100) * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener('loadedmetadata', handleVideoLoaded);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('loadedmetadata', handleVideoLoaded);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div className="video-container">
      <video ref={videoRef} src={sampleVideo} className="video-element" onClick={handlePlayButtonClick}></video>
      {!isPlaying && (
        <button className="play-button" onClick={handlePlayButtonClick}>
          ▶️
        </button>
      )}
      <input
        type="range"
        className="progress-bar"
        value={(currentTime / duration) * 100 || 0}
        onChange={handleProgressChange}
      />
    </div>
  );
};

export default VideoPlayer;

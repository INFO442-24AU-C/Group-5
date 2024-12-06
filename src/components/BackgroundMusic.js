import React, { useState, useRef } from "react";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Track play/pause state
  const audioRef = useRef(null); // Reference to the audio element

  const togglePlayPause = () => {
    // Play or pause the audio based on the current state
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying); // Update state
  };

  return (
    <div style={{ position: "fixed", top: 10, left: 10, zIndex: 100 }}>
      {/* Button to control music */}
      <button className="audio-control" onClick={togglePlayPause}>
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>

      {/* Audio element to play the background music */}
      <audio ref={audioRef} loop>
        <source src="/background.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default BackgroundMusic;

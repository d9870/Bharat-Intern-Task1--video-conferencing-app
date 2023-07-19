import React from "react";

const Controls = ({
  isPlaying,
  isMuted,
  volume,
  onPlayPause,
  onMuteUnmute,
  onVolumeChange,
}) => {
  return (
    <div className="controls">
      <div className="video-controls">
        <button onClick={onPlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      </div>
      <div className="mic-controls">
        <button onClick={onMuteUnmute}>{isMuted ? "Unmute" : "Mute"}</button>
      </div>
      <div className="volume-controls">
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => onVolumeChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Controls;

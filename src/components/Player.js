import React, { useState } from "react";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying, audioRef }) => {
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  // handlers
  const timeUpdateHandler = (e) => {
    setSongInfo({
      // spread operator, updates song info
      ...songInfo,
      currentTime: e.target.currentTime,
      duration: e.target.duration,
    });
  };

  // Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      setIsPlaying(false); // !isPlaying
      audioRef.current.pause();
    } else {
      setIsPlaying(true); // !isPlaying
      audioRef.current.play();
    }
  };

  const getTime = (time) => {
    // Formats time of the song, mints and secs
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value; //updates audio time when slicing
    setSongInfo({
      // updates song time state when slicing
      ...songInfo,
      currentTime: e.target.value,
    });
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          // input valus
          min={0}
          max={songInfo ? getTime(songInfo.duration) : "0:00"}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio
        // audio events
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;

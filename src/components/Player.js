import React, { useState } from "react";
import { playAudio } from "../util";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songs,
  setSongs,
}) => {
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
  const skipTrackHandler = (direction) => {
    // find what is the index of the current song
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    // stores new index calculated
    let newIndex = currentIndex;
    switch (direction) {
      case "skip-back":
        if (currentIndex - 1 < 0) {
          newIndex = songs.length - 1;
        } else {
          newIndex = (currentIndex - 1) % songs.length;
        }
        break;
      case "skip-forward":
        // when modulus is 0, it resets the index to 0 and start over again
        newIndex = (currentIndex + 1) % songs.length;
        break;
      default:
        break;
    }
    // sets the new song with the new index calculated
    setCurrentSong(songs[newIndex]);
    // updates the library with the active tag
    const newSongs = songs.map((song) => {
      if (song.id === songs[newIndex].id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    // sets the new Songs updated
    setSongs(newSongs);
    // play de audio when skip
    playAudio(isPlaying, audioRef);
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          // input valus
          min={0}
          max={songInfo ? getTime(songInfo.duration) : 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>
          {getTime(songInfo.duration) === "NaN:aN"
            ? "0:00"
            : getTime(songInfo.duration)}
        </p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
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

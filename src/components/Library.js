import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs }) => {
  const songList = songs.map((song) => (
    <LibrarySong
      key={song.id}
      setCurrentSong={setCurrentSong}
      songs={songs}
      song={song}
      id={song.id}
      audioRef={audioRef}
      isPlaying={isPlaying}
      setSongs={setSongs}
    />
  ));

  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">{songList}</div>
    </div>
  );
};

export default Library;

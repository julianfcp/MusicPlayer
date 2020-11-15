import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong }) => {
  const songList = songs.map((song) => (
    <LibrarySong
      key={song.id}
      setCurrentSong={setCurrentSong}
      songs={songs}
      song={song}
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

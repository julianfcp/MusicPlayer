import { useState, useRef } from "react";
// Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
// Styles
import "./styles/app.scss";
// data
import data from "./util";

function App() {
  // Refs
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]); // default songs[0]
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
      />
    </div>
  );
}

export default App;

import { useState } from "react";
// Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
// Styles
import "./styles/app.scss";
// data
import data from "./util";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [curentSong, setCurrentSong] = useState(songs[0]); // default songs[0]
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={curentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={curentSong}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;

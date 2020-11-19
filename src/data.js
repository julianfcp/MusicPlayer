import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Plants",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      artist: "Philantrhope, Ian Ewing, Sleepy Fish",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10255",
      color: ["#915739", "#CB493C"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Willow",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      artist: "Philantrhope, Brock Berrigan, The Field Tapes",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10262",
      color: ["#915739", "#CB493C"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Hidden Structure",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
      artist: "Leavv, Flitz&Suppe",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9913",
      color: ["#7D6D5B", "#255D5A"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "With Time",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
      artist: "Leavv, The Field Tapes",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9925",
      color: ["#7D6D5B", "#255D5A"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Foggy Road",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
      artist: "Toonorth",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7834",
      color: ["#59ABF5", "#414075"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Bliss",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/5bff1a6f1bd0e2168d29b4c841b811598135e457-1024x1024.jpg",
      artist: "Misha, Jussi Halme",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9248",
      color: ["#3F4B76", "#F194A0"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;

import { Routes, Route } from "react-router-dom";
import ArtistSong from "./artistSong";
import ArtistPlaylist from "./artistPlaylist";
import Singerpage from "./Singerpage"
// import PlayList from "./PlayList"; 

const ArtistRouter = () => {
  return (
    <Routes>
      <Route path="bai-hat" element={<ArtistSong />} />
      <Route path="playlist" element={<ArtistPlaylist />} />
      <Route path="/" element={<Singerpage />} />
      {/* <Route path="playlist" element={<PlayList />} /> */}
    </Routes>
  );
};

export default ArtistRouter;
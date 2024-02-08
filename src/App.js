import './App.css';
import RightSidebar from './components/RightSidebar'
import Bottombar from './components/Bottombar'
import Mainpage_playlist from './components/mainpage_playlist'



function App() {
  const playlists = Array.from({ length: 5 }, (_, index) => ({
    id: index,
    name: `Playlist ${index + 1}`,
    image: "../../img/_e1a54268-fb6e-4c76-98a4-8a32aef31266.jpg",
    artists_list: ["Jisso, Jisso, Jisso, Jisso, Jisso"],
  }));
  return (
    <div className="App">
      <div className="main_content">
        <RightSidebar />
        <Mainpage_playlist playlists={playlists} />
      </div>
        <Bottombar music='https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4'/>
    </div>
  );
}

export default App;

import './App.css';
import RightSidebar from './components/RightSidebar'
import Bottombar from './components/Bottombar'
import Mainpage from './components/mainpage'



function App() {

  const playlistsData = Array.from({ length: 5 }, (_, index) => ({
    id: index,
    name: `Playlist ${index + 1}`,
    image: "../../img/_e1a54268-fb6e-4c76-98a4-8a32aef31266.jpg",
    artists_list: ["Jisso", "Jisso", "Jisso", "Jisso", "Jisso"],
  }));

  const element = Array.from({ length: 5 }, (_, index) => ({
    title: 'title',
    list: playlistsData,
  }));



  return (
    <div className="App">
      <div className="main_content">
        <RightSidebar />
        <Mainpage playlists={element} />
      </div>
      <Bottombar music="https://ve141.aadika.xyz/download/t7tZFq29lis/mp3/128/1708608459/4e83910e4c9d47caaa9034d5f35ec9f81a660c4ee667bc2d8029287f62844953/1?f=X2Download.app" />
    </div>
  );
}


export default App;

import './App.css';
import RightSidebar from './components/RightSidebar'
import Bottombar from './components/Bottombar'
import Mainpage from './components/mainpage'
import { BrowserRouter as Router } from 'react-router-dom';

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
    <Router>
      
      <div className="App">

          <div className="main_content">
            <RightSidebar />
            <Mainpage playlists={element} />
          </div>
          <Bottombar music="https://vnso-zn-16-tf-a128-zmp3.zmdcdn.me/12fb41f934c32cb856933163a2bad73b?authen=exp=1709022776~acl=/12fb41f934c32cb856933163a2bad73b/*~hmac=47652769b376607e4f2a481c74636d82" />
      </div>
    </Router>
  );
}


export default App;

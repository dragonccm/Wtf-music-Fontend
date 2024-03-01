import "./App.css";
import RightSidebar from "./components/sideNavigation/RightSidebar";
import Bottombar from "./components/sideNavigation/Bottombar";
import Mainpage from "./components/pages/mainpage";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Loginform from "./components/pages/loginpage";

function App() {
  const playlistsData = Array.from({ length: 5 }, (_, index) => ({
    id: index,
    name: `Playlist ${index + 1}`,
    image:
      "",
    artists_list: ["Jisso", "Jisso", "Jisso", "Jisso", "Jisso"],
  }));

  const element = Array.from({ length: 5 }, (_, index) => ({
    title: "title",
    list: playlistsData,
  }));
  const Login = () => (
    <div className="App">
      <Loginform />
    </div>
  );
  const Mainn = ({ datas }) => (
    <div className="App">
      <div className="main_content">
        <RightSidebar />
        <Mainpage playlists={datas} />
      </div>
      <Bottombar music="https://vnso-zn-16-tf-a128-zmp3.zmdcdn.me/12fb41f934c32cb856933163a2bad73b?authen=exp=1709022776~acl=/12fb41f934c32cb856933163a2bad73b/*~hmac=47652769b376607e4f2a481c74636d82" />
    </div>
  );
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={ <Mainn datas={element}/>} />
        </Routes>
    </Router>
  );
}

export default App;

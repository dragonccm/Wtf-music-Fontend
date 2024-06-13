import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../css/searchPage.scss";
import Card from "../../components/card/playlist_card";
import SongCard2 from "../../components/card/song_card2";
import { NavLink } from "react-router-dom";
import { searchPageService } from "../../services/searchPageService";

const SearchPage = () => {
  const { id } = useParams();
  const [songData, setSongData] = useState([]);
  const [playlistData, setPlaylistData] = useState([]);
  const [artistsData, setArtistsData] = useState([]);
  const [activeComponent, setActiveComponent] = useState("song");

  const fetchData = async (keyword) => {
    const data = await searchPageService(keyword);
    if (data) {
      const newSongData = [];
      const newPlaylistData = [];
      const newArtistsData = [];
      data.DT.forEach((item) => {
        if (item.type === 1 && !songData.some((song) => song._id === item._id)) {
          newSongData.push(item);
        } else if (item.type === 3 && !playlistData.some((playlist) => playlist._id === item._id)) {
          newPlaylistData.push(item);
        } else if (item.type === 4 && !artistsData.some((artist) => artist._id === item._id)) {
          newArtistsData.push(item);
        }
      });
      setSongData(newSongData);
      setPlaylistData(newPlaylistData);
      setArtistsData(newArtistsData);
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);
  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <section className="searchPage_container">
      <h1 className="searchPage_keyWord">Từ Khoá Tìm Kiếm: {id}</h1>

      <div className="component_buttons">
        <button
          className={`component_button ${activeComponent === "song" ? "active" : ""}`}
          onClick={() => handleComponentChange("song")}
        >
          Songs
        </button>
        <button
          className={`component_button ${activeComponent === "playlist" ? "active" : ""}`}
          onClick={() => handleComponentChange("playlist")}
        >
          Playlists
        </button>
        <button
          className={`component_button ${activeComponent === "artists" ? "active" : ""}`}
          onClick={() => handleComponentChange("artists")}
        >
          Artists
        </button>
      </div>

      {activeComponent === "song" && (
        <>
          <h1 className="singer_detail">Kết quả tìm kiếm nhạc</h1>
          {songData.map((item, i) => (
            <SongCard2 data={item} rating={false}/>
          ))}
          
        </>
      )
      }

      {activeComponent === "playlist" && (
        <div className="list_card">
          <h1>kết quả tìm kiếm PlayList</h1>
          <Card playlist={playlistData} limit={true} />
        </div>
      )}

      {activeComponent === "artists" && (
        <>
          <h1 className="singer_detail">Kết quả tìm kiếm nghệ sĩ</h1>
          <div className="singer_list">
            {artistsData.map((item, i) => (
              <NavLink to={`/artists/${item.alias}`} className="artists_card" key={i}>
                <div className="artists_img">
                  <img src={item.avt} alt={item.artistsName} />
                </div>
                <div className="artists_name">{item.artistsName}</div>
              </NavLink>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default SearchPage;
import { fetchSongPlaying } from "../../redux/slide/songPlayingSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import '../../css/songcard.scss';
import Play_animation from "./play_animation"
import { useSelector, useDispatch } from "react-redux";
import { fetchPlayList, randomSongs } from '../../redux/slide/playlistSlice'
import { toPlay } from '../../redux/slide/songPlayingSlice'

const SongCard = ({ element,isDuration }) => {
  const dispatch = useDispatch();
  const currData = useSelector((state) => state.Authentication);

  const dataf = useSelector((state) => state.playlist.playlist);

  const handlePlaying = async (e, id) => {
    e.preventDefault();
    const song = dataf && dataf.song && dataf.song.find(item => item.id === id);
    if (songInfo.infor.id === id) {
      dispatch(toPlay());
    } else {
      if (song) {
        console.log(`ID ${id} trùng với một bài hát trong playlist.`);
      } else {
        await dispatch(fetchPlayList({ id: id, type: 'ok' }));
        if (JSON.parse(localStorage.getItem('isRandom'))) {
          await dispatch(randomSongs())
        }
        localStorage.setItem('playlistRelate', 'true')

        console.log(`ID ${id} không trùng với bất kỳ bài hát nào trong playlist.`);
      }
      dispatch(fetchSongPlaying(id));
    }
  }
  const songInfo = useSelector((state) => state.getSongData.inforSong);
  const playing = useSelector((state) => state.getSongData.playStatus);

  return (
    <div className="song_card">

      <div className="song_card_item_left">
        <div className="playlist_item_img">

          <img src={element.thumbnail ? element.thumbnail : currData.defaultUser.account.avt} alt="song" />
          {element.id === songInfo.infor.id && playing ?
            <Play_animation />
            :

            <div className="img_overlay">
              <div className="img_overlay_group_btn">
                <NavLink to={element.id} onClick={(e) => handlePlaying(e, element.id)} className="nav-link list_nav_item">
                  <FontAwesomeIcon icon={faPlay} />
                </NavLink>
              </div>
            </div>
          }


        </div>
        <div className="playlist_item_content">
          <div className="content_name">
            <NavLink
              to={"/song/" + (element.id)}>
              {element.songname ? element.songname : element.title}
            </NavLink>

          </div>
          <div className="content_cate">
            {element.artists && element.artists.map(
              (artist, index) => (
                <span key={index}>
                  <NavLink
                    to={
                      "/artists/" +
                      (artist.alias ? artist.alias : artist.aliasName)
                    }
                  >
                    {artist.name ? artist.name : artist.artistsName}
                  </NavLink>
                  {index !==
                    element.artists
                      .length -
                    1 && ","}
                </span>
              )
            )}
          </div>
        </div>
      </div>
      {isDuration &&<div className="song_card_item_right" h1>{String(Math.floor(element.duration / 60)).padStart(2, "0") + ':' + String(Math.round(element.duration) % 60).padStart(2, "0")}</div>}
    </div>
  )
}
export default SongCard
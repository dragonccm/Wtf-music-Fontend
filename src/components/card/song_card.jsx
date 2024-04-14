import { useDispatch } from "react-redux";
import { fetchSongPlaying } from "../../redux/slide/songPlayingSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import '../../css/songcard.scss';

const SongCard = ({ element }) => {
    const dispatch = useDispatch();
    const handlePlaying = (e, id) => {
        e.preventDefault();
        dispatch(fetchSongPlaying(id));
      }
    return (
        <div className="song_card">
                  <div className="playlist_item_img">
                    <img src={element.thumbnailM?element.thumbnailM:element.thumb} alt="Playlist" />
                    <div className="img_overlay">
                      <div className="img_overlay_group_btn">
                        <NavLink to={element.encodeId} onClick={(e) => handlePlaying(e, element.encodeId)} className="nav-link list_nav_item">
                          <FontAwesomeIcon icon={faPlay} />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="playlist_item_content">
                    <div className="content_name">
                      <NavLink
                        to={"/song/" + (element.encodeId ? element.encodeId :element.id)}>
                        {element.title?element.title:element.name}
                      </NavLink>

                    </div>
                    <div className="content_cate">
                      {element.artists && element.artists.map(
                        (artist, index) => (
                          <span key={index}>
                            <NavLink
                              to={
                                "/artists/" +
                                artist.alias
                              }
                            >
                              {artist.name}
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
    )
}
export default SongCard
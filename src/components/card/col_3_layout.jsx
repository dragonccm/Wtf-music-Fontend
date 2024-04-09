import '../../css/col_3_layout.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSongPlaying } from "../../redux/slide/songPlayingSlice";
import { postPlayList } from '../../redux/slide/createPlayList'
import { useSelector } from "react-redux";




const Col3Layout = ({ data }) => {
  const dispatch = useDispatch();
  const slicedData = data.slice(0, 12);
  const currName = useSelector((state) => state.Authentication.defaultUser.account.username);
  // Chia data thành các mảng con có 3 phần tử
  const chunkedData = [];
  const chunkSize = 4;

  for (let i = 0; i < slicedData.length; i += chunkSize) {
    const chunk = slicedData.slice(i, i + chunkSize);
    chunkedData.push(chunk);
  }

  const handlePlaying = (e, id) => {
    e.preventDefault();
    dispatch(fetchSongPlaying(id));
    dispatch(postPlayList({
      playlistname: currName,
      genresid: [
      ],
      artistsId: currName,
      thumbnail: "",
      description: '',
      songid: [
          id
      ]
  }
  ));
  }

  return (
    data && Array.isArray(data) &&
    <div className="col_3_layout_Container">
      {chunkedData.map((chunk, index) => (
        <div key={'haha'+index} className="col_3_layout">
          <div className="col_3_layout_colum">
            {chunk.map((element, elementIndex) => {
              element = {
                ...element,
                artists: element.artists|| [{alias:'haha',name:element.artist[0]}] ,
                thumbnailM: element.thumbnailM || element.img,
                encodeId: element.encodeId || element.id,
                title: element.title || element.name,

              }
              console.log(element)
              return (
                <div key={elementIndex} className="col_3_layout_colum_item">
                  <div className="playlist_item_img">
                    <img src={element.thumbnailM} alt="Playlist" />
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
                        to={"/song/" + element.encodeId}>
                        {element.title}
                      </NavLink>

                    </div>
                    <div className="content_cate">
                      {element.artists && element.artists.map(
                        (artist, index) => (
                          <span key={index}>
                            <a
                              href={
                                "/artists/" +
                                artist.alias
                              }
                            >
                              {artist.name}
                            </a>
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
            })}
          </div>
        </div>
      ))}
    </div>

  );
};

export default Col3Layout;
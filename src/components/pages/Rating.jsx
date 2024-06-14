import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Recommended from "../card/Recommended";
import Loading from "../sideNavigation/mascot_animation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "../../css/Rating.scss";
import { fetchRating } from "../../redux/slide/ratingSlice";

import { useSelector, useDispatch } from "react-redux";
import { fetchSongPlaying } from "../../redux/slide/songPlayingSlice";

const Rating = () => {

  const dispatch = useDispatch();
  const dataRating = useSelector((state) => {
    return state.rating.dataRating;
  });
  useEffect(() => {
    if (Object.keys(dataRating).length === 0) {
      dispatch(fetchRating());
    }
  }, []);
  const RTChart_items = useSelector((state) => {
    return state.rating.RTChart_items;
  });
  const week_vn = useSelector((state) => {
    return state.rating.week_vn;
  });
  const week_us = useSelector((state) => {
    return state.rating.week_us;
  });
  const week_korea = useSelector((state) => {
    return state.rating.week_korea;
  });

  const group_rating = [week_vn, week_us, week_korea]
  const group_rating_title = ['Việt Nam', 'US-UK', 'K-Pop']
  // console.log(group_rating)

  const dataf = useSelector((state) => state.playlist.playlist);

  const handlePlaying = (e, id) => {
    e.preventDefault();
    const song = dataf.song.find(item => item.id === id);
    if (song) {
      console.log(`ID ${id} trùng với một bài hát trong playlist.`);
    } else {
      console.log(`ID ${id} không trùng với bất kỳ bài hát nào trong playlist.`);
    }
    dispatch(fetchSongPlaying(id));
  }
  return (
    <>
      {RTChart_items && Array.isArray(RTChart_items) && Array.isArray(week_vn) && Array.isArray(week_us) && Array.isArray(week_korea) ?
        ( <div>
          <Loading />
      </div>) :
        (<section className="rating_main">
          <Recommended
            datas={RTChart_items}
            type={"BẢNG XẾP HẠNG THÁNG"}
            describe={"KPOP"}
            maxItemsToShow="10"
          />
          <h1 className="week_title">Xếp Hạng Tuần</h1>
          <section className="week_rating">
            {group_rating && group_rating.map((data, index) => {
              return (
                <div className="week_card_ctn" key={'ahha' + index}>
                  <h1 className="top_week_title">{group_rating_title[index]}</h1>
                  {data.items.slice(0, 5).map((data, innerIndex) => (
                    <div className="week_rating_card" key={'haha' + innerIndex}>
                      <div className="current_rank">
                        <p>{innerIndex + 1}</p>
                        {/* {data.rakingStatus !== 0 ?
                          (<div className="go_to">
                            {data.rakingStatus > 0 ?
                              (<><FontAwesomeIcon className="upup" icon={faCaretUp} /> <span>{data.rakingStatus}</span></>)
                              :
                              (<><FontAwesomeIcon className="downdown" icon={faCaretDown} /> <span>{data.rakingStatus * (-1)}</span></>)
                            }
                          </div>) :
                          (<div className="go_to">
                            --
                          </div>)
                        } */}
                        <div className="go_to">--</div>
                      </div>
                      <div className="child_info">
                        <div className="week_rating_img">
                          <img src={data.thumbnail} alt="f" />
                          <div className="img_overlay">
                            <NavLink to={'/' + data.id} onClick={(e) => handlePlaying(e, data.id)} className="nav-link list_nav_item">
                              <FontAwesomeIcon className="play_icon" icon={faPlay} />
                            </NavLink>
                          </div>
                        </div>
                        <section>
                          <div className="week_rating_name">
                            <NavLink
                              to={"/song/" + data.id}>
                              {data.songname}
                            </NavLink>
                          </div>
                          <div className="week_rating_artists">
                            {data.artists && data.artists.map(
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
                                    data.artists
                                      .length -
                                    1 && ","}
                                </span>
                              )
                            )}
                          </div>
                        </section>
                        <div className="time">
                          {String(Math.floor(data.duration / 60)).padStart(2, "0") + ':' + String(Math.round(data.duration) % 60).padStart(2, "0")}
                        </div>
                      </div>
                      <div className="total_time">{data.total_time}</div>
                    </div>
                  ))}
                  <NavLink
                    to={
                      index === 0
                        ? '/rating_week/vn'
                        : index === 1
                          ? '/rating_week/us-uk'
                          : 'rating_week/korea'
                    }
                    className="list_nav_item show_all"
                  >
                    Xem tất cả
                  </NavLink>
                </div>
              )
            })}
          </section>
        </section >)
      }
    </>
  );
};

export default Rating;

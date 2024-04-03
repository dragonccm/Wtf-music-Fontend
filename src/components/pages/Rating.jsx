import React, { useEffect } from "react";
import { NavLink } from "react-bootstrap";
import Recommended from "../card/Recommended";
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

  useEffect(() => {
    dispatch(fetchRating());
  }, [dispatch]);
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
  const group_rating_title = ['Việt Nam','US-UK','K-Pop']
  console.log(group_rating)

  const handlePlaying = (e, id) => {
    e.preventDefault();
    dispatch(fetchSongPlaying(id));
  }
  return (
    <>
      {RTChart_items && Array.isArray(RTChart_items) && Array.isArray(week_vn) && Array.isArray(week_us) && Array.isArray(week_korea) ?
        (<h1>Loading</h1>) :
        (<section className="rating_main">
          <Recommended
            datas={RTChart_items}
            type={"BẢNG XẾP HẠNG THÁNG"}
            describe={"KPOP"}
            maxItemsToShow="10"
          />
          <h1 className="week_title">Xếp Hạng Tháng</h1>
          <section className="week_rating">
            {group_rating && group_rating.map((data, index) => {
              return (
                <>
                  <div className="week_card_ctn" key={'ahha'+index}>
                    <h1 className="top_week_title">{group_rating_title[index]}</h1>
                    {data.items.slice(0, 5).map((data, index) => (
                      <div className="week_rating_card" key={'haha' + index}>
                        <div className="current_rank">
                          <p>{index}</p>
                          {data.rakingStatus !== 0 ?
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
                          }

                        </div>
                        <div className="child_info">
                          <div className="week_rating_img">
                            <img src={data.thumbnailM} alt="f" />
                            <div className="img_overlay">
                              <NavLink to={'/'+data.encodeId} onClick={(e)=>handlePlaying(e,data.encodeId)} className="nav-link list_nav_item">
                                <FontAwesomeIcon className="play_icon" icon={faPlay} />
                              </NavLink>
                            </div>
                          </div>
                          <section>
                            <div className="week_rating_name"><span>{data.title}</span></div>
                            <div className="week_rating_artists">
                              {data.artists.map((artist, artistIndex) => (
                                <span key={'artist' + artistIndex}>{artist.name}</span>
                              ))}
                            </div>
                          </section>
                          <div className="time">
                            {String(Math.floor(data.duration / 60)).padStart(2, "0") + ':' + String(data.duration % 60).padStart(2, "0")}
                          </div>
                        </div>
                        <div className="total_time">{data.total_time}</div>
                      </div>
                    ))}
                    <NavLink
                      to="/playlist"

                      className="list_nav_item show_all"
                    >
                      xem tất cả
                    </NavLink>
                  </div>
                </>
              )
            })}
          </section>
        </section >)
      }
    </>
  );
};

export default Rating;

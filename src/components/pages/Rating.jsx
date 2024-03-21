import React,{useEffect} from "react";
import { NavLink } from "react-bootstrap";
import Recommended from "../card/Recommended";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "../../css/Rating.scss";
import { fetchRating } from "../../redux/slide/ratingSlice";

import { useSelector, useDispatch } from "react-redux";

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
  console.log(week_vn);
  const week_us = useSelector((state) => {
    return state.rating.week_us;
  });
  console.log(week_us);
  const week_korea = useSelector((state) => {
    return state.rating.week_korea;
  });
  console.log(RTChart_items);
  const isLoading = useSelector((state) => {
    return state.rating.isLoading;
  });
  console.log(isLoading)

  if (Array.isArray(RTChart_items) && Array.isArray(week_vn)&&Array.isArray(week_us)&&Array.isArray(week_korea)) {
    
    console.error('RTChart_items is not an array:', RTChart_items);
    return <div className="main_banner">Loading...</div>; 
  }
  return (
  <>
    { isLoading === true ? (<h1>cccccccccccc</h1>):
      (<section className="rating_main">
      <Recommended
        datas={RTChart_items}
        type={"BẢNG XẾP HẠNG THÁNG"}
        describe={"KPOP"}
        maxItemsToShow="10"
      />
      <h1 className="week_title">Xếp Hạng Tháng</h1>
      <section className="week_rating">
        <div className="week_card_ctn">
          <h1 className="top_week_title">Việt Nam</h1>
          {week_vn.items.slice(0, 5).map((data, index) => (
            <div className="week_rating_card" key={'haha' + index}>
              <div className="current_rank">
                <p>{index}</p>
                <div className="up_to">
                  <FontAwesomeIcon icon={faCaretUp} /> {'ok'}
                </div>
              </div>
              <div className="child_info">
                <div className="week_rating_img">
                  <img src={data.thumbnailM} alt="f" />
                  <div className="img_overlay">
                    <NavLink to="/playlist" className="nav-link list_nav_item">
                      <FontAwesomeIcon className="play_icon" icon={faPlay} />
                    </NavLink>
                  </div>
                </div>
                <section>
                  <div className="week_rating_name">{data.title}</div>
                  <div className="week_rating_artists">
                    {data.artists.map((artist, artistIndex) => (
                      <span key={'artist' + artistIndex}>{artist.name}</span>
                    ))}
                  </div>
                </section>
              </div>
              <div className="total_time">{data.total_time}</div>
            </div>
          ))}
          <NavLink
            to="/rating"

            className="nav-link list_nav_item"
            clasName="show_all"
          >
            xem tất cả
          </NavLink>
        </div>

        <div className="week_card_ctn">
          <h1 className="top_week_title">US-UK</h1>
          {week_us.items.slice(0, 5).map((data, index) => (
            <div className="week_rating_card" key={'haha' + index}>
              <div className="current_rank">
                <p>{index}</p>
                <div className="up_to">
                  <FontAwesomeIcon icon={faCaretUp} /> {'ok'}
                </div>
              </div>
              <div className="child_info">
                <div className="week_rating_img">
                  <img src={data.thumbnailM} alt="f" />
                  <div className="img_overlay">
                    <NavLink to="/playlist" className="nav-link list_nav_item">
                      <FontAwesomeIcon className="play_icon" icon={faPlay} />
                    </NavLink>
                  </div>
                </div>
                <section>
                  <div className="week_rating_name">{data.title}</div>
                  <div className="week_rating_artists">
                    {data.artists.map((artist, artistIndex) => (
                      <span key={'artist' + artistIndex}>{artist.name}</span>
                    ))}
                  </div>
                </section>
              </div>
              <div className="total_time">{data.total_time}</div>
            </div>
          ))}
          <NavLink
            to="/rating"

            className="nav-link list_nav_item"
            clasName="show_all"
          >
            xem tất cả
          </NavLink>
        </div>
        <div className="week_card_ctn">
          <h1 className="top_week_title">K-POP</h1>
          {week_korea.items.slice(0, 5).map((data, index) => (
            <div className="week_rating_card" key={'haha' + index}>
              <div className="current_rank">
                <p>{index}</p>
                <div className="up_to">
                  <FontAwesomeIcon icon={faCaretUp} /> {'ok'}
                </div>
              </div>
              <div className="child_info">
                <div className="week_rating_img">
                  <img src={data.thumbnailM} alt="f" />
                  <div className="img_overlay">
                    <NavLink to="/playlist" className="nav-link list_nav_item">
                      <FontAwesomeIcon className="play_icon" icon={faPlay} />
                    </NavLink>
                  </div>
                </div>
                <section>
                  <div className="week_rating_name">{data.title}</div>
                  <div className="week_rating_artists">
                    {data.artists.map((artist, artistIndex) => (
                      <span key={'artist' + artistIndex}>{artist.name}</span>
                    ))}
                  </div>
                </section>
              </div>
              <div className="total_time">{data.total_time}</div>
            </div>
          ))}
          <NavLink
            to="/playlist"

            className="nav-link list_nav_item"
            clasName="show_all"
          >
            xem tất cả
          </NavLink>
        </div>
      </section>
    </section>)
      }
      </>
  );
};

export default Rating;

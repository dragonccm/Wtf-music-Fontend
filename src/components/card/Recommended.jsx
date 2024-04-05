import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/recommend.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regular } from "@fortawesome/free-regular-svg-icons";

import { faPlay } from "@fortawesome/free-solid-svg-icons";
import {  useDispatch } from "react-redux";
import { fetchSongPlaying } from "../../redux/slide/songPlayingSlice";

const Recommended = ({ datas, type, describe, maxItemsToShow }) => {
  const dispatch = useDispatch();

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const validDatas = Array.isArray(datas) ? datas : [];
  console.log("dụ má có", datas)
  const handlePlaying = (e, id) => {
    e.preventDefault();
    dispatch(fetchSongPlaying(id));
  }
  return (
    <>
      {/* lable */}
      <h1 className="Recommended">
        <i className="animation"></i>
        {type}
        <i className="animation"></i>
      </h1>
      <p className="Recommended_1">{describe}</p>
      {/* lable */}
      {validDatas
        .slice(0, showAll ? validDatas.length : maxItemsToShow)
        .map((data, index) => (
          <div className="list_row" key={'haha'+index}>
            <div className="song_img_ctn">
              <div className="row_order">
                <div className="number">{index + 1}</div>

              </div>
              <div className="song_img">
                <img src={data.thumbnailM} alt="f" />
                <div className="img_overlay">
                  <NavLink
                    to={'/'+data.encodeId}
                    onClick={(e)=>handlePlaying(e,data.encodeId)}
                    className="nav-link list_nav_item"
                  >
                    <FontAwesomeIcon icon={faPlay} />
                  </NavLink>
                </div>
              </div>
              <div className="songif">
                <div className="songname">
                  <NavLink
                        to={"/song/" + data.encodeId}>
                        {data.title}
                      </NavLink>
                </div>
                <div className="songartist">
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
              </div>
            </div>
            <div className="root_album"></div>
            {/* <div className="added_time">{data.addedday}</div> */}
            <div className="foot_r">
              <div className="liked">
                <FontAwesomeIcon icon={data.liked_state ? faHeart : regular} />
              </div>
              <div className="time">{String(Math.floor(data.duration / 60)).padStart(2, "0")+':'+ String(data.duration % 60).padStart(2, "0")}</div>
            </div>
          </div>
        ))}
      {validDatas.length > maxItemsToShow && !showAll && (
        <div className="list_row list_row_btn ">
          <button className="refresh" onClick={toggleShowAll}>
            Xem tất cả
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
        </div>
      )}
    </>
  );
};
export default Recommended;

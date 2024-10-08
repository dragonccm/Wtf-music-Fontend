import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Recommended from "../card/Recommended";
import Skeleton from '@mui/material/Skeleton';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "../../css/Rating.scss";
import { fetchRating } from "../../redux/slide/ratingSlice";

import { useSelector, useDispatch } from "react-redux";
import { fetchSongPlaying } from "../../redux/slide/songPlayingSlice";

const Rating = () => {

  const dispatch = useDispatch();
  const ratingState = useSelector((state) => state.rating);
  const dataRating = ratingState.dataRating;
  const RTChart_items = dataRating.RTChart;
  const week_vn = ratingState.week_vn;
  const week_us = ratingState.week_us
  const week_korea = ratingState.week_korea;
  const indexes = RTChart_items && RTChart_items.song.map((item, index1) => {
    const id = item.id;
    const index2 = RTChart_items.playlists.songid.findIndex(songId => songId === id);
    return { id, index1, index2 };
  });
  const indexesWee = () => {
    const weeklySongIndexes = []; // Mảng lưu trữ thông tin về vị trí của bài hát trong mỗi tuần
    
    dataRating && dataRating.weekChart && dataRating.weekChart.forEach((weekItem, weekIndex) => {
      const songIndexesForWeek = []; // Mảng lưu trữ thông tin về vị trí của bài hát trong tuần hiện tại
      
      weekItem.song.forEach((songItem, songIndex) => {
        const id = songItem.id;
        const index2 = RTChart_items.playlists.songid.findIndex(songId => songId === id); // Tìm vị trí của bài hát trong bảng xếp hạng của tất cả các tuần
        const indexObj = { id, index1: songIndex, index2 };
        songIndexesForWeek.push(indexObj); // Thêm thông tin về bài hát vào mảng 
      });
      
      weeklySongIndexes.push(songIndexesForWeek); // Thêm thông tin về bài hát của tuần hiện tại vào mảng
    });
    
    return weeklySongIndexes; // Trả về mảng hai chiều lưu trữ thông tin về vị trí của bài hát trong mỗi tuần
  };
  const indexesWeek = dataRating && dataRating.weekChart && indexesWee()



  useEffect(() => {
    if (Object.keys(dataRating).length === 0) {
      dispatch(fetchRating());
    }
  }, []);



  const group_rating = [week_vn.song, week_us.song, week_korea.song]



  const group_rating_title = ['Việt Nam', 'US-UK', 'K-Pop']
  console.log(group_rating)

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
      {RTChart_items && Array.isArray(RTChart_items.song) && Array.isArray(week_vn.song) && Array.isArray(week_us.song) && Array.isArray(week_korea.song) ?

        (
          <section className="rating_main">
            <Recommended
              datas={RTChart_items.song}
              type={"BẢNG XẾP HẠNG THÁNG"}
              // describe={"Tổng Hợp"}
              maxItemsToShow="10"
              rank={indexes}
            />
            <h1 className="week_title">Xếp Hạng Tuần</h1>
            <section className="week_rating">
              {group_rating && group_rating[0] && group_rating[0].length > 0 ? group_rating.map((data, index) => {
                return (
                  <div className="week_card_ctn" key={'ahha' + index}>
                    <h1 className="top_week_title">{group_rating_title[index]}</h1>
                    {data.slice(0, 5).map((data, innerIndex) => (
                      <div className="week_rating_card" key={'haha' + innerIndex}>
                        <div className="current_rank">
                          <p>{innerIndex + 1} </p>
                          {/* <h1>{indexesWeek[index][innerIndex].index1}</h1> */}
                          <div className="go_to">
                            {indexesWeek.length > 0 && indexesWeek[index] && indexesWeek[index][innerIndex] && indexesWeek[index][innerIndex].index1 - indexesWeek[index][innerIndex].index2 > 0 ?
                              (<>
                                <FontAwesomeIcon className="upup" icon={faCaretUp} />
                                <span>
                                  {indexesWeek[index][innerIndex].index1 - indexesWeek[index][innerIndex].index2}
                                </span>
                              </>)
                              :
                              indexesWeek[index][innerIndex].index1 - indexesWeek[index][innerIndex].index2 > 0 ?
                                (<><FontAwesomeIcon className="downdown" icon={faCaretDown} /> <span>{indexesWeek[index][innerIndex].index2 - indexesWeek[index][innerIndex].index1}</span></>)
                                :
                                (<span>--</span>)
                            }
                          </div>
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
              })
                :
                <>
                  {Array.from({ length: 3 }).map((_, innerIndex) => (
                    <div className="week_rating_card" key={'haha' + innerIndex}>
                      <div className="current_rank">
                        <Skeleton variant="circular" width={30} height={30} />
                        <Skeleton variant="text" width={30} height={15} />
                      </div>
                      <div className="child_info">
                        <div className="week_rating_img">
                          <Skeleton variant="rectangular" width={40} height={40} />
                        </div>
                        <section>
                          <Skeleton variant="text" width={168} height={18} />
                          <Skeleton variant="text" width={168} height={18} />
                        </section>
                        <Skeleton variant="text" width={50} height={15} />
                      </div>
                      <Skeleton variant="text" width={50} height={15} />
                    </div>
                  ))}
                </>
              }
            </section>
          </section >)
        : (<div>
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="song_card2">
              <div className="song_img_ctn">
                <div className="row_order">
                  <Skeleton variant="circular" width={30} height={30} />
                </div>
                <div className="song_img">
                  <Skeleton variant="rectangular" width={60} height={60} />
                </div>
                <div className="songif">
                  <Skeleton variant="text" width={200} height={20} />
                  <Skeleton variant="text" width={200} height={15} />
                </div>
              </div>
              <div className="root_album">
                <Skeleton variant="rectangular" width={100} height={15} />
              </div>
              <div className="foot_r">
                <Skeleton variant="circular" width={20} height={20} />
                <Skeleton variant="text" width={50} height={15} />
              </div>
            </div>
          ))}
        </div>)
      }
    </>
  );
};

export default Rating;

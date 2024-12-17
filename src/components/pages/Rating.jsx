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

  useEffect(() => {
    if (Object.keys(dataRating).length === 0) {
      dispatch(fetchRating());
    }
  }, []);

  
  const indexes = RTChart_items && RTChart_items.NowPlaylist.songs.map((item, index1) => {
    const id = item.id;
    const index2 = RTChart_items.lastPlaylist.songid.findIndex(songId => songId === id);
    return { id, index1, index2 };
  });
  const indexesWee = () => {
    const weeklySongIndexes = []; // Mảng lưu trữ thông tin về vị trí của bài hát trong mỗi tuần
    // weekChart=[1,2,3]
    dataRating && dataRating.weekChart && dataRating.weekChart.forEach((weekItem, weekIndex) => {
      const songIndexesForWeek = []; // Mảng lưu trữ thông tin về vị trí của bài hát trong tuần hiện tại
      
      weekItem.NowPlaylist.songs.forEach((songItem, songIndex) => {
        const id = songItem.id;
        const index2 = weekItem.lastPlaylist.songid.findIndex(songId => songId === id); // Tìm vị trí của bài hát trong bảng xếp hạng của tất cả các tuần
        const indexObj = { id, index1: songIndex, index2 };
        songIndexesForWeek.push(indexObj); // Thêm thông tin về bài hát vào mảng 
      });
      
      weeklySongIndexes.push(songIndexesForWeek); // Thêm thông tin về bài hát của tuần hiện tại vào mảng
    });
    
    return weeklySongIndexes; // Trả về mảng hai chiều lưu trữ thông tin về vị trí của bài hát trong mỗi tuần
  };

  const indexesWeek = dataRating && dataRating.weekChart && indexesWee()
  const group_rating = [week_vn, week_us, week_korea]



  const group_rating_title = ['Việt Nam', 'US-UK', 'K-Pop']

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
      {RTChart_items && Array.isArray(RTChart_items.NowPlaylist.songs) && Array.isArray(week_vn.NowPlaylist.songs) && Array.isArray(week_us.NowPlaylist.songs) && Array.isArray(week_korea.NowPlaylist.songs) ?

        (
          <section className="rating_main">
            <Recommended
              datas={RTChart_items.NowPlaylist.songs}
              type={"BẢNG XẾP HẠNG THÁNG"}
              // describe={"Tổng Hợp"}
              maxItemsToShow="10"
              rank={{index:indexes,playlistId:RTChart_items.NowPlaylist.playlistId}}
            />
            <h1 className="week_title">Xếp Hạng Tuần</h1>
            <section className="week_rating">
              {group_rating && group_rating[0] && Object.keys(group_rating).length !== 0 ? group_rating.map((data, index) => {
                return (
                  <div className="week_card_ctn" key={'ahha' + index}>
                    <h1 className="top_week_title">{group_rating_title[index]}</h1>
                    <Recommended
                      datas={data.NowPlaylist.songs.slice(0, 5)}
                      // describe={"Tổng Hợp"}
                      maxItemsToShow="5"
                        rank={
                          {
                            index: indexesWeek[index],
                            playlistId: data.NowPlaylist.playlistId
                          }}
                      size={true}
                    />
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

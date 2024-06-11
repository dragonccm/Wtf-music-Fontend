import React from "react";
import Card from "../card/playlist_card";
import Loading from "../sideNavigation/mascot_animation";
import { useEffect, useState } from "react";
import { fetchGenres } from "../../redux/slide/genresSlice";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import "../../css/hubpage.scss";
const HubPage = () => {
    const dispatch = useDispatch();
    const Genres = useSelector((state) => state.Genres.Genres);
    const loading = useSelector((state) => state.Genres.isLoading);
    useEffect(() => {
        if (Object.keys(Genres).length === 0) {

            dispatch(fetchGenres());
        }
    }, [dispatch]);



    const currData = useSelector((state) => state.Genres.Genres);
    console.log(currData);
    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }
    return (currData && currData.DT &&
        <div className="main_hub">
            <div className="banner">
                <img
                    src="https://photo-zmp3.zmdcdn.me/cover/8/5/2/2/852200087045170e1be8b399dac56a57.jpg"
                    alt="f"
                />
            </div>
            {currData.DT.genres.slice(0, 17).map((data, index) => (
                <React.Fragment key={index}>
                    <div className="for_you">
                        <div style={{marginTop: '20px'}} className="d-flex justify-content-between align-items-baseline">
                            <h1 style={{marginBottom: '10px'}} className="catego_title">{data.genrename}</h1>
                            <NavLink to={`/hub/${data.genreId}`} className="playlist_name" style={{width:'auto'}}>
                               Xem tất cả 
                            </NavLink>
                        </div>
                        <Card playlist={data.playListId} />
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default HubPage;

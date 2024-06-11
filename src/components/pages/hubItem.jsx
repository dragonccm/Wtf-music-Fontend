import React from "react";
import Card from "../card/playlist_card";
import Col3Layout from "../card/col_3_layout";

import Loading from "../sideNavigation/mascot_animation";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getGenresbyId } from "../../controller/genres"
import "../../css/hubpage.scss";
const HubItem = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    useEffect(() => {
        getGenres(id)


    }, []);

    const getGenres = async (id) => {
        let response = await getGenresbyId(id);
        if (response.EC === '0' && response.DT) {
            // console.log(response);
            setData(response.DT)
            setLoading(true);
        } else {
            // console.log('saiiiiiiiiiiiiii')
        }
    }


    const currData = useSelector((state) => state.Genres.Genres);
    console.log(currData);
    if (!loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }
    return (
        data && loading&&
        <div className="main_hub">
            <div className="banner">
                <img
                    src={data.genres.thumbnail}
                    alt="f"
                />
            </div>
            <div className="for_you">
                <h1 className="catego_title">Nổi bật</h1>
                <Card playlist={data.playlists} />
            </div>
            <div className="for_you">
                <h1>Hot Songs</h1>
                <Col3Layout data={data.songs} />
            </div>
            <div className="for_you">
                <h1 className="catego_title">Album</h1>
                <Card playlist={data.albums} />
            </div>
        </div>
    );
};

export default HubItem;

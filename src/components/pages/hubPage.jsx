import React from "react";
import Card from "../card/playlist_card";
import Loading from "../sideNavigation/mascot_animation";
import { useEffect, useState } from "react";
import { fetchGenres } from "../../redux/slide/genresSlice";
import { useSelector, useDispatch } from "react-redux";
import "../../css/hubpage.scss";
const HubPage = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchGenres()).then(() => setLoading(false));
    }, []);

    const dataHandle = (data) => {
        return data.map((con) => ({
            genreId: con.genreId,
            name: con.genrename,
            thumbnailM: con.thumbnail,
            artists_list: [],
        }));
    };

    const currData = useSelector((state) => state.Genres.Genres);
    console.log(currData);
    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }
    return (
        <div className="main_hub">
            <div className="banner">
                <img
                    src="https://photo-zmp3.zmdcdn.me/cover/8/5/2/2/852200087045170e1be8b399dac56a57.jpg"
                    alt="f"
                />
            </div>
            {currData.DT.genres.slice(0, 5).map((data, index) => (
                <React.Fragment key={index}>
                    <div className="for_you">
                        <h1 className="catego_title">{data.genrename}</h1>
                        <Card playlist={dataHandle(data.playListId)} />
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default HubPage;

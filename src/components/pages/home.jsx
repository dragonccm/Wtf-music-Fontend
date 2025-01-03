import React, { useEffect, useState } from "react";

import { fetchHome } from "../../redux/slide/homeSlice";
import { useSelector, useDispatch } from "react-redux";
import SliderBar from "../../components/card/Slider_bar";

import Col3Layout from "../../components/card/col_3_layout";
import Card from "../../components/card/playlist_card";
import Release from "../../components/card/release";
import HomeRating from "../../components/card/Home_ rating";
import Loading from "../sideNavigation/mascot_animation";
import { getHistory } from "../../controller/history"
import { getSlider} from '../../redux/slide/silderSlice';
import { useLocation } from 'react-router-dom';
const HomePage = () => {
    const homeData = useSelector((state) => state.home.isLoading);
    const slider = useSelector((state) => state.slider.sliderData);

    const dispatch = useDispatch();
    const [playlistsData, setPlaylistsData] = useState([])
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    useEffect(() => {
        if (homeData) {
            dispatch(fetchHome());
            dispatch(getSlider())
        }
    }, [homeData,slider]);
    useEffect(() => {
        fecthHPlaylist()
    }, []);
    const fecthHPlaylist = async () => {

        let response = await getHistory();
        if (response && response.DT) {
            setPlaylistsData(response.DT.playlist)
        } else {
            console.log('No Playlists')
        }
    }
    const newRelease = useSelector((state) => state.home.newRelease);
    const songHot = useSelector((state) => state.home.songHot);
    const songRemix = useSelector((state) => state.home.songRemix);
    const songChill = useSelector((state) => state.home.songChill);
    const songSad = useSelector((state) => state.home.songSad);
    const top100 = useSelector((state) => state.home.top100);
    const albumHot = useSelector((state) => state.home.albumHot);
    const hNewrelease = useSelector((state) => state.home.hNewrelease);



    const isLoading = useSelector((state) => state.home.isLoading);
    // useEffect(() => {
    //     console.log(isLoading);
    // }, [isLoading]);
    if (isLoading === true) {
        return <div className="main_banner"><Loading /></div>;
    }
    return (
        <>
            <SliderBar data={slider.DT} />

            {/* <div className="for_you">
                <h1>Gợi Ý Dành Riêng Cho Bạn</h1>
                <Col3Layout data={newRelease.all} />
            </div> */}

            {playlistsData && playlistsData.length > 0 && <div className="list_card">
                <h1>Nghe Gần Đây</h1>
                <Card playlist={playlistsData} />
            </div>}
            <div className="for_you">
                <Release data={newRelease} />
            </div>
            <div className="list_card">
                <h1>Nhạc hot gây bão</h1>
                <Card isDes={true} playlist={songHot} />
            </div>
            <div className="list_card">
                <h1>Remix hay hết sảy</h1>
                <Card isDes={true} playlist={songRemix} />
            </div>
            <div className="list_card">
                <h1>Chill</h1>
                <Card isDes={true} playlist={songChill} />
            </div>
            <div className="list_card">
                <h1>Nhạc buồn tâm trạng</h1>
                <Card isDes={true} playlist={songSad} />
            </div>
            <div className="ratings">
                <h1>BXH nhạc mới</h1>
                <HomeRating data={hNewrelease} />
            </div>
            <div className="list_card">
                <h1>Top 100</h1>
                <Card playlist={top100} />
            </div>
            {/* <div className="list_card">
                <h1>Album hot</h1>
                <Card playlist={albumHot} />
            </div> */}
        </>
    )
}
export default HomePage
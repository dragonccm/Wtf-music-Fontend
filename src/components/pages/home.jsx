import React, { useEffect } from "react";

import { fetchHome } from "../../redux/slide/homeSlice";
import { useSelector,useDispatch } from "react-redux";
import SliderBar from "../../components/card/Slider_bar";

import Col3Layout from "../../components/card/col_3_layout";
import Card from "../../components/card/playlist_card";
import Release from "../../components/card/release";
import HomeRating from "../../components/card/Home_ rating";
import Loading from "../sideNavigation/mascot_animation";

const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchHome());
    }, []);
    const banner = useSelector((state) => state.home.banner);
    const newRelease = useSelector((state) => state.home.newRelease);
    const songHot = useSelector((state) => state.home.songHot);
    const songRemix = useSelector((state) => state.home.songRemix);
    const songChill = useSelector((state) => state.home.songChill);
    const songSad = useSelector((state) => state.home.songSad);
    const top100 = useSelector((state) => state.home.top100);
    const albumHot = useSelector((state) => state.home.albumHot);
    const hNewrelease = useSelector((state) => state.home.hNewrelease);

    const playlistsData = [
        {
            id: 1,
            name: `Playlist ${3 + 1}`,
            image: "https://th.bing.com/th/id/OIP.2Taaw3tCXQRTYFNqPYXOdgHaHa?rs=1&pid=ImgDetMain",
            artists_list: ["Jisso"],
        },
        {
            id: 3,
            name: `Playlist ${3 + 1}`,
            image: "https://i.redd.it/3sx2ys0arsv21.jpg",
            artists_list: ["Jisso"],
        },
        {
            id: 4,
            name: `Playlist ${3 + 1}`,
            image: "https://www.allkpop.com/upload/2021/01/content/070658/1610020733-20210107-rose.jpg",
            artists_list: ["Jisso"],
        },
        {
            id: 5,
            name: `Playlist ${3 + 1}`,
            image: "https://i2.wp.com/blackpinkupdate.com/wp-content/uploads/2019/05/1-BLACKPINK-Jennie-Instagram-Update-25-May-2019.jpg?fit=1080%2C1080&ssl=1",
            artists_list: ["Jisso"],
        },
        {
            id: 6,
            name: `Playlist ${3 + 1}`,
            image: "https://i.pinimg.com/736x/a7/a6/9d/a7a69d9337d6cd2b8b84290a7b9145ad.jpg",
            artists_list: ["Jisso"],
        },
    ];

    const isLoading = useSelector((state) => state.home.isLoading);
    // useEffect(() => {
    //     console.log(isLoading);
    // }, [isLoading]);
    if (isLoading === true) {
        return <div className="main_banner"><Loading/></div>;
    }
    return (
        <>
                                <SliderBar data={banner} />

                                <div className="for_you">
                                    <h1>Gợi Ý Dành Riêng Cho Bạn</h1>
                                    <Col3Layout data={newRelease.all} />
                                </div>

                                <div className="list_card">
                                    <h1>Có thể bạn muốn nghe</h1>
                                    <Card playlist={playlistsData} />
                                </div>
                                <div className="for_you">
                                    <Release data={newRelease} />
                                </div>
                                <div className="list_card">
                                    <h1>Nhạc hot gây bão</h1>
                                    <Card playlist={songHot} />
                                </div>
                                <div className="list_card">
                                    <h1>Remix hay hết sảy</h1>
                                    <Card playlist={songRemix} />
                                </div>
                                <div className="list_card">
                                    <h1>Chill</h1>
                                    <Card playlist={songChill} />
                                </div>
                                <div className="list_card">
                                    <h1>Nhạc buồn tâm trạng</h1>
                                    <Card playlist={songSad} />
                                </div>
                                <div className="ratings">
                                    <h1>BXH nhạc mới</h1>
                                    <HomeRating data={hNewrelease} />
                                </div>
                                <div className="list_card">
                                    <h1>Top 100</h1>
                                    <Card playlist={top100} />
                                </div>
                                <div className="list_card">
                                    <h1>Album hot</h1>
                                    <Card playlist={albumHot} />
                                </div>
                            </>
    )
}
export default HomePage
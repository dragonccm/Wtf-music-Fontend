import { useState, useEffect } from "react";
import Recommended from "../card/Recommended"
import '../../css/rating_week.scss'
import Skeleton from '@mui/material/Skeleton';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchRating } from "../../redux/slide/ratingSlice";
import { useParams } from 'react-router-dom';
import Loading from "../sideNavigation/mascot_animation";
const RatingWeek = () => {

    let { id } = useParams();
    const [area, setArea] = useState(id)

    useEffect(() => {
        setArea(id)
    }, [id]);
    const dispatch = useDispatch();
    const dataRating = useSelector((state) => {
        return state.rating.dataRating;
    });
    const RTChart_items = dataRating.RTChart;

    useEffect(() => {
        if (Object.keys(dataRating).length === 0) {
            dispatch(fetchRating());
        }
    }, [dispatch]);

    if (Object.keys(dataRating).length === 0 || dataRating.weekChart === "null" || dataRating.weekChart === "undefined") {

        return <div className="main_banner">
            <div>
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
            </div>
        </div>;

    }
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

    return (
        <div className="rating_week">
            <h1>Bảng xếp hạng tuần</h1>
            <div className="radio-inputs">
                <label>
                    <input
                        className="radio-input "
                        type="radio"
                        name="engine"
                        value='vn'
                        checked={area === 'vn'}
                    />
                    <span className="radio-tile ">
                        <span className="radio-icon">
                            
                            <NavLink to={'/rating_week/vn'}>
                            Việt Nam
                            </NavLink>
                        </span>
                    </span>
                </label>

                <label>
                    <input
                        className="radio-input "
                        type="radio"
                        name="engine"
                        value='us-uk'
                        checked={area === 'us-uk'}

                    />
                    <span className="radio-tile ">
                        <span className="radio-icon">
                            <NavLink to={'/rating_week/us-uk'}>
                            US-UK
                            </NavLink>
                        </span>
                    </span>
                </label>

                <label>
                    <input
                        className="radio-input "
                        type="radio"
                        name="engine"
                        value='korea'
                        checked={area === 'korea'}

                    />
                    <span className="radio-tile ">
                        <span className="radio-icon">
                            <NavLink to={'/rating_week/korea'}>

                                K-Pop
                            </NavLink>
                        </span>
                    </span>
                </label>
            </div>
            <Recommended
                datas={area === 'vn' ? dataRating.weekChart[0].NowPlaylist.songs : area === 'us-uk' ? dataRating.weekChart[1].NowPlaylist.songs : dataRating.weekChart[2].NowPlaylist.songs}
                type={""}
                describe={""}
                maxItemsToShow="100"
                // isPlaylist={true}

                rank={area === 'vn' ?
                    {
                        index: indexesWeek[0],
                        playlistId: dataRating.weekChart[0].NowPlaylist.playlistId
                    }
                    :
                    area === 'us-uk' ?
                        {
                            index: indexesWeek[1],
                            playlistId: dataRating.weekChart[1].NowPlaylist.playlistId
                        }
                        : {
                            index: indexesWeek[2],
                            playlistId: dataRating.weekChart[2].NowPlaylist.playlistId
                        }
                }
            />
        </div>
    )
}
export default RatingWeek
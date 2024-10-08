import { useState, useEffect } from "react";
import Recommended from "../card/Recommended"
import '../../css/rating_week.scss'
import Skeleton from '@mui/material/Skeleton';

import { useSelector, useDispatch } from "react-redux";
import { fetchRating } from "../../redux/slide/ratingSlice";
import { useParams } from 'react-router-dom';
import Loading from "../sideNavigation/mascot_animation";
const RatingWeek = () => {

    let { id } = useParams();
    const [area, setArea] = useState(id)

    const handleChange = (e) => {
        // console.log(e.target.value); // In ra giá trị của radio button được chọn
        setArea(e.target.value)
    }
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
                        onChange={(e) => handleChange(e)}
                    />
                    <span className="radio-tile ">
                        <span className="radio-icon">
                            Việt Nam
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

                        onChange={(e) => handleChange(e)}

                    />
                    <span className="radio-tile ">
                        <span className="radio-icon">
                            US-UK
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

                        onChange={(e) => handleChange(e)}

                    />
                    <span className="radio-tile ">
                        <span className="radio-icon">
                            K-Pop
                        </span>
                    </span>
                </label>
            </div>
            <Recommended
                datas={area === 'vn' ? dataRating.weekChart[0].song : area === 'us-uk' ? dataRating.weekChart[1].song : dataRating.weekChart[2].song}
                type={""}
                describe={""}
                maxItemsToShow="100"
                rank={area === 'vn' ? indexesWeek[0] : area === 'us-uk' ? indexesWeek[1] : indexesWeek[2]}
            />
        </div>
    )
}
export default RatingWeek
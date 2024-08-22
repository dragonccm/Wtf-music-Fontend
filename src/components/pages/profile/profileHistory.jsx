import Recommended from "../../card/Recommended";
import Card from "../../card/playlist_card";
import { useState, useEffect } from "react";
import '../../../css/profileMyMusic.scss'
import Loading from "../../sideNavigation/mascot_animation";
import { fetchMyHistory } from '../../../redux/slide/myHistory'
import { useSelector, useDispatch } from "react-redux";

const ProfileHistory = ({ type }) => {
    const [area, setArea] = useState('song')
    const dispatch = useDispatch();
    const myHistory = useSelector((state) => {
        return state.myHistory.myHistory;
    });
    useEffect(() => {
        if (Object.keys(myHistory).length === 0 ) {
            
            dispatch(fetchMyHistory());
        }
    }, [dispatch]);
    const likedSong = useSelector((state) => {
        return state.myHistory.song;
    });
    const likedplaylist = useSelector((state) => {
        return state.myHistory.playlist;
    });


    if (!Array.isArray(likedSong)) {
        return <><Loading /></>
    }
   
    const Likesong = ({ data }) => (
        likedSong.length>0 && likedSong[0]?
        <div className="history_ctn">
            <Recommended
                datas={data}
                type={type == 'Bài hát đã nghe'}
                describe={type == 'Bài hát đã nghe'}
                maxItemsToShow="25"
            />
            </div>
            :
            <h3>Lịch sử trống</h3>
    );
    const Myplaylist = ({ datas }) => (
        likedplaylist.length >0 && likedplaylist[0]?
        <section className="mylist_page">
            <div className="Recommended_1">{type == 'mymusic' ? "Playlist-Album yêu thích" : 'Playlist-Album đã nghe'}</div>
            <div className="list_container">
                <Card playlist={datas} isOw={""} />
            </div>
            </section>
            :
            <h3>Bạn chưa có danh sách yêu thích</h3>
    );

    const handleChange = (e) => {
        // console.log(e.target.value); // In ra giá trị của radio button được chọn
        setArea(e.target.value)
    }



    return (
        <div className="like_song">
            <div className="radio-inputs">
                <label>
                    <input
                        className="radio-input "
                        type="radio"
                        name="engine"
                        value='song'
                        checked={area === 'song'}
                        onChange={(e) => handleChange(e)}
                    />
                    <span className="radio-tile ">
                        <span className="radio-icon">
                            Bài hát
                        </span>
                    </span>
                </label>
                <label>
                    <input
                        className="radio-input "
                        type="radio"
                        name="engine"
                        value='playlist'
                        checked={area === 'playlist'}

                        onChange={(e) => handleChange(e)}

                    />
                    <span className="radio-tile ">
                        <span className="radio-icon">
                            Playlist
                        </span>
                    </span>
                </label>
            </div>
            {area === 'song' ? <Likesong data={likedSong} /> : <Myplaylist datas={likedplaylist} />}


            </div>
           
    )
}
export default ProfileHistory
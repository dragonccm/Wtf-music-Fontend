import Recommended from "../../card/Recommended";
import Card from "../../card/playlist_card";
import { useState, useEffect } from "react";
import '../../../css/profileMyMusic.scss'
import Loading from "../../sideNavigation/mascot_animation";
import { getUserLikedSong } from '../../../redux/slide/getUserLikedSongs'
import { useSelector, useDispatch } from "react-redux";

const ProfileMyMusic = ({ type }) => {
    const [area, setArea] = useState('song')
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserLikedSong());
    }, [dispatch]);
    const likedSong = useSelector((state) => {
        return state.ulikedSongs.userlikedSongs;
    });

    if (!Array.isArray(likedSong)) {
        return <><Loading/></>
    }

    const Likesong = ({ data }) => (
        <div className="history_ctn">
          
        </div>
    );
    const Myplaylist = ({ datas }) => (
        <section className="mylist_page">
            <div className="Recommended_1">{type == 'mymusic' ? "Playlist-Album yêu thích" : 'Playlist-Album đã nghe'}</div>
            <div className="list_container">
                <Card playlist={datas} />
            </div>
        </section>
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
            {area === 'song' ? <Likesong data={likedSong} /> : <Myplaylist datas={likedSong} />}


        </div>
    )
}
export default ProfileMyMusic
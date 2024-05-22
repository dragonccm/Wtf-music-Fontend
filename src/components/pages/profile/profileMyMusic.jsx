import Recommended from "../../card/Recommended";
import Card from "../../card/playlist_card";
import { useState, useEffect } from "react";
import '../../../css/profileMyMusic.scss'
import { useSelector, useDispatch } from "react-redux";
import { getInforUser } from "../../../redux/slide/InforUserSlice";
import { getSongData } from "../../../services/SongService";

import Loading from "../../sideNavigation/mascot_animation";

const ProfileMyMusic = ({ type }) => {
    const [area, setArea] = useState('song')
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getInforUser());
    }, [dispatch]);
    const infor = useSelector((state) => {
        return state.inforUser.userInfor;
    });
    useEffect(() => {
        if (infor && infor.DT) {
            const getSongData = async () => {
                const data = await Promise.all(
                    infor.DT.likedSongs.map(async (info) => {
                        return await getSongData(info);
                    })
                );
                console.log(data);
            }
    
            getSongData();
        }
    }, [infor])
       
    

    const Recommendeds = [
        {
            encodeId: "Z7ZE00BE",
            title: `Chuyến Xe Thùng`,
            thumbnailM:
                "https://th.bing.com/th/id/OIP.MfAV8J9NzWpF06S-jLvakQHaLH?rs=1&pid=ImgDetMain",
            category: "playlist",
            artists: [{
                alias: 'Phan Mạnh Cường',
                name: 'Phan Mạnh Cường'
            }],
            songname: "chuyến xe thùng",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata:
                "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            duration: "170",
        },
        {
            encodeId: "Z7ZE00BE",
            title: `Chuyến Xe Thùng`,
            thumbnailM:
                "https://th.bing.com/th/id/OIP.MfAV8J9NzWpF06S-jLvakQHaLH?rs=1&pid=ImgDetMain",
            category: "playlist",
            artists: [{
                alias: 'Phan Mạnh Cường',
                name: 'Phan Mạnh Cường'
            }],
            songname: "chuyến xe thùng",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata:
                "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            duration: "170",
        },
        {
            encodeId: "Z7ZE00BE",
            title: `Chuyến Xe Thùng`,
            thumbnailM:
                "https://th.bing.com/th/id/OIP.MfAV8J9NzWpF06S-jLvakQHaLH?rs=1&pid=ImgDetMain",
            category: "playlist",
            artists: [{
                alias: 'Phan Mạnh Cường',
                name: 'Phan Mạnh Cường'
            }],
            songname: "chuyến xe thùng",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata:
                "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            duration: "170",
        },
        {
            encodeId: "Z7ZE00BE",
            title: `Chuyến Xe Thùng`,
            thumbnailM:
                "https://th.bing.com/th/id/OIP.MfAV8J9NzWpF06S-jLvakQHaLH?rs=1&pid=ImgDetMain",
            category: "playlist",
            artists: [{
                alias: 'Phan Mạnh Cường',
                name: 'Phan Mạnh Cường'
            }],
            songname: "chuyến xe thùng",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata:
                "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            duration: "170",
        },
        {
            encodeId: "Z7ZE00BE",
            title: `Chuyến Xe Thùng`,
            thumbnailM:
                "https://th.bing.com/th/id/OIP.MfAV8J9NzWpF06S-jLvakQHaLH?rs=1&pid=ImgDetMain",
            category: "playlist",
            artists: [{
                alias: 'Phan Mạnh Cường',
                name: 'Phan Mạnh Cường'
            }],
            songname: "chuyến xe thùng",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata:
                "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            duration: "170",
        },

    ];
    const usserplaylist = [
        {
            id: "ZWZB96AI",
            img: "https://th.bing.com/th/id/OIP.iP-3O89bhSHrVr2rUEe4ZQHaEK?rs=1&pid=ImgDetMain",
            title: "Gone",
        },
        {
            id: "ZWZB96AI",
            img: "https://th.bing.com/th/id/OIP.za6JTNz9MpwwZHBiIleI0AHaLH?rs=1&pid=ImgDetMain",
            title: "house",
        },
        {
            id: "ZWZB96AI",
            img: "https://6.viki.io/image/6b2ff0b5d027478cbe9b1a63a8705e10/dummy.jpeg?s=900x600&e=t",
            title: "Money",
        },
    ];


    const Likesong = ({ data }) => (
        <div className="history_ctn">
            <Recommended
                datas={data}
                type={type == 'mymusic' ? "Bài hát yêu thích" : 'Bài hát đã nghe'}
                describe={type == 'mymusic' ? "Bài hát yêu thích" : 'Bài hát đã nghe'}
                maxItemsToShow="5"
            />
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
            {area === 'song' ? <Likesong data={Recommendeds} /> : <Myplaylist datas={usserplaylist} />}


        </div>
    )
}
export default ProfileMyMusic
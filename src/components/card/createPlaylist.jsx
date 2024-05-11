import React, { useState, useRef, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCirclePlus, faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { createPl } from '../../redux/slide/createplaylistSlice'
import { getUserPl } from '../../redux/slide/getUserPlaylistSlice'
import { useSelector, useDispatch } from "react-redux";
import { adSongToPl } from '../../redux/slide/adSongToPlaylistSlice'

const CreatePlaylist = ({songInfo}) => {
    const dispatch = useDispatch()
    const userPlaylist = useSelector((state) => state.getUserPl.userPlaylist);
    console.log(userPlaylist)
    const [clickedButtons, setClickedButtons] = useState([]);
  const [playlistName, setPlaylistName] = useState('');

    const isAuthenticated = useSelector((state) => state.Authentication.defaultUser.isAuthenticated);
    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getUserPl());
        }
    }, [dispatch, isAuthenticated])

    if (!userPlaylist) {
        return (
            <div className="load">skfjfjk</div>
        )
    }
    const handlePushSong = (playlistId, songId) => {
        
        dispatch(adSongToPl({
            playlistId: playlistId,
            songId: [songId]
        }))

        const updatedClickedButtons = [...clickedButtons];

        updatedClickedButtons[playlistId] = true;
        setClickedButtons(updatedClickedButtons);
        // setTimeout(() => {
        //   resetButton();
        // }, 2000);
    }
    const resetButton = () => {
        setClickedButtons([]);
    };
    const handleCreate = (e) => {
        e.preventDefault();

        dispatch(createPl({
            playlistname: playlistName
        }));

        // Reset form input
        setPlaylistName('');
    }
    const handleInputChange = (e) => {
        setPlaylistName(e.target.value);
    }
    return (
        <Popup
            trigger={
                <div className="r_click_list_item add-playlist" >
                    <FontAwesomeIcon icon={faCirclePlus} />
                    Thêm vào playlist
                </div>
            }
            position="right top"
            on="hover"
            closeOnDocumentClick
            mouseLeaveDelay={300}
            mouseEnterDelay={0}
            contentStyle={{ padding: "0", border: "none" }}
            arrow={false}
            nested
        >
            {close => (
                <div className="menu-plalist">
                    {userPlaylist.length < 1 ? (
                        <button className="menu-item">chưa có PlayList</button>
                    ) : (
                        userPlaylist.map((data) =>
                            clickedButtons[data.playlistId] ? (
                                <button
                                    className="menu-item"
                                    key={data.playlistId}
                                >
                                    Thêm Thành Công
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    {() => close()}
                                </button>
                            ) : (
                                data.songid.includes(songInfo.infor.id) ? (
                                    <p  key={data.playlistId} className="menu-item">{data.playlistname}  <FontAwesomeIcon icon={faCircleCheck} /></p>
                                ) : (
                                    <button
                                        className="menu-item"
                                        key={data.playlistId}
                                        onClick={() => handlePushSong(data.playlistId, songInfo.infor.id)}
                                    >
                                        {data.playlistname}
                                    </button>
                                )
                            )
                        )
                    )}

                    <Popup
                        trigger={<button className="menu-item"><FontAwesomeIcon icon={faCirclePlus} /> Tạo PlayList</button>}
                        position="right bottom"
                        nested
                    >
                        {close => (
                            <div className="modal-body">
                                <form onSubmit={handleCreate}>
                                    <div className="gid-gr">
                                        <label htmlFor="add-playlist-input" className="add-playlist-label">Hãy Nhập Tên PlayList</label>
                                        <input
                                            type="text"
                                            value={playlistName}
                                            onChange={handleInputChange}
                                            className="add-playlist-input"
                                        />
                                        <button className="add-playlist-btn" type="submit">tạo mới</button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </Popup>
                </div>)
            }
        </Popup>
    )
}
export default CreatePlaylist
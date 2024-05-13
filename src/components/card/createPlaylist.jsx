import React, { useState, useRef, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCirclePlus, faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { getUserPl } from '../../redux/slide/getUserPlaylistSlice'
import { useSelector, useDispatch } from "react-redux";
import { adSongToPlaylist } from '../../controller/adSongToPlaylist'
import { createplaylist } from '../../controller/createPlaylist'


const CreatePlaylist = ({ idSongs ,type}) => {
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
    const handlePushSong = async (playlistId) => {
        const response = await adSongToPlaylist({
            playlistId: playlistId,
            songId: idSongs
        })
        console.log(response)
        if (response.EC === '0') {
            dispatch(getUserPl());
            alert('success')
        }
    }
   
    const handleCreate = async(e) => {
        e.preventDefault();

        const response = await createplaylist({
            playlistname: playlistName
        })
        console.log(response)
        if (response.EC === '0') {
            dispatch(getUserPl());
            alert('success')
        } else {
            alert('lỗi')
            
        }
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
            position={type? 'left top':'right top'}
            on="hover"
            closeOnDocumentClick
            mouseLeaveDelay={300}
            mouseEnterDelay={0}
            contentStyle={{ padding: "0", border: "none"}}
            arrow={false}
            nested
        >
            {close => (
                <div className="menu-plalist">
                    {userPlaylist.length < 1 ? (
                        <button className="menu-item">chưa có PlayList</button>
                    ) : (
                        userPlaylist.map((data) =>
                             (
                                    <button
                                        className="menu-item"
                                        key={data.playlistId}
                                        onClick={() => handlePushSong(data.playlistId)}
                                    >
                                        {data.playlistname}
                                    </button>
                                )
                            
                        )
                    )}

                    <Popup
                        trigger={<button className="menu-item"><FontAwesomeIcon icon={faCirclePlus} /> Tạo PlayList</button>}
                        position={type? 'left bottom':'right bottom'}
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
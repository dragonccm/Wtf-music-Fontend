import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { userPLayList } from '../../controller/MyPlaylist'
import { useSelector, useDispatch } from "react-redux";
import { adSongToPlaylist } from '../../controller/MyPlaylist'
import { createplaylist } from '../../controller/MyPlaylist'
import { toast } from "react-toastify";
import { setUserPlaylist, AddUserPlaylist } from "../../redux/slide/InforUserSlice";

const CreatePlaylist = ({ idSongs, type }) => {
    const dispatch = useDispatch()
    const userPlaylist = useSelector((state) => {
        return state.inforUser.userPlaylist;
    });
    const [playlistName, setPlaylistName] = useState('');
    const isAuthenticated = useSelector((state) => state.Authentication.defaultUser.isAuthenticated);
    useEffect(() => {
        const fetchPlaylist = async () => {
            const response = await userPLayList();
            if (response.EC === "0") {
                dispatch(setUserPlaylist(response.DT));
            }
        };
        fetchPlaylist();
    }, [dispatch, isAuthenticated])
    const handlePushSong = async (playlistId) => {
        const response = await adSongToPlaylist({
            playlistId: playlistId,
            songId: idSongs
        })
        toast.success(response.EM)
        if (response.EC === '0') {
            dispatch(AddUserPlaylist({
                playlistId: playlistId,
                songId: idSongs
            }));
        }
    }

    const handleCreate = async (e, close) => {
        e.preventDefault();

        const response = await createplaylist({
            playlistname: playlistName
        })
        console.log(response)
        if (response.EC === '0') {
            const fetchPlaylist = async () => {
                const response = await userPLayList();
                if (response.EC === "0") {
                    dispatch(setUserPlaylist(response.DT));
                }
            };
            fetchPlaylist();
            toast.success(response.EM)
            close()
        } else {
            toast.error(response.EM)
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
            position={type ? 'left top' : 'right top'}
            on="hover"
            closeOnDocumentClick
            offsetX={5}
            mouseLeaveDelay={300}
            mouseEnterDelay={0}
            contentStyle={{ padding: "0", border: "none" }}
            arrow={false}
            nested
        >
            {close => (
                <div className="menu-plalist">
                    {userPlaylist.length >= 1 && userPlaylist[0] !== null && (
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
                        position={type ? 'left bottom' : 'right bottom'}
                        modal
                        nested
                    >
                        {close => (
                            <div className="modal-body">
                                <form onSubmit={e => {
                                    handleCreate(e, close); // Pass close to handleCreate
                                }}>
                                    <div className="gid-gr">
                                        <label htmlFor="add-playlist-input" className="add-playlist-label">Hãy Nhập Tên PlayList</label>
                                        <input
                                            type="text"
                                            value={playlistName}
                                            onChange={handleInputChange}
                                            className="add-playlist-input"
                                        />
                                        <button className="add-playlist-btn" type="submit">TẠO MỚI</button>
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
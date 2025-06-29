import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ImageUploader from "../../pages/profile/Profile-setting/uploadImage";
import { MuiChipsInput } from 'mui-chips-input';
import {
    adminSearchS,
    adminSearchPlaylistService,
} from "../../../services/adminSearchSongService";
import { toast } from "react-toastify";
import { updateArtists } from "../../../services/restArtistsService";
import useSingerAdmin from "../../../hooks/useSingerAdmin";

const EditSingerModal = ({
    isEditModalOpen,
    closeEditModal,
    editForm,
    handleEditFormChange,
    updateMusicKind,
    handleEditRemoveSongTag,
    handleEditRemovePlaylistTag,
    handSongsearch,
    searchSong,
    handleEditAddSongTag,
    handPlaylistsearch,
    searchPalylist,
    handleEditAddPlaylistTag,
}) => {
    const [songs, setSongs] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [searchResults, setSearchResults] = useState({ songs: [], playlists: [] });
    const [file, setFile] = useState(null);
    const [localImageUrl, setImageUrl] = useState(editForm.avt);
    const { fetchMusicSongs } = useSingerAdmin();

    useEffect(() => {
        if (editForm.songListNames) {
            setSongs(editForm.songListNames.map(data => ({ id: data.id, name: data.songname })));
        }
        if (editForm.playListNames) {
            setPlaylists(editForm.playListNames.map(data => ({ id: data.playlistId, name: data.playlistname })));
        }
        setImageUrl(editForm.avt); // Set the localImageUrl when the modal is opened
    }, [editForm]);

    const handleSearch = async (type, query) => {
        let response;
        switch (type) {
            case 'song':
                response = await adminSearchS(query);
                setSearchResults({ ...searchResults, songs: response.DT.data.songs });
                break;
            case 'playlist':
                response = await adminSearchPlaylistService(query);
                setSearchResults({ ...searchResults, playlists: response.DT.data.Playlist });
                break;
            default:
                break;
        }
    };

    const handleAddItem = (type, item) => {
        switch (type) {
            case 'song':
                setSongs([...songs, { id: item.id, name: item.songname }]);
                break;
            case 'playlist':
                setPlaylists([...playlists, { id: item.playlistId, name: item.playlistname }]);
                break;
            default:
                break;
        }
    };

    const handleDeleteItem = (type, index) => {
        switch (type) {
            case 'song':
                setSongs(songs.filter((_, i) => i !== index));
                break;
            case 'playlist':
                setPlaylists(playlists.filter((_, i) => i !== index));
                break;
            default:
                break;
        }
    };

    const handleUpload = (uploadedFile) => {
        setFile(uploadedFile);
        setImageUrl(URL.createObjectURL(uploadedFile)); // Update the localImageUrl state
        handleEditFormChange({ target: { name: 'avt', value: uploadedFile } });
    };

    const handleSubmit = async (e) => {
        console.log(playlists)
        e.preventDefault();
        const updatedForm = {
            id: editForm.id,
            artistsName: editForm.artistsName,
            biography: editForm.biography,
            realName: editForm.realName,
            alias: editForm.alias,
            birthday: editForm.birthday,
            totalFollow: editForm.totalFollow,
            songListId: songs.map(s => s.id).filter(id => id),
            playListId: playlists.map(p => p.id).filter(id => id),
            avt: file,
        };
        try {
            const res = await updateArtists(updatedForm);
            if (res) {
                toast.success(res.EM);
                alert("Cập nhật thành công")

                fetchMusicSongs();
                closeEditModal();
            }
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    const getImageUrl = (image) => {
        if (typeof image === 'object' && image !== null) {
            return URL.createObjectURL(image);
        }
        return image;
    };
    return (
        <Modal
            isOpen={isEditModalOpen}
            onRequestClose={closeEditModal}
            contentLabel="Edit Music Kind"
            className="modal-kindMusic overflow-scroll h-75"
            overlayClassName="modal-overlay-1"
        >
            <h2 className="text-center opacity-75 mb-5 fs-2">Chỉnh sửa thông tin Ca sĩ</h2>
           <form onSubmit={handleSubmit} className="d-flex flex-column">
                <div className="mb-4 form-group img-upload">
                    {localImageUrl ? <img style={{ width: "12%" }} src={getImageUrl(localImageUrl)} className="avt-img" alt="Uploaded" /> : <img style={{ width: "12%" }} src='https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg' className="avt-img" alt="Uploaded" />}
                    <ImageUploader onUpload={handleUpload} />
                </div>
                <div style={{ display: "none" }} className="mb-4 form-group hidden">
                    <label className="fs-4 mb-2" htmlFor="edit-name">id:</label>
                    <input type="text" className="fs-4 form-control" id="edit-name" name="id" value={editForm.id} onChange={handleEditFormChange} readOnly />
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-4 mb-2" htmlFor="edit-profile">Tên Nghệ Sĩ:</label>
                    <input type="text" className="fs-4 form-control" id="thumbnail" value={editForm.artistsName} name="artistsName" onChange={handleEditFormChange} />
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-4 mb-2" htmlFor="edit-profile">Mô tả:</label>
                    <input type="text" className="fs-4 form-control" id="bio" name="biography" value={editForm.biography} onChange={handleEditFormChange} />
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-4 mb-2" htmlFor="edit-profile">Tên thật:</label>
                    <input type="text" className="fs-4 form-control" name="realName" id="thumbnail" value={editForm.realName} onChange={handleEditFormChange} />
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-4 mb-2" htmlFor="edit-date">Tên khác:</label>
                    <input type="text" className="fs-4 form-control" id="edit-date" name="alias" value={editForm.alias} onChange={handleEditFormChange} />
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-4 mb-2" htmlFor="edit-date">Sinh nhật:</label>
                    <input type="date" className="fs-4 form-control" id="edit-date" name="birthday" value={editForm.birthday} onChange={handleEditFormChange} />
                </div>
                <div style={{ display: "none" }} className="mb-4 form-group hidden">
                    <label className="fs-4 mb-2" htmlFor="edit-date">Tổng số người theo dõi:</label>
                    <input type="text" className="fs-4 form-control" id="edit-date" name="totalFollow" value={editForm.totalFollow} onChange={handleEditFormChange} readOnly />
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-4 mb-2" htmlFor="edit-song">Nhạc:</label>
                    <input
                        type="text"
                        className="fs-4 form-control mb-2"
                        placeholder="Tìm kiếm nhạc"
                        onChange={(e) => handleSearch('song', e.target.value)}
                    />
                    <MuiChipsInput 
                        value={songs.map(s => s.name)}
                        onAdd={(chip) => handleAddItem('song', { id: chip, songname: chip })}
                        onDeleteChip={(chip, index) => handleDeleteItem('song', index)}
                    />
                    <div className="list-group d-flex flex-wrap">
                        {searchResults.songs.map((song, index) => (
                            <button key={index} type="button" className="list-group-item list-group-item-action m-1" onClick={() => handleAddItem('song', song)}>
                                {song.songname}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-4 mb-2" htmlFor="edit-playlist">Danh sách phát:</label>
                    <input
                        type="text"
                        className="fs-4 form-control mb-2"
                        placeholder="Tìm kiếm playlist"
                        onChange={(e) => handleSearch('playlist', e.target.value)}
                    />
                    <MuiChipsInput 
                        value={playlists.map(p => p.name)}
                        onAdd={(chip) => handleAddItem('playlist', { id: chip, playlistname: chip })}
                        onDeleteChip={(chip, index) => handleDeleteItem('playlist', index)}
                    />
                    <div className="list-group d-flex flex-wrap">
                        {searchResults.playlists.map((playlist, index) => (
                            <button key={index} type="button" className="list-group-item list-group-item-action m-1" onClick={() => handleAddItem('playlist', playlist)}>
                                {playlist.playlistname}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="text-end form-group">
                    <button type="submit" className="px-4 py-2 btn btn-primary fs-4">Cập nhật</button>
                    <button type="button" className="px-4 py-2 btn btn-secondary ms-3 fs-4" onClick={closeEditModal}>Hủy bỏ</button>
                </div>
            </form>
        </Modal>
    );
};

export default EditSingerModal;

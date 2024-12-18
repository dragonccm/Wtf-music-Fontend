import React, { useState } from "react";
import Modal from "react-modal";
import ImageUploader from "../../../components/pages/profile/Profile-setting/uploadImage";
import { MuiChipsInput } from 'mui-chips-input';
import {
    adminSearchS,
    adminSearchArtistsService,
} from "../../../services/adminSearchSongService";
import { toast } from "react-toastify";
import { createArtists } from "../../../services/restArtistsService";
import useSingerAdmin from "../../../hooks/useSingerAdmin";

const CreateSingerModal = ({
    isCreateModalOpen,
    closeCreateModal,
    createForm,
    handleCreateFormChange,
    createMusicKind,
    handleRemoveSongTag,
    handleRemovePlaylistTag,
    handSongsearch,
    searchSong,
    handleAddSongTag,
    handPlaylistsearch,
    searchPalylist,
    handleAddPlaylistTag,
}) => {
    const [songs, setSongs] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [searchResults, setSearchResults] = useState({ songs: [], playlists: [] });
    const [file, setFile] = useState(null);
    const [localImageUrl, setImageUrl] = useState(createForm.avt);
    const { fetchMusicSongs } = useSingerAdmin();

    const handleSearch = async (type, query) => {
        let response;
        switch (type) {
            case 'song':
                response = await adminSearchS(query);
                setSearchResults({ ...searchResults, songs: response.DT.data.songs });
                break;
            case 'playlist':
                response = await adminSearchArtistsService(query);
                setSearchResults({ ...searchResults, playlists: response.DT.data.ar });
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
                setPlaylists([...playlists, { id: item.id, name: item.artistsName }]);
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
        handleCreateFormChange({ target: { name: 'avt', value: uploadedFile } });
        setImageUrl(URL.createObjectURL(uploadedFile));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newForm = {
            artistsName: createForm.artistsName,
            biography: createForm.biography,
            realName: createForm.realName,
            alias: createForm.alias,
            birthday: createForm.birthday,
            totalFollow: createForm.totalFollow,
            songListId: songs.map(s => s.id).filter(id => id),
            playListId: playlists.map(p => p.id).filter(id => id),
            avt: file,
        };
        try {
            const res = await createArtists(newForm);
            if (res) {
                toast.success(res.EM);
                fetchMusicSongs();
                closeCreateModal();
            }
        } catch (error) {
            console.error("Error creating data:", error);
        }
    };

    return (
        <Modal
            isOpen={isCreateModalOpen}
            onRequestClose={closeCreateModal}
            contentLabel="Create Music Kind"
          className="modal-kindMusic overflow-scroll h-75"
            overlayClassName="modal-overlay-1"
        >
            <h2 className="text-center opacity-75 mb-5 fs-2">Tạo mới Ca sĩ</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 form-group img-upload">
                    {localImageUrl ? <img style={{ width: "12%" }} src={localImageUrl} className="avt-img" alt="Uploaded" /> : <img style={{ width: "12%" }} src='https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg' className="avt-img" alt="Uploaded" />}
                    <ImageUploader onUpload={handleUpload} />
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-4 mb-2" htmlFor="create-name">Tên Nghệ Sĩ:</label>
                    <input type="text" className="fs-4 form-control" id="create-name" name="artistsName" value={createForm.artistsName} onChange={handleCreateFormChange} />
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-4 mb-2" htmlFor="create-name">Mô tả:</label>
                    <input type="text" className="fs-4 form-control" id="create-name" name="biography" value={createForm.biography} onChange={handleCreateFormChange} />
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-4 mb-2" htmlFor="create-name">sinh nhât:</label>
                    <input type="date" className="fs-4 form-control" id="create-name" name="birthday" value={createForm.birthday} onChange={handleCreateFormChange} />
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-4 mb-2" htmlFor="create-name">tên thật:</label>
                    <input type="text" className="fs-4 form-control" id="create-name" name="realName" value={createForm.realName} onChange={handleCreateFormChange} />
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-4 mb-2" htmlFor="create-song">Nhạc:</label>
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
                    <label className="fs-4 mb-2" htmlFor="create-playlist">Playlist:</label>
                    <input
                        type="text"
                        className="fs-4 form-control mb-2"
                        placeholder="Tìm kiếm playlist"
                        onChange={(e) => handleSearch('playlist', e.target.value)}
                    />
                    <MuiChipsInput 
                        value={playlists.map(p => p.name)}
                        onAdd={(chip) => handleAddItem('playlist', { id: chip, artistsName: chip })}
                        onDeleteChip={(chip, index) => handleDeleteItem('playlist', index)}
                    />
                    <div className="list-group d-flex flex-wrap">
                        {searchResults.playlists.map((playlist, index) => (
                            <button key={index} type="button" className="list-group-item list-group-item-action m-1" onClick={() => handleAddItem('playlist', playlist)}>
                                {playlist.artistsName}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="text-end form-group">
                    <button type="submit" className="px-4 py-2 btn btn-primary fs-4">Tạo</button>
                    <button type="button" className="px-4 py-2 btn btn-secondary ms-3 fs-4" onClick={closeCreateModal}>Hủy bỏ</button>
                </div>
            </form>
        </Modal>
    );
};

export default CreateSingerModal;

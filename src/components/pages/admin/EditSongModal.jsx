import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ImageUploader from "../../../components/pages/profile/Profile-setting/uploadImage";
import AudioUploader from "../../../components/pages/profile/Profile-setting/upladAudio";
import { MuiChipsInput } from 'mui-chips-input';
import {
    adminSearchArtistsService,
    adminSearchGenreService,
} from "../../../services/adminSearchSongService";
import { toast } from "react-toastify";
import { updateSong } from "../../../services/restSongService";
import { useSongAdmin } from "../../../hooks/useSongAdmin";
import { NavLink } from "react-router-dom";
const EditSongModal = ({ isEditModalOpen, closeEditModal, editForm, handleEditFormChange, imageUrl, audioUrl, updateMusicKind }) => {
    const [genres, setGenres] = useState([]);
    const [artists, setArtists] = useState([]);
    const [searchResults, setSearchResults] = useState({ genres: [], artists: [], songs: [] });
    const [file, setFile] = useState(null);
    const [audioFile, setAudioFile] = useState(null);
    const [localImageUrl, setImageUrl] = useState(imageUrl);
    const [localAudioUrl, setLocalAudioUrl] = useState(audioUrl);
    const { fetchMusicSongs } = useSongAdmin();

    useEffect(() => {
        if (editForm.genresNames) {
            setGenres(editForm.genresNames.map(data => ({ id: data.genreId, label: data.genrename })));
        }
        if (editForm.artistsNames) {
            setArtists(editForm.artistsNames.map(data => ({ id: data.id, label: data.artistsName })));
        }
    }, [editForm]);

    const handleSearch = async (type, query) => {
        let response;
        switch (type) {
            case 'genre':
                response = await adminSearchGenreService(query);
                setSearchResults({ ...searchResults, genres: response.DT.data.genre });
                break;
            case 'artist':
                response = await adminSearchArtistsService(query);
                setSearchResults({ ...searchResults, artists: response.DT.data.ar });
                break;
            default:
                break;
        }
    };

    const handleAddItem = (type, item) => {
        switch (type) {
            case 'genre':
                setGenres([...genres, { id: item.genreId, label: item.genrename }]);
                break;
            case 'artist':
                setArtists([...artists, { id: item.id, label: item.artistsName }]);
                break;
            default:
                break;
        }
    };

    const handleDeleteItem = (type, index) => {
        switch (type) {
            case 'genre':
                setGenres(genres.filter((_, i) => i !== index));
                break;
            case 'artist':
                setArtists(artists.filter((_, i) => i !== index));
                break;
            default:
                break;
        }
    };

    const handleUpload = (uploadedFile) => {
        setFile(uploadedFile);
        handleEditFormChange({ target: { name: 'thumbnail', value: uploadedFile } });
        setImageUrl(URL.createObjectURL(uploadedFile));
    };

    const handleAudioUpload = (uploadedFile) => {
        setAudioFile(uploadedFile);
        handleEditFormChange({ target: { name: 'songLink', value: uploadedFile } });
        setLocalAudioUrl(URL.createObjectURL(uploadedFile));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedForm = {
            id: editForm.id,
            songname: editForm.songname,
            genresid: genres.map(g => g.id).filter(id => id).join(","),
            artists: artists.map(a => a.id).filter(id => id).join(","),
            thumbnail: file,
            songLink: audioFile,
            lyric: editForm.lyric,
            status: 'update'
        };
        try {
            const res = await updateSong(updatedForm);
            if (res) {
                toast.success(res.EM);
                fetchMusicSongs();
                closeEditModal();
            }
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    return (
        <Modal isOpen={isEditModalOpen} onRequestClose={closeEditModal} contentLabel="Edit Song" className="modal-kindMusic overflow-scroll h-75" overlayClassName="modal-overlay-1">
            <NavLink to={`admineditsong/${editForm.id}`}>
                Đến trang chỉnh sửa
            </NavLink>
            <h2 className="text-center opacity-75 mb-5 fs-2">Chỉnh sửa Bài Hát</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 form-group img-upload">
                    {localImageUrl ? <img style={{ width: "12%" }} src={localImageUrl} className="avt-img" alt="Uploaded" /> :  <img style={{ width: "12%" }} src='https://st4.depositphotos.com/14953852/24787/v/380/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg' className="avt-img" alt="Uploaded" />}
                    <ImageUploader onUpload={handleUpload} />
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-5 mb-2" htmlFor="edit-name">Tên bài hát:</label>
                    <input type="text" className="fs-5 form-control" id="edit-name" name="songname" value={editForm.songname} onChange={handleEditFormChange} />
                </div>
                <div className="mb-4 form-group song-upload">
                    {localAudioUrl ? (<audio controls src={localAudioUrl}/>) :   <img style={{ width: "12%" }} src='https://cdn-icons-png.freepik.com/256/15470/15470354.png?semt=ais_hybrid' className="avt-img" alt="Uploaded" />}
                    <AudioUploader onUpload={handleAudioUpload} />
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-5 mb-2" htmlFor="edit-lyric">Lời bài hát:</label>
                    <textarea className="fs-5 form-control" id="edit-lyric" name="lyric" value={editForm.lyric} onChange={handleEditFormChange} />
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-5 mb-2" htmlFor="edit-genre">Thể loại:</label>
                    <input
                        type="text"
                        className="fs-5 form-control mb-2"
                        placeholder="Tìm kiếm thể loại"
                        onChange={(e) => handleSearch('genre', e.target.value)}
                    />
                    <MuiChipsInput
                        value={genres.map(g => g.label)}
                        onAdd={(chip) => handleAddItem('genre', { genreId: chip, genrename: chip })}
                        onDelete={(chip, index) => handleDeleteItem('genre', index)}
                    />
                    <div className="list-group d-flex flex-wrap">
                        {searchResults.genres.map((genre, index) => (
                            <button key={index} type="button" className="list-group-item list-group-item-action m-1" onClick={() => handleAddItem('genre', genre)}>
                                {genre.genrename}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-5 mb-2" htmlFor="edit-artist">Nghệ sĩ:</label>
                    <input
                        type="text"
                        className="fs-5 form-control mb-2"
                        placeholder="Tìm kiếm nghệ sĩ"
                        onChange={(e) => handleSearch('artist', e.target.value)}
                    />
                    <MuiChipsInput
                        value={artists.map(a => a.label)}
                        onAdd={(chip) => handleAddItem('artist', { id: chip, artistsName: chip })}
                        onDelete={(chip, index) => handleDeleteItem('artist', index)}
                    />
                    <div className="list-group d-flex flex-wrap">
                        {searchResults.artists.map((artist, index) => (
                            <button key={index} type="button" className="list-group-item list-group-item-action m-1" onClick={() => handleAddItem('artist', artist)}>
                                {artist.artistsName}
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

export { EditSongModal };

export default EditSongModal;

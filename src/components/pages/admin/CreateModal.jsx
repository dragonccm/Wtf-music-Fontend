import React, { useState } from "react";
import Modal from "react-modal";
import { MuiChipsInput } from 'mui-chips-input';
import ImageUploader from "../../../components/pages/profile/Profile-setting/uploadImage";
import {
    adminSearchS,
    adminSearchArtistsService,
    adminSearchGenreService,
} from "../../../services/adminSearchSongService";
import { toast } from "react-toastify";
import { createPlaylist } from "../../../services/restPlaylistService";
import { usePlaylistAdmin } from "../../../hooks/usePlaylistAdmin";

const CreateModal = ({ isOpen, closeModal, form, handleFormChange, imageUrl, createMusicKind }) => {
    const [genres, setGenres] = useState([]);
    const [artists, setArtists] = useState([]);
    const [songs, setSongs] = useState([]);
    const [searchResults, setSearchResults] = useState({ genres: [], artists: [], songs: [] });
    const [file, setFile] = useState(null);
    const [localImageUrl, setImageUrl] = useState(imageUrl);
    const { fetchMusicSongs } = usePlaylistAdmin();

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
            case 'song':
                response = await adminSearchS(query);
                setSearchResults({ ...searchResults, songs: response.DT.data.songs });
                break;
            default:
                break;
        }
    };

    const handleAddItem = (type, item) => {
        switch (type) {
            case 'genre':
                setGenres([...genres, { id: item.genreId, name: item.genrename }]);
                break;
            case 'artist':
                setArtists([...artists, { id: item.id, name: item.artistsName }]);
                break;
            case 'song':
                setSongs([...songs, { id: item.id, name: item.songname }]);
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
            case 'song':
                setSongs(songs.filter((_, i) => i !== index));
                break;
            default:
                break;
        }
    };

    const handleUpload = (uploadedFile) => {
        setFile(uploadedFile);
        handleFormChange({ target: { name: 'thumbnail', value: uploadedFile } });
        setImageUrl(URL.createObjectURL(uploadedFile));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newForm = {
            playlistname: form.playlistname,
            genresid: genres.map(g => g.id).filter(id => id),
            artistsId: artists.map(a => a.id).filter(id => id),
            songid: songs.map(s => s.id).filter(id => id),
            thumbnail: file,
            type: form.type,
            description: form.description,
            status: 'create'
        };
        try {
            const res = await createPlaylist(newForm);
            if (res) {
                toast.success(res.EM);
                fetchMusicSongs();
                closeModal();
            }
        } catch (error) {
            console.error("Error creating data:", error);
        }
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Create Music Kind" className="modal-kindMusic overflow-scroll h-75" overlayClassName="modal-overlay-1">
            <h2 className="text-center opacity-75 mb-5 fs-2">Tạo mới Danh sách</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 form-group">
                    <label className="fs-5 mb-2" htmlFor="create-name">playlistname:</label>
                    <input type="text" className="fs-5 form-control" id="create-name" name="playlistname" value={form.playlistname} onChange={handleFormChange} />
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-5 mb-2" htmlFor="edit-profile">thumbnail:</label>
                    {localImageUrl && <img style={{ width: "12%" }} src={localImageUrl} className="avt-img" alt="Uploaded" />}
                    <ImageUploader onUpload={handleUpload} />
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-5 mb-2" htmlFor="create-name">type:</label>
                    <input type="text" className="fs-5 form-control" id="create-name" name="type" value={form.type} onChange={handleFormChange} />
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-5 mb-2" htmlFor="create-description">description:</label>
                    <input type="text" className="fs-5 form-control" id="create-description" name="description" value={form.description} onChange={handleFormChange} />
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-5 mb-2" htmlFor="create-genre">Thể loại:</label>
                    <input
                        type="text"
                        className="fs-5 form-control mb-2"
                        placeholder="Tìm kiếm thể loại"
                        onChange={(e) => handleSearch('genre', e.target.value)}
                    />
                    <MuiChipsInput 
                        value={genres.map(g => g.name)}
                        onAdd={(chip) => handleAddItem('genre', { genreId: chip, genrename: chip })}
                        onDeleteChip={(chip, index) => handleDeleteItem('genre', index)}
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
                    <label className="fs-5 mb-2" htmlFor="create-song">Nhạc:</label>
                    <input
                        type="text"
                        className="fs-5 form-control mb-2"
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
                    <label className="fs-5 mb-2" htmlFor="create-artist">Nghệ sĩ:</label>
                    <input
                        type="text"
                        className="fs-5 form-control mb-2"
                        placeholder="Tìm kiếm nghệ sĩ"
                        onChange={(e) => handleSearch('artist', e.target.value)}
                    />
                    <MuiChipsInput 
                        value={artists.map(a => a.name)}
                        onAdd={(chip) => handleAddItem('artist', { id: chip, artistsName: chip })}
                        onDeleteChip={(chip, index) => handleDeleteItem('artist', index)}
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
                    <button type="submit" className="px-4 py-2 btn btn-primary fs-4">Create</button>
                    <button type="button" className="px-4 py-2 btn btn-secondary ms-3 fs-4" onClick={closeModal}>Hủy bỏ</button>
                </div>
            </form>
        </Modal>
    );
};

export { CreateModal };

export default CreateModal;

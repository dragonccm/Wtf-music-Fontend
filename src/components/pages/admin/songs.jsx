import React, { useState, useEffect } from "react";
import "../../../css/admin/musicAdmin.scss";
import logo from "../../../img/logo3 (1).png";
import { adminGetSong } from "../../../services/adminSongService";
import {
    updateSong,
    deleteSong,
    createSong,
} from "../../../services/restSongService";
import {
    adminSearchS,
    adminSearchArtistsService,
    adminSearchGenreService,
} from "../../../services/adminSearchSongService";
import { getbanService } from "../../../services/getbanService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SongTable from "./table/SongTable";
import EditSongModal from "./model/EditSongModal";
import CreateSongModal from "./model/CreateSongModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
const SongAdmin = () => {
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [audioFile, setAudioFile] = useState(null);
    const [audioUrl, setAudioUrl] = useState("");
    const [isSendingRequest, setIsSendingRequest] = useState(false);
    const [selectedSong, setSelectedSong] = useState(null);
    const [musicSongs, setMusicSongs] = useState([]);
    const [editForm, setEditForm] = useState({
        id: "",
        songname: "",
        thumbnail: "",
        artistsNames: [],
        genresNames: [],
        songLink: "",
        like: 0,
        listen: 0,
    });
    const [createForm, setCreateForm] = useState({
        songname: "",
        thumbnail: "",
        artistsNames: [],
        genresNames: [],
        songLink: "",
        lyric: "",
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [maxpage, setmaxpage] = useState(0);
    const [searchGenre, setSearchGenre] = useState([]);
    const [searchAr, setSearchAr] = useState([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isGenreModalOpen, setIsGenreModalOpen] = useState(false);
    const [isArModalOpen, setIsArModalOpen] = useState(false);
    const itemsPerPage = 10;

    useEffect(() => {
        fetchMusicSongs();
    }, [currentPage]);
    const handleChange = (event, value) => {
        setCurrentPage(value);
    };
    const fetchMusicSongs = async () => {
        if (!isSendingRequest) {
            setIsSendingRequest(true);
            try {
                const response = await adminGetSong(
                    parseInt((currentPage - 1) * itemsPerPage)
                );
                setMusicSongs(response.handledata);
                setmaxpage(response.maxPage);
                setIsSendingRequest(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    };

    

    const handleUpload = (file) => {
        setFile(file);
        setImageUrl(URL.createObjectURL(file));
    };

    const handleAudioUpload = (audioFile) => {
        setAudioFile(audioFile);
        setAudioUrl(URL.createObjectURL(audioFile));
    };

    const updateMusicSongs = async (data) => {
        if (!isSendingRequest) {
            setIsSendingRequest(true);

            try {
                data.thumbnail = file;
                data.songLink = audioFile;
                const res = await updateSong(data);
                if (res) {
                    setIsEditModalOpen(false);
                    toast.success(res.EM);
                    fetchMusicSongs()
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    };

    const createMusicSongs = async (data) => {
        if (!isSendingRequest) {
            setIsSendingRequest(true);
            try {
                data.thumbnail = file;
                data.songLink = audioFile;
                const res = await createSong(data);
                if (res) {
                    setIsCreateModalOpen(false);
                    toast.success(res.EM);
                    fetchMusicSongs()
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    };

    const deleteMusicSongs = async (data) => {
        if (!isSendingRequest) {
            setIsSendingRequest(true);
            const newdata = {
                id: data,
                songname: "",
                thumbnail: "",
                artistsNames: [],
                genresNames: [],
                songLink: "",
                lyric: "",
            };
            try {
                const res = await deleteSong(newdata);
                if (res) {
                    toast.success("đã cập nhật trạng thái bài hát");
                    fetchMusicSongs()
                    setIsSendingRequest(false);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    };

    const createMusicKind = async (e) => {
        e.preventDefault();
        createMusicSongs(createForm);
    };

    const updateMusicKind = async (e) => {
        e.preventDefault();
        updateMusicSongs(editForm);
    };

    const deleteMusicKind = async (id) => {
        deleteMusicSongs(id);
    };

    const openEditModal = (kind) => {
        setSelectedSong(kind);
        setEditForm({
            id: kind.id,
            songname: kind.songname,
            thumbnail: kind.thumbnail,
            artistsNames: kind.artistsNames,
            genresNames: kind.genresNames,
            songLink: kind.songLink,
            like: kind.like,
            listen: kind.listen,
        });
        setIsEditModalOpen(true);
    };

    const openGenreModal = (e, kind) => {
        e.preventDefault();
        setIsGenreModalOpen(true);
    };

    const openArModal = (e, kind) => {
        e.preventDefault();
        setIsArModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };

    const closeGenreModal = () => {
        setIsGenreModalOpen(false);
    };

    const closeArModal = () => {
        setIsArModalOpen(false);
    };

    const openCreateModal = (kind) => {
        setSelectedSong(kind);
        setCreateForm({
            songname: kind.songname,
            thumbnail: kind.thumbnail,
            artistsNames: kind.artistsNames,
            genresNames: kind.genresNames,
            songLink: kind.songLink,
            lyric: kind.lyric,
        });
        setIsCreateModalOpen(true);
    };

    const closeCreateModal = () => {
        setIsCreateModalOpen(false);
    };

    const handleEditFormChange = async (e) => {
        const { name, value } = e.target;
        setEditForm({
            ...editForm,
            [name]: value,
        });
    };

    const handleCreateFormChange = (e) => {
        const { name, value } = e.target;
        setCreateForm({ ...createForm, [name]: value });
    };

    const handleserch = async (e) => {
        try {
            const ser = await adminSearchS(e.target.value);
            setMusicSongs(ser.DT.data.songs);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handarleserch = async (e) => {
        try {
            const ser = await adminSearchArtistsService(e.target.value);
            setSearchAr(ser.DT.data.ar);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handgenreleserch = async (e) => {
        try {
            const ser = await adminSearchGenreService(e.target.value);
            setSearchGenre(ser.DT.data.genre);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleAddGenreTag = (e, id) => {
        e.preventDefault();
        if (!editForm.genresNames.some(genre => genre.genreId === id)) {
            setEditForm((prevState) => ({
                ...prevState,
                genresNames: [...prevState.genresNames, { genreId: id, genrename: id }],
            }));
        } else {
            alert("id đã tồn tại");
        }
    };

    const handleAddArTag = (e, id) => {
        e.preventDefault();
        if (!editForm.artistsNames.some(artist => artist.id === id)) {
            setEditForm((prevState) => ({
                ...prevState,
                artistsNames: [...prevState.artistsNames, { id: id, artistsName: id }],
            }));
        } else {
            alert("id đã tồn tại");
        }
    };

    const handleRemoveGenreTag = (e, id) => {
        e.preventDefault();
        setEditForm((prevState) => ({
            ...prevState,
            genresNames: prevState.genresNames.filter((genre) => genre.genreId !== id),
        }));
    };

    const handleRemoveArTag = (e, id) => {
        e.preventDefault();
        setEditForm((prevState) => ({
            ...prevState,
            artistsNames: prevState.artistsNames.filter((artist) => artist.id !== id),
        }));
    };

    const handleCreateAddGenreTag = (e, id) => {
        e.preventDefault();
        if (!createForm.genresNames.some(genre => genre.genreId === id)) {
            setCreateForm((prevState) => ({
                ...prevState,
                genresNames: [...prevState.genresNames, { genreId: id, genrename: id }],
            }));
        } else {
            alert("id đã tồn tại");
        }
    };

    const handleCreateAddArTag = (e, id) => {
        e.preventDefault();
        if (!createForm.artistsNames.some(artist => artist.id === id)) {
            setCreateForm((prevState) => ({
                ...prevState,
                artistsNames: [...prevState.artistsNames, { id: id, artistsName: id }],
            }));
        } else {
            alert("id đã tồn tại");
        }
    };

    const handleCreateRemoveGenreTag = (e, id) => {
        e.preventDefault();
        setCreateForm((prevState) => ({
            ...prevState,
            genresNames: prevState.genresNames.filter((genre) => genre.genreId !== id),
        }));
    };

    const handleCreateRemoveArTag = (e, id) => {
        e.preventDefault();
        setCreateForm((prevState) => ({
            ...prevState,
            artistsNames: prevState.artistsNames.filter((artist) => artist.id !== id),
        }));
    };

    const handlegetban = async (e) => {
        try {
            const ser = await getbanService();
            setMusicSongs(ser.DT.song);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div className="container overflow-x-auto container-admin">
            <div className="text-center container-img">
                <img style={{ width: "12%" }} src={logo} alt="logo" />
            </div>
            <div className="d-flex align-items-center justify-content-between px-4 header-admin">
                <h2 className="fw-normal fs-1 heading-admin">
                    Danh sách bài hát
                </h2>
                <div className="d-flex flex-row align-items-end justify-content-center actions-admin">
                    <button className="p-3 fs-4 py-2 bg-transparent" data-bs-toggle="tooltip" data-bs-placement="left" title="Đến Trang Đăng Nhạc">
                        <a href="/admin/adminupload"><FontAwesomeIcon icon={faUpRightFromSquare} /></a>
                    </button>
                    <button className="btn fs-4 py-2 " onClick={openCreateModal}>
                        Thêm mới bài hát nhanh
                    </button>
                </div>
            </div>
            <div className="event-admin">
                <div className="d-flex flex-column align-items-end justify-content-center actions-admin">
                    <button
                        className="btn fs-4"
                        onClick={(e) => handlegetban(e)}
                    >
                        Lấy Nghệ Bị Ban
                    </button>
                </div>
                <div class="card">
                    <label className="fs-3 me-3" htmlFor="search-kind">
                        Tìm kiếm:
                    </label>
                    <div class="input-box">
                        <input
                            id="search-kind"
                            type="text"
                            placeholder="Nhập ca sĩ"
                            required
                            className="fs-4 ps-3 py-1 border border-dark-subtle rounded-1"
                            onChange={handleserch}
                        />
                    </div>
                </div>
            </div>
            <SongTable
                musicSongs={musicSongs}
                openEditModal={openEditModal}
                deleteMusicKind={deleteMusicKind}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                maxpage={maxpage}
                handlePageChange={handleChange}
            />
            <EditSongModal
                isEditModalOpen={isEditModalOpen}
                closeEditModal={closeEditModal}
                editForm={editForm}
                handleEditFormChange={handleEditFormChange}
                handleUpload={handleUpload}
                handleAudioUpload={handleAudioUpload}
                imageUrl={imageUrl}
                audioUrl={audioUrl}
                updateMusicKind={updateMusicKind}
                openArModal={openArModal}
                openGenreModal={openGenreModal}
                handleAddArTag={handleAddArTag}
                handleRemoveArTag={handleRemoveArTag}
                handleAddGenreTag={handleAddGenreTag}
                handleRemoveGenreTag={handleRemoveGenreTag}
                isArModalOpen={isArModalOpen}
                closeArModal={closeArModal}
                handarleserch={handarleserch}
                searchAr={searchAr}
                isGenreModalOpen={isGenreModalOpen}
                closeGenreModal={closeGenreModal}
                handgenreleserch={handgenreleserch}
                searchGenre={searchGenre}
            />
            <CreateSongModal
                isCreateModalOpen={isCreateModalOpen}
                closeCreateModal={closeCreateModal}
                createForm={createForm}
                handleCreateFormChange={handleCreateFormChange}
                handleUpload={handleUpload}
                handleAudioUpload={handleAudioUpload}
                imageUrl={imageUrl}
                audioUrl={audioUrl}
                createMusicKind={createMusicKind}
                openArModal={openArModal}
                openGenreModal={openGenreModal}
                handleCreateAddArTag={handleCreateAddArTag}
                handleCreateRemoveArTag={handleCreateRemoveArTag}
                handleCreateAddGenreTag={handleCreateAddGenreTag}
                handleCreateRemoveGenreTag={handleCreateRemoveGenreTag}
                isArModalOpen={isArModalOpen}
                closeArModal={closeArModal}
                handarleserch={handarleserch}
                searchAr={searchAr}
                isGenreModalOpen={isGenreModalOpen}
                closeGenreModal={closeGenreModal}
                handgenreleserch={handgenreleserch}
                searchGenre={searchGenre}
            />
            <ToastContainer
                style={{ fontSize: "16px" }}
                position="bottom-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default SongAdmin;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "../../../css/admin/musicAdmin.scss";
import Modal from "react-modal";
import logo from "../../../img/logo3 (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { adminGetSong } from "../../../services/adminSongService";
import {
    updateSong,
    deleteSong,
    createSong,
} from "../../../services/restSongService";
import { adminSearchS } from "../../../services/adminSearchSongService";
import ImageUploader from "../../../components/pages/profile/Profile-setting/uploadImage";
import AudioUploader from "../../../components/pages/profile/Profile-setting/upladAudio";
import { getbanService } from "../../../services/getbanService";
const SongAdmin = () => {
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState("");

    const [audioFile, setAudioFile] = useState(null);
    const [audioUrl, setAudioUrl] = useState("");
    const [isSendingRequest, setIsSendingRequest] = useState(false);
    const [selectedSong, setSelectedSong] = useState(null); // Thể loại đang được chọn
    const [musicSongs, setMusicSongs] = useState([]); // Danh sách thể loại nhạc
    // các state edit
    const [editForm, setEditForm] = useState({
        id: "",
        songname: "",
        thumbnail: "",
        artists: [],
        genresid: [],
        songLink: "",
        like: "",
        listen: "",
    });
    const [createForm, setCreateForm] = useState({
        songname: "",
        thumbnail: "",
        artists: [],
        genresid: [],
        songLink: "",
        lyric: "",
    });
    // phân trang
    const [currentPage, setCurrentPage] = useState(1);
    const [maxpage, setmaxpage] = useState(0); // Danh sách thể loại nhạc
    // tìm kiếm
    const [searchGenre, setSearchGenre] = useState([]);
    const [searchAr, setSearchAr] = useState([]);
    // quản lý modal
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isGenreModalOpen, setIsGenreModalOpen] = useState(false);
    const [isArModalOpen, setIsArModalOpen] = useState(false);

    const handlePageChange = (pageNum) => {
        if (pageNum < 1 || pageNum > Math.ceil(maxpage / itemsPerPage)) {
            return;
        }
        setCurrentPage(pageNum);
        fetchMusicSongs();
    };
    const handleUpload = (file) => {
        setFile(file);
        setImageUrl(URL.createObjectURL(file));
        console.log("file img", file);
    };
    const handleAudioUpload = (audioFile) => {
        setAudioFile(audioFile);
        setAudioUrl(URL.createObjectURL(audioFile));
        console.log("file audio ", audioFile, audioUrl);
    };
    const itemsPerPage = 20;

    useEffect(() => {
        fetchMusicSongs();
    }, []);

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
    const updateMusicSongs = async (data) => {
        try {
            data.thumbnail = file;
            data.songLink = audioFile;
            await updateSong(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const createMusicSongs = async (data) => {
        try {
            data.thumbnail = file;
            data.songLink = audioFile;
            await createSong(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const deleteMusicSongs = async (data) => {
        const newdata = {
            id: data,
            songname: "",
            thumbnail: "",
            artists: "",
            genresid: "",
            songLink: "",
            lyric: "",
        };
        try {
            await deleteSong(newdata);
        } catch (error) {
            console.error("Error fetching data:", error);
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
            artists: kind.artists,
            genresid: kind.genresid,
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

    // Đóng pop-up form chỉnh sửa
    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };
    const closeGenreModal = () => {
        setIsGenreModalOpen(false);
    };
    const closeArModal = () => {
        setIsArModalOpen(false);
    };
    // Hiển thị pop-up form tạo mới
    const openCreateModal = (kind) => {
        setSelectedSong(kind);
        setCreateForm({
            songname: kind.songname,
            thumbnail: kind.thumbnail,
            artists: kind.artists,
            genresid: kind.genresid,
            songLink: kind.songLink,
            lyric: kind.lyric,
        });
        setIsCreateModalOpen(true);
    };
    // Đóng pop-up form tạo mới
    const closeCreateModal = () => {
        setIsCreateModalOpen(false);
    };
    // Xử lý sự kiện thay đổi giá trị trong form chỉnh sửa
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
            setMusicSongs(ser.DT.songs);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const handarleserch = async (e) => {
        try {
            const ser = await adminSearchS(e.target.value);
            setSearchAr(ser.DT.ar);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const handgenreleserch = async (e) => {
        try {
            const ser = await adminSearchS(e.target.value);
            setSearchGenre(ser.DT.genre);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // form edit

    const handleAddGenreTag = (e, id) => {
        e.preventDefault();
        if (!editForm.genresid.includes(id)) {
            editForm.genresid.push(id);
        } else {
            alert("id đã tồn tại");
        }
    };
    const handleAddArTag = (e, id) => {
        e.preventDefault();
        if (!editForm.artists.includes(id)) {
            setEditForm((prevState) => ({
                ...prevState,
                artists: [...prevState.artists, id],
            }));
        } else {
            alert("id đã tồn tại");
        }
    };
    const handleRemoveGenreTag = (e, id) => {
        e.preventDefault();
        if (editForm.genresid.includes(id)) {
            editForm.filter((item) => item !== id);
        } else {
            alert("id đã tồn tại");
        }
    };
    const handleRemoveArTag = (e, id) => {
        e.preventDefault();
        if (editForm.artists.includes(id)) {
            setEditForm((prevState) => ({
                ...prevState,
                artists: prevState.artists.filter((item) => item !== id),
            }));
        } else {
            alert("id không tồn tại");
        }
    };

    // form tạo mới
    const handleCreateAddGenreTag = (e, id) => {
        e.preventDefault();
        if (!createForm.genresid || !createForm.genresid.includes(id)) {
            setCreateForm((prevState) => ({
                ...prevState,
                genresid: [...(prevState.genresid || []), id],
            }));
        } else {
            alert("id đã tồn tại");
        }
    };
    const handleCreateAddArTag = (e, id) => {
        e.preventDefault();
        if (!createForm.artists || !createForm.artists.includes(id)) {
            setCreateForm((prevState) => ({
                ...prevState,
                artists: [...(prevState.artists || []), id],
            }));
        } else {
            alert("id đã tồn tại");
        }
    };
    const handleCreateRemoveGenreTag = (e, id) => {
        e.preventDefault();
        if (createForm.genresid && createForm.genresid.includes(id)) {
            setCreateForm((prevState) => ({
                ...prevState,
                genresid: prevState.genresid.filter((item) => item !== id),
            }));
        } else {
            alert("id không tồn tại");
        }
    };
    const handleCreateRemoveArTag = (e, id) => {
        e.preventDefault();
        if (createForm.artists && createForm.artists.includes(id)) {
            setCreateForm((prevState) => ({
                ...prevState,
                artists: prevState.artists.filter((item) => item !== id),
            }));
        } else {
            alert("id không tồn tại");
        }
    };
    const handlegetban = async (e) => {
        try {
            const ser = await getbanService();
            setMusicSongs(ser.DT.song);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const totalPages = Math.ceil(maxpage / itemsPerPage) - 5;
    return (
        <div className="container overflow-x-auto container-admin">
            <div className="text-center container-img">
                <img style={{ width: "12%" }} src={logo} alt="logo" />
            </div>
            <div className="d-flex align-items-center justify-content-between px-4 header-admin">
                <h2 className="fw-normal fs-1 heading-admin">
                    Danh sách bài hát
                </h2>
                <div className="d-flex flex-column align-items-end justify-content-center actions-admin">
                    <button className="btn fs-4 py-2" onClick={openCreateModal}>
                        Thêm mới bài hát
                    </button>
                </div>
            </div>
            <div className="px-4 py-5 event-admin">
                <div class="card">
                    <label className="fs-3 me-3" htmlFor="search-kind">
                        Tìm kiếm:
                    </label>
                    <div class="input-box">
                        <input
                            id="search-kind"
                            type="text"
                            placeholder="Nhập bài hát"
                            required
                            className="fs-4 ps-3 py-1 border border-dark-subtle rounded-1"
                            onChange={handleserch}
                        />
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between px-4 header-admin">
                <div className="d-flex flex-column align-items-end justify-content-center actions-admin">
                    <button
                        className="btn fs-4 py-2"
                        onClick={(e) => handlegetban(e)}
                    >
                        Lấy Bài Hát Bị Ban
                    </button>
                </div>
            </div>
            <div className="px-4">
                <table className="w-100 fs-3 text-justify table-admin">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên</th>
                            <th>tình trạng</th>
                            <th>Hình Ảnh</th>
                            <th>Lượt Like</th>
                            <th>Lượt Nghe</th>
                            <th>Trạng thái kiểm soát</th>
                        </tr>
                    </thead>
                    <tbody>
                        {musicSongs.map((kind, index) => (
                            <>
                                {kind.state === 1 ? (
                                    <tr style={{ opacity: 0.5 }} key={kind.id}>
                                        <td>{index}</td>
                                        <td>{kind.songname}</td>
                                        <td>
                                            {kind.state === 1
                                                ? "đã ẩn"
                                                : "bình thường"}
                                        </td>
                                        <td className="td_img">
                                            {" "}
                                            <img
                                                src={kind.thumbnail}
                                                alt={kind.songname}
                                            />{" "}
                                        </td>

                                        <td>{kind.like}</td>
                                        <td>{kind.listen}</td>
                                        <td>{kind.state}</td>
                                        <td>
                                            <button
                                                className="btn btn-primary fs-3"
                                                onClick={() =>
                                                    openEditModal(kind)
                                                }
                                            >
                                                <FontAwesomeIcon icon={faPen} />
                                            </button>
                                            <button
                                                className="btn btn-danger-custom fs-3 ms-3"
                                                onClick={() =>
                                                    deleteMusicKind(kind.id)
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                ) : (
                                    <tr key={kind.id}>
                                        <td>{index}</td>
                                        <td>{kind.songname}</td>
                                        <td>
                                            {kind.state === 1
                                                ? "đã ẩn"
                                                : "bình thường"}
                                        </td>
                                        <td className="td_img">
                                            {" "}
                                            <img
                                                src={kind.thumbnail}
                                                alt={kind.songname}
                                            />{" "}
                                        </td>

                                        <td>{kind.like}</td>
                                        <td>{kind.listen}</td>
                                        <td>{kind.state}</td>
                                        <td>
                                            <button
                                                className="btn btn-primary fs-3"
                                                onClick={() =>
                                                    openEditModal(kind)
                                                }
                                            >
                                                <FontAwesomeIcon icon={faPen} />
                                            </button>
                                            <button
                                                className="btn btn-danger-custom fs-3 ms-3"
                                                onClick={() =>
                                                    deleteMusicKind(kind.id)
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                )}
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="d-flex py-4 pagination-admin">
                <div className="col-6 ps-5 description-pagination">
                    <div style={{ fontSize: "medium" }}>
                        Hiển thị{" "}
                        <span style={{ color: "red" }}>
                            {(currentPage - 1) * itemsPerPage + 1} -{" "}
                            {Math.min(currentPage * itemsPerPage, maxpage)}
                        </span>{" "}
                        trong <span style={{ color: "red" }}>{maxpage}</span>{" "}
                        bài hát
                    </div>
                </div>
                <div className="col-6 pe-5 pagination-numbers">
                    <ul className="pagination justify-content-end">
                        <li
                            style={{ backgroundColor: "#d4dae2" }}
                            className="border"
                        >
                            <a
                                className="d-block fs-4 px-4 py-1 opacity-75"
                                href="#"
                                onClick={() => handlePageChange(1)}
                            >
                                Đầu
                            </a>
                        </li>
                        <li className="border">
                            <a
                                className="d-block fs-4 px-4 py-1 opacity-75"
                                href="#"
                                onClick={() =>
                                    handlePageChange(currentPage - 1)
                                }
                                disabled={currentPage === 1}
                            >
                                Lùi
                            </a>
                        </li>
                        <li className="border">
                            <a
                                className="d-block fs-4 px-4 py-1 opacity-75"
                                href="#"
                                onClick={() =>
                                    handlePageChange(currentPage + 1)
                                }
                                disabled={currentPage === totalPages}
                            >
                                Tiếp
                            </a>
                        </li>
                        <li
                            style={{ backgroundColor: "#d4dae2" }}
                            className="border"
                        >
                            <a
                                className="d-block fs-4 px-4 py-1 opacity-75"
                                href="#"
                                onClick={() => handlePageChange(totalPages - 5)}
                            >
                                Cuối
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Hiển thị pop-up form chỉnh sửa thông tin thể loại nhạc */}
            <div className="updateBtn-form-admin">
                <Modal
                    isOpen={isEditModalOpen}
                    onRequestClose={closeEditModal}
                    contentLabel="Edit Music Kind"
                    className="modal-kindMusic"
                    overlayClassName="modal-overlay-1"
                >
                    {/* Nội dung của pop-up form chỉnh sửa */}
                    <h2 className="text-center opacity-75 mb-5 fs-2">
                        Chỉnh sửa thông tin Bài hát
                    </h2>
                    <form>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="edit-name">
                                id:
                            </label>
                            <input
                                type="text"
                                className="fs-4 form-control"
                                id="edit-name"
                                name="id"
                                placeholder={editForm.id}
                                onChange={handleEditFormChange}
                                readOnly
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="edit-email">
                                songname:
                            </label>
                            <input
                                type="text"
                                className="fs-4 form-control"
                                id="edit-email"
                                name="songname"
                                value={editForm.songname}
                                onChange={handleEditFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="edit-profile">
                                thumbnail:
                            </label>
                            {imageUrl && (
                                <img
                                    src={imageUrl}
                                    className="avt-img w-25"
                                    alt="Uploaded"
                                />
                            )}

                            <ImageUploader onUpload={handleUpload} />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="create-email">
                                file nhạc:
                            </label>
                            {audioUrl && (
                                <>
                                    <audio controls>
                                        <source
                                            src={audioUrl}
                                            type="audio/ogg"
                                        />
                                        <source
                                            src={audioUrl}
                                            type="audio/mpeg"
                                        />
                                    </audio>
                                </>
                            )}

                            <AudioUploader onUpload={handleAudioUpload} />
                        </div>
                        <div className="mb-4 form-group">
                            <label
                                style={{ width: "13%" }}
                                className="fs-4 mb-2 me-3"
                                htmlFor="create-date"
                            >
                                nghệ sĩ:
                            </label>
                            <button
                                className="btn btn-outline-primary btn-lg"
                                onClick={(e) => openArModal(e, editForm)}
                            >
                                {" "}
                                chọn nghệ sĩ
                            </button>
                            <div class="row align-items-start">
                                <p>
                                    {editForm.artists &&
                                        editForm.artists.map((d) => (
                                            <button
                                                onClick={(e) =>
                                                    handleRemoveArTag(e, d)
                                                }
                                                className="btn btn-outline-primary btn-lg"
                                            >
                                                {d}{" "}
                                            </button>
                                        ))}
                                </p>
                                <Modal
                                    isOpen={isArModalOpen}
                                    onRequestClose={closeArModal}
                                    contentLabel="Edit Music Kind"
                                    className="modal-kindMusic"
                                    overlayClassName="modal-overlay-1"
                                >
                                    <input
                                        type="text"
                                        className="fs-4 form-control col"
                                        id="create-date"
                                        name="artists"
                                        // value={createForm.artists}
                                        onChange={handarleserch}
                                    />
                                    <p>{editForm.artists}</p>
                                    <div
                                        style={{ height: "20rem" }}
                                        className="d-flex flex-wrap align-content-start gap-3 overflow-scroll"
                                    >
                                        {searchAr ? (
                                            searchAr.map((data) => (
                                                <p value={data.id}>
                                                    <button
                                                        onClick={(e) =>
                                                            handleAddArTag(
                                                                e,
                                                                data.id
                                                            )
                                                        }
                                                        className="btn btn-outline-primary btn-lg"
                                                    >
                                                        {data.artistsName}
                                                    </button>
                                                </p>
                                            ))
                                        ) : (
                                            <option value="sds">
                                                undefine
                                            </option>
                                        )}
                                    </div>
                                </Modal>
                            </div>
                        </div>

                        <div className="mb-4 form-group">
                            <label
                                style={{ width: "13%" }}
                                className="fs-4 mb-2 me-3"
                                htmlFor="create-email"
                            >
                                thể loại:
                            </label>

                            <button
                                className="btn btn-outline-primary btn-lg"
                                onClick={(e) => openGenreModal(e, editForm)}
                            >
                                {" "}
                                chọn thể loại
                            </button>
                            <p>
                                {editForm.genresid &&
                                    editForm.genresid.map((d) => (
                                        <button
                                            onClick={(e) =>
                                                handleRemoveGenreTag(e, d)
                                            }
                                            className="btn btn-outline-primary btn-lg"
                                        >
                                            {d}{" "}
                                        </button>
                                    ))}
                            </p>
                            <Modal
                                isOpen={isGenreModalOpen}
                                onRequestClose={closeGenreModal}
                                contentLabel="Edit Music Kind"
                                className="modal-kindMusic"
                                overlayClassName="modal-overlay-1"
                            >
                                <input
                                    type="text"
                                    className="fs-4 form-control col"
                                    id="create-date"
                                    // value={editForm.genresid}
                                    onChange={handgenreleserch}
                                />
                                <div
                                    style={{ height: "20rem" }}
                                    className="d-flex flex-wrap align-content-start gap-3 overflow-scroll"
                                >
                                    {searchGenre ? (
                                        searchGenre.map((data) => (
                                            <p value={data.genreId}>
                                                <button
                                                    onClick={(e) =>
                                                        handleAddGenreTag(
                                                            e,
                                                            data.genreId
                                                        )
                                                    }
                                                    className="btn btn-outline-primary btn-lg"
                                                >
                                                    {data.genrename}
                                                </button>
                                            </p>
                                        ))
                                    ) : (
                                        <p value="sds">none</p>
                                    )}
                                </div>
                            </Modal>
                            <p>
                                {editForm.genresid &&
                                    editForm.genresid.map((d) => d)}
                            </p>
                        </div>

                        <div className="text-end form-group">
                            <button
                                className="px-4 py-2 btn btn-primary fs-4"
                                onClick={(e) => updateMusicKind(e)}
                            >
                                Cập nhật
                            </button>
                            <button
                                className="px-4 py-2 btn btn-secondary ms-3 fs-4"
                                onClick={closeEditModal}
                            >
                                Hủy bỏ
                            </button>
                        </div>
                    </form>
                </Modal>
            </div>

            {/* Hiển thị pop-up form tạo mới thể loại nhạc */}
            <div className="addBtn-form-admin">
                <Modal
                    isOpen={isCreateModalOpen}
                    onRequestClose={closeCreateModal}
                    contentLabel="Create Music Kind"
                    className="modal-kindMusic"
                    overlayClassName="modal-overlay-1"
                >
                    <h2 className="text-center opacity-75 mb-5 fs-2">
                        Tạo mới Bài hát
                    </h2>
                    <form>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="create-name">
                                tên bài hát:
                            </label>
                            <input
                                type="text"
                                className="fs-4 form-control"
                                id="create-name"
                                name="songname"
                                // value={createForm.songname}
                                onChange={handleCreateFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="edit-profile">
                                thumbnail:
                            </label>
                            {imageUrl && (
                                <img
                                    src={imageUrl}
                                    className="avt-img w-25"
                                    alt="Uploaded"
                                />
                            )}

                            <ImageUploader onUpload={handleUpload} />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="create-email">
                                file nhạc:
                            </label>
                            {audioUrl && (
                                <>
                                    <audio controls>
                                        <source
                                            src={audioUrl}
                                            type="audio/ogg"
                                        />
                                        <source
                                            src={audioUrl}
                                            type="audio/mpeg"
                                        />
                                    </audio>
                                </>
                            )}

                            <AudioUploader onUpload={handleAudioUpload} />
                        </div>

                        {/* model */}
                        <div className="mb-4 form-group">
                            <label
                                style={{ width: "13%" }}
                                className="fs-4 mb-2 me-3"
                                htmlFor="create-date"
                            >
                                nghệ sĩ:
                            </label>
                            <button
                                className="btn btn-outline-primary btn-lg"
                                onClick={(e) => openArModal(e, createForm)}
                            >
                                {" "}
                                chọn nghệ sĩ
                            </button>
                            <div class="row align-items-start">
                                <p>
                                    {createForm.artists &&
                                        createForm.artists.map((d) => (
                                            <button
                                                onClick={(e) =>
                                                    handleCreateRemoveArTag(
                                                        e,
                                                        d
                                                    )
                                                }
                                                className="btn btn-outline-primary btn-lg"
                                            >
                                                {d}{" "}
                                            </button>
                                        ))}
                                </p>
                                <Modal
                                    isOpen={isArModalOpen}
                                    onRequestClose={closeArModal}
                                    contentLabel="Edit Music Kind"
                                    className="modal-kindMusic"
                                    overlayClassName="modal-overlay-1"
                                >
                                    <input
                                        type="text"
                                        className="fs-4 form-control col"
                                        id="create-date"
                                        name="artists"
                                        // value={createForm.artists}
                                        onChange={handarleserch}
                                    />
                                    <p>{createForm.artists}</p>
                                    <div
                                        style={{ height: "20rem" }}
                                        className="d-flex flex-wrap align-content-start gap-3 overflow-scroll"
                                    >
                                        {searchAr ? (
                                            searchAr.map((data) => (
                                                <p value={data.id}>
                                                    <button
                                                        onClick={(e) =>
                                                            handleCreateAddArTag(
                                                                e,
                                                                data.id
                                                            )
                                                        }
                                                        className="btn btn-outline-primary btn-lg"
                                                    >
                                                        {data.artistsName}
                                                    </button>
                                                </p>
                                            ))
                                        ) : (
                                            <option value="sds">
                                                undefine
                                            </option>
                                        )}
                                    </div>
                                </Modal>
                            </div>
                        </div>

                        <div className="mb-4 form-group">
                            <label
                                style={{ width: "13%" }}
                                className="fs-4 mb-2 me-3"
                                htmlFor="create-email"
                            >
                                thể loại:
                            </label>

                            <button
                                className="btn btn-outline-primary btn-lg"
                                onClick={(e) => openGenreModal(e, createForm)}
                            >
                                {" "}
                                chọn thể loại
                            </button>
                            <p>
                                {createForm.genresid &&
                                    createForm.genresid.map((d) => (
                                        <button
                                            onClick={(e) =>
                                                handleCreateRemoveGenreTag(e, d)
                                            }
                                            className="btn btn-outline-primary btn-lg"
                                        >
                                            {d}{" "}
                                        </button>
                                    ))}
                            </p>
                            <Modal
                                isOpen={isGenreModalOpen}
                                onRequestClose={closeGenreModal}
                                contentLabel="Edit Music Kind"
                                className="modal-kindMusic"
                                overlayClassName="modal-overlay-1"
                            >
                                <input
                                    type="text"
                                    className="fs-4 form-control col"
                                    id="create-date"
                                    // value={createForm.genresid}
                                    onChange={handgenreleserch}
                                />
                                <div
                                    style={{ height: "20rem" }}
                                    className="d-flex flex-wrap align-content-start gap-3 overflow-scroll"
                                >
                                    {searchGenre ? (
                                        searchGenre.map((data) => (
                                            <p value={data.genreId}>
                                                <button
                                                    onClick={(e) =>
                                                        handleCreateAddGenreTag(
                                                            e,
                                                            data.genreId
                                                        )
                                                    }
                                                    className="btn btn-outline-primary btn-lg"
                                                >
                                                    {data.genrename}
                                                </button>
                                            </p>
                                        ))
                                    ) : (
                                        <p value="sds">none</p>
                                    )}
                                </div>
                            </Modal>
                            <p>
                                {createForm.genresid &&
                                    createForm.genresid.map((d) => d)}
                            </p>
                        </div>
                        {/* model */}

                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="create-email">
                                lyric:
                            </label>
                            <textarea
                                className="fs-4 form-control"
                                id="create-description"
                                name="lyric"
                                onChange={handleCreateFormChange}
                            ></textarea>
                        </div>
                        <div className="text-end form-group">
                            <button
                                className="px-4 py-2 btn btn-primary fs-4"
                                onClick={(e) => createMusicKind(e)}
                            >
                                Tạo
                            </button>
                            <button
                                className="px-4 py-2 btn btn-secondary ms-3 fs-4"
                                onClick={closeCreateModal}
                            >
                                Hủy bỏ
                            </button>
                        </div>
                    </form>
                </Modal>
            </div>
        </div>
    );
};

export default SongAdmin;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "../../../css/admin/musicAdmin.scss";
import Modal from "react-modal";
import logo from "../../../img/logo3 (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { adminGetArtist } from "../../../services/adminSingerService";
import {
    updateArtists,
    deleteArtists,
    createArtists,
} from "../../../services/restArtistsService";

import {
    adminSearchS,
    adminSearchPlaylistService,
    adminSearchArtistsService,
} from "../../../services/adminSearchSongService";

import ImageUploader from "../../../components/pages/profile/Profile-setting/uploadImage";
import { getbanService } from "../../../services/getbanService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SingerAdmin = () => {
    const [editPlaylistArray, seteditPlaylistArray] = useState([]);
    const [searchPalylist, setsearchPalylist] = useState([]);
    const [searchSong, setSearchSong] = useState([]);

    const [imageUrl, setImageUrl] = useState("");
    const [file, setFile] = useState(null);
    const [loading, setloading] = useState(false);
    const [musicSongs, setMusicSongs] = useState([]);
    const [maxpage, setmaxpage] = useState(0);

    const [selectedSong, setSelectedSong] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isSongModalOpen, setIsSongModalOpen] = useState(false);
    const [isPlaylistModalOpen, setIsPlaylistModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [editForm, setEditForm] = useState({
        id: "",
        avt: "",
        artistsName: "",
        realName: "",
        biography: "",
        totalFollow: "",
        birthday: "",
        songListId: [],
        playListId: [],
    });
    const [createForm, setCreateForm] = useState({
        avt: "",
        artistsName: "",
        realName: "",
        biography: "",
        birthday: "",
        songListId: [],
        playListId: [],
    });

    const handleUpload = (file) => {
        setFile(file);
        setImageUrl(URL.createObjectURL(file));
    };
    const handlePageChange = (pageNum) => {
        if (pageNum < 1 || pageNum > Math.ceil(maxpage / itemsPerPage)) {
            return; // Không thực hiện cập nhật nếu số trang không hợp lệ
        }
        setCurrentPage(pageNum);
        fetchMusicSongs();
        setloading(true);
    };
    const itemsPerPage = 20; // Số mục trên mỗi trang
    // Giả sử chúng ta có một hàm fetchMusicSongs để lấy dữ liệu từ API
    useEffect(() => {
        fetchMusicSongs();
    }, []);
    useEffect(() => {
        fetchMusicSongs();
    }, [currentPage]);

    const fetchMusicSongs = async () => {
        if (loading == false) {
            try {
                // Chuyển logic tính limit và page vào đây
                const offset = (currentPage - 1) * itemsPerPage;
                const response = await adminGetArtist(offset, itemsPerPage);
                if (response) {
                    setMusicSongs(response.handleData);
                    setmaxpage(response.maxPage);
                    setloading(false);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    };
    const updateMusicSongs = async (data) => {
        data.avt = file;
        try {
            const res = await updateArtists(data);
            if (res) {
                toast.success(res.EM);
                fetchMusicSongs()
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const createMusicSongs = async (data) => {
        data.avt = file;
        try {
            const res = await createArtists(data);
            if (res) {
                toast.success(res.EM);
                fetchMusicSongs()
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const deleteMusicSongs = async (data) => {
        const newdata = {
            ...createForm,
            id: data,
        };
        try {
            const res = await deleteArtists(newdata);
            if (res) {
                toast.success("cập nhật thành công");
                fetchMusicSongs()
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    // Hàm tạo mới thể loại nhạc
    const createMusicKind = async (e) => {
        e.preventDefault();
        createMusicSongs(createForm);
    };

    // Hàm chỉnh sửa thông tin thể loại nhạc
    const updateMusicKind = async (e) => {
        e.preventDefault();
        // Gọi API để chỉnh sửa thông tin thể loại nhạc
        // Khi chỉnh sửa thành công, cập nhật state
        updateMusicSongs(editForm);
    };

    // Hàm xóa thể loại nhạc
    const deleteMusicKind = async (id) => {
        deleteMusicSongs(id);
    };

    // Hiển thị pop-up form chỉnh sửa
    const openEditModal = (kind) => {
        setSelectedSong(kind);
        setEditForm({
            id: kind.id,
            avt: kind.avt,
            artistsName: kind.artistsName,
            realName: kind.realName,
            biography: kind.biography,
            totalFollow: kind.totalFollow,
            birthday: kind.birthday,
            songListId: kind.songListId,
            playListId: kind.playListId,
        });
        setIsEditModalOpen(true);
    };

    const openPlaylistModal = (e, kind) => {
        e.preventDefault();
        setIsPlaylistModalOpen(true);
    };
    const openSongModal = (e, kind) => {
        e.preventDefault();
        setIsSongModalOpen(true);
    };
    // Đóng pop-up form chỉnh sửa
    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };

    // Hiển thị pop-up form tạo mới
    const openCreateModal = () => {
        setIsCreateModalOpen(true);
    };

    // Đóng pop-up form tạo mới
    const closeCreateModal = () => {
        setIsCreateModalOpen(false);
    };
    const closeSongModal = () => {
        setIsSongModalOpen(false);
    };
    const closePlaylistModal = () => {
        setIsPlaylistModalOpen(false);
    };
    // Xử lý sự kiện thay đổi giá trị trong form chỉnh sửa
    const handleEditFormChange = async (e) => {
        const { name, value } = e.target;
        console.log({ ...editForm, [name]: value });
        setEditForm({ ...editForm, [name]: value });
    };

    const handleCreateFormChange = (e) => {
        const { name, value } = e.target;
        setCreateForm({ ...createForm, [name]: value });
    };

    const handleserch = async (e) => {
        try {
            const ser = await adminSearchArtistsService(e.target.value);
            console.log(ser);
            setMusicSongs(ser.DT.data.ar);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handPlaylistsearch = async (e) => {
        try {
            const ser = await adminSearchPlaylistService(e.target.value);
            setsearchPalylist(ser.DT.data.Playlist);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const handSongsearch = async (e) => {
        try {
            const ser = await adminSearchS(e.target.value);
            setSearchSong(ser.DT.data.songs);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleAddPlaylistTag = (e, id) => {
        e.preventDefault();
        if (!createForm.playListId || !createForm.playListId.includes(id)) {
            setCreateForm((prevState) => ({
                ...prevState,
                playListId: [...(prevState.playListId || []), id],
            }));
        } else {
            alert("id đã tồn tại");
        }
    };

    const handleAddSongTag = (e, id) => {
        e.preventDefault();
        if (!createForm.songListId || !createForm.songListId.includes(id)) {
            setCreateForm((prevState) => ({
                ...prevState,
                songListId: [...(prevState.songListId || []), id],
            }));
        } else {
            alert("id đã tồn tại");
        }
    };

    const handleRemovePlaylistTag = (e, id) => {
        e.preventDefault();
        if (createForm.playListId && createForm.playListId.includes(id)) {
            setCreateForm((prevState) => ({
                ...prevState,
                playListId: prevState.playListId.filter((item) => item !== id),
            }));
        } else {
            alert("id không tồn tại");
        }
    };

    const handleRemoveSongTag = (e, id) => {
        e.preventDefault();
        if (createForm.songListId && createForm.songListId.includes(id)) {
            setCreateForm((prevState) => ({
                ...prevState,
                songListId: prevState.songListId.filter((item) => item !== id),
            }));
        } else {
            alert("id không tồn tại");
        }
    };

    // edit
    const handleEditAddPlaylistTag = (e, id) => {
        e.preventDefault();
        if (!editForm.playListId || !editForm.playListId.includes(id)) {
            setEditForm((prevState) => ({
                ...prevState,
                playListId: [...(prevState.playListId || []), id],
            }));
        } else {
            alert("id đã tồn tại");
        }
    };

    const handleEditAddSongTag = (e, id) => {
        e.preventDefault();
        if (!editForm.songListId || !editForm.songListId.includes(id)) {
            setEditForm((prevState) => ({
                ...prevState,
                songListId: [...(prevState.songListId || []), id],
            }));
        } else {
            alert("id đã tồn tại");
        }
    };

    const handleEditRemovePlaylistTag = (e, id) => {
        e.preventDefault();

        if (editForm.playListId && editForm.playListId.includes(id)) {
            setEditForm((prevState) => ({
                ...prevState,
                playListId: prevState.playListId.filter((item) => item !== id),
            }));
        } else {
            alert("id không tồn tại");
        }
    };

    const handleEditRemoveSongTag = (e, id) => {
        e.preventDefault();
        if (editForm.songListId && editForm.songListId.includes(id)) {
            setEditForm((prevState) => ({
                ...prevState,
                songListId: prevState.songListId.filter((item) => item !== id),
            }));
        } else {
            alert("id không tồn tại");
        }
    };

    const handlegetban = async (e) => {
        try {
            const ser = await getbanService();
            setMusicSongs(ser.DT.artist);
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
                    Danh sách ca sĩ
                </h2>
                <div className="d-flex flex-column align-items-end justify-content-center actions-admin">
                    <button className="btn fs-4 py-2" onClick={openCreateModal}>
                        Thêm mới ca sĩ
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
                            placeholder="Nhập ca sĩ"
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
                        Lấy Nghệ Bị Ban
                    </button>
                </div>
            </div>
            <div className="px-4">
                <table className="w-100 fs-3 text-justify table-admin">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Trạng thái</th>
                            <th>Hình</th>
                            <th>Tổng lượt theo dõi</th>
                            <th>Tên thật</th>
                            <th>Sinh nhật </th>
                        </tr>
                    </thead>

                    <tbody>
                        {musicSongs.map((kind, index) => (
                            <>
                                {kind.state === 1 ? (
                                    <tr style={{ background: '#b5d5ff' }} key={kind.id}>
                                        <td>{index}</td>
                                        <td>{kind.artistsName}</td>
                                        <td>
                                            {kind.state === 1
                                                ? "tài khoản bị hạn chế"
                                                : "khoá"}
                                        </td>
                                        <td className="td_img">
                                            {" "}
                                            <img
                                                src={kind.avt}
                                                alt={kind.artistsName}
                                            />{" "}
                                        </td>

                                        <td>{kind.totalFollow}</td>

                                        <td>{kind.realName}</td>
                                        <td>{kind.birthday}</td>
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
                                                    icon={faBan}
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                ) : (
                                    <tr key={kind.id}>
                                        <td>{index}</td>
                                        <td>{kind.artistsName}</td>
                                        <td>
                                            {kind.state === 1
                                                ? "tài khoản bị hạn chế"
                                                : "khoá"}
                                        </td>
                                        <td className="td_img">
                                            {" "}
                                            <img
                                                src={kind.avt}
                                                alt={kind.artistsName}
                                            />{" "}
                                        </td>

                                        <td>{kind.totalFollow}</td>

                                        <td>{kind.realName}</td>
                                        <td>{kind.birthday}</td>
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
                                                    icon={faBan}
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
                        trong <span style={{ color: "red" }}>{maxpage}</span> ca
                        sĩ
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
                                disabled={currentPage <= 1}
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
                        Chỉnh sửa thông tin Ca sĩ
                    </h2>
                    <form>
                        <div style={{ display: "none" }} className="mb-4 form-group hidden">
                            <label className="fs-4 mb-2" htmlFor="edit-name">
                                id:
                            </label>
                            <input
                                type="text"
                                className="fs-4 form-control"
                                id="edit-name"
                                name="id"
                                value={editForm.id}
                                onChange={handleEditFormChange}
                                readOnly
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="edit-profile">
                                thumbnail:
                            </label>
                            <img
                                src={imageUrl ? imageUrl : editForm.avt}
                                className="avt-img w-25"
                                alt="Uploaded"
                            />
                            <ImageUploader onUpload={handleUpload} />
                        </div>

                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="edit-profile">
                                artistsName:
                            </label>
                            <input
                                type="text"
                                className="fs-4 form-control"
                                id="thumbnail"
                                value={editForm.artistsName}
                                name="artistsName"
                                onChange={handleEditFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="edit-profile">
                                bio:
                            </label>
                            <input
                                type="text"
                                className="fs-4 form-control"
                                id="bio"
                                name="biography"
                                value={editForm.biography}
                                onChange={handleEditFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="edit-profile">
                                realName:
                            </label>
                            <input
                                type="text"
                                className="fs-4 form-control"
                                name="realName"
                                id="thumbnail"
                                value={editForm.realName}
                                onChange={handleEditFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="edit-date">
                                alias:
                            </label>
                            <input
                                type="text"
                                className="fs-4 form-control"
                                id="edit-date"
                                name="alias"
                                value={editForm.alias}
                                onChange={handleEditFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="edit-date">
                                sinh nhật:
                            </label>
                            <input
                                type="date"
                                className="fs-4 form-control"
                                id="edit-date"
                                name="birthday"
                                value={editForm.birthday}
                                onChange={handleEditFormChange}
                            />
                        </div>
                        <div style={{ display: "none" }} className="mb-4 form-group hidden">
                            <label className="fs-4 mb-2" htmlFor="edit-date">
                                totalFollow:
                            </label>
                            <input
                                type="text"
                                className="fs-4 form-control"
                                id="edit-date"
                                name="totalFollow"
                                value={editForm.totalFollow}
                                onChange={handleEditFormChange}
                                readOnly
                            />
                        </div>

                        <div className="mb-4 form-group">
                            <label
                                style={{ width: "13%" }}
                                className="fs-4 mb-2 me-3"
                                htmlFor="create-date"
                            >
                                songListId:
                            </label>
                            <button
                                className="btn btn-outline-primary btn-lg"
                                onClick={(e) => openSongModal(e, editForm)}
                            >
                                {" "}
                                chọn songListId
                            </button>
                            <div class="row align-items-start">
                                <p>
                                    {editForm.songListId &&
                                        editForm.songListId.map((d) => (
                                            <button
                                                onClick={(e) =>
                                                    handleEditRemoveSongTag(
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
                                    isOpen={isSongModalOpen}
                                    onRequestClose={closeSongModal}
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
                                        onChange={handSongsearch}
                                    />
                                    <p>{editForm.songListId}</p>
                                    <div
                                        style={{ height: "20rem" }}
                                        className="d-flex flex-wrap align-content-start gap-3 overflow-scroll"
                                    >
                                        {searchSong ? (
                                            searchSong.map((data) =>
                                                data !== null ? (
                                                    <p value={data.id}>
                                                        <button
                                                            onClick={(e) =>
                                                                handleEditAddSongTag(
                                                                    e,
                                                                    data.id
                                                                )
                                                            }
                                                            className="btn btn-outline-primary btn-lg"
                                                        >
                                                            {data.songname}
                                                        </button>
                                                    </p>
                                                ) : (
                                                    ""
                                                )
                                            )
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
                                htmlFor="create-date"
                            >
                                playListId:
                            </label>
                            <button
                                className="btn btn-outline-primary btn-lg"
                                onClick={(e) => openPlaylistModal(e, editForm)}
                            >
                                {" "}
                                chọn playListId
                            </button>
                            <div class="row align-items-start">
                                <p>
                                    {editForm.playListId &&
                                        editForm.playListId.map((d) => (
                                            <button
                                                onClick={(e) =>
                                                    handleEditRemovePlaylistTag(
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
                                    isOpen={isPlaylistModalOpen}
                                    onRequestClose={closePlaylistModal}
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
                                        onChange={handPlaylistsearch}
                                    />
                                    <p>{editForm.playListId}</p>
                                    <div
                                        style={{ height: "20rem" }}
                                        className="d-flex flex-wrap align-content-start gap-3 overflow-scroll"
                                    >
                                        {searchPalylist ? (
                                            searchPalylist.map((data) => (
                                                <p value={data.playlistId}>
                                                    <button
                                                        onClick={(e) =>
                                                            handleEditAddPlaylistTag(
                                                                e,
                                                                data.playlistId
                                                            )
                                                        }
                                                        className="btn btn-outline-primary btn-lg"
                                                    >
                                                        {data.playlistname}
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
                        Tạo mới Ca sĩ
                    </h2>
                    <form>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="create-name">
                                Tên Nghệ Sĩ:
                            </label>
                            <input
                                type="text"
                                className="fs-4 form-control"
                                id="create-name"
                                name="artistsName"
                                value={createForm.artistsName}
                                onChange={handleCreateFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="create-name">
                                Mô tả:
                            </label>
                            <input
                                type="text"
                                className="fs-4 form-control"
                                id="create-name"
                                name="biography"
                                value={createForm.biography}
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
                            <label className="fs-4 mb-2" htmlFor="create-name">
                                sinh nhât:
                            </label>
                            <input
                                type="date"
                                className="fs-4 form-control"
                                id="create-name"
                                name="birthday"
                                value={createForm.birthday}
                                onChange={handleCreateFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="create-name">
                                tên thật:
                            </label>
                            <input
                                type="text"
                                className="fs-4 form-control"
                                id="create-name"
                                name="realName"
                                value={createForm.realName}
                                onChange={handleCreateFormChange}
                            />
                        </div>

                        <div className="mb-4 form-group">
                            <label
                                style={{ width: "11%" }}
                                className="fs-4 mb-2 me-3"
                                htmlFor="create-email"
                            >
                                Nhạc:
                            </label>

                            <button
                                className="btn btn-outline-primary btn-lg"
                                onClick={(e) => openSongModal(e, editForm)}
                            >
                                {" "}
                                chọn nhạc
                            </button>
                            <p>
                                {createForm.songListId &&
                                    createForm.songListId.map((d) => (
                                        <button
                                            onClick={(e) =>
                                                handleRemoveSongTag(e, d)
                                            }
                                            className="btn btn-outline-primary btn-lg"
                                        >
                                            {d}{" "}
                                        </button>
                                    ))}
                            </p>
                            <Modal
                                isOpen={isSongModalOpen}
                                onRequestClose={closeSongModal}
                                contentLabel="Edit Music Kind"
                                className="modal-kindMusic"
                                overlayClassName="modal-overlay-1"
                            >
                                <input
                                    type="text"
                                    className="fs-4 form-control col"
                                    id="create-date"
                                    // value={createForm.genresid}
                                    onChange={handSongsearch}
                                />
                                <p>{createForm.songListId}</p>
                                <div
                                    style={{ height: "20rem" }}
                                    className="d-flex flex-wrap align-content-start gap-3 overflow-scroll"
                                >
                                    {searchSong ? (
                                        searchSong.map((data) => (
                                            <p value={data.id}>
                                                <button
                                                    onClick={(e) =>
                                                        handleAddSongTag(
                                                            e,
                                                            data.id
                                                        )
                                                    }
                                                    className="btn btn-outline-primary btn-lg"
                                                >
                                                    {data.songname}
                                                </button>
                                            </p>
                                        ))
                                    ) : (
                                        <option value="sds">undefine</option>
                                    )}
                                </div>
                            </Modal>
                            <p>{createForm.songListId}</p>
                        </div>

                        <div className="mb-4 form-group">
                            <label
                                style={{ width: "11%" }}
                                className="fs-4 mb-2 me-3"
                                htmlFor="create-email"
                            >
                                Playlist:
                            </label>

                            <button
                                className="btn btn-outline-primary btn-lg"
                                onClick={(e) => openPlaylistModal(e, editForm)}
                            >
                                {" "}
                                chọn playlist
                            </button>
                            <p>
                                {createForm.playListId &&
                                    createForm.playListId.map((d) => (
                                        <button
                                            onClick={(e) =>
                                                handleRemovePlaylistTag(e, d)
                                            }
                                            className="btn btn-outline-primary btn-lg"
                                        >
                                            {d}{" "}
                                        </button>
                                    ))}
                            </p>
                            <Modal
                                isOpen={isPlaylistModalOpen}
                                onRequestClose={closePlaylistModal}
                                contentLabel="Edit Music Kind"
                                className="modal-kindMusic"
                                overlayClassName="modal-overlay-1"
                            >
                                <input
                                    type="text"
                                    className="fs-4 form-control col"
                                    id="create-date"
                                    // value={createForm.genresid}
                                    onChange={handPlaylistsearch}
                                />
                                <p>{createForm.playListId}</p>
                                <div
                                    style={{ height: "20rem" }}
                                    className="d-flex flex-wrap align-content-start gap-3 overflow-scroll"
                                >
                                    {searchPalylist ? (
                                        searchPalylist.map((data) => (
                                            <p value={data.playlistId}>
                                                <button
                                                    onClick={(e) =>
                                                        handleAddPlaylistTag(
                                                            e,
                                                            data.playlistId
                                                        )
                                                    }
                                                    className="btn btn-outline-primary btn-lg"
                                                >
                                                    {data.playlistname}
                                                </button>
                                            </p>
                                        ))
                                    ) : (
                                        <option value="sds">undefine</option>
                                    )}
                                </div>
                            </Modal>
                            <p>{createForm.playListId}</p>
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

export default SingerAdmin;

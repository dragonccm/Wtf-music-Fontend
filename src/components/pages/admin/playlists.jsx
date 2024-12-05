/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "../../../css/admin/musicAdmin.scss";
import Modal from "react-modal";
import logo from "../../../img/logo3 (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { adminGetPlaylist } from "../../../services/adminPlaylistService";
import {
    updatePlaylist,
    deletePlaylist,
    createPlaylist,
} from "../../../services/restPlaylistService";
import {
    adminSearchS,
    adminSearchArtistsService,
    adminSearchPlaylistService,
    adminSearchGenreService,
} from "../../../services/adminSearchSongService";
import ImageUploader from "../../../components/pages/profile/Profile-setting/uploadImage";
import { getbanService } from "../../../services/getbanService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PlaylistAdmin = () => {
    const [musicSongs, setMusicSongs] = useState([]); // Danh sách thể loại nhạc
    const [maxpage, setmaxpage] = useState(0); // Danh sách thể loại nhạc
    const [selectedSong, setSelectedSong] = useState(null); // Thể loại đang được chọn

    const [isGenreModalOpen, setIsGenreModalOpen] = useState(false);
    const [isArModalOpen, setIsArModalOpen] = useState(false);
    const [isSongModalOpen, setIsSongModalOpen] = useState(false);
    const [searchSong, setSearchSong] = useState([]);
    const [searchAr, setSearchAr] = useState([]);
    const [searchGenre, setSearchGenre] = useState([]);
    const [isSendingRequest, setIsSendingRequest] = useState(false);

    const [editForm, setEditForm] = useState({
        playlistId: "",
        playlistname: "",
        genresid: "",
        artistsId: "",
        thumbnail: "",
        type: "",
        description: "",
        songid: "",
    }); // Thông tin form chỉnh sửa
    const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Trạng thái hiển thị pop-up form
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false); // Trạng thái hiển thị pop-up form tạo mới
    const [createForm, setCreateForm] = useState({
        playlistname: "",
        genresid: "",
        artistsId: "",
        thumbnail: "",
        type: "",
        description: "",
        songid: "",
    }); // Thông tin form tạo mới
    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
    const [search, setSearch] = useState({}); // Trang hiện tại
    const [imageUrl, setImageUrl] = useState("");
    const [file, setFile] = useState(null);
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
    };
    const itemsPerPage = 20; // Số mục trên mỗi trang
    // Giả sử chúng ta có một hàm fetchMusicSongs để lấy dữ liệu từ API
    useEffect(() => {
        fetchMusicSongs();
    }, []);
    // Hàm giả lập lấy danh sách thể loại nhạc từ server
    const fetchMusicSongs = async () => {
        if (!isSendingRequest) {
            setIsSendingRequest(true);
            try {
                const response = await adminGetPlaylist(
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
        data.thumbnail = file;

        try {
            const res = await updatePlaylist(data);
            if (res) {
                toast.success(res.EM);
                fetchMusicSongs();
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const createMusicSongs = async (data) => {
        data.thumbnail = file;
        try {
            const res = await createPlaylist(data);
            if (res) {
                toast.success(res.EM);
                fetchMusicSongs();
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const deleteMusicSongs = async (id) => {
        const newdata = {
            ...createForm,
            playlistId: id,
        };
        try {
            const res = await deletePlaylist(newdata);
            if (res) {
                toast.success("câp nhật thành công");
                fetchMusicSongs();
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
            playlistId: kind.playlistId,
            playlistname: kind.playlistname,
            genresid: kind.genresid,
            artistsId: kind.artistsId,
            thumbnail: kind.thumbnail,
            type: kind.type,
            description: kind.description,
            songid: kind.songid,
        });
        setIsEditModalOpen(true);
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

    // Xử lý sự kiện thay đổi giá trị trong form chỉnh sửa
    const handleEditFormChange = async (e) => {
        const { name, value } = e.target;
        setEditForm({ ...editForm, [name]: value });
    };

    const handleCreateFormChange = (e) => {
        const { name, value } = e.target;
        console.log({ ...createForm, [name]: value });
        setCreateForm({ ...createForm, [name]: value });
    };

    const handleserch = async (e) => {
        try {
            const ser = await adminSearchPlaylistService(e.target.value);
            setSearch(ser.DT.data.Playlist);
            setMusicSongs(ser.DT.data.Playlist);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const openSongModal = (e, kind) => {
        e.preventDefault();
        setIsSongModalOpen(true);
    };
    const openArModal = (e, kind) => {
        e.preventDefault();
        setIsArModalOpen(true);
    };
    const openGenreModal = (e, kind) => {
        e.preventDefault();
        setIsGenreModalOpen(true);
    };
    const closeSongModal = (e) => {
        e.preventDefault();
        setIsSongModalOpen(false);
    };
    const closeArModal = (e) => {
        e.preventDefault();
        setIsArModalOpen(false);
    };
    const closeGenreModal = () => {
        setIsGenreModalOpen(false);
    };

    const handSongsearch = async (e) => {
        try {
            const ser = await adminSearchS(e.target.value);
            setSearchSong(ser.DT.data.songs);
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

    const handleAddSongTag = (e, id) => {
        e.preventDefault();
        if (!createForm.songid || !createForm.songid.includes(id)) {
            setCreateForm((prevState) => ({
                ...prevState,
                songid: [...(prevState.songid || []), id],
            }));
        } else {
            alert("id đã tồn tại");
        }
    };

    const handleRemoveSongTag = (e, id) => {
        e.preventDefault();
        if (createForm.songid && createForm.songid.includes(id)) {
            setCreateForm((prevState) => ({
                ...prevState,
                songid: prevState.songid.filter((item) => item !== id),
            }));
        } else {
            alert("id không tồn tại");
        }
    };

    const handleCreateAddArTag = (e, id) => {
        e.preventDefault();
        if (!createForm.artistsId || !createForm.artistsId.includes(id)) {
            setCreateForm((prevState) => ({
                ...prevState,
                artistsId: [...(prevState.artistsId || []), id],
            }));
        } else {
            alert("id đã tồn tại");
        }
    };

    const handleCreateRemoveArTag = (e, id) => {
        e.preventDefault();
        if (createForm.artistsId && createForm.artistsId.includes(id)) {
            setCreateForm((prevState) => ({
                ...prevState,
                artistsId: prevState.artistsId.filter((item) => item !== id),
            }));
        } else {
            alert("id không tồn tại");
        }
    };

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

    // edit ----------------------------------------------------------------
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

        if (!editForm.artistsId || !editForm.artistsId.includes(id)) {
            setEditForm((prevState) => ({
                ...prevState,
                artistsId: [...(prevState.artistsId || []), id],
            }));
        } else {
            alert("id đã tồn tại");
        }
    };
    const handleRemoveGenreTag = (e, id) => {
        e.preventDefault();
        if (editForm.genresid && editForm.genresid.includes(id)) {
            setEditForm((prevState) => ({
                ...prevState,
                genresid: prevState.genresid.filter((item) => item !== id),
            }));
        } else {
            alert("id không tồn tại");
        }
    };
    const handleRemoveArTag = (e, id) => {
        e.preventDefault();
        if (editForm.artistsId && editForm.artistsId.includes(id)) {
            setEditForm((prevState) => ({
                ...prevState,
                artistsId: prevState.artistsId.filter((item) => item !== id),
            }));
        } else {
            alert("id không tồn tại");
        }
    };
    const handleEditAddSongTag = (e, id) => {
        e.preventDefault();
        if (!editForm.songid || !editForm.songid.includes(id)) {
            setEditForm((prevState) => ({
                ...prevState,
                songid: [...(prevState.songid || []), id],
            }));
        } else {
            alert("id đã tồn tại");
        }
    };
    const handleEditRemoveSongTag = (e, id) => {
        e.preventDefault();
        if (editForm.songid && editForm.songid.includes(id)) {
            setEditForm((prevState) => ({
                ...prevState,
                songid: prevState.songid.filter((item) => item !== id),
            }));
        } else {
            alert("id không tồn tại");
        }
    };

    const handlegetban = async (e) => {
        try {
            const ser = await getbanService();
            setMusicSongs(ser.DT.playlist);
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
                    Danh sách phát nhạc
                </h2>
                <div className="d-flex flex-column align-items-end justify-content-center actions-admin">
                    <button className="btn fs-4 py-2" onClick={openCreateModal}>
                        Thêm mới danh sách
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
                            placeholder="Nhập danh sách"
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
                        Lấy Danh Sách Phát Bị Ban
                    </button>
                </div>
            </div>
            <div className="px-4">
                <table className="w-100 fs-3 text-justify table-admin">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Hình</th>
                            <th>Tên</th>
                            <th>Tình trạng</th>
                            <th>Loại</th>
                            <th>Lượt thích</th>
                            <th>Lượt nghe</th>
                        </tr>
                    </thead>
                    <tbody>
                        {musicSongs.map((kind, index) => (
                            <>
                                {kind.state === 1 ? (
                                    <tr
                                        style={{ background: '#b5d5ff' }}
                                        key={index}
                                    >
                                        <td>{index + 1}</td>
                                        <td className="td_img">
                                            {" "}
                                            <img
                                                src={kind.thumbnail}
                                                alt={kind.genrename}
                                            />{" "}
                                        </td>
                                        <td>{kind.playlistname}</td>
                                        <td>
                                            {kind.state === 1
                                                ? "cấm truy cập"
                                                : "có thể truy cập "}
                                        </td>

                                        <td>{kind.type}</td>

                                        <td>{kind.like}</td>
                                        <td>{kind.listen}</td>

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
                                                    deleteMusicKind(
                                                        kind.playlistId
                                                    )
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon={faBan}
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                ) : (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td className="td_img">
                                            {" "}
                                            <img
                                                src={kind.thumbnail}
                                                alt={kind.genrename}
                                            />{" "}
                                        </td>
                                        <td>{kind.playlistname}</td>
                                        <td>
                                            {kind.state === 1
                                                ? "cấm truy cập"
                                                : "có thể truy cập "}
                                        </td>

                                        <td>{kind.type}</td>

                                        <td>{kind.like}</td>
                                        <td>{kind.listen}</td>

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
                                                    deleteMusicKind(
                                                        kind.playlistId
                                                    )
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
                        Chỉnh sửa thông tin Danh sách
                    </h2>
                    <form>
                        {/* filed */}
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="edit-name">
                                playlistId:
                            </label>
                            <input
                                type="text"
                                className="fs-5 form-control"
                                id="edit-name"
                                name="playlistId"
                                value={editForm.playlistId}
                                onChange={handleEditFormChange}
                                readOnly
                            />
                        </div>
                        {/* filed */}
                        {/* filed */}
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="edit-name">
                                playlistname:
                            </label>
                            <input
                                type="text"
                                className="fs-5 form-control"
                                id="edit-name"
                                name="playlistname"
                                value={editForm.playlistname}
                                onChange={handleEditFormChange}
                            />
                        </div>
                        {/* filed */}
                        {/* filed  gen*/}
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
                                onClick={(e) => openArModal(e, editForm)}
                            >
                                {" "}
                                chọn nghệ sĩ
                            </button>
                            <div class="row align-items-start">
                                <p>
                                    {editForm.artistsId &&
                                        editForm.artistsId.map((d,index) => (
                                            <button
                                                onClick={(e) =>
                                                    handleRemoveArTag(e, d)
                                                }
                                                className="btn btn-outline-primary btn-lg"
                                                key={index}
                                            >
                                                {d}{" "}
                                            </button>
                                        ))
                                    }
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
                                        // value={editForm.artists}
                                        onChange={handarleserch}
                                    />
                                    <p>{editForm.artistsId}</p>
                                    <div
                                        style={{ height: "20rem" }}
                                        className="d-flex flex-wrap align-content-start gap-3 overflow-scroll"
                                    >
                                        {searchAr ? (
                                            searchAr.map((data,index) => (
                                                <p value={data.id} key={index}>
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
                                    editForm.genresid.map((d,index) => (
                                        <button
                                            onClick={(e) =>
                                                handleRemoveGenreTag(e, d)
                                            }
                                            className="btn btn-outline-primary btn-lg"
                                            key={index}
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
                                        searchGenre.map((data,index) => (
                                            <p value={data.genreId} key={index}>
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

                        <div className="mb-4 form-group">
                            <label
                                style={{ width: "13%" }}
                                className="fs-4 mb-2 me-3"
                                htmlFor="create-date"
                            >
                                songListid:
                            </label>
                            <button
                                className="btn btn-outline-primary btn-lg"
                                onClick={(e) => openSongModal(e, editForm)}
                            >
                                {" "}
                                chọn songListid
                            </button>
                            <div class="row align-items-start">
                                <p>
                                    {editForm.songid &&
                                        editForm.songid.map((d,index) => (
                                            <button
                                                onClick={(e) =>
                                                    handleEditRemoveSongTag(e, d)
                                                }
                                                className="btn btn-outline-primary btn-lg"
                                                key={index}
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
                                            searchSong.map((data,index) =>
                                                data !== null ? (
                                                    <p value={data.id} key={index}>
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
                        {/* model */}
                        {/* filed */}
                        {/* filed */}
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="edit-profile">
                                thumbnail:
                            </label>
                            {imageUrl && (
                                <img
                                    style={{ width: "12%" }}
                                    src={imageUrl}
                                    className="avt-img"
                                    alt="Uploaded"
                                />
                            )}

                            <ImageUploader onUpload={handleUpload} />
                        </div>
                        {/* filed */}
                        {/* filed */}
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="edit-name">
                                type:
                            </label>
                            <input
                                type="text"
                                className="fs-5 form-control"
                                id="edit-name"
                                name="type"
                                value={editForm.type}
                                onChange={handleEditFormChange}
                            />
                        </div>
                        {/* filed */}
                        {/* filed */}
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="edit-name">
                                description:
                            </label>
                            <input
                                type="text"
                                className="fs-5 form-control"
                                id="edit-name"
                                name="description"
                                value={editForm.description}
                                onChange={handleEditFormChange}
                            />
                        </div>
                        {/* filed */}

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
                        Tạo mới Danh sách
                    </h2>
                    <form>
                        {/* filed */}
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="create-name">
                                playlistname:
                            </label>
                            <input
                                type="text"
                                className="fs-5 form-control"
                                id="create-name"
                                name="playlistname"
                                value={createForm.playlistname}
                                onChange={handleCreateFormChange}
                            />
                        </div>
                        {/* filed */}
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
                                    {createForm.artistsId &&
                                        createForm.artistsId.map((d,index) => (
                                            <button
                                                onClick={(e) =>
                                                    handleCreateRemoveArTag(
                                                        e,
                                                        d
                                                    )
                                                }
                                                className="btn btn-outline-primary btn-lg"
                                                key={index}
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
                                    <p>{createForm.artistsId}</p>
                                    <div
                                        style={{ height: "20rem" }}
                                        className="d-flex flex-wrap align-content-start gap-3 overflow-scroll"
                                    >
                                        {searchAr ? (
                                            searchAr.map((data,index) => (
                                                <p value={data.id} key={index}>
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
                                    createForm.genresid.map((d,index) => (
                                        <button
                                            onClick={(e) =>
                                                handleCreateRemoveGenreTag(e, d)
                                            }
                                            className="btn btn-outline-primary btn-lg"
                                            key={index}
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
                                        searchGenre.map((data,index) => (
                                            <p value={data.genreId}>
                                                <button
                                                    onClick={(e) =>
                                                        handleCreateAddGenreTag(
                                                            e,
                                                            data.genreId
                                                        )
                                                    }
                                                    className="btn btn-outline-primary btn-lg"
                                                    key={index}
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
                                {createForm.songid &&
                                    createForm.songid.map((d,index) => (
                                        <button
                                            onClick={(e) =>
                                                handleRemoveSongTag(e, d)
                                            }
                                            className="btn btn-outline-primary btn-lg"
                                            key={index}
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
                                <p>{createForm.songid}</p>
                                <div
                                    style={{ height: "20rem" }}
                                    className="d-flex flex-wrap align-content-start gap-3 overflow-scroll"
                                >
                                    {searchSong ? (
                                        searchSong.map((data) => (
                                            <p value={data.id} key={data.id}>
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
                            <p>{createForm.songid}</p>
                        </div>

                        {/* model */}

                        {/* filed */}
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="edit-profile">
                                thumbnail:
                            </label>
                            {imageUrl && (
                                <img
                                    style={{ width: "12%" }}
                                    src={imageUrl}
                                    className="avt-img"
                                    alt="Uploaded"
                                />
                            )}

                            <ImageUploader onUpload={handleUpload} />
                        </div>
                        {/* filed */}
                        {/* filed */}
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="create-name">
                                type:
                            </label>
                            <input
                                type="text"
                                className="fs-5 form-control"
                                id="create-name"
                                name="type"
                                value={createForm.type}
                                onChange={handleCreateFormChange}
                            />
                        </div>
                        {/* filed */}
                        {/* filed */}
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="create-name">
                                description:
                            </label>
                            <input
                                type="text"
                                className="fs-5 form-control"
                                id="create-name"
                                name="description"
                                value={createForm.description}
                                onChange={handleCreateFormChange}
                            />
                        </div>
                        {/* filed */}

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

export default PlaylistAdmin;

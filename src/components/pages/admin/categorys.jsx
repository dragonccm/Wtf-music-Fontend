/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "../../../css/admin/musicAdmin.scss";
import Modal from "react-modal";
import logo from "../../../img/logo3 (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { adminGetGenres } from "../../../services/adminGenresService";
import {
    updateGenre,
    deleteGenre,
    createGenre,
} from "../../../services/restGenreService";
import { adminSearchGenreService } from "../../../services/adminSearchSongService";
import ImageUploader from "../../../components/pages/profile/Profile-setting/uploadImage";
import { getbanService } from "../../../services/getbanService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CategoryAdmin = () => {
    const [musicSongs, setMusicSongs] = useState([]); // Danh sách thể loại nhạc
    const [maxpage, setmaxpage] = useState(0); // Danh sách thể loại nhạc
    const [selectedSong, setSelectedSong] = useState(null); // Thể loại đang được chọn
    const [editForm, setEditForm] = useState({
        genreId: "",
        genrename: "",
        thumbnail: "",
        thumbnailHasText: "",
        thumbnailR: "",
        state: "",
        description: "",
        
    }); // Thông tin form chỉnh sửa
    const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Trạng thái hiển thị pop-up form
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false); // Trạng thái hiển thị pop-up form tạo mới
    const [createForm, setCreateForm] = useState({
        genrename: "",
        thumbnail: "",
        thumbnailHasText: "",
        thumbnailR: "",
        description: "",
        
    }); // Thông tin form tạo mới
    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại

    const [thumbnailUrl, setThumbnailUrl] = useState("");
    const [thumbnail, setThumbnail] = useState(null);

    const [thumbnailHasTextUrl, setThumbnailHasTextUrl] = useState("");
    const [thumbnailHasText, setThumbnailHasText] = useState(null);

    const [thumbnailRUrl, setThumbnailRUrl] = useState("");
    const [thumbnailR, setThumbnailR] = useState(null);

    const [isSendingRequest, setIsSendingRequest] = useState(false);

    const handleUploadThumbnail = (file) => {
        setThumbnail(file);
        setThumbnailUrl(URL.createObjectURL(file));
    };

    const handleUploadThumbnailHasText = (file) => {
        setThumbnailHasText(file);
        setThumbnailHasTextUrl(URL.createObjectURL(file));
    };

    const handleUploadThumbnailR = (file) => {
        setThumbnailR(file);
        setThumbnailRUrl(URL.createObjectURL(file));
    };
    const handlePageChange = (pageNum) => {
        if (pageNum < 1 || pageNum > Math.ceil(maxpage / itemsPerPage)) {
            return; // Không thực hiện cập nhật nếu số trang không hợp lệ
        }
        setCurrentPage(pageNum);
        fetchMusicSongs();
    };
    const itemsPerPage =10; // Số mục trên mỗi trang
    // Giả sử chúng ta có một hàm fetchMusicSongs để lấy dữ liệu từ API
    useEffect(() => {
        fetchMusicSongs();
    }, []);
    // Hàm giả lập lấy danh sách thể loại nhạc từ server
    const fetchMusicSongs = async () => {
        if (!isSendingRequest) {
            setIsSendingRequest(true);
            try {
                const response = await adminGetGenres(
                    parseInt((currentPage - 1) * itemsPerPage)
                );
                setMusicSongs(response.DT.handledata);
                setmaxpage(response.DT.maxPage);
                setIsSendingRequest(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    };
    const updateMusicSongs = async (data) => {
        data.thumbnail = thumbnail;
        data.thumbnailHasText = thumbnailHasText;
        data.thumbnailR = thumbnailR;
        try {
            const res = await updateGenre(data);
            if(res){
                toast.success(res.EM);
                fetchMusicSongs();
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const createMusicSongs = async (data) => {
        data.thumbnail = thumbnail;
        data.thumbnailHasText = thumbnailHasText;
        data.thumbnailR = thumbnailR;
        try {
            const res = await createGenre(data);
            if(res){
                toast.success(res.EM);
                fetchMusicSongs();
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const deleteMusicSongs = async (data) => {
        const newdata = {
            genreId: data,
            genrename: "",
            thumbnail: "",
            thumbnailHasText: "",
            thumbnailR: "",
            description: "",
        };
        try {
            const res = await deleteGenre(newdata);
            if(res){
                toast.success(res.EM);
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
            genreId: kind.genreId,
            genrename: kind.genrename,
            thumbnail: kind.thumbnail,
            thumbnailR: kind.thumbnailR,
            thumbnailHasText: kind.thumbnailHasText,
            description: kind.description,
            state: kind.state,
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
            const ser = await adminSearchGenreService(e.target.value);
            setMusicSongs(ser.DT.data.genre);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handlegetban = async (e) => {
        try {
            const ser = await getbanService();
            setMusicSongs(ser.DT.genres);
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
                    Danh sách thể loại
                </h2>
                <div className="d-flex flex-column align-items-end justify-content-center actions-admin">
                    <button className="btn fs-4 py-2" onClick={openCreateModal}>
                        Thêm mới thể loại
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
                            placeholder="Nhập thể loại"
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
                        Lấy Thể Loại Bị Ban
                    </button>
                </div>
            </div>
            <div className="px-4">
                <table className="w-100 fs-3 text-justify table-admin">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Hình</th>
                    
                            <th>mô tả</th>
                        </tr>
                    </thead>
                    <tbody>
                        {musicSongs.map((kind, index) => (
                            <>
                                {kind.state === 1 ? (
                                    <tr style={{ background: '#b5d5ff' }} key={kind.id}>
                                        <td>{index}</td>
                                        <td>{kind.genrename}</td>
                                        <td className="td_img">
                                            {" "}
                                            <img
                                                src={kind.thumbnail}
                                                alt={kind.genrename}
                                            />{" "}
                                        </td>
                                        <td>{kind.description}</td>
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
                                                        kind.genreId
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
                                    <tr key={kind.id}>
                                        <td>{index}</td>
                                        <td>{kind.genrename}</td>
                                        <td className="td_img">
                                            {" "}
                                            <img
                                                src={kind.thumbnail}
                                                alt={kind.genrename}
                                            />{" "}
                                        </td>
                                       
                                        <td>{kind.description}</td>
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
                                                        kind.genreId
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
                        thể loại
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
                        Chỉnh sửa thông tin Thể loại
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
                                value={editForm.genreId}
                                onChange={handleEditFormChange}
                                readOnly
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="edit-email">
                                Tên thể loại:
                            </label>
                            <input
                                type="text"
                                className="fs-4 form-control"
                                id="edit-email"
                                name="genrename"
                                value={editForm.genrename}
                                onChange={handleEditFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="edit-profile">
                                thumbnail:
                            </label>
                            {thumbnailUrl && (
                                <img
                                    style={{ width: "12%" }}
                                    src={thumbnailUrl}
                                    className="avt-img"
                                    alt="Uploaded"
                                />
                            )}

                            <ImageUploader onUpload={handleUploadThumbnail} />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="edit-profile">
                                thumbnailHasText:
                            </label>
                            {thumbnailHasTextUrl && (
                                <img
                                    style={{ width: "12%" }}
                                    src={thumbnailHasTextUrl}
                                    className="avt-img"
                                    alt="Uploaded"
                                />
                            )}

                            <ImageUploader
                                onUpload={handleUploadThumbnailHasText}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="edit-profile">
                                thumbnailR:
                            </label>
                            {thumbnailRUrl && (
                                <img
                                    style={{ width: "12%" }}
                                    src={thumbnailRUrl}
                                    className="avt-img"
                                    alt="Uploaded"
                                />
                            )}

                            <ImageUploader onUpload={handleUploadThumbnailR} />
                        </div>

                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="edit-email">
                                Mô Tả:
                            </label>
                            <input
                                type="text"
                                className="fs-4 form-control"
                                id="edit-email"
                                name="description"
                                value={editForm.description}
                                onChange={handleEditFormChange}
                            />
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
                        Tạo mới Thể loại
                    </h2>
                    <form>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="create-name">
                                Tên Thể loại:
                            </label>
                            <input
                                type="text"
                                className="fs-4 form-control"
                                id="create-name"
                                name="genrename"
                                value={createForm.genrename}
                                onChange={handleCreateFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="edit-profile">
                                thumbnail:
                            </label>
                            {thumbnailUrl && (
                                <img
                                    style={{ width: "12%" }}
                                    src={thumbnailUrl}
                                    className="avt-img"
                                    alt="Uploaded"
                                />
                            )}

                            <ImageUploader onUpload={handleUploadThumbnail} />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="edit-profile">
                                thumbnailHasText:
                            </label>
                            {thumbnailHasTextUrl && (
                                <img
                                    style={{ width: "12%" }}
                                    src={thumbnailHasTextUrl}
                                    className="avt-img"
                                    alt="Uploaded"
                                />
                            )}

                            <ImageUploader
                                onUpload={handleUploadThumbnailHasText}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="edit-profile">
                                thumbnailR:
                            </label>
                            {thumbnailRUrl && (
                                <img
                                    style={{ width: "12%" }}
                                    src={thumbnailRUrl}
                                    className="avt-img"
                                    alt="Uploaded"
                                />
                            )}

                            <ImageUploader onUpload={handleUploadThumbnailR} />
                        </div>

                        <div className="mb-4 form-group">
                            <label className="fs-4 mb-2" htmlFor="edit-email">
                                Mô Tả:
                            </label>
                            <input
                                type="text"
                                className="fs-4 form-control"
                                id="edit-email"
                                name="description"
                                value={createForm.description}
                                onChange={handleCreateFormChange}
                            />
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

export default CategoryAdmin;

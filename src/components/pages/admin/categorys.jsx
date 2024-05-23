/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "../../../css/admin/musicAdmin.scss";
import Modal from "react-modal";
import logo from "../../../img/logo3 (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { adminGetGenres } from "../../../services/adminGenresService"
import {
    updateGenre,
    deleteGenre,
    createGenre
} from "../../../services/restGenreService"
import { adminSearchS } from "../../../services/adminSearchSongService"
import ImageUploader from "../../../components/pages/profile/Profile-setting/uploadImage"



const SongAdmin = () => {

    const [musicSongs, setMusicSongs] = useState([]); // Danh sách thể loại nhạc
    const [maxpage, setmaxpage] = useState(0); // Danh sách thể loại nhạc
    const [selectedSong, setSelectedSong] = useState(null); // Thể loại đang được chọn
    const [editForm, setEditForm] = useState({
        genreId: "",
        genrename: "",
        thumbnail: "",
    }); // Thông tin form chỉnh sửa
    const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Trạng thái hiển thị pop-up form
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false); // Trạng thái hiển thị pop-up form tạo mới
    const [createForm, setCreateForm] = useState({
        genrename: "",
        thumbnail: "",
    }); // Thông tin form tạo mới
    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
    const [search, setSearch] = useState({}); // Trang hiện tại
    const [imageUrl, setImageUrl] = useState('');
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
        try {
            const response = await adminGetGenres(parseInt((currentPage - 1) * itemsPerPage));
            setMusicSongs(response.DT.handledata);
            setmaxpage(response.maxPage)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const updateMusicSongs = async (data) => {
        data.thumbnail = imageUrl
        alert('Update music',editForm)
        try {
            await updateGenre(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const createMusicSongs = async (data) => {
        data.thumbnail = imageUrl
        try {
            await createGenre(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    // Hàm tạo mới thể loại nhạc
    const createMusicKind = async (e) => {
        e.preventDefault();
        createMusicSongs(createForm)
    };

    // Hàm chỉnh sửa thông tin thể loại nhạc
    const updateMusicKind = async () => {
        updateMusicSongs(editForm)
    };

    // Hàm xóa thể loại nhạc
    const deleteMusicKind = async (id) => {
        // Gọi API để xóa thể loại nhạc
        // Khi xóa thành công, cập nhật state
    };

    // Hiển thị pop-up form chỉnh sửa
    const openEditModal = (kind) => {
        setSelectedSong(kind);
        setEditForm({
            genreId: kind.genreId,
            genrename: kind.genrename,
            thumbnail: kind.thumbnail,
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
        console.log({ ...createForm, [name]: value })
        setCreateForm({ ...createForm, [name]: value });
    };


    const handleserch = async (e) => {
        try {
            const ser = await adminSearchS(e.target.value);
            setSearch(ser.DT.genre);
            setMusicSongs(ser.DT.genre);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const totalPages = Math.ceil(maxpage / itemsPerPage) - 5;
    return (
        <div className="container overflow-x-auto container-admin">
            <div className="text-center container-img">
                <img style={{ width: "12%" }} src={logo} alt="logo" />
            </div>
            <div className="d-flex align-items-center justify-content-between px-4 header-admin">
                <h2 className="fw-normal fs-1 heading-admin" >
                    Danh sách ca sĩ
                </h2>
                <div className="d-flex flex-column align-items-end justify-content-center actions-admin">
                    <button className="btn fs-4 py-2" onClick={openCreateModal}>
                        Thêm mới ca sĩ
                    </button>
                </div>
            </div>
            <div className="px-4 event-admin">
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
            <div className="px-4">
                <table className="w-100 fs-3 text-justify table-admin">
                    <thead>
                        <tr>
                            <th>genreId</th>
                            <th>genrename</th>
                            <th>thumbnail</th>
                            <th>playListId</th>
                            <th>listen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {musicSongs.map((kind) => (
                            <tr key={kind.id}>
                                <td>{kind.genreId}</td>
                                <td>{kind.genrename}</td>
                                <td className="td_img"> <img src={kind.thumbnail} alt={kind.genrename} /> </td>
                                <td>{kind.playListId?.map(playList => playList).join(", ")}</td>
                                <td>{kind.listen}</td>
                                <td>
                                    <button
                                        className="btn btn-primary fs-5"
                                        onClick={() => openEditModal(kind)}
                                    >
                                        <FontAwesomeIcon icon={faPen} />
                                    </button>
                                    <button
                                        className="btn btn-danger-custom fs-5 ms-3"
                                        onClick={() => deleteMusicKind(kind.id)}
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="d-flex py-4 pagination-admin">
                <div className="col-6 description-pagination">
                    Hiển thị {(currentPage - 1) * itemsPerPage + 1} -{" "}
                    {Math.min(currentPage * itemsPerPage, maxpage)} trong {maxpage} bài hát
                </div>
                <div className="col-6 pe-5 pagination-numbers">
                    <ul className="pagination justify-content-end">
                        <li className="border">
                            <a
                                className="d-block fs-4 px-4 py-1 opacity-75"
                                href="#"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </a>
                        </li>
                        <li className="border">
                            <a
                                className="d-block fs-4 px-4 py-1 opacity-75"
                                href="#"
                                onClick={() => handlePageChange(1)}
                            >
                                First
                            </a>
                        </li>
                        <li className="border">
                            <a
                                className="d-block fs-4 px-4 py-1 opacity-75"
                                href="#"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </a>
                        </li>
                        <li className="border">
                            <a
                                className="d-block fs-4 px-4 py-1 opacity-75"
                                href="#"
                                onClick={() => handlePageChange(totalPages - 5)}
                            >
                                Last
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
                    <h2 className="text-center opacity-75 mb-5">
                        Chỉnh sửa thông tin thể loại
                    </h2>
                    <form>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="edit-name">
                                id:
                            </label>
                            <input
                                type="text"
                                className="fs-5 form-control"
                                id="edit-name"
                                name="id"
                                placeholder={editForm.genreId}
                                onChange={handleEditFormChange}
                                readOnly
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="edit-email">
                                tên thể loại:
                            </label>
                            <input
                                type="text"
                                className="fs-5 form-control"
                                id="edit-email"
                                name="songname"
                                placeholder={editForm.genrename}
                                onChange={handleEditFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="edit-profile">
                                thumbnail:
                            </label>
                            {imageUrl && <img src={imageUrl} className="avt-img" alt="Uploaded" />}

                            <ImageUploader onUpload={handleUpload} />

                        </div>

                        <button
                            className="btn btn-primary fs-5"
                            onClick={updateMusicKind}
                        >
                            Update
                        </button>
                        <button
                            className="btn btn-secondary ms-3 fs-5"
                            onClick={closeEditModal}
                        >
                            Cancel
                        </button>
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
                    <h2 className="text-center opacity-75 mb-5">
                        Tạo mới Thể loại
                    </h2>
                    <form>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="create-name">
                                Tên Thể loại:
                            </label>
                            <input
                                type="text"
                                className="fs-5 form-control"
                                id="create-name"
                                name="genrename"
                                value={createForm.genrename}
                                onChange={handleCreateFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="edit-profile">
                                thumbnail:
                            </label>
                            {imageUrl && <img src={imageUrl} className="avt-img" alt="Uploaded" />}

                            <ImageUploader onUpload={handleUpload} />
                            {/* <input
                                type="file"
                                className="fs-5 form-control"
                                id="thumbnail"
                                value={editForm.thumbnail}
                                onChange={handleEditFormChange}
                            /> */}
                        </div>

                        <button
                            className="btn btn-primary fs-5"
                            onClick={(e) => createMusicKind(e)}
                        >
                            Create
                        </button>
                        <button
                            className="btn btn-secondary ms-3 fs-5"
                            onClick={closeCreateModal}
                        >
                            Cancel
                        </button>
                    </form>
                </Modal>
            </div>
        </div>
    );
};

export default SongAdmin;

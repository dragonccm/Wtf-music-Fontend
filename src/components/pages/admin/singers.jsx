import React, { useState, useEffect } from "react";
import "../../../css/admin/musicAdmin.scss";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faTableList } from "@fortawesome/free-solid-svg-icons";

const SingersAdmin = () => {
    const [musicSingers, setMusicSingers] = useState([]); // Danh sách thể loại nhạc
    const [selectedSinger, setSelectedSinger] = useState(null); // Thể loại đang được chọn
    const [editForm, setEditForm] = useState({
        id: "",
        avt: "",
        singerName: "",
        email: "",
        song: "",
        album: "",
        description: "",
        date: "",
    }); // Thông tin form chỉnh sửa
    const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Trạng thái hiển thị pop-up form
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false); // Trạng thái hiển thị pop-up form tạo mới
    const [createForm, setCreateForm] = useState({
        avt: "",
        singerName: "",
        email: "",
        song: "",
        album: "",
        description: "",
        date: "",
    }); // Thông tin form tạo mới

    // Giả sử chúng ta có một hàm fetchMusicSingers để lấy dữ liệu từ API
    useEffect(() => {
        fetchMusicSingers();
    }, []);

    // Hàm giả lập lấy danh sách thể loại nhạc từ server
    const fetchMusicSingers = async () => {
        const data = [
            {
                id: "01",
                avt: "image1.jpg",
                singerName: "Eliana D’Cruz",
                email: "eliana@demo.com",
                song: 68,
                album: 16,
                description: "Fuck u",
                date: "03/04/2024",
            },
            {
                id: "02",
                avt: "image2.jpg",
                singerName: "Alex Williams",
                email: "alex@demo.com",
                song: 68,
                album: 16,
                description: "Fuck u",
                date: "03/04/2024",
            },

            // thêm dữ liệu giả lập ở đây
        ];
        setMusicSingers(data);
    };

    // Hàm tạo mới thể loại nhạc
    const createMusicKind = async (name, description) => {
        // Gọi API để tạo mới thể loại nhạc
        // Khi tạo thành công, cập nhật state
    };

    // Hàm chỉnh sửa thông tin thể loại nhạc
    const updateMusicKind = async () => {
        // Gọi API để chỉnh sửa thông tin thể loại nhạc
        // Khi chỉnh sửa thành công, cập nhật state
    };

    // Hàm xóa thể loại nhạc
    const deleteMusicKind = async (id) => {
        // Gọi API để xóa thể loại nhạc
        // Khi xóa thành công, cập nhật state
    };

    // Hiển thị pop-up form chỉnh sửa
    const openEditModal = (kind) => {
        setSelectedSinger(kind);
        setEditForm({
            id: kind.id,
            avt: kind.avt,
            singerName: kind.singerName,
            email: kind.email,
            song: kind.song,
            album: kind.album,
            description: kind.description,
            date: kind.date,
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
    const handleEditFormChange = (e) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value });
    };

    // Xử lý sự kiện thay đổi giá trị trong form tạo mới
    const handleCreateFormChange = (e) => {
        setCreateForm({ ...createForm, [e.target.name]: e.target.value });
    };

    return (
        <div className="container px-0 rounded-2 overflow-x-auto container-admin">
            <div className="d-flex align-items-center justify-content-between px-4 mt-4 header-admin">
                {/* Hiển thị danh sách thể loại nhạc */}
                <h2 className="fw-normal fs-1 mb-4 heading-admin">
                    <FontAwesomeIcon icon={faTableList} /> Danh sách ca sĩ
                </h2>
                {/* Hiển thị form tạo mới thể loại nhạc */}
                <div className="d-flex flex-column align-items-end justify-content-center mt-5 actions-admin">
                    <button
                        className="btn btn-success fs-4 mb-4 py-2"
                        onClick={openCreateModal}
                    >
                        + Thêm mới ca sĩ
                    </button>
                    <form action="">
                        <label className="fs-4 me-3" htmlFor="search-kind">
                            Tìm kiếm:
                        </label>
                        <input
                            id="search-kind"
                            type="text"
                            placeholder="Nhập ca sĩ"
                            required
                            className="fs-5 ps-3 py-1 border border-dark-subtle rounded-1"
                        />
                    </form>
                </div>
            </div>
            <table className="w-100 fs-4 mt-4 text-justify table-admin">
                <thead>
                    <tr>
                        <th>Thứ tự</th>
                        <th>Profile</th>
                        <th>Tên ca sĩ</th>
                        <th>Email</th>
                        <th>Songs</th>
                        <th>Albums</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {musicSingers.map((kind) => (
                        <tr key={kind.id} className="border-bottom">
                            <td>{kind.id}</td>
                            <td>{kind.avt}</td>
                            <td>{kind.singerName}</td>
                            <td>{kind.email}</td>
                            <td>{kind.song}</td>
                            <td>{kind.album}</td>
                            <td>
                                <button
                                    className="btn btn-primary fs-5 rounded-circle"
                                    onClick={() => openEditModal(kind)}
                                >
                                    <FontAwesomeIcon icon={faPen} />
                                </button>
                                <button
                                    className="btn btn-danger fs-5 ms-3 rounded-circle"
                                    onClick={() => deleteMusicKind(kind.id)}
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="d-flex py-4 pagination-admin">
                <div className="col-6 description-pagination"></div>
                <div className="col-6 pe-5 pagination-numbers">
                    <ul className="pagination justify-content-end ">
                        <li className="border">
                            <a className="d-block fs-4 px-4 py-1 opacity-75" href="#">
                                Previous
                            </a>
                        </li>
                        <li className="border active">
                            <a className="d-block fs-4 px-4 py-1 opacity-75" href="#">
                                1
                            </a>
                        </li>
                        <li className="border">
                            <a className="d-block fs-4 px-4 py-1 opacity-75" href="#">
                                Next
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
                        Chỉnh sửa thông tin nhạc sĩ
                    </h2>
                    <form>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="edit-name">
                                Name:
                            </label>
                            <input
                                type="text"
                                className="fs-5 form-control"
                                id="edit-name"
                                name="singerName"
                                value={editForm.singerName}
                                onChange={handleEditFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="edit-email">
                                Email:
                            </label>
                            <input
                                type="text"
                                className="fs-5 form-control"
                                id="edit-email"
                                name="email"
                                value={editForm.email}
                                onChange={handleEditFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="edit-profile">
                                Old Singer Profile:
                            </label>
                            <input
                                type="text"
                                className="fs-5 form-control"
                                id="edit-profile"
                                value={editForm.avt}
                                onChange={handleEditFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="edit-date">
                                Date:
                            </label>
                            <input
                                type="text"
                                className="fs-5 form-control"
                                id="edit-date"
                                name="date"
                                value={editForm.date}
                                onChange={handleEditFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label
                                className="fs-5 mb-2"
                                htmlFor="edit-description"
                            >
                                Description:
                            </label>
                            <textarea
                                className="fs-5 form-control"
                                id="edit-description"
                                name="description"
                                value={editForm.description}
                                onChange={handleEditFormChange}
                            ></textarea>
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
                        Tạo mới nhạc sĩ
                    </h2>
                    <form>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="create-name">
                                Name:
                            </label>
                            <input
                                type="text"
                                className="fs-5 form-control"
                                id="create-name"
                                name="singerName"
                                value={createForm.name}
                                onChange={handleCreateFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="create-email">
                                Email:
                            </label>
                            <input
                                type="text"
                                className="fs-5 form-control"
                                id="create-email"
                                name="email"
                                value={createForm.email}
                                onChange={handleCreateFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label
                                className="fs-5 mb-2"
                                htmlFor="create-profile"
                            >
                                Singer Profile:
                            </label>
                            <input
                                type="file"
                                className="fs-5 form-control"
                                id="create-profile"
                                name="profile"
                                value={createForm.avt}
                                onChange={handleCreateFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="create-date">
                                Date:
                            </label>
                            <input
                                type="date"
                                className="fs-5 form-control"
                                id="create-date"
                                name="date"
                                value={createForm.date}
                                onChange={handleCreateFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label
                                className="fs-5 mb-2"
                                htmlFor="create-description"
                            >
                                Description:
                            </label>
                            <textarea
                                className="fs-5 form-control"
                                id="create-description"
                                name="description"
                                value={createForm.description}
                                onChange={handleCreateFormChange}
                            ></textarea>
                        </div>
                        <button
                            className="btn btn-primary fs-5"
                            onClick={createMusicKind}
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

export default SingersAdmin;

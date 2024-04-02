import React, { useState, useEffect } from "react";
import "../../../css/admin/musicAdmin.scss";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faTableList } from "@fortawesome/free-solid-svg-icons";

const KindMusicAdmin = () => {
    const [musicKinds, setMusicKinds] = useState([]); // Danh sách thể loại nhạc
    const [selectedKind, setSelectedKind] = useState(null); // Thể loại đang được chọn
    const [editForm, setEditForm] = useState({
        id: "",
        name: "",
        description: "",
        image: "",
    }); // Thông tin form chỉnh sửa
    const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Trạng thái hiển thị pop-up form
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false); // Trạng thái hiển thị pop-up form tạo mới
    const [createForm, setCreateForm] = useState({
        name: "",
        description: "",
        image: "",
    }); // Thông tin form tạo mới

    // Giả sử chúng ta có một hàm fetchMusicKinds để lấy dữ liệu từ API
    useEffect(() => {
        fetchMusicKinds();
    }, []);

    // Hàm giả lập lấy danh sách thể loại nhạc từ server
    const fetchMusicKinds = async () => {
        const data = [
            {
                id: 1,
                name: "Pop",
                description: "Popular music",
            },
            {
                id: 2,
                name: "Rock",
                description: "Rock music",
            },
            // thêm dữ liệu giả lập ở đây
        ];
        setMusicKinds(data);
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
        setSelectedKind(kind);
        setEditForm({
            id: kind.id,
            name: kind.name,
            description: kind.description,
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
        <div className="container px-0 rounded-2 container-admin">
            <div className="d-flex align-items-center justify-content-between px-4 mt-4 header-admin">
                {/* Hiển thị danh sách thể loại nhạc */}
                <h2 className="fw-normal fs-1 mb-4 heading-admin">
                    <FontAwesomeIcon icon={faTableList} /> Danh sách thể loại
                </h2>
                {/* Hiển thị form tạo mới thể loại nhạc */}
                <div className="d-flex flex-column align-items-end justify-content-center mt-5 actions-admin">
                    <button
                        className="btn btn-success fs-4 mb-4 py-2"
                        onClick={openCreateModal}
                    >
                        + Thêm mới thể loại
                    </button>
                    <form action="">
                        <label className="fs-4 me-3" htmlFor="search-kind">
                            Tìm kiếm:
                        </label>
                        <input
                            id="search-kind"
                            type="text"
                            placeholder="Nhập thể loại"
                            required
                            className="fs-5 ps-3 py-1 border border-dark-subtle rounded-1"
                        />
                    </form>
                </div>
            </div>
            <table className="w-100 fs-4 mt-4 text-justify overflow-x-auto table-admin">
                <thead>
                    <tr className="row px-5 py-3">
                        <th className="col-1">Thứ tự</th>
                        <th className="col-2">Tên thể loại</th>
                        <th className="col-7">Mô tả thể loại</th>
                        <th className="col-2">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {musicKinds.map((kind) => (
                        <tr
                            key={kind.id}
                            className="row px-5 py-3 align-items-center border-bottom"
                        >
                            <td className="col-1">{kind.id}</td>
                            <td className="col-2">{kind.name}</td>
                            <td className="col-7">{kind.description}</td>
                            <td className="col-2">
                                <button
                                    className="btn btn-primary fs-4 rounded-circle"
                                    onClick={() => openEditModal(kind)}
                                >
                                    <FontAwesomeIcon icon={faPen} />
                                </button>
                                <button
                                    className="btn btn-danger fs-4 ms-4 rounded-circle"
                                    onClick={() => deleteMusicKind(kind.id)}
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="row align-items-center py-4 pagination-admin">
                <div className="col-6 description-pagination">
                    <span className="fs-4 ps-5 opacity-75">
                        Hiển thị 1 đến 6 trang
                    </span>
                </div>
                <div className="col-6 pe-5 pagination-numbers">
                    <ul className="pagination justify-content-end ">
                        <li className="border">
                            <a className="d-block fs-4 px-4 py-1 opacity-75">
                                Previous
                            </a>
                        </li>
                        <li className="border active">
                            <a className="d-block fs-4 px-4 py-1 opacity-75">
                                1
                            </a>
                        </li>
                        <li className="border">
                            <a className="d-block fs-4 px-4 py-1 opacity-75">
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
                        Chỉnh sửa thông tin thể loại nhạc
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
                                name="name"
                                value={editForm.name}
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
                        Tạo mới thể loại nhạc
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
                                name="name"
                                value={createForm.name}
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

export default KindMusicAdmin;

import React, { useState, useEffect } from "react";
import "../../../css/admin/kindMusicAdmin.scss";
import Modal from "react-modal";
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
                image: "image1.jpg",
            },
            {
                id: 2,
                name: "Rock",
                description: "Rock music",
                image: "image2.jpg",
            },
            // thêm dữ liệu giả lập ở đây
        ];
        setMusicKinds(data);
    };

    // Hàm tạo mới thể loại nhạc
    const createMusicKind = async (name, description, image) => {
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
            image: kind.image,
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
        <div>
            {/* Hiển thị danh sách thể loại nhạc */}
            <h2>Danh sách thể loại nhạc</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {musicKinds.map((kind) => (
                        <tr key={kind.id}>
                            <td>{kind.id}</td>
                            <td>{kind.name}</td>
                            <td>{kind.description}</td>
                            <td>
                                <img src={kind.image} alt={kind.name} />
                            </td>
                            <td>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => openEditModal(kind)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteMusicKind(kind.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Hiển thị form tạo mới thể loại nhạc */}
            <div>
                <h2>Tạo mới thể loại nhạc</h2>
                <button className="btn btn-success" onClick={openCreateModal}>
                    Create
                </button>
            </div>

            {/* Hiển thị pop-up form chỉnh sửa thông tin thể loại nhạc */}
            <div overlayClassName="modal-overlay">
                <Modal
                    isOpen={isEditModalOpen}
                    onRequestClose={closeEditModal}
                    contentLabel="Edit Music Kind"
                    className="modal-kindMusic"
                >
                    {/* Nội dung của pop-up form chỉnh sửa */}
                    <h2>Chỉnh sửa thông tin thể loại nhạc</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="edit-name">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="edit-name"
                                name="name"
                                value={editForm.name}
                                onChange={handleEditFormChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="edit-description">
                                Description:
                            </label>
                            <textarea
                                className="form-control"
                                id="edit-description"
                                name="description"
                                value={editForm.description}
                                onChange={handleEditFormChange}
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="edit-image">Image:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="edit-image"
                                name="image"
                                value={editForm.image}
                                onChange={handleEditFormChange}
                            />
                        </div>
                        <button
                            className="btn btn-primary"
                            onClick={updateMusicKind}
                        >
                            Update
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={closeEditModal}
                        >
                            Cancel
                        </button>
                    </form>
                </Modal>
            </div>

            {/* Hiển thị pop-up form tạo mới thể loại nhạc */}
            <div overlayClassName="modal-overlay">
                <Modal
                    isOpen={isCreateModalOpen}
                    onRequestClose={closeCreateModal}
                    contentLabel="Create Music Kind"
                    className="modal-kindMusic"
                >
                    <h2>Tạo mới thể loại nhạc</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="create-name">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="create-name"
                                name="name"
                                value={createForm.name}
                                onChange={handleCreateFormChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="create-description">
                                Description:
                            </label>
                            <textarea
                                className="form-control"
                                id="create-description"
                                name="description"
                                value={createForm.description}
                                onChange={handleCreateFormChange}
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="create-image">Image:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="create-image"
                                name="image"
                                value={createForm.image}
                                onChange={handleCreateFormChange}
                            />
                        </div>
                        <button
                            className="btn btn-primary"
                            onClick={createMusicKind}
                        >
                            Create
                        </button>
                        <button
                            className="btn btn-secondary"
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

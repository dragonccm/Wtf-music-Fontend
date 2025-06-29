import React from "react";
import "../../../css/admin/musicAdmin.scss";
import logo from "../../../img/logo3 (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSongAdmin } from "../../../hooks/useSongAdmin";
import SongTableComponent from "./SongTableComponent";
import EditSongModal from "./EditSongModal";
import CreateSongModal from "./CreateSongModal";

const SongAdminPage = () => {
    const {
        musicSongs,
        maxpage,
        currentPage,
        totalPages,
        isEditModalOpen,
        isCreateModalOpen,
        editForm,
        createForm,
        imageUrl,
        audioUrl,
        handlePageChange,
        openEditModal,
        closeEditModal,
        openCreateModal,
        closeCreateModal,
        handleEditFormChange,
        handleCreateFormChange,
        updateMusicKind,
        createMusicKind,
        deleteMusicKind,
        handleUpload,
        handleAudioUpload,
        handleserch,
        handlegetban,
    } = useSongAdmin();

    return (
        <div className="container overflow-x-auto container-admin">
            <div className="text-center container-img">
                <img style={{ width: "12%" }} src={logo} alt="logo" />
            </div>
            <div className="table-container">
            <div className="d-flex align-items-center justify-content-between px-4 header-admin">
                <h2 className="fw-normal fs-1 heading-admin">Danh sách bài hát</h2>
                <div className="d-flex flex-row align-items-end justify-content-center actions-admin">
                    <button className="p-3 fs-4 py-2 bg-transparent" data-bs-toggle="tooltip" data-bs-placement="left" title="Đến Trang Đăng Nhạc">
                        <a href="/admin/adminupload"><FontAwesomeIcon icon={faUpRightFromSquare} /></a>
                    </button>
                    <button className="btn fs-4 py-2 " onClick={openCreateModal}>
                        Thêm mới bài hát nhanh
                    </button>
                </div>
            </div>
            <div className="px-4 py-5 event-admin">
                <div className="card">
                    <label className="fs-3 me-3" htmlFor="search-kind">Tìm kiếm:</label>
                    <div className="input-box">
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
                    <button className="btn fs-4 py-2" onClick={handlegetban}>
                        Lấy Bài Hát Bị Ban
                    </button>
                </div>
            </div>
            <SongTableComponent
                musicSongs={musicSongs}
                openEditModal={openEditModal}
                deleteMusicKind={deleteMusicKind}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                maxpage={maxpage}
                handlePageChange={handlePageChange}
            />
            </div>
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

export default SongAdminPage;

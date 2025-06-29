/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../../css/admin/musicAdmin.scss";
import logo from "../../../img/logo3 (1).png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSingerAdmin from "../../../hooks/useSingerAdmin";
import SingerTable from "./table/singerTable";
import EditSingerModal from "../../card/model/EditSingerModal";
import CreateSingerModal from "../../card/model/CreateSingerModal";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const SingerAdmin = () => {
    const {
        musicSongs,
        maxpage,
        currentPage,
        totalPages,
        itemsPerPage,
        isEditModalOpen,
        isCreateModalOpen,
        isSongModalOpen,
        isPlaylistModalOpen,
        editForm,
        createForm,
        imageUrl,
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
        handleserch,
        handlegetban,
        handSongsearch,
        handPlaylistsearch,
        closeSongModal,
        closePlaylistModal,
        setEditForm,
        setCreateForm,
    } = useSingerAdmin();
    const handleChange = (event, value) => {
        handlePageChange(value);
    };
    return (
        <div className="container overflow-x-auto container-admin">
            <div className="text-center container-img">
                <img style={{ width: "12%" }} src={logo} alt="logo" />
            </div>
            <div className="table-container">
                <div className="d-flex align-items-center justify-content-between px-4 header-admin">
                <h2 className="fw-normal fs-1 heading-admin">Danh sách ca sĩ</h2>
                <div className="d-flex flex-column align-items-end justify-content-center actions-admin">
                    <button className="btn fs-4 py-2" onClick={openCreateModal}>
                        Thêm mới ca sĩ
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
                <div className="card bg-transparent">
                    <div className="input-box">
                        <input
                            id="search-kind"
                            type="text"
                            placeholder="Tìm ca sĩ"
                            required
                            className="fs-4 ps-3 py-1 border border-dark-subtle rounded-1"
                            onChange={handleserch}
                        />
                    </div>
                </div>
            </div>
            <SingerTable musicSongs={musicSongs} openEditModal={openEditModal} deleteMusicKind={deleteMusicKind} />
            <div className="d-flex pagination-admin">
                <div className="col-6 ps-5 description-pagination">
                    <div style={{ fontSize: "medium" }}>
                        Hiển thị <span style={{ color: "red" }}>{(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, maxpage)}</span> trong <span style={{ color: "red" }}>{maxpage}</span> ca sĩ
                    </div>
                </div>
                <div className="pagination-numbers">
                    <Stack spacing={2}>
                    <Pagination color="primary" count={Math.ceil(maxpage / itemsPerPage)} page={currentPage} onChange={handleChange} showFirstButton showLastButton />
                </Stack>
                </div>
            </div>
            </div>
            <EditSingerModal
                isEditModalOpen={isEditModalOpen}
                closeEditModal={closeEditModal}
                editForm={editForm}
                handleEditFormChange={handleEditFormChange}
                handleUpload={handleUpload}
                updateMusicKind={updateMusicKind}
                handleEditRemoveSongTag={(e, id) => setEditForm({ ...editForm, songListId: editForm.songListId.filter((item) => item !== id) })}
                handleEditRemovePlaylistTag={(e, id) => setEditForm({ ...editForm, playListId: editForm.playListId.filter((item) => item !== id) })}
                isSongModalOpen={isSongModalOpen}
                closeSongModal={closeSongModal}
                handSongsearch={handSongsearch}
                searchSong={musicSongs}
                handleEditAddSongTag={(e, id) => setEditForm({ ...editForm, songListId: [...editForm.songListId, id] })}
                isPlaylistModalOpen={isPlaylistModalOpen}
                closePlaylistModal={closePlaylistModal}
                handPlaylistsearch={handPlaylistsearch}
                searchPalylist={musicSongs}
                handleEditAddPlaylistTag={(e, id) => setEditForm({ ...editForm, playListId: [...editForm.playListId, id] })}
            />
            <CreateSingerModal
                isCreateModalOpen={isCreateModalOpen}
                closeCreateModal={closeCreateModal}
                createForm={createForm}
                handleCreateFormChange={handleCreateFormChange}
                handleUpload={handleUpload}
                createMusicKind={createMusicKind}
                handleRemoveSongTag={(e, id) => setCreateForm({ ...createForm, songListId: createForm.songListId.filter((item) => item !== id) })}
                handleRemovePlaylistTag={(e, id) => setCreateForm({ ...createForm, playListId: createForm.playListId.filter((item) => item !== id) })}
                isSongModalOpen={isSongModalOpen}
                closeSongModal={closeSongModal}
                handSongsearch={handSongsearch}
                searchSong={musicSongs}
                handleAddSongTag={(e, id) => setCreateForm({ ...createForm, songListId: [...createForm.songListId, id] })}
                isPlaylistModalOpen={isPlaylistModalOpen}
                closePlaylistModal={closePlaylistModal}
                handPlaylistsearch={handPlaylistsearch}
                searchPalylist={musicSongs}
                handleAddPlaylistTag={(e, id) => setCreateForm({ ...createForm, playListId: [...createForm.playListId, id] })}
            />
            <ToastContainer
                style={{ fontSize: "16px", zIndex: 999999999 }}
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

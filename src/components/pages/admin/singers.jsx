/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../../css/admin/musicAdmin.scss";
import logo from "../../../img/logo3 (1).png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSingerAdmin from "../../../hooks/useSingerAdmin";
import SingerTable from "./table/singerTable";
import EditSingerModal from "./model/EditSingerModal";
import CreateSingerModal from "./model/CreateSingerModal";

const SingerAdmin = () => {
    const {
        musicSongs,
        maxpage,
        currentPage,
        totalPages,
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

    return (
        <div className="container overflow-x-auto container-admin">
            <div className="text-center container-img">
                <img style={{ width: "12%" }} src={logo} alt="logo" />
            </div>
            <div className="d-flex align-items-center justify-content-between px-4 header-admin">
                <h2 className="fw-normal fs-1 heading-admin">Danh sách ca sĩ</h2>
                <div className="d-flex flex-column align-items-end justify-content-center actions-admin">
                    <button className="btn fs-4 py-2" onClick={openCreateModal}>
                        Thêm mới ca sĩ
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
                    <button className="btn fs-4 py-2" onClick={handlegetban}>
                        Lấy Nghệ Bị Ban
                    </button>
                </div>
            </div>
            <SingerTable musicSongs={musicSongs} openEditModal={openEditModal} deleteMusicKind={deleteMusicKind} />
            <div className="d-flex py-4 pagination-admin">
                <div className="col-6 ps-5 description-pagination">
                    <div style={{ fontSize: "medium" }}>
                        Hiển thị <span style={{ color: "red" }}>{(currentPage - 1) * 20 + 1} - {Math.min(currentPage * 20, maxpage)}</span> trong <span style={{ color: "red" }}>{maxpage}</span> ca sĩ
                    </div>
                </div>
                <div className="col-6 pe-5 pagination-numbers">
                    <ul className="pagination justify-content-end">
                        <li style={{ backgroundColor: "#d4dae2" }} className="border">
                            <a className="d-block fs-4 px-4 py-1 opacity-75" href="#" onClick={() => handlePageChange(1)}>Đầu</a>
                        </li>
                        <li className="border">
                            <a className="d-block fs-4 px-4 py-1 opacity-75" href="#" onClick={() => handlePageChange(currentPage - 1)}>Lùi</a>
                        </li>
                        <li className="border">
                            <a className="d-block fs-4 px-4 py-1 opacity-75" href="#" onClick={() => handlePageChange(currentPage + 1)}>Tiếp</a>
                        </li>
                        <li style={{ backgroundColor: "#d4dae2" }} className="border">
                            <a className="d-block fs-4 px-4 py-1 opacity-75" href="#" onClick={() => handlePageChange(totalPages - 5)}>Cuối</a>
                        </li>
                    </ul>
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

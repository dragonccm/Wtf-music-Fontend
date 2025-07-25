import React from "react";
import "../../../css/admin/musicAdmin.scss";
import logo from "../../../img/logo3 (1).png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSingerAdmin } from "../../../hooks/useSingerAdmin";
import SingerTable from "./SingerTable";
import EditModal from "./EditModal";
import CreateModal from "./CreateModal";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const SingerAdmin = () => {
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
        <div className="px-4 py-5 event-admin">
          <div className="card">
            <label className="fs-3 me-3" htmlFor="search-kind">
              Tìm kiếm:
            </label>
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
        <div className="px-4">
          <SingerTable
            musicSongs={musicSongs}
            openEditModal={openEditModal}
            deleteMusicKind={deleteMusicKind}
          />
        </div>
        <div className="d-flexpagination-admin">
          <div className="col-6 description-pagination">
            <div style={{ fontSize: "medium" }}>
              Hiển thị{" "}
              <span style={{ color: "red" }}>
                {(currentPage - 1) * 20 + 1} -{" "}
                {Math.min(currentPage * 20, maxpage)}
              </span>{" "}
              trong <span style={{ color: "red" }}>{maxpage}</span> ca sĩ
            </div>
          </div>
          <Stack spacing={2}>
            <Pagination
              variant="outlined"
              color="primary"
              count={Math.ceil(maxpage / itemsPerPage)}
              page={currentPage}
              onChange={handleChange}
              showFirstButton
              showLastButton
            />
          </Stack>
        </div>
      </div>
      <EditModal
        isOpen={isEditModalOpen}
        closeModal={closeEditModal}
        form={editForm}
        handleFormChange={handleEditFormChange}
        handleUpload={handleUpload}
        imageUrl={imageUrl}
        updateMusicKind={updateMusicKind}
      />
      <CreateModal
        isOpen={isCreateModalOpen}
        closeModal={closeCreateModal}
        form={createForm}
        handleFormChange={handleCreateFormChange}
        handleUpload={handleUpload}
        imageUrl={imageUrl}
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

export default SingerAdmin;

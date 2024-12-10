import React from "react";
import Modal from "react-modal";
import ImageUploader from "../../../components/pages/profile/Profile-setting/uploadImage";
import AudioUploader from "../../../components/pages/profile/Profile-setting/upladAudio";

const EditSongModal = ({
    isEditModalOpen,
    closeEditModal,
    editForm,
    handleEditFormChange,
    handleUpload,
    handleAudioUpload,
    imageUrl,
    audioUrl,
    updateMusicKind,
    openArModal,
    openGenreModal,
    handleAddArTag,
    handleRemoveArTag,
    handleAddGenreTag,
    handleRemoveGenreTag,
    isArModalOpen,
    closeArModal,
    handarleserch,
    searchAr,
    isGenreModalOpen,
    closeGenreModal,
    handgenreleserch,
    searchGenre
}) => {
    return (
        <Modal
            isOpen={isEditModalOpen}
            onRequestClose={closeEditModal}
            contentLabel="Edit Music Kind"
            className="modal-kindMusic"
            overlayClassName="modal-overlay-1"
        >
            <h2 className="text-center opacity-75 mb-5 fs-2">
                Chỉnh sửa thông tin Bài hát
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
                        placeholder={editForm.id}
                        onChange={handleEditFormChange}
                        readOnly
                    />
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-4 mb-2" htmlFor="edit-email">
                        songname:
                    </label>
                    <input
                        type="text"
                        className="fs-4 form-control"
                        id="edit-email"
                        name="songname"
                        value={editForm.songname}
                        onChange={handleEditFormChange}
                    />
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-4 mb-2" htmlFor="edit-profile">
                        thumbnail:
                    </label>
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            className="avt-img w-25"
                            alt="Uploaded"
                        />
                    )}
                    <ImageUploader onUpload={handleUpload} />
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-4 mb-2" htmlFor="create-email">
                        file nhạc:
                    </label>
                    {audioUrl && (
                        <>
                            <audio controls>
                                <source
                                    src={audioUrl}
                                    type="audio/ogg"
                                />
                                <source
                                    src={audioUrl}
                                    type="audio/mpeg"
                                />
                            </audio>
                        </>
                    )}
                    <AudioUploader onUpload={handleAudioUpload} />
                </div>
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
                    <div className="row align-items-start">
                        <p>
                            {editForm.artists &&
                                editForm.artists.map((d) => (
                                    <button
                                        onClick={(e) =>
                                            handleRemoveArTag(e, d)
                                        }
                                        className="btn btn-outline-primary btn-lg"
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
                                onChange={handarleserch}
                            />
                            <p>{editForm.artists}</p>
                            <div
                                style={{ height: "20rem" }}
                                className="d-flex flex-wrap align-content-start gap-3 overflow-scroll"
                            >
                                {searchAr ? (
                                    searchAr.map((data) => (
                                        <p value={data.id}>
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
                            editForm.genresid.map((d) => (
                                <button
                                    onClick={(e) =>
                                        handleRemoveGenreTag(e, d)
                                    }
                                    className="btn btn-outline-primary btn-lg"
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
                            onChange={handgenreleserch}
                        />
                        <div
                            style={{ height: "20rem" }}
                            className="d-flex flex-wrap align-content-start gap-3 overflow-scroll"
                        >
                            {searchGenre ? (
                                searchGenre.map((data) => (
                                    <p value={data.genreId}>
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
    );
};

export default EditSongModal;

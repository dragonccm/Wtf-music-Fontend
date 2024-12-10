import React from "react";
import Modal from "react-modal";
import ImageUploader from "../../../components/pages/profile/Profile-setting/uploadImage";
import AudioUploader from "../../../components/pages/profile/Profile-setting/upladAudio";

const CreateSongModal = ({
    isCreateModalOpen,
    closeCreateModal,
    createForm,
    handleCreateFormChange,
    handleUpload,
    handleAudioUpload,
    imageUrl,
    audioUrl,
    createMusicKind,
    openArModal,
    openGenreModal,
    handleCreateAddArTag,
    handleCreateRemoveArTag,
    handleCreateAddGenreTag,
    handleCreateRemoveGenreTag,
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
            isOpen={isCreateModalOpen}
            onRequestClose={closeCreateModal}
            contentLabel="Create Music Kind"
            className="modal-kindMusic"
            overlayClassName="modal-overlay-1"
        >
            <h2 className="text-center opacity-75 mb-5 fs-2">
                Tạo mới Bài hát
            </h2>
            <form>
                <div className="mb-4 form-group">
                    <label className="fs-4 mb-2" htmlFor="create-name">
                        tên bài hát:
                    </label>
                    <input
                        type="text"
                        className="fs-4 form-control"
                        id="create-name"
                        name="songname"
                        onChange={handleCreateFormChange}
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
                        onClick={(e) => openArModal(e, createForm)}
                    >
                        {" "}
                        chọn nghệ sĩ
                    </button>
                    <div className="row align-items-start">
                        <p>
                            {createForm.artists &&
                                createForm.artists.map((d) => (
                                    <button
                                        onClick={(e) =>
                                            handleCreateRemoveArTag(
                                                e,
                                                d
                                            )
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
                            <p>{createForm.artists}</p>
                            <div
                                style={{ height: "20rem" }}
                                className="d-flex flex-wrap align-content-start gap-3 overflow-scroll"
                            >
                                {searchAr ? (
                                    searchAr.map((data) => (
                                        <p value={data.id}>
                                            <button
                                                onClick={(e) =>
                                                    handleCreateAddArTag(
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
                        onClick={(e) => openGenreModal(e, createForm)}
                    >
                        {" "}
                        chọn thể loại
                    </button>
                    <p>
                        {createForm.genresid &&
                            createForm.genresid.map((d) => (
                                <button
                                    onClick={(e) =>
                                        handleCreateRemoveGenreTag(e, d)
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
                                                handleCreateAddGenreTag(
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
                        {createForm.genresid &&
                            createForm.genresid.map((d) => d)}
                    </p>
                </div>
                <div className="mb-4 form-group">
                    <label className="fs-4 mb-2" htmlFor="create-email">
                        lyric:
                    </label>
                    <textarea
                        className="fs-4 form-control"
                        id="create-description"
                        name="lyric"
                        onChange={handleCreateFormChange}
                    ></textarea>
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
    );
};

export default CreateSongModal;

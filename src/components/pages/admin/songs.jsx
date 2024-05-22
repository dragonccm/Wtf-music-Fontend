/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "../../../css/admin/musicAdmin.scss";
import Modal from "react-modal";
import logo from "../../../img/logo3 (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { adminGetSong } from "../../../services/adminSongService"
import {
    updateSong,
    deleteSong,
    createSong
} from "../../../services/restSongService"
import { adminSearchS } from "../../../services/adminSearchSongService"

import ImageUploader from "../../../components/pages/profile/Profile-setting/uploadImage"


const SongAdmin = () => {
    const [musicSongs, setMusicSongs] = useState([]); // Danh sách thể loại nhạc
    const [maxpage, setmaxpage] = useState(0); // Danh sách thể loại nhạc
    const [selectedSong, setSelectedSong] = useState(null); // Thể loại đang được chọn
    const [editForm, setEditForm] = useState({
        id: "",
        songname: "",
        thumbnail: "",
        artists: "",
        genresid: "",
        songLink: "",
        like: "",
        listen: "",
    }); // Thông tin form chỉnh sửa
    const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Trạng thái hiển thị pop-up form
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false); // Trạng thái hiển thị pop-up form tạo mới
    const [isGenreModalOpen, setIsGenreModalOpen] = useState(false); // Trạng thái hiển thị pop-up form tạo mới
    const [isArModalOpen, setIsArModalOpen] = useState(false); // Trạng thái hiển thị pop-up form tạo mới
    const [createForm, setCreateForm] = useState({
        songname: "",
        thumbnail: "",
        artists: "",
        genresid: "",
        songLink: "",
        lyric: "",
    }); // Thông tin form tạo mới
    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
    const [search, setSearch] = useState([]); // Trang hiện tại
    const [searchGenre, setSearchGenre] = useState([]); // Trang hiện tại
    const [searchAr, setSearchAr] = useState([]); // Trang hiện tại
    const [editSongGenre, seteditSongGenre] = useState([]); // Trang hiện tại
    const [editAr, seteditAr] = useState([]); // Trang hiện tại
    const [imageUrl, setImageUrl] = useState('');
    const [file, setFile] = useState(null);
    const handlePageChange = (pageNum) => {
        if (pageNum < 1 || pageNum > Math.ceil(maxpage / itemsPerPage)) {
            return; // Không thực hiện cập nhật nếu số trang không hợp lệ
        }
        setCurrentPage(pageNum);
        fetchMusicSongs();
    };
    const handleUpload = (file) => {
        setFile(file);
        setImageUrl(URL.createObjectURL(file));
    };
    const itemsPerPage = 20; // Số mục trên mỗi trang
    // Giả sử chúng ta có một hàm fetchMusicSongs để lấy dữ liệu từ API
    useEffect(() => {
        fetchMusicSongs();
    }, []);
    // Hàm giả lập lấy danh sách thể loại nhạc từ server
    const fetchMusicSongs = async () => {
        try {
            const response = await adminGetSong(parseInt((currentPage - 1) * itemsPerPage));
            setMusicSongs(response.handledata);
            setmaxpage(response.maxPage)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const updateMusicSongs = async (data) => {
        try {
            data.genresid = editSongGenre;
            data.artists = editAr;
            data.thumbnail = imageUrl;
            await updateSong(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const createMusicSongs = async (data) => {
        alert(JSON.stringify(data))
        try {
            await createSong(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const deleteMusicSongs = async (data) => {
        try {
            await deleteSong(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    // Hàm tạo mới thể loại nhạc
    const createMusicKind = async () => {
        createMusicSongs(createForm)
    };

    // Hàm chỉnh sửa thông tin thể loại nhạc
    const updateMusicKind = async () => {
        // Gọi API để chỉnh sửa thông tin thể loại nhạc
        // Khi chỉnh sửa thành công, cập nhật state
        updateMusicSongs(editForm)
    };

    // Hàm xóa thể loại nhạc
    const deleteMusicKind = async (id) => {
        deleteMusicSongs(id)
    };

    // Hiển thị pop-up form chỉnh sửa
    const openEditModal = (kind) => {
        setSelectedSong(kind);
        setEditForm({
            id: kind.id,
            songname: kind.songname,
            thumbnail: kind.thumbnail,
            artists: kind.artists,
            genresid: kind.genresid,
        });
        setIsEditModalOpen(true);
    };


    const openGenreModal = (e,kind) => {
        e.preventDefault();
        setIsGenreModalOpen(true);
    };
    const openArModal = (e,kind) => {
        e.preventDefault();
        setIsArModalOpen(true);
    };

    // Đóng pop-up form chỉnh sửa
    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };

    const closeGenreModal = () => {
        setIsGenreModalOpen(false);
    };
    const closeArModal = () => {
        setIsArModalOpen(false);
    };

    // Hiển thị pop-up form tạo mới
    const openCreateModal = (kind) => {
        setSelectedSong(kind);
        setCreateForm({

            songname: kind.songname,
            thumbnail: kind.thumbnail,
            artists: kind.artists,
            genresid: kind.genresid,
            songLink: kind.songLink,
            lyric: kind.lyric,
        });
        setIsCreateModalOpen(true);
    };

    // Đóng pop-up form tạo mới
    const closeCreateModal = () => {
        setIsCreateModalOpen(false);
    };

    // Xử lý sự kiện thay đổi giá trị trong form chỉnh sửa
    const handleEditFormChange = async (e) => {
        const { name, value } = e.target;
        console.log({ ...editForm, [name]: value, artists: editAr, genresid: editSongGenre })
        setEditForm({ ...editForm, [name]: value, artists: editAr, genresid: editSongGenre });
    };

    const handleCreateFormChange = (e) => {
        const { name, value } = e.target;
        console.log({ ...createForm, [name]: value })
        setCreateForm({ ...createForm, [name]: value });
    };
    const handleserch = async (e) => {
        try {
            const ser = await adminSearchS(e.target.value);
            setMusicSongs(ser.DT.songs);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handarleserch = async (e) => {
        try {
            const ser = await adminSearchS(e.target.value);
            setSearchAr(ser.DT.ar);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handgenreleserch = async (e) => {
        try {
            const ser = await adminSearchS(e.target.value);
            setSearchGenre(ser.DT.genre);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handleAddGenreTag = (e, id) => {
        e.preventDefault();
        if (!editSongGenre.includes(id)) {
            const newEditSongGenre = [...editSongGenre];
            newEditSongGenre.push(id);
            seteditSongGenre(newEditSongGenre);
        }
        else {
            alert("id đã tồn tại")
        }
    };
    const handleAddArTag = (e, id) => {
        e.preventDefault();
        if (!editAr.includes(id)) {
            const neweditAr = [...editAr];
            neweditAr.push(id);
            seteditAr(neweditAr);
        }
        else {
            alert("id đã tồn tại")
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
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Hình Ảnh</th>
                            <th>Nghệ Sĩ</th>
                            <th>Thể Loại</th>
                            <th>Lượt Like</th>
                            <th>Lượt Nghe</th>
                        </tr>
                    </thead>
                    <tbody>
                        {musicSongs.map((kind) => (
                            <tr key={kind.id}>
                                <td>{kind.id}</td>
                                <td>{kind.songname}</td>
                                <td className="td_img"> <img src={kind.thumbnail} alt={kind.songname} /> </td>
                                <td>{kind.artists?.map(artist => artist && artist.artistsName ? artist.artistsName : "").join(", ")}</td>
                                <td>{kind.genresid?.map(genre => genre && genre.genrename ? genre.genrename : "").join(", ")}</td>
                                <td>{kind.like}</td>
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
                        Chỉnh sửa thông tin bài nhạc
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
                                placeholder={editForm.id}
                                onChange={handleEditFormChange}
                                readOnly
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="edit-email">
                                songname:
                            </label>
                            <input
                                type="text"
                                className="fs-5 form-control"
                                id="edit-email"
                                name="songname"
                                value={editForm.songname}
                                onChange={handleEditFormChange}
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
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="edit-profile">
                                songLink:
                            </label>
                            <input
                                type="file"
                                className="fs-5 form-control"
                                id="songLink"
                                value={editForm.songLink}
                                onChange={handleEditFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="create-date">
                                nghệ sĩ:
                            </label>
                            <button
                                className="btn btn-outline-primary btn-lg"
                                onClick={(e) => openArModal(e,editForm)}
                            > chọn nghệ sĩ</button>
                            <div class="row align-items-start">
                                <p>{editAr}</p>
                                <Modal
                                    isOpen={isArModalOpen}
                                    onRequestClose={closeArModal}
                                    contentLabel="Edit Music Kind"
                                    className="modal-kindMusic"
                                    overlayClassName="modal-overlay-1"
                                >
                                    <input
                                        type="text"
                                        className="fs-5 form-control col"
                                        id="create-date"
                                        name="artists"
                                        // value={createForm.artists}
                                        onChange={handarleserch}
                                    />
                                    <p>{editAr}</p>
                                    <div className="d-flex flex-wrap align-content-start gap-3">
                                        {searchAr ?
                                            searchAr.map((data) =>
                                                <p value={data.id}>
                                                    <button onClick={(e) => handleAddArTag(e, data.id)} className="btn btn-outline-primary btn-lg">{data.artistsName}</button>
                                                </p>
                                            )
                                            :
                                            <option value="sds">undefine</option>
                                        }
                                    </div>
                                </Modal>
                            </div>
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2 m-3" htmlFor="create-email">
                                thể loại:
                            </label>

                            <button
                                className="btn btn-outline-primary btn-lg"
                                onClick={(e) => openGenreModal(e,editForm)}
                            > chọn thể loại</button>
                            <Modal
                                isOpen={isGenreModalOpen}
                                onRequestClose={closeGenreModal}
                                contentLabel="Edit Music Kind"
                                className="modal-kindMusic"
                                overlayClassName="modal-overlay-1"
                            >
                                <input
                                    type="text"
                                    className="fs-5 form-control col"
                                    id="create-date"
                                    // value={createForm.genresid}
                                    onChange={handgenreleserch}
                                />
                                <p>{editSongGenre}</p>
                                <div className="d-flex flex-wrap align-content-start gap-3">
                                    {searchGenre ?
                                        searchGenre.map((data) => <p value={data.genreId}><button onClick={(e) => handleAddGenreTag(e, data.genreId)} className="btn btn-outline-primary btn-lg">{data.genrename}</button></p>)
                                        :
                                        <p value="sds">
                                            none
                                        </p>
                                    }
                                </div>
                            </Modal>
                            <p>{editSongGenre}</p>

                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="edit-date">
                                like:
                            </label>
                            <input
                                type="text"
                                className="fs-5 form-control"
                                id="edit-date"
                                name="like"
                                value={editForm.like}
                                onChange={handleEditFormChange}
                                readOnly
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="edit-date">
                                listen:
                            </label>
                            <input
                                type="text"
                                className="fs-5 form-control"
                                id="edit-date"
                                name="listen"
                                value={editForm.listen}
                                onChange={handleEditFormChange}
                                readOnly
                            />
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
                        Tạo mới bài hát
                    </h2>
                    <form>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="create-name">
                                tên bài hát:
                            </label>
                            <input
                                type="text"
                                className="fs-5 form-control"
                                id="create-name"
                                name="songname"
                                // value={createForm.songname}
                                onChange={handleCreateFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="create-email">
                                hình ảnh:
                            </label>
                            <input
                                type="file"
                                className="fs-5 form-control"
                                id="create-email"
                                name="thumbnail"
                                // value={createForm.thumbnail}
                                onChange={handleCreateFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="create-email">
                                file nhạc:
                            </label>
                            <input
                                type="url"
                                className="fs-5 form-control"
                                id="create-email"
                                name="songLink"
                                // value={createForm.thumbnail}
                                onChange={handleCreateFormChange}
                            />
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="create-date">
                                nghệ sĩ:
                            </label>
                            <div class="row align-items-start">
                                <input
                                    type="text"
                                    className="fs-5 form-control col"
                                    id="create-date"
                                    name="artists"
                                    // value={createForm.artists}
                                    onChange={handarleserch}
                                />
                                <select value={createForm.artists} class="form-select col" aria-label="Default select example" name="artists" onChange={handleCreateFormChange}>
                                    {searchAr ?
                                        searchAr.map((data) => <option value={data.id}>{data.artistsName}</option>)
                                        :
                                        <option value="sds">undefine</option>}
                                </select>
                            </div>
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="create-email">
                                thể loại:
                            </label>
                            <div class="row align-items-start">
                                <input
                                    type="text"
                                    className="fs-5 form-control col"
                                    id="create-date"
                                    // value={createForm.genresid}
                                    onChange={handgenreleserch}
                                />
                                <select value={createForm.genresid} class="form-select col" aria-label="Default select example" name="genresid" onChange={handleCreateFormChange}>
                                    {searchGenre ?
                                        searchGenre.map((data) => <option value={data.genreId}>{data.genrename}</option>)
                                        :
                                        <option value="sds">undefine</option>}
                                </select>
                            </div>
                        </div>
                        <div className="mb-4 form-group">
                            <label className="fs-5 mb-2" htmlFor="create-email">
                                lyric:
                            </label>
                            <textarea
                                className="fs-5 form-control"
                                id="create-description"
                                name="lyric"
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

export default SongAdmin;

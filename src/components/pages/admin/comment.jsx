/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "../../../css/admin/musicAdmin.scss";
import Modal from "react-modal";
import logo from "../../../img/logo3 (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faRepeat, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { adminGetCommentService } from "../../../services/adminGetComment";
import { getPlaylist } from "../../../services/playlistService";
import { getSongData } from "../../../services/SongService";
import {
    bancommentService
} from "../../../services/bancomment_service";
import { adminSearchS } from "../../../services/adminSearchSongService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CommentAdmin = () => {
    const [musicSongs, setMusicSongs] = useState([]); // Danh sách thể loại nhạc
    const [maxpage, setmaxpage] = useState(0); // Danh sách thể loại nhạc
    const [selectedSong, setSelectedSong] = useState(null); // Thể loại đang được chọn
    const [editForm, setEditForm] = useState({
        _id: "",
        songId: "",
        content: "",
        userId: "",
        createdAt: "",
        ban: "",
        reportCount: "",
        songName: "",
        state: 0,
    }); // Thông tin form chỉnh sửa
    const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Trạng thái hiển thị pop-up form
    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
    const [search, setSearch] = useState({}); // Trang hiện tại

    const handlePageChange = (pageNum) => {
        if (pageNum < 1 || pageNum > Math.ceil(maxpage / itemsPerPage)) {
            return; // Không thực hiện cập nhật nếu số trang không hợp lệ
        }
        setCurrentPage(pageNum);
        fetchMusicSongs();
    };
    const itemsPerPage = 20; // Số mục trên mỗi trang
    // Giả sử chúng ta có một hàm fetchMusicSongs để lấy dữ liệu từ API
    useEffect(() => {
        fetchMusicSongs();
    }, []);
    // Hàm giả lập lấy danh sách thể loại nhạc từ server
    const fetchMusicSongs = async () => {
        try {
            const response = await adminGetCommentService(
                parseInt((currentPage - 1) * itemsPerPage)
            );

            setMusicSongs(response.handledata);
            setmaxpage(response.maxPage);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const updateMusicSongs = async (data) => {
        try {
            const res = await bancommentService(data);
            if (res && res.EC === "0") {
                toast.success(res.EM);
                fetchMusicSongs();
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };




    const handleserch = async (e) => {
        try {
            const ser = await adminSearchS(e.target.value);
            setSearch(ser.DT.User);
            setMusicSongs(ser.DT.User);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const totalPages = Math.ceil(maxpage / itemsPerPage) - 5;
    console.log(musicSongs);
    return (
        <div className="container overflow-x-auto container-admin">
            <div className="text-center container-img">
                <img style={{ width: "12%" }} src={logo} alt="logo" />
            </div>
            <div className="d-flex align-items-center justify-content-between px-4 header-admin">
                <h2 className="fw-normal fs-1 heading-admin">
                    Danh sách bình luận báo cáo
                </h2>
            </div>
            <div className="px-4 py-5 event-admin">
                <div class="card">
                    <label className="fs-3 me-3" htmlFor="search-kind">
                        Tìm kiếm:
                    </label>
                    <div class="input-box">
                        <input
                            id="search-kind"
                            type="text"
                            placeholder="Nhập người dùng"
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
                            <th>ID comment</th>
                            <th>bài nhạc</th>
                            <th>người dùng</th>
                            <th>Nội dung</th>
                            <th>Ngày tạo</th>
                            <th>lượt báo cáo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {musicSongs.map((kind, index) => (
                            <>
                                {kind.state === 0 ? (
                                    <tr key={kind._id}>
                                        <td>{index}</td>
                                        <td>{kind.songId}</td>
                                        <td>{kind.userId}</td>
                                        <td>{kind.content}</td>
                                        <td>{kind.createdAt}</td>
                                        <td>{kind.reportCount}</td>
                                        <td>
                                            <button
                                                className="btn btn-danger-custom fs-5 ms-3"
                                                onClick={() => updateMusicSongs(kind._id)}
                                            >
                                                <FontAwesomeIcon icon={faBan} />
                                            </button>
                                        </td>
                                    </tr>
                                ) : (
                                    <tr style={{ background: '#b5d5ff' }} key={kind._id}>
                                        <td>{index}</td>
                                        <td>{kind.songId}</td>
                                        <td>{kind.userId}</td>
                                        <td>{kind.content}</td>
                                        <td>{kind.createdAt}</td>
                                        <td>{kind.reportCount}</td>
                                        <td>
                                            <button
                                                className="btn btn-primary fs-5 ms-3"
                                                onClick={() => updateMusicSongs(kind._id)}
                                            >
                                                <FontAwesomeIcon icon={faUnlock} />
                                            </button>
                                        </td>
                                    </tr>
                                )}

                            </>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="d-flex py-4 pagination-admin">
                <div className="col-6 ps-5 description-pagination">
                    <div style={{ fontSize: "medium" }}>
                        Hiển thị{" "}
                        <span style={{ color: "red" }}>
                            {(currentPage - 1) * itemsPerPage + 1} -{" "}
                            {Math.min(currentPage * itemsPerPage, maxpage)}
                        </span>{" "}
                        trong <span style={{ color: "red" }}>{maxpage}</span>{" "}
                        người dùng
                    </div>
                </div>
                <div className="col-6 pe-5 pagination-numbers">
                    <ul className="pagination justify-content-end">
                        <li
                            style={{ backgroundColor: "#d4dae2" }}
                            className="border"
                        >
                            <a
                                className="d-block fs-4 px-4 py-1 opacity-75"
                                href="#"
                                onClick={() => handlePageChange(1)}
                            >
                                Đầu
                            </a>
                        </li>
                        <li className="border">
                            <a
                                className="d-block fs-4 px-4 py-1 opacity-75"
                                href="#"
                                onClick={() =>
                                    handlePageChange(currentPage - 1)
                                }
                                disabled={currentPage <= 1}
                            >
                                Lùi
                            </a>
                        </li>
                        <li className="border">
                            <a
                                className="d-block fs-4 px-4 py-1 opacity-75"
                                href="#"
                                onClick={() =>
                                    handlePageChange(currentPage + 1)
                                }
                                disabled={currentPage === totalPages}
                            >
                                Tiếp
                            </a>
                        </li>
                        <li
                            style={{ backgroundColor: "#d4dae2" }}
                            className="border"
                        >
                            <a
                                className="d-block fs-4 px-4 py-1 opacity-75"
                                href="#"
                                onClick={() => handlePageChange(totalPages - 5)}
                            >
                                Cuối
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
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

export default CommentAdmin;

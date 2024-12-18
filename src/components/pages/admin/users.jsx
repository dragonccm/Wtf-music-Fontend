/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "../../../css/admin/musicAdmin.scss";
import logo from "../../../img/logo3 (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faTrash, faUnlock, faUser } from "@fortawesome/free-solid-svg-icons";
import { adminGetUsers } from "../../../services/adminGetUserService";
import {
    deleteUser,
} from "../../../services/restUserService";
import { adminSearchUserService } from "../../../services/adminSearchSongService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const UserAdmin = () => {
    const [musicSongs, setMusicSongs] = useState([]); // Danh sách thể loại nhạc
    const [maxpage, setmaxpage] = useState(0); // Danh sách thể loại nhạc
    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
    const [search, setSearch] = useState({}); // Trang hiện tại

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };
    const itemsPerPage = 10; // Số mục trên mỗi trang
    // Giả sử chúng ta có một hàm fetchMusicSongs để lấy dữ liệu từ API
    useEffect(() => {
        fetchMusicSongs();
    }, [currentPage]);
    const fetchMusicSongs = async () => {
        try {
            const response = await adminGetUsers(
                parseInt((currentPage - 1) * itemsPerPage)
            );

            setMusicSongs(response.DT.handledata);
            setmaxpage(response.DT.maxPage);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const chanrole = async (id, role) => {
        try {
            const response = await deleteUser(id, role);
            if (response) {
                toast.success(response.EM);
                fetchMusicSongs();
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const deleteMusicKind = async (id, role) => {
        chanrole(id, role)
    };

    // Hiển thị pop-up form chỉnh sửa
    // const openEditModal = (kind) => {
    //     setSelectedSong(kind);
    //     setEditForm({
    //         id: kind.id,
    //         username: kind.username,
    //         birthday: kind.birthday,
    //         avt: kind.avt,
    //         email: kind.email,
    //         likedPlayLists: kind.likedPlayLists,
    //         likedSongs: kind.likedSongs,
    //         myPlayLists: kind.myPlayLists,
    //         banSongs: kind.banSongs,
    //     });
    //     setIsEditModalOpen(true);
    // };

    // Đóng pop-up form chỉnh sửa
    // const closeEditModal = () => {
    //     setIsEditModalOpen(false);
    // };

    // // Xử lý sự kiện thay đổi giá trị trong form chỉnh sửa
    // const handleEditFormChange = async (e) => {
    //     const { name, value } = e.target;
    //     setEditForm({ ...editForm, [name]: value });
    // };

    const handleserch = async (e) => {
        try {
            const ser = await adminSearchUserService(e.target.value);
            setMusicSongs(ser.DT.data.User);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const totalPages = Math.ceil(maxpage / itemsPerPage) - 5;
    return (
        <div className="container overflow-x-auto container-admin">
            <div className="text-center container-img">
                <img style={{ width: "12%" }} src={logo} alt="logo" />
            </div>
            <div className="d-flex align-items-center justify-content-between px-4 header-admin">
                <h2 className="fw-normal fs-1 heading-admin">
                    Danh sách người dùng
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
                            <th>ID</th>
                            <th>Tài khoản</th>
                            <th>Hình</th>
                            <th>Sinh nhật</th>
                        </tr>
                    </thead>
                    <tbody>
                        {musicSongs.map((kind, index) => (
                            <>
                                {
                                    kind.role === "1" && (
                                        <tr key={kind.id}>
                                            <td>{index}</td>
                                            <td>{kind.username}</td>
                                            <td className="td_img">
                                                {" "}
                                                <img
                                                    src={kind.avt}
                                                    alt={`${kind.username}_avt`}
                                                />{" "}
                                            </td>
                                            <td>{new Date(kind.birthday).toLocaleDateString('en-GB')}</td>
                                            <td>
                                               
                                                {kind.role === "1" ? (
                                                    <button
                                                        className="btn btn-danger-custom fs-3 ms-3"
                                                        onClick={() => deleteMusicKind(kind.id, "ban")}
                                                    >
                                                        <FontAwesomeIcon icon={faBan} />
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="btn btn-success-custom fs-3 ms-3"
                                                        onClick={() => deleteMusicKind(kind.id, "user")}
                                                    >
                                                        <FontAwesomeIcon icon={faUnlock} />
                                                    </button>
                                                )}

                                            </td>
                                        </tr>
                                    ) 
                                }
                                {
                                    kind.role === "2" && (
                                        <tr style={{ background: '#b5d5ff' }} key={kind.id}>
                                            <td>{index}</td>
                                            <td>{kind.username}</td>
                                            <td className="td_img">
                                                {" "}
                                                <img
                                                    src={kind.avt}
                                                    alt={`${kind.username}_avt`}
                                                />{" "}
                                            </td>
                                            <td>{new Date(kind.birthday).toLocaleDateString('en-GB')}</td>
                                            <td>
                                               
                                                {kind.role === "1" ? (
                                                    <button
                                                        className="btn btn-danger-custom fs-3 ms-3"
                                                        onClick={() => deleteMusicKind(kind.id, "ban")}
                                                    >
                                                        <FontAwesomeIcon icon={faBan} />
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="btn btn-success-custom fs-3 ms-3"
                                                        onClick={() => deleteMusicKind(kind.id, "user")}
                                                    >
                                                        <FontAwesomeIcon icon={faUnlock} />
                                                    </button>
                                                )}

                                            </td>
                                        </tr>
                                    ) 
                                }
                                {
                                    kind.role === "0" && (
                                        <tr key={kind.id}>
                                            <td>{index}</td>
                                            <td>{kind.username}</td>
                                            <td className="td_img">
                                                {" "}
                                                <img
                                                    src={kind.avt}
                                                    alt={`${kind.username}_avt`}
                                                />{" "}
                                            </td>
                                            <td>{new Date(kind.birthday).toLocaleDateString('en-GB')}</td>
                                            <td>


                                            </td>
                                        </tr>
                                    ) 
                                }
                                
                            </>

                        ))}
                    </tbody>
                </table>
            </div>
            <div className="d-flex pagination-admin">
                <div className="col-6 description-pagination">
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
                <Stack spacing={2}>
                    <Pagination variant="outlined" color="primary" count={Math.ceil(maxpage / itemsPerPage)} page={currentPage} onChange={handleChange} showFirstButton showLastButton />
                </Stack>
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

export default UserAdmin;

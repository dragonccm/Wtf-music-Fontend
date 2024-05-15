import React, { useState, useEffect } from "react";
import "../../../css/admin/musicAdmin.scss";
import Modal from "react-modal";
import logo from "../../../img/logo3 (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const UsersAdmin = () => {
    const [musicUsers, setMusicUsers] = useState([]); // Danh sách thể loại nhạc

    // Giả sử chúng ta có một hàm fetchMusicUsers để lấy dữ liệu từ API
    useEffect(() => {
        fetchMusicUsers();
    }, []);

    // Hàm giả lập lấy danh sách thể loại nhạc từ server
    const fetchMusicUsers = async () => {
        const data = [
            {
                id: "01",
                avt: "image1.jpg",
                userAccount: "thchoshungthinh123",
                password: "hsjdfhjkshdjkfhjkfhjsjfdkhsdjf!@@!@#!@#",
                name: "Nguyễn Hưng Thịnh",
                email: "nht2101@gmail.com",
                role: "user",
            },
            {
                id: "02",
                avt: "image2.jpg",
                userAccount: "ngoclông123",
                password: "hsjdfhjkshdjkfhjkfhjsjfdkhsdjf!@@!@#!@#",
                name: "Nguyễn Ngọc Long",
                email: "ngl2101@gmail.com",
                role: "user",
            },
            // thêm dữ liệu giả lập ở đây
        ];
        setMusicUsers(data);
    };

    // Hàm tạo mới thể loại nhạc
    const createMusicKind = async (name, description) => {
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
            <div className="px-4 event-admin">
                <form action="">
                    <label className="fs-3 me-3" htmlFor="search-kind">
                        Tìm kiếm:
                    </label>
                    <input
                        id="search-kind"
                        type="text"
                        placeholder="Nhập thể loại"
                        required
                        className="fs-4 ps-3 py-1 border border-dark-subtle rounded-1"
                    />
                </form>
            </div>
            <div className="px-4">
                <table className="w-100 fs-3 text-justify table-admin">
                    <thead>
                        <tr>
                            <th>Hình ảnh</th>
                            <th>Tên</th>
                            <th>Tài khoản</th>
                            <th>Email</th>
                            <th>Vai trò</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {musicUsers.map((kind) => (
                            <tr key={kind.id}>
                                <td>{kind.avt}</td>
                                <td>{kind.name}</td>
                                <td>{kind.userAccount}</td>
                                <td>{kind.email}</td>
                                <td>{kind.role}</td>
                                <td>
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
                <div className="col-6 description-pagination"></div>
                <div className="col-6 pe-5 pagination-numbers">
                    <ul className="pagination justify-content-end ">
                        <li className="border">
                            <a
                                className="d-block fs-4 px-4 py-1 opacity-75"
                                href="#"
                            >
                                Previous
                            </a>
                        </li>
                        <li className="border active">
                            <a
                                className="d-block fs-4 px-4 py-1 opacity-75"
                                href="#"
                            >
                                1
                            </a>
                        </li>
                        <li className="border">
                            <a
                                className="d-block fs-4 px-4 py-1 opacity-75"
                                href="#"
                            >
                                Next
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UsersAdmin;

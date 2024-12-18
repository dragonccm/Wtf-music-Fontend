import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faBan } from "@fortawesome/free-solid-svg-icons";

const SongTable = ({ musicSongs, openEditModal, deleteMusicKind, currentPage, itemsPerPage, maxpage, handlePageChange }) => {
    const totalPages = Math.ceil(maxpage / itemsPerPage);

    return (
        <div className="px-4">
            <table className="w-100 fs-3 text-justify table-admin">
                <thead>
                    <tr>
                        <th>stt</th>
                        <th>Hình Ảnh</th>
                        <th>Tên</th>
                        <th>tình trạng</th>
                        <th>Lượt Like</th>
                        <th>Lượt Nghe</th>
                        <th>Trạng thái kiểm soát</th>
                    </tr>
                </thead>
                <tbody>
                    {musicSongs.map((kind, index) => (
                        <tr key={kind.id} style={{ background: kind.state === 1 ? '#b5d5ff' : 'transparent' }}>
                            <td>{index}</td>
                            <td className="td_img">
                                <img src={kind.thumbnail} alt={kind.songname} />
                            </td>
                            <td>{kind.songname}</td>
                            <td>{kind.state === 1 ? "đã ẩn" : "bình thường"}</td>
                            <td>{kind.like}</td>
                            <td>{kind.listen}</td>
                            <td>{kind.state}</td>
                            <td>
                                <button className="btn btn-primary fs-3" onClick={() => openEditModal(kind)}>
                                    <FontAwesomeIcon icon={faPen} />
                                </button>
                                <button className="btn btn-danger-custom fs-3 ms-3" onClick={() => deleteMusicKind(kind.id)}>
                                    <FontAwesomeIcon icon={faBan} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="d-flex py-4 pagination-admin">
                <div className="col-6 ps-5 description-pagination">
                    <div style={{ fontSize: "medium" }}>
                        Hiển thị{" "}
                        <span style={{ color: "red" }}>
                            {(currentPage - 1) * itemsPerPage + 1} -{" "}
                            {Math.min(currentPage * itemsPerPage, maxpage)}
                        </span>{" "}
                        trong <span style={{ color: "red" }}>{maxpage}</span>{" "}
                        bài hát
                    </div>
                </div>
                <div className="col-6 pe-5 pagination-numbers">
                    <ul className="pagination justify-content-end">
                        <li style={{ backgroundColor: "#d4dae2" }} className="border">
                            <a className="d-block fs-4 px-4 py-1 opacity-75" href="#" onClick={() => handlePageChange(1, true)}>
                                Đầu
                            </a>
                        </li>
                        <li className="border">
                            <a className="d-block fs-4 px-4 py-1 opacity-75" href="#" onClick={() => handlePageChange(currentPage - 1, true)}>
                                Lùi
                            </a>
                        </li>
                        <li className="border">
                            <a className="d-block fs-4 px-4 py-1 opacity-75" href="#" onClick={() => handlePageChange(currentPage + 1, false)}>
                                Tiếp
                            </a>
                        </li>
                        <li style={{ backgroundColor: "#d4dae2" }} className="border">
                            <a className="d-block fs-4 px-4 py-1 opacity-75" href="#" onClick={() => handlePageChange(totalPages, false)}>
                                Cuối
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SongTable;

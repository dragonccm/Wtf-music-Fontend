import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faBan } from "@fortawesome/free-solid-svg-icons";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const SongTable = ({ musicSongs, openEditModal, deleteMusicKind, currentPage, itemsPerPage, maxpage, handlePageChange }) => {
    const totalPages = Math.ceil(maxpage / itemsPerPage);

    return (
        <div className="px-4">
            <table className="w-100 fs-3 text-justify table-admin">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>Lượt Like</th>
                        <th>Lượt Nghe</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {musicSongs.map((kind, index) => (
                        <tr key={kind.id} style={{ background: kind.state === 1 ? '#b5d5ff' : 'transparent' }}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="infor">
                                    <img src={kind.thumbnail} alt={kind.songname} />
                                    <span>{kind.songname}</span>
                                </div>
                            </td>

                            <td>{kind.like}</td>
                            <td>{kind.listen}</td>
                            <td>
                                <div className="d-flex">
                                <button className="btn btn-primary fs-3" onClick={() => openEditModal(kind)}>
                                    <FontAwesomeIcon icon={faPen} />
                                </button>
                                <button className="btn btn-danger-custom fs-3 ms-3" onClick={() => deleteMusicKind(kind.id)}>
                                    <FontAwesomeIcon icon={faBan} />
                                    </button>
                                    </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="d-flex pagination-admin">
                <div className="col-6 description-pagination">
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
                <Stack spacing={2}>
                    <Pagination variant="outlined" color="primary" count={Math.ceil(maxpage / itemsPerPage)} page={currentPage} onChange={handlePageChange} showFirstButton showLastButton />
                </Stack>
            </div>
        </div>
    );
};

export default SongTable;

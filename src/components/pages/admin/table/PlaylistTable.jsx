import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faBan } from "@fortawesome/free-solid-svg-icons";

const PlaylistTable = ({ musicSongs, openEditModal, deleteMusicKind }) => {
    return (
        <table className="w-100 fs-3 text-justify table-admin">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Hình</th>
                    <th>Tên</th>
                    <th>Tình trạng</th>
                    <th>Loại</th>
                    <th>Lượt thích</th>
                    <th>Lượt nghe</th>
                </tr>
            </thead>
            <tbody>
                {musicSongs.map((kind, index) => (
                    <tr key={index} style={{ background: kind.state === 1 ? '#b5d5ff' : 'transparent' }}>
                        <td>{index + 1}</td>
                        <td className="td_img">
                            <img src={kind.thumbnail} alt={kind.genrename} className="square-img" />
                        </td>
                        <td>{kind.playlistname}</td>
                        <td>{kind.state === 1 ? "cấm truy cập" : "có thể truy cập"}</td>
                        <td>{kind.type}</td>
                        <td>{kind.like}</td>
                        <td>{kind.listen}</td>
                        <td>
                            <div className="d-flex">
                                <button className="btn btn-primary fs-3" onClick={() => openEditModal(kind)}>
                                    <FontAwesomeIcon icon={faPen} />
                                </button>
                                <button className="btn btn-danger-custom fs-3 ms-3" onClick={() => deleteMusicKind(kind.playlistId)}>
                                    <FontAwesomeIcon icon={faBan} />
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export { PlaylistTable };

export default PlaylistTable;

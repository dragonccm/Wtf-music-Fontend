import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faBan } from "@fortawesome/free-solid-svg-icons";

const SingerTable = ({ musicSongs, openEditModal, deleteMusicKind }) => {
    return (
        <div className="px-4">
            <table className="w-100 fs-3 text-justify table-admin">
                <thead>
                    <tr>
                        <th>stt</th>
                        <th>Hình</th>
                        <th>Tên</th>
                        <th>Trạng thái</th>
                        <th>Tổng lượt theo dõi</th>
                        <th>Tên thật</th>
                        <th>Sinh nhật </th>
                    </tr>
                </thead>
                <tbody>
                    {musicSongs.map((kind, index) => (
                        <tr key={kind.id} style={{ background: kind.state === 1 ? '#b5d5ff' : 'transparent' }}>
                            <td>{index}</td>
                            <td className="td_img">
                                <img src={kind.avt} alt={kind.artistsName} />
                            </td>
                            <td>{kind.artistsName}</td>
                            <td>{kind.state === 1 ? "tài khoản bị hạn chế" : "khoá"}</td>
                            <td>{kind.totalFollow}</td>
                            <td>{kind.realName}</td>
                            <td>{kind.birthday}</td>
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
        </div>
    );
};

export default SingerTable;

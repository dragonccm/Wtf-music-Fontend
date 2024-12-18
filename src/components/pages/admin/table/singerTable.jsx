import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faBan } from "@fortawesome/free-solid-svg-icons";

const SingerTable = ({ musicSongs, openEditModal, deleteMusicKind }) => {
    return (
        <div className="px-4">
          <div className="px-4">
                <table className="w-100 fs-3 text-justify table-admin">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nghệ danh</th>
                            <th>Họ và tên</th>
                            <th>Bài hát</th>
                            <th>Playlist</th>
                            <th>Ngày sinh</th>
                            <th>Thao tác </th>
                        </tr>
                    </thead>

                    <tbody>
                        {musicSongs.map((kind, index) => (
                            <>
                                {kind.state === 1 ? (
                                    <tr style={{ background: '#b5d5ff' }} key={kind.id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="infor">
                                                <img
                                                    src={kind.avt}
                                                    alt={kind.artistsName}
                                                />
                                                <span>{kind.artistsName}</span>
                                            </div>
                                        </td>
                                        <td>{kind.realName}</td>
                                        <td>{kind.songListId&&kind.songListId.length}</td>
                                        <td>{kind.playListId.length}</td>
                                        <td>{kind.birthday}</td>
                                        <td>
                                        <div className="btn_action d-flex">
                                            <button
                                                className="btn btn-primary fs-3"
                                                onClick={() =>
                                                    openEditModal(kind)
                                                }
                                            >
                                                <FontAwesomeIcon icon={faPen} />
                                            </button>
                                            <button
                                                className="btn btn-danger-custom fs-3 ms-3"
                                                onClick={() =>
                                                    deleteMusicKind(kind.id)
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon={faBan}
                                                />
                                            </button>
                                        </div>
                                        </td>
                                    </tr>
                                ) : (
                                    <tr key={kind.id}>
                                        <td>{index+1}</td>
                                        <td><div className="infor">
                                            <img
                                                src={kind.avt}
                                                alt={kind.artistsName}
                                            />
                                            <span>{kind.artistsName}</span>
                                        </div>
                                        </td>
                                        <td>{kind.realName}</td>
                                        <td>{kind.songListId&&kind.songListId.length}</td>
                                        <td>{kind.playListId.length}</td>

                                        <td>{kind.birthday}</td>
                                        <td>
                                                <div className="btn_action d-flex">
                                                <button
                                                className="btn btn-primary fs-3"
                                                onClick={() =>
                                                    openEditModal(kind)
                                                }
                                            >
                                                <FontAwesomeIcon icon={faPen} />
                                            </button>
                                            <button
                                                className="btn btn-danger-custom fs-3 ms-3"
                                                onClick={() =>
                                                    deleteMusicKind(kind.id)
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon={faBan}
                                                />
                                            </button>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        
    );
};

export default SingerTable;

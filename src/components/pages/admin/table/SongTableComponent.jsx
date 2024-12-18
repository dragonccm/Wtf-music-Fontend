import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faBan } from "@fortawesome/free-solid-svg-icons";

const SongTableComponent = ({ musicSongs, openEditModal, deleteMusicKind }) => {
    return (
        <table className="w-100 fs-3 text-justify table-admin">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Hình</th>
                    <th>Tên</th>
                    <th>Tình trạng</th>
                    <th>Thể loại</th>
                    <th>Nghệ sĩ</th>
                    <th>Lượt thích</th>
                    <th>Lượt nghe</th>
                </tr>
            </thead>
            <tbody>
                {musicSongs.map((song, index) => (
                    <tr key={index} style={{ background: song.state === 1 ? '#b5d5ff' : 'transparent' }}>
                        <td>{index + 1}</td>
                        <td className="td_img">
                            <img src={song.thumbnail} alt={song.songname} />
                        </td>
                        <td>{song.songname}</td>
                        <td>{song.state === 1 ? "cấm truy cập" : "có thể truy cập"}</td>
                        <td>{song.genresNames.map(genre => genre.genrename).join(", ")}</td>
                        <td>{song.artistsNames.map(artist => artist.artistsName).join(", ")}</td>
                        <td>{song.like}</td>
                        <td>{song.listen}</td>
                        <td>
                            <button className="btn btn-primary fs-3" onClick={() => openEditModal(song)}>
                                <FontAwesomeIcon icon={faPen} />
                            </button>
                            <button className="btn btn-danger-custom fs-3 ms-3" onClick={() => deleteMusicKind(song.id)}>
                                <FontAwesomeIcon icon={faBan} />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export { SongTableComponent };

export default SongTableComponent;

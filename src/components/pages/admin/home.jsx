import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faM, faMicrophone, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../../../css/admin/homeAdmin.scss";
import "../../../css/admin/musicAdmin.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// import { getAllId, pushSong } from "../../../services/setupService";
// import { postss } from "../../../services/postService";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { useEffect, useState } from "react";
import Loading from "../../sideNavigation/mascot_animation";
import { fetchAdminHome } from "../../../redux/slide/adminHomeSlice";
import { adminGetArtist } from "../../../services/adminSingerService"
import { adminGetUsers } from "../../../services/adminGetUserService"
import { adminGetSong } from "../../../services/adminSongService"

const HomeAdmin = () => {
    const [user, setuser] = useState([]);
    const [musicSongs, setMusicSongs] = useState([]);
    const [Artists, setArtists] = useState([]);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        dispatch(fetchAdminHome())
            .then(() => {
                setIsLoading(false); // Cập nhật isLoading thành false khi dữ liệu đã được tải xong
            })
            .catch((error) => {
                // Xử lý lỗi khi tải dữ liệu không thành công
                console.error('Error fetching data:', error);
                setIsLoading(false); // Cập nhật isLoading thành false để ngừng hiển thị trạng thái chờ
            });
    }, [dispatch]);
    useEffect(() => {
        fetchMusicSongs();
    }, []);
    // Hàm giả lập lấy danh sách thể loại nhạc từ server
    const fetchMusicSongs = async () => {
        try {
            const response = await adminGetUsers(0);
            const Artistresponse = await adminGetArtist(0);
            const songsresponse = await adminGetSong(0);
            setMusicSongs(songsresponse.handledata);
            setuser(response.DT.handledata);
            setArtists(Artistresponse.handleData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const currData = useSelector((state) => state.admin.AdminHome.DT);

    if (isLoading) {
        return <div><Loading /></div>; // Hiển thị trạng thái chờ khi isLoading là true
    }
    console.log(Artists)
    return (
        <main className="main-content">
            <div className="HomeAdmin">
                <h2 className="page_title">MUSIC ADMIN DASHBOARD</h2>
                {/* data statistical */}
                <section className="row">
                    <div className="col">
                        <div className="card card-box text-center ">
                            <div className="card-body bg-artist">
                                <div className="admin-circle-box rounded-pill">
                                    <FontAwesomeIcon
                                        icon={faMicrophone}
                                        className="icon-artist"
                                    />
                                </div>

                                <h4 className="text-capitalize mt-4 mb-1">{currData.ar}</h4>
                                <p className="mb-0 text-capitalize text-body">
                                    total Music Artist
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-box text-center">
                            <div className="card-body bg-songs">
                                <div className="admin-circle-box rounded-pill">
                                    <FontAwesomeIcon
                                        icon={faMusic}
                                        className="icon-songs"
                                    />
                                </div>

                                <h4 className="text-capitalize mt-4 mb-1">{currData.songs}</h4>
                                <p className="mb-0 text-capitalize text-body">
                                    total Music Songs
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-box text-center">
                            <div className="card-body bg-playlist">
                                <div className="admin-circle-box rounded-pill">
                                    <FontAwesomeIcon
                                        icon={faList}
                                        className="icon-playlist"
                                    />
                                </div>

                                <h4 className="text-capitalize mt-4 mb-1">{currData.Playlist}</h4>
                                <p className="mb-0 text-capitalize text-body">
                                    total Music Playlist
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-box text-center">
                            <div className="card-body bg-users">
                                <div className="admin-circle-box rounded-pill">
                                    <FontAwesomeIcon
                                        icon={faCircleUser}
                                        className="icon-users"
                                    />
                                </div>
                                <h4 className="text-capitalize mt-4 mb-1">{currData.User}</h4>

                                <p className="mb-0 text-capitalize text-body">
                                    total Music Users
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* top data */}
                <section className="row my-5">
                    <div className="col-lg-8 py-3 card container-admin">
                        <div className="row py-5 card-header">
                            <div className="col-lg-6 header-title">
                                <h4 className="card-title text-capitalize">
                                    top artist
                                </h4>
                            </div>
                            <div class="col-lg-6">
                                <div
                                    id="datatable_filter"
                                    class="text-end dataTables_filter"
                                >
                                    <label className="fs-4">
                                        Search:
                                        <input
                                            type="search"
                                            class="fs-5 form-control form-control-sm"
                                            placeholder=""
                                            aria-controls="datatable"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <table
                            style={{ border: "none" }}
                            className="w-100 fs-4 text-justify table-admin"
                        >
                            <thead>
                                <tr>
                                    <th>Thứ tự</th>
                                    <th>Tên nghệ sĩ</th>
                                    <th>Ngày hoạt động</th>
                                    <th>Tổng bài hát</th>
                                    <th>lượt theo dõi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Artists && Artists.slice(0, 3).map((data) => (
                                    <tr>
                                        <td>{data.id}</td>
                                        <td>
                                            <h6 className="fs-4 text-capitalize">
                                                {data.artistsName}
                                            </h6>
                                            <p
                                                className="mb-0 custom-icon"
                                                style={{ color: "#aaa" }}
                                            >
                                                {data.alias}
                                            </p>
                                        </td>
                                        <td>{data.createdAt}</td>
                                        <td>{data.songListId.length}</td>
                                        <td>{data.totalFollow.toLocaleString()}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
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
                    <div className="col-lg-4">
                        <div
                            style={{ height: "100%" }}
                            className="card py-3 px-2 container-admin"
                        >
                            <div className="card-header">
                                <div className="header-title">
                                    <h4 className="mb-5 card-title text-capitalize">
                                        total reviews
                                    </h4>
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div className="d-flex align-items-center mb-5">
                                    <FontAwesomeIcon
                                        icon={faMicrophone}
                                        className="icon-artist icon_top-reviews me-5"
                                    />
                                    <div style={{ width: "100%" }}>
                                        <div className="d-flex justify-content-between  ">
                                            <h6 className="mb-2 fs-3 fw-normal">
                                                Artist
                                            </h6>
                                            <h6 className="text-body fs-3 fw-normal">
                                                {currData.ar}
                                            </h6>
                                        </div>
                                        <div
                                            className="progress bg-soft-success shadow-none w-100"
                                            style={{ height: "6px" }}
                                        >
                                            <div
                                                className="progress-bar bg-soft-success"
                                                data-toggle="progress-bar"
                                                role="progressbar"
                                                aria-valuenow="23"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                style={{
                                                    width: "21%",
                                                    transition:
                                                        "width 2s ease 0s",
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-5">
                                    <FontAwesomeIcon
                                        icon={faMusic}
                                        className="icon-songs icon_top-reviews me-5"
                                    />
                                    <div style={{ width: "100%" }}>
                                        <div className="d-flex justify-content-between">
                                            <h6 className="mb-2 fs-3 fw-normal">
                                                Songs
                                            </h6>
                                            <h6 className="text-body fs-3 fw-normal">
                                                {currData.songs}
                                            </h6>
                                        </div>
                                        <div
                                            className="progress bg-soft-info shadow-none w-100"
                                            style={{ height: "6px" }}
                                        >
                                            <div
                                                className="progress-bar bg-soft-info"
                                                data-toggle="progress-bar"
                                                role="progressbar"
                                                aria-valuenow="45"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                style={{
                                                    width: "45%",
                                                    transition:
                                                        "width 2s ease 0s",
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-5">
                                    <FontAwesomeIcon
                                        icon={faList}
                                        className="icon-playlist icon_top-reviews me-5"
                                    />
                                    <div style={{ width: "100%" }}>
                                        <div className="d-flex justify-content-between  ">
                                            <h6 className="mb-2 fs-3 fw-normal">
                                                Playlist
                                            </h6>
                                            <h6 className="text-body fs-3 fw-normal">
                                                {currData.Playlist}
                                            </h6>
                                        </div>
                                        <div
                                            className="progress bg-soft-success shadow-none w-100"
                                            style={{ height: "6px" }}
                                        >
                                            <div
                                                className="progress-bar bg-soft-success"
                                                data-toggle="progress-bar"
                                                role="progressbar"
                                                aria-valuenow="23"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                style={{
                                                    width: "27%",
                                                    transition:
                                                        "width 2s ease 0s",
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon
                                        icon={faCircleUser}
                                        className="icon-playlist icon_top-reviews me-5"
                                    />
                                    <div style={{ width: "100%" }}>
                                        <div className="d-flex justify-content-between  ">
                                            <h6 className="mb-2 fs-3 fw-normal">
                                                Users
                                            </h6>
                                            <h6 className="text-body fs-3 fw-normal">
                                                {currData.User}
                                            </h6>
                                        </div>
                                        <div
                                            className="progress bg-soft-success shadow-none w-100"
                                            style={{ height: "6px" }}
                                        >
                                            <div
                                                className="progress-bar bg-soft-success"
                                                data-toggle="progress-bar"
                                                role="progressbar"
                                                aria-valuenow="23"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                style={{
                                                    width: "63%",
                                                    transition:
                                                        "width 2s ease 0s",
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* total users */}
                <section className="row">
                    <div className="col-lg-6">
                        <div className="card py-3 px-2">
                            <div className="card-header">
                                <div className="header-title">
                                    <h4 className="card-title text-capitalize">
                                        Recent Users
                                    </h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <ui className="list-unstyled p-0 m-0">
                                    {user.slice(0, 5).map((data) => (
                                        <li className="mb-4">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src={data.avt}
                                                        id="07"
                                                        className="img-fluid  h-50 avatar-52"
                                                        alt="review-img"
                                                    />
                                                    <div className="ms-5">
                                                        <h6 className="text-capitalize fs-3 fw-normal">
                                                            {data.user}
                                                        </h6>
                                                        <small
                                                            style={{
                                                                color: "#aaa",
                                                            }}
                                                            className="text-capitalize fs-4"
                                                        >
                                                            {data.email}
                                                        </small>
                                                    </div>
                                                </div>
                                                <p
                                                    style={{
                                                        color: "#aaa",
                                                        width: "22%",
                                                    }}
                                                    className="mb-0 custom-icon fs-3"
                                                >
                                                    {data.createdAt}
                                                </p>
                                            </div>{" "}
                                        </li>
                                    ))}

                                </ui>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card py-3 px-2">
                            <div className="card-header">
                                <div className="header-title">
                                    <h4 className="card-title text-capitalize">
                                        total reviews
                                    </h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <ui className="list-unstyled p-0 m-0">
                                    {musicSongs.slice(0, 5).map((data) => (
                                        <li className="mb-4">
                                            <div className="d-flex">
                                                <img
                                                    src={data.thumbnail}
                                                    id="07"
                                                    className="img-fluid avatar-52"
                                                    alt="review-img"
                                                />
                                                <div className="ms-5">
                                                    <h6 className="text-capitalize mb-2 fs-3 fw-normal tracking-wider">
                                                       {data.songname}
                                                    </h6>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <small
                                                            style={{
                                                                color: "#aaa",
                                                            }}
                                                            className="text-capitalize fs-4"
                                                        >
                                                            {data.alias}
                                                        </small>
                                                        <small
                                                            style={{
                                                                color: "#aaa",
                                                            }}
                                                            className="text-capitalize custom-icon fs-3"
                                                        >
                                                           {data.createdAt}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>{" "}
                                        </li>
                                    ))}
                                </ui>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};
export default HomeAdmin;

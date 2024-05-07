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
import { useEffect, useState } from "react";
import { getAllId, pushSong } from "../../../services/setupService"
import { fetchAdminHome } from "../../../redux/slide/adminHomeSlice";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { postss } from "../../../services/postService"
const HomeAdmin = () => {
    // const [id, setid] = useState(null)
    // const [result, setresult] = useState([])


    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchAdminHome());
    // }, [dispatch]);

    // const currData = useSelector((state) => state.admin.AdminHome);

    // useEffect(() => {
    //     const run = async () => {
    //         setid(await getAllId())
    //     }
    //     run()
    // }, []);
    // useEffect(() => {
    //     const run = async () => {
    //         if (id) {
    //             const idList = id
    //             for (const id of idList.songId) {
    //                 const res = await pushSong(id);
    //                 setresult(res)
    //             }
    //         }
    //     }
    //     run()
    // }, [id]);


    // if (result.length > 0) {
    //     const eee = result.map(async (data) => {
    //         return await postss(data)
    //     })
    //     console.log("sdsds", eee)
    // }


    return (
        <main className="main-content">
            <div className="HomeAdmin">
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
                                <h4 className="text-capitalize my-2">352</h4>
                                {/* <h4 className="text-capitalize mt-4 mb-1">{currData.songListen}</h4> */}
                                <p className="mb-0 text-capitalize text-body">
                                    total Music Artist
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-box text-center">
                            <div className="card-body bg-albums">
                                <div className="admin-circle-box rounded-pill">
                                    <FontAwesomeIcon
                                        icon={faCompactDisc}
                                        className="icon-albums"
                                    />
                                </div>
                                <h4 className="text-capitalize my-2">352</h4>
                                {/* <h4 className="text-capitalize mt-4 mb-1">{currData.playlistListen}</h4> */}
                                <p className="mb-0 text-capitalize text-body">
                                    total Music Albums
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
                                <h4 className="text-capitalize my-2">352</h4>
                                {/* <h4 className="text-capitalize mt-4 mb-1">{currData.songCount}</h4> */}
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
                                <h4 className="text-capitalize my-2">352</h4>
                                {/* <h4 className="text-capitalize mt-4 mb-1">{currData.playlistCount}</h4> */}
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
                                <h4 className="text-capitalize my-2">352</h4>
                                <p className="mb-0 text-capitalize text-body">
                                    total Music Users
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* top data */}
                <section className="row my-5">
                    <div className="col-lg-8 py-3 card overflow-x-auto container-admin">
                        <div className="card-header">
                            <div className="header-title">
                                <h4 className="mb-5 card-title text-capitalize">
                                    top artist
                                </h4>
                            </div>
                        </div>
                        <table className="w-100 fs-4 text-justify table-admin">
                            <thead>
                                <tr>
                                    <th>Thứ tự</th>
                                    <th>Tên nghệ sĩ</th>
                                    <th>Ngày hoạt động</th>
                                    <th>Tổng bài hát</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-bottom">
                                    <td>01</td>
                                    <td>
                                        <h6 className="fs-4 text-capitalize">
                                            Pete Saraiya
                                        </h6>
                                        <p
                                            className="mb-0 custom-icon"
                                            style={{ color: "#aaa" }}
                                        >
                                            petesaraiya@demo.com
                                        </p>
                                    </td>
                                    <td>Jan 24, 2020</td>
                                    <td>157</td>
                                </tr>
                                <tr className="border-bottom">
                                    <td>01</td>
                                    <td>
                                        <h6 className="fs-4 text-capitalize">
                                            Pete Saraiya
                                        </h6>
                                        <p
                                            className="mb-0 custom-icon"
                                            style={{ color: "#aaa" }}
                                        >
                                            petesaraiya@demo.com
                                        </p>
                                    </td>
                                    <td>Jan 24, 2020</td>
                                    <td>157</td>
                                </tr>
                                <tr className="border-bottom">
                                    <td>01</td>
                                    <td>
                                        <h6 className="fs-4 text-capitalize">
                                            Pete Saraiya
                                        </h6>
                                        <p
                                            className="mb-0 custom-icon"
                                            style={{ color: "#aaa" }}
                                        >
                                            petesaraiya@demo.com
                                        </p>
                                    </td>
                                    <td>Jan 24, 2020</td>
                                    <td>157</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="d-flex py-4 pagination-admin">
                            <div className="col-6 description-pagination"></div>
                            <div className="col-6 pe-5 pagination-numbers">
                                <ul className="pagination justify-content-end ">
                                    <li className="border">
                                        <a className="d-block fs-4 px-4 py-1 opacity-75" href="#">
                                            Previous
                                        </a>
                                    </li>
                                    <li className="border active">
                                        <a className="d-block fs-4 px-4 py-1 opacity-75" href="#">
                                            1
                                        </a>
                                    </li>
                                    <li className="border">
                                        <a className="d-block fs-4 px-4 py-1 opacity-75" href="#">
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
                            className="card py-3 px-2"
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
                                                1,010
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
                                        icon={faCompactDisc}
                                        className="icon-albums icon_top-reviews me-5"
                                    />
                                    <div style={{ width: "100%" }}>
                                        <div className="d-flex justify-content-between  ">
                                            <h6 className="mb-2 fs-3 fw-normal">
                                                Albums
                                            </h6>
                                            <h6 className="text-body fs-3 fw-normal">
                                                2,231
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
                                                    width: "30%",
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
                                                5,674
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
                                                2,162
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
                                                6,718
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
                                    <li className="mb-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg"
                                                    id="07"
                                                    className="img-fluid   avatar-52"
                                                    alt="review-img"
                                                />
                                                <div className="ms-5">
                                                    <h6 className="text-capitalize fs-3 fw-normal">
                                                        Jane Cooper
                                                    </h6>
                                                    <small
                                                        style={{
                                                            color: "#aaa",
                                                        }}
                                                        className="text-capitalize fs-4"
                                                    >
                                                        janecooper@gmail.com
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
                                                12 hours ago
                                            </p>
                                        </div>{" "}
                                    </li>
                                    <li className="mb-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg"
                                                    id="07"
                                                    className="img-fluid   avatar-52"
                                                    alt="review-img"
                                                />
                                                <div className="ms-5">
                                                    <h6 className="text-capitalize fs-3 fw-normal">
                                                        wade warren
                                                    </h6>
                                                    <small
                                                        style={{
                                                            color: "#aaa",
                                                        }}
                                                        className="text-capitalize fs-4"
                                                    >
                                                        wadewarren@gmail.com
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
                                                18 hours ago
                                            </p>
                                        </div>{" "}
                                    </li>
                                    <li className="mb-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg"
                                                    id="07"
                                                    className="img-fluid   avatar-52"
                                                    alt="review-img"
                                                />
                                                <div className="ms-5">
                                                    <h6 className="text-capitalize fs-3 fw-normal">
                                                        Jacob jones
                                                    </h6>
                                                    <small
                                                        style={{
                                                            color: "#aaa",
                                                        }}
                                                        className="text-capitalize fs-4"
                                                    >
                                                        jacobjones@gmail.com
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
                                                24 hours ago
                                            </p>
                                        </div>{" "}
                                    </li>
                                    <li className="mb-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg"
                                                    id="07"
                                                    className="img-fluid   avatar-52"
                                                    alt="review-img"
                                                />
                                                <div className="ms-5">
                                                    <h6 className="text-capitalize fs-3 fw-normal">
                                                        Cody fisher
                                                    </h6>
                                                    <small
                                                        style={{
                                                            color: "#aaa",
                                                        }}
                                                        className="text-capitalize fs-4"
                                                    >
                                                        codyfisher@gmail.com
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
                                                28 hours ago
                                            </p>
                                        </div>{" "}
                                    </li>
                                    <li className="mb-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg"
                                                    id="07"
                                                    className="img-fluid   avatar-52"
                                                    alt="review-img"
                                                />
                                                <div className="ms-5">
                                                    <h6 className="text-capitalize fs-3 fw-normal">
                                                        Dianne Russell
                                                    </h6>
                                                    <small
                                                        style={{
                                                            color: "#aaa",
                                                        }}
                                                        className="text-capitalize fs-4"
                                                    >
                                                        diannerussell@gmail.com
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
                                                36 hours ago
                                            </p>
                                        </div>{" "}
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg"
                                                    id="07"
                                                    className="img-fluid   avatar-52"
                                                    alt="review-img"
                                                />
                                                <div className="ms-5">
                                                    <h6 className="text-capitalize fs-3 fw-normal">
                                                        loreal kinas
                                                    </h6>
                                                    <small
                                                        style={{
                                                            color: "#aaa",
                                                        }}
                                                        className="text-capitalize fs-4"
                                                    >
                                                        lorealkinas@gmail.com
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
                                                48 hours ago
                                            </p>
                                        </div>{" "}
                                    </li>
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
                                    <li className="mb-4">
                                        <div className="d-flex">
                                            <img
                                                src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg"
                                                id="07"
                                                className="img-fluid avatar-52"
                                                alt="review-img"
                                            />
                                            <div className="ms-5">
                                                <h6 className="text-capitalize mb-2 fs-3 fw-normal tracking-wider">
                                                    This song captures my
                                                    emotions and paints my world
                                                    with its beautiful melody
                                                    and heartfelt lyrics. It's
                                                    truly special.
                                                </h6>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <small
                                                        style={{
                                                            color: "#aaa",
                                                        }}
                                                        className="text-capitalize fs-4"
                                                    >
                                                        by Alexa Jonas
                                                    </small>
                                                    <small
                                                        style={{
                                                            color: "#aaa",
                                                        }}
                                                        className="text-capitalize custom-icon fs-3"
                                                    >
                                                        02 hours ago
                                                    </small>
                                                </div>
                                            </div>
                                        </div>{" "}
                                    </li>
                                    <li className="mb-4">
                                        <div className="d-flex">
                                            <img
                                                src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg"
                                                id="08"
                                                className="img-fluid   avatar-52"
                                                alt="review-img"
                                            />
                                            <div className="ms-5">
                                                <h6 className="text-capitalize mb-2 fs-3 fw-normal tracking-wider">
                                                    This song captures my
                                                    emotions and paints my world
                                                    with its beautiful melody
                                                    and heartfelt lyrics. It's
                                                    truly special.
                                                </h6>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <small
                                                        style={{
                                                            color: "#aaa",
                                                        }}
                                                        className="text-capitalize fs-4"
                                                    >
                                                        by alex Williams
                                                    </small>
                                                    <small
                                                        style={{
                                                            color: "#aaa",
                                                        }}
                                                        className="text-capitalize custom-icon fs-3"
                                                    >
                                                        06 hours ago
                                                    </small>
                                                </div>
                                            </div>
                                        </div>{" "}
                                    </li>
                                    <li className="mb-4">
                                        <div className="d-flex">
                                            <img
                                                src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg"
                                                id="09"
                                                className="img-fluid   avatar-52"
                                                alt="review-img"
                                            />
                                            <div className="ms-5">
                                                <h6 className="text-capitalize mb-2 fs-3 fw-normal tracking-wider">
                                                    This song captures my
                                                    emotions and paints my world
                                                    with its beautiful melody
                                                    and heartfelt lyrics. It's
                                                    truly special.
                                                </h6>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <small
                                                        style={{
                                                            color: "#aaa",
                                                        }}
                                                        className="text-capitalize fs-4"
                                                    >
                                                        by vibrat sharia
                                                    </small>
                                                    <small
                                                        style={{
                                                            color: "#aaa",
                                                        }}
                                                        className="text-capitalize custom-icon fs-3"
                                                    >
                                                        08 hours ago
                                                    </small>
                                                </div>
                                            </div>
                                        </div>{" "}
                                    </li>
                                    <li className="mb-4">
                                        <div className="d-flex">
                                            <img
                                                src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg"
                                                id="10"
                                                className="img-fluid   avatar-52"
                                                alt="review-img"
                                            />
                                            <div className="ms-5">
                                                <h6 className="text-capitalize mb-2 fs-3 fw-normal tracking-wider">
                                                    This song captures my
                                                    emotions and paints my world
                                                    with its beautiful melody
                                                    and heartfelt lyrics. It's
                                                    truly special.
                                                </h6>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <small
                                                        style={{
                                                            color: "#aaa",
                                                        }}
                                                        className="text-capitalize fs-4"
                                                    >
                                                        by angle pate
                                                    </small>
                                                    <small
                                                        style={{
                                                            color: "#aaa",
                                                        }}
                                                        className="text-capitalize custom-icon fs-3"
                                                    >
                                                        12 hours ago
                                                    </small>
                                                </div>
                                            </div>
                                        </div>{" "}
                                    </li>
                                    <li className="">
                                        <div className="d-flex">
                                            <img
                                                src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg"
                                                id="10"
                                                className="img-fluid   avatar-52"
                                                alt="review-img"
                                            />
                                            <div className="ms-5">
                                                <h6 className="text-capitalize mb-2 fs-3 fw-normal tracking-wider">
                                                    This song captures my
                                                    emotions and paints my world
                                                    with its beautiful melody
                                                    and heartfelt lyrics. It's
                                                    truly special.
                                                </h6>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <small
                                                        style={{
                                                            color: "#aaa",
                                                        }}
                                                        className="text-capitalize fs-4"
                                                    >
                                                        by vibrat sharia
                                                    </small>
                                                    <small
                                                        style={{
                                                            color: "#aaa",
                                                        }}
                                                        className="text-capitalize custom-icon fs-3"
                                                    >
                                                        09 hours ago
                                                    </small>
                                                </div>
                                            </div>
                                        </div>{" "}
                                    </li>
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

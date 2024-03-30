import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faM, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../../../css/admin/homeAdmin.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

import { fetchAdminHome } from "../../../redux/slide/adminHomeSlice";
import { useSelector, useDispatch } from "react-redux";
// import ProgressBar from 'react-customizable-progressbar'
import { BarChart } from "@mui/x-charts/BarChart";
const HomeAdmin = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAdminHome());
    }, [dispatch]);

    const currData = useSelector((state) => state.admin.AdminHome);
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
                                <h4 className="text-capitalize mt-4 mb-1">
                                    {currData.songListen}
                                </h4>
                                <p className="mb-0 text-capitalize text-body">
                                    total Music listen
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
                                <h4 className="text-capitalize mt-4 mb-1">
                                    {currData.playlistListen}
                                </h4>
                                <p className="mb-0 text-capitalize text-body">
                                    total Music playlist
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
                                <h4 className="text-capitalize mt-4 mb-1">
                                    {currData.songCount}
                                </h4>
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
                                <h4 className="text-capitalize mt-4 mb-1">
                                    {currData.playlistCount}
                                </h4>
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
                                <h4 className="text-capitalize mt-4 mb-1">
                                    352
                                </h4>
                                <p className="mb-0 text-capitalize text-body">
                                    total Music Users
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* top data */}
                <section className="row">
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-header">
                                <div className="header-title d-flex align-items-center justify-content-between">
                                    <h4 className="card-title text-capitalize">
                                        Top artist
                                    </h4>
                                    <a href="#" className="small text-body">
                                        {"View All "}
                                        <FontAwesomeIcon
                                            icon={faCircleChevronDown}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div
                                            className="dataTables_length"
                                            id="datatable_length"
                                        >
                                            <label>
                                                {"Show "}
                                                <select
                                                    name="datatable_length"
                                                    aria-controls="datatable"
                                                    className="form-select form-select-sm"
                                                >
                                                    <option value="10">
                                                        10
                                                    </option>
                                                    <option value="25">
                                                        25
                                                    </option>
                                                    <option value="50">
                                                        50
                                                    </option>
                                                    <option value="100">
                                                        100
                                                    </option>
                                                </select>
                                                {" entries"}
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div
                                            id="datatable_filter"
                                            className="dataTables_filter"
                                        >
                                            <label>
                                                Search:
                                                <input
                                                    type="search"
                                                    className="form-control form-control-sm"
                                                    placeholder=""
                                                    aria-controls="datatable"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive my-3">
                                    <table
                                        id="datatable"
                                        className="table mt-0 dataTable no-footer"
                                        data-toggle="data-table"
                                        aria-describedby="datatable_info"
                                    >
                                        <thead>
                                            <tr>
                                                <th
                                                    className="custom-icon sorting sorting_asc"
                                                    tabindex="0"
                                                    aria-controls="datatable"
                                                    rowspan="1"
                                                    colspan="1"
                                                    aria-label="No.: activate to sort column descending"
                                                    aria-sort="ascending"
                                                >
                                                    No.
                                                </th>
                                                <th
                                                    className="custom-icon sorting"
                                                    tabindex="0"
                                                    aria-controls="datatable"
                                                    rowspan="1"
                                                    colspan="1"
                                                    aria-label="Artist Name: activate to sort column ascending"
                                                >
                                                    Artist Name
                                                </th>
                                                <th
                                                    className="custom-icon sorting"
                                                    tabindex="0"
                                                    aria-controls="datatable"
                                                    rowspan="1"
                                                    colspan="1"
                                                    aria-label="Joining Date: activate to sort column ascending"
                                                >
                                                    Joining Date
                                                </th>
                                                <th
                                                    className="custom-icon sorting"
                                                    tabindex="0"
                                                    aria-controls="datatable"
                                                    rowspan="1"
                                                    colspan="1"
                                                    aria-label="Total Songs: activate to sort column ascending"
                                                >
                                                    Total Songs
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="odd">
                                                <td className="sorting_1">
                                                    01
                                                </td>
                                                <td className="">
                                                    <h6 className="text-capitalize fs-3 fw-normal">
                                                        Pete Saraiya
                                                    </h6>
                                                    <p className="mb-0 custom-icon">
                                                        petesaraiya@demo.com
                                                    </p>
                                                </td>
                                                <td>Jan 24, 2020</td>
                                                <td>157</td>
                                            </tr>
                                            <tr className="even">
                                                <td className="sorting_1">
                                                    02
                                                </td>
                                                <td className="">
                                                    <h6 className="text-capitalize fs-3 fw-normal">
                                                        Pete Saraiya
                                                    </h6>
                                                    <p className="mb-0 custom-icon">
                                                        petesaraiya@demo.com
                                                    </p>
                                                </td>
                                                <td>Jan 24, 2020</td>
                                                <td>157</td>
                                            </tr>
                                            <tr className="odd">
                                                <td className="sorting_1">
                                                    03
                                                </td>
                                                <td className="">
                                                    <h6 className="text-capitalize fs-3 fw-normal">
                                                        Pete Saraiya
                                                    </h6>
                                                    <p className="mb-0 custom-icon">
                                                        petesaraiya@demo.com
                                                    </p>
                                                </td>
                                                <td>Jan 24, 2020</td>
                                                <td>157</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div
                                            className="dataTables_info"
                                            id="datatable_info"
                                            role="status"
                                            aria-live="polite"
                                        >
                                            Showing 1 to 3 of 3 entries
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div
                                            className="dataTables_paginate paging_simple_numbers"
                                            id="datatable_paginate"
                                        >
                                            <ul className="pagination">
                                                <li
                                                    className="paginate_button page-item previous disabled"
                                                    id="datatable_previous"
                                                >
                                                    <a
                                                        aria-controls="datatable"
                                                        aria-disabled="true"
                                                        role="link"
                                                        data-dt-idx="previous"
                                                        tabindex="0"
                                                        className="page-link"
                                                    >
                                                        Previous
                                                    </a>
                                                </li>
                                                <li className="paginate_button page-item active">
                                                    <a
                                                        href="#"
                                                        aria-controls="datatable"
                                                        role="link"
                                                        aria-current="page"
                                                        data-dt-idx="0"
                                                        tabindex="0"
                                                        className="page-link"
                                                    >
                                                        1
                                                    </a>
                                                </li>
                                                <li
                                                    className="paginate_button page-item next disabled"
                                                    id="datatable_next"
                                                >
                                                    <a
                                                        aria-controls="datatable"
                                                        aria-disabled="true"
                                                        role="link"
                                                        data-dt-idx="next"
                                                        tabindex="0"
                                                        className="page-link"
                                                    >
                                                        Next
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div style={{ height: "90%" }} className="card">
                            <div className="card-header">
                                <div className="header-title">
                                    <h4 className="card-title text-capitalize">
                                        total reviews
                                    </h4>
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div
                                    id="chart-01"
                                    className=" chart-01 d-flex justify-content-center"
                                    style={{ minHeight: "195.017px" }}
                                >
                                    <BarChart
                                        xAxis={[
                                            {
                                                scaleType: "band",
                                                data: [
                                                    "Song Listen",
                                                    "PlayList Listen",
                                                ],
                                            },
                                        ]}
                                        series={[
                                            {
                                                data: [
                                                    currData.songListen,
                                                    currData.playlistListen,
                                                ],
                                            },
                                        ]}
                                        width={500}
                                        height={300}
                                    />
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
                                <div className="d-flex align-items-center mb-5"></div>
                                <div className="d-flex align-items-center">
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
                                                5,515
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
                                                    width: "23%",
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
                        <div
                            style={{ margin: "0", padding: "0 10px" }}
                            className="card"
                        >
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
                                                    style={{
                                                        width: "100px",

                                                        borderRadius: "10px",
                                                    }}
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
                                                    style={{
                                                        width: "100px",

                                                        borderRadius: "10px",
                                                    }}
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
                                                    style={{
                                                        width: "100px",

                                                        borderRadius: "10px",
                                                    }}
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
                                                    style={{
                                                        width: "100px",

                                                        borderRadius: "10px",
                                                    }}
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
                                                    style={{
                                                        width: "100px",

                                                        borderRadius: "10px",
                                                    }}
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
                                                    style={{
                                                        width: "100px",

                                                        borderRadius: "10px",
                                                    }}
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
                        <div
                            style={{ margin: "0", padding: "0 10px" }}
                            className="card"
                        >
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
                                                style={{
                                                    width: "100px",

                                                    borderRadius: "10px",
                                                }}
                                                id="07"
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
                                                style={{
                                                    width: "100px",

                                                    borderRadius: "10px",
                                                }}
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
                                                style={{
                                                    width: "100px",

                                                    borderRadius: "10px",
                                                }}
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
                                                style={{
                                                    width: "100px",

                                                    borderRadius: "10px",
                                                }}
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
                                                style={{
                                                    width: "100px",

                                                    borderRadius: "10px",
                                                }}
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

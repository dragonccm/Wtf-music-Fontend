import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faM, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../../../css/admin/homeAdmin.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeAdmin = () => {
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
                <h4 className="text-capitalize mt-4 mb-1">352</h4>
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
                <h4 className="text-capitalize mt-4 mb-1">352</h4>
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
                  <FontAwesomeIcon icon={faMusic} className="icon-songs" />
                </div>
                <h4 className="text-capitalize mt-4 mb-1">352</h4>
                <p className="mb-0 text-capitalize text-body">
                  total Music Artist
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-box text-center">
              <div className="card-body bg-playlist">
                <div className="admin-circle-box rounded-pill">
                  <FontAwesomeIcon icon={faList} className="icon-playlist" />
                </div>
                <h4 className="text-capitalize mt-4 mb-1">352</h4>
                <p className="mb-0 text-capitalize text-body">
                  total Music Artist
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-box text-center">
              <div className="card-body bg-users">
                <div className="admin-circle-box rounded-pill">
                  <FontAwesomeIcon icon={faCircleUser} className="icon-users" />
                </div>
                <h4 className="text-capitalize mt-4 mb-1">352</h4>
                <p className="mb-0 text-capitalize text-body">
                  total Music Artist
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
                  <h4 className="card-title text-capitalize">Top artist</h4>
                  <a href="#" className="small text-body">
                    {"View All "}
                    <FontAwesomeIcon icon={faCircleChevronDown} />
                  </a>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="dataTables_length" id="datatable_length">
                      <label>
                        {"Show "}
                        <select
                          name="datatable_length"
                          aria-controls="datatable"
                          className="form-select form-select-sm"
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                        {" entries"}
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div id="datatable_filter" className="dataTables_filter">
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
                        <td className="sorting_1">01</td>
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
                        <td className="sorting_1">02</td>
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
                        <td className="sorting_1">03</td>
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
                  <h4 className="card-title text-capitalize">total reviews</h4>
                </div>
              </div>
              <div className="card-body pt-0">
                <div
                  id="chart-01"
                  className=" chart-01 d-flex justify-content-center"
                  style={{ minHeight: "195.017px" }}
                >
                  <div
                    id="apexchartsc33jz0t9"
                    className="apexcharts-canvas apexchartsc33jz0t9 apexcharts-theme-light"
                    style={{ width: "307px", height: "195.017px" }}
                  >
                    <svg
                      id="SvgjsSvg1165"
                      width="307"
                      height="195.01666666666668"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      className="apexcharts-svg"
                      transform="translate(0, 0)"
                      style={{ background: "transparent" }}
                    >
                      <foreignObject
                        x="0"
                        y="0"
                        width="307"
                        height="195.01666666666668"
                      >
                        <div
                          className="apexcharts-legend"
                          xmlns="http://www.w3.org/1999/xhtml"
                        ></div>
                      </foreignObject>
                      <g
                        id="SvgjsG1167"
                        className="apexcharts-inner apexcharts-graphical"
                        transform="translate(11.5, 0)"
                      >
                        <defs id="SvgjsDefs1166">
                          <clipPath id="gridRectMaskc33jz0t9">
                            <rect
                              id="SvgjsRect1168"
                              width="292"
                              height="320"
                              x="-4"
                              y="-6"
                              rx="0"
                              ry="0"
                              opacity="1"
                              stroke-width="0"
                              stroke="none"
                              stroke-dasharray="0"
                              fill="#fff"
                            ></rect>
                          </clipPath>
                          <clipPath id="forecastMaskc33jz0t9"></clipPath>
                          <clipPath id="nonForecastMaskc33jz0t9"></clipPath>
                          <clipPath id="gridRectMarkerMaskc33jz0t9">
                            <rect
                              id="SvgjsRect1169"
                              width="290"
                              height="312"
                              x="-2"
                              y="-2"
                              rx="0"
                              ry="0"
                              opacity="1"
                              stroke-width="0"
                              stroke="none"
                              stroke-dasharray="0"
                              fill="#fff"
                            ></rect>
                          </clipPath>
                        </defs>
                        <g id="SvgjsG1170" className="apexcharts-radialbar">
                          <g id="SvgjsG1171">
                            <g id="SvgjsG1172" className="apexcharts-tracks">
                              <g
                                id="SvgjsG1173"
                                className="apexcharts-radialbar-track apexcharts-track"
                                rel="1"
                              >
                                <path
                                  id="apexcharts-radialbarTrack-0"
                                  d="M 59.88877155792923 173.25001328621235 A 88.44512195121953 88.44512195121953 0 1 1 226.11122844207077 173.25001328621235"
                                  fill="none"
                                  fill-opacity="1"
                                  stroke="rgba(231,231,231,0.85)"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="21.04024390243903"
                                  stroke-dasharray="0"
                                  className="apexcharts-radialbar-area"
                                ></path>
                              </g>
                            </g>
                            <g id="SvgjsG1175">
                              <g
                                id="SvgjsG1180"
                                className="apexcharts-series apexcharts-radial-series"
                                seriesName="PositivexReviews"
                                rel="1"
                              >
                                <path
                                  id="SvgjsPath1181"
                                  d="M 59.88877155792923 173.25001328621235 A 88.44512195121953 88.44512195121953 0 0 1 202.1813380807027 77.27246528323411"
                                  fill="none"
                                  fill-opacity="0.85"
                                  stroke="rgba(255,69,69,0.85)"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="23.37804878048781"
                                  stroke-dasharray="0"
                                  className="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                  index="0"
                                  j="0"
                                ></path>
                              </g>
                              <circle
                                id="SvgjsCircle1176"
                                r="72.92500000000001"
                                cx="143"
                                cy="143"
                                className="apexcharts-radialbar-hollow"
                                fill="transparent"
                              ></circle>
                              <g
                                id="SvgjsG1177"
                                className="apexcharts-datalabels-group"
                                transform="translate(0, 0) scale(1)"
                                style={{ opacity: "1" }}
                              >
                                <text
                                  id="SvgjsText1178"
                                  font-family="Helvetica, Arial, sans-serif"
                                  x="143"
                                  y="133"
                                  text-anchor="middle"
                                  dominant-baseline="auto"
                                  font-size="17px"
                                  font-weight="600"
                                  fill="#ff4545"
                                  className="apexcharts-text apexcharts-datalabel-label"
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif",
                                  }}
                                >
                                  Positive Reviews
                                </text>
                                <text
                                  id="SvgjsText1179"
                                  font-family="Helvetica, Arial, sans-serif"
                                  x="143"
                                  y="175"
                                  text-anchor="middle"
                                  dominant-baseline="auto"
                                  font-size="23px"
                                  font-weight="400"
                                  fill="#222428"
                                  className="apexcharts-text apexcharts-datalabel-value"
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif",
                                  }}
                                >
                                  69
                                </text>
                              </g>
                            </g>
                          </g>
                        </g>
                        <line
                          id="SvgjsLine1183"
                          x1="0"
                          y1="0"
                          x2="286"
                          y2="0"
                          stroke-dasharray="0"
                          stroke-width="0"
                          stroke-linecap="butt"
                          className="apexcharts-ycrosshairs-hidden"
                        ></line>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-5">
                  <FontAwesomeIcon
                    icon={faMusic}
                    className="icon-songs icon_top-reviews me-5"
                  />
                  <div style={{ width: "100%" }}>
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-2 fs-3 fw-normal">Songs</h6>
                      <h6 className="text-body fs-3 fw-normal">5,674</h6>
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
                        style={{ width: "45%", transition: "width 2s ease 0s" }}
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
                      <h6 className="mb-2 fs-3 fw-normal">Albums</h6>
                      <h6 className="text-body fs-3 fw-normal">1,624</h6>
                    </div>
                    <div
                      className="progress bg-soft-warning shadow-none w-100"
                      style={{ height: "6px" }}
                    >
                      <div
                        className="progress-bar bg-soft-warning"
                        data-toggle="progress-bar"
                        role="progressbar"
                        aria-valuenow="35"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "35%", transition: "width 2s ease 0s" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faList}
                    className="icon-playlist icon_top-reviews me-5"
                  />
                  <div style={{ width: "100%" }}>
                    <div className="d-flex justify-content-between  ">
                      <h6 className="mb-2 fs-3 fw-normal">Playlist</h6>
                      <h6 className="text-body fs-3 fw-normal">5,515</h6>
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
                        style={{ width: "23%", transition: "width 2s ease 0s" }}
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
            <div style={{ margin: "0", padding: "0 10px" }} className="card">
              <div className="card-header">
                <div className="header-title">
                  <h4 className="card-title text-capitalize">Recent Users</h4>
                </div>
              </div>
              <div className="card-body">
                <ui className="list-unstyled p-0 m-0">
                  <li className="mb-4">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <div className="d-flex align-items-center">
                        <img
                          src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg"
                          style={{
                            width: "10%",
                            height: "20%",
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
                            style={{ color: "#aaa" }}
                            className="text-capitalize fs-4"
                          >
                            janecooper@gmail.com
                          </small>
                        </div>
                      </div>
                      <p
                        style={{ color: "#aaa", width: "22%" }}
                        className="mb-0 custom-icon fs-3"
                      >
                        12 hours ago
                      </p>
                    </div>{" "}
                  </li>
                  <li className="mb-4">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <div className="d-flex align-items-center">
                        <img
                          src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg"
                          style={{
                            width: "10%",
                            height: "20%",
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
                            style={{ color: "#aaa" }}
                            className="text-capitalize fs-4"
                          >
                            wadewarren@gmail.com
                          </small>
                        </div>
                      </div>
                      <p
                        style={{ color: "#aaa", width: "22%" }}
                        className="mb-0 custom-icon fs-3"
                      >
                        18 hours ago
                      </p>
                    </div>{" "}
                  </li>
                  <li className="mb-4">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <div className="d-flex align-items-center">
                        <img
                          src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg"
                          style={{
                            width: "10%",
                            height: "20%",
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
                            style={{ color: "#aaa" }}
                            className="text-capitalize fs-4"
                          >
                            jacobjones@gmail.com
                          </small>
                        </div>
                      </div>
                      <p
                        style={{ color: "#aaa", width: "22%" }}
                        className="mb-0 custom-icon fs-3"
                      >
                        24 hours ago
                      </p>
                    </div>{" "}
                  </li>
                  <li className="mb-4">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <div className="d-flex align-items-center">
                        <img
                          src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg"
                          style={{
                            width: "10%",
                            height: "20%",
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
                            style={{ color: "#aaa" }}
                            className="text-capitalize fs-4"
                          >
                            codyfisher@gmail.com
                          </small>
                        </div>
                      </div>
                      <p
                        style={{ color: "#aaa", width: "22%" }}
                        className="mb-0 custom-icon fs-3"
                      >
                        28 hours ago
                      </p>
                    </div>{" "}
                  </li>
                  <li className="mb-4">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <div className="d-flex align-items-center">
                        <img
                          src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg"
                          style={{
                            width: "10%",
                            height: "20%",
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
                            style={{ color: "#aaa" }}
                            className="text-capitalize fs-4"
                          >
                            diannerussell@gmail.com
                          </small>
                        </div>
                      </div>
                      <p
                        style={{ color: "#aaa", width: "22%" }}
                        className="mb-0 custom-icon fs-3"
                      >
                        36 hours ago
                      </p>
                    </div>{" "}
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <div className="d-flex align-items-center">
                        <img
                          src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg"
                          style={{
                            width: "10%",
                            height: "20%",
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
                            style={{ color: "#aaa" }}
                            className="text-capitalize fs-4"
                          >
                            lorealkinas@gmail.com
                          </small>
                        </div>
                      </div>
                      <p
                        style={{ color: "#aaa", width: "22%" }}
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
            <div style={{ margin: "0", padding: "0 10px" }} className="card">
              <div className="card-header">
                <div className="header-title">
                  <h4 className="card-title text-capitalize">total reviews</h4>
                </div>
              </div>
              <div className="card-body">
                <ui className="list-unstyled p-0 m-0">
                  <li className="mb-4">
                    <div className="d-flex">
                      <img
                        src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg"
                        style={{
                          width: "10%",
                          height: "20%",
                          borderRadius: "10px",
                        }}
                        id="07"
                        className="img-fluid   avatar-52"
                        alt="review-img"
                      />
                      <div className="ms-5">
                        <h6 className="text-capitalize mb-2 fs-3 fw-normal tracking-wider">
                          This song captures my emotions and paints my world
                          with its beautiful melody and heartfelt lyrics. It's
                          truly special.
                        </h6>
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                          <small
                            style={{ color: "#aaa" }}
                            className="text-capitalize fs-4"
                          >
                            by Alexa Jonas
                          </small>
                          <small
                            style={{ color: "#aaa" }}
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
                          width: "10%",
                          height: "20%",
                          borderRadius: "10px",
                        }}
                        id="08"
                        className="img-fluid   avatar-52"
                        alt="review-img"
                      />
                      <div className="ms-5">
                        <h6 className="text-capitalize mb-2 fs-3 fw-normal tracking-wider">
                          This song captures my emotions and paints my world
                          with its beautiful melody and heartfelt lyrics. It's
                          truly special.
                        </h6>
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                          <small
                            style={{ color: "#aaa" }}
                            className="text-capitalize fs-4"
                          >
                            by alex Williams
                          </small>
                          <small
                            style={{ color: "#aaa" }}
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
                          width: "10%",
                          height: "20%",
                          borderRadius: "10px",
                        }}
                        id="09"
                        className="img-fluid   avatar-52"
                        alt="review-img"
                      />
                      <div className="ms-5">
                        <h6 className="text-capitalize mb-2 fs-3 fw-normal tracking-wider">
                          This song captures my emotions and paints my world
                          with its beautiful melody and heartfelt lyrics. It's
                          truly special.
                        </h6>
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                          <small
                            style={{ color: "#aaa" }}
                            className="text-capitalize fs-4"
                          >
                            by vibrat sharia
                          </small>
                          <small
                            style={{ color: "#aaa" }}
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
                          width: "10%",
                          height: "20%",
                          borderRadius: "10px",
                        }}
                        id="10"
                        className="img-fluid   avatar-52"
                        alt="review-img"
                      />
                      <div className="ms-5">
                        <h6 className="text-capitalize mb-2 fs-3 fw-normal tracking-wider">
                          This song captures my emotions and paints my world
                          with its beautiful melody and heartfelt lyrics. It's
                          truly special.
                        </h6>
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                          <small
                            style={{ color: "#aaa" }}
                            className="text-capitalize fs-4"
                          >
                            by angle pate
                          </small>
                          <small
                            style={{ color: "#aaa" }}
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
                          width: "10%",
                          height: "20%",
                          borderRadius: "10px",
                        }}
                        id="10"
                        className="img-fluid   avatar-52"
                        alt="review-img"
                      />
                      <div className="ms-5">
                        <h6 className="text-capitalize mb-2 fs-3 fw-normal tracking-wider">
                          This song captures my emotions and paints my world
                          with its beautiful melody and heartfelt lyrics. It's
                          truly special.
                        </h6>
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                          <small
                            style={{ color: "#aaa" }}
                            className="text-capitalize fs-4"
                          >
                            by vibrat sharia
                          </small>
                          <small
                            style={{ color: "#aaa" }}
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

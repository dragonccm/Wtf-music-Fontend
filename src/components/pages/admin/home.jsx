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
        <section style={{ marginBottom: "24px" }} className="row">
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
                          <h6 className="text-capitalize">Pete Saraiya</h6>
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
                          <h6 className="text-capitalize">Pete Saraiya</h6>
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
                          <h6 className="text-capitalize">Pete Saraiya</h6>
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
            <div className="card">
              <div className="card-header">
                <div className="header-title">
                  <h4 className="card-title text-capitalize">total reviews</h4>
                </div>
              </div>
              <div className="card-body pt-0">
                <div
                  id="chart-01"
                  className=" chart-01"
                  style={{ minHeight: "195.017px" }}
                >
                  <div
                    id="apexchartst289044x"
                    className="apexcharts-canvas apexchartst289044x apexcharts-theme-light"
                    style={{ width: "484px", height: "195.017px" }}
                  >
                    <svg
                      id="SvgjsSvg1233"
                      width="484"
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
                        width="484"
                        height="195.01666666666668"
                      >
                        <div
                          className="apexcharts-legend"
                          xmlns="http://www.w3.org/1999/xhtml"
                        ></div>
                      </foreignObject>
                      <g
                        id="SvgjsG1235"
                        className="apexcharts-inner apexcharts-graphical"
                        transform="translate(100, 0)"
                      >
                        <defs id="SvgjsDefs1234">
                          <clipPath id="gridRectMaskt289044x">
                            <rect
                              id="SvgjsRect1236"
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
                          <clipPath id="forecastMaskt289044x"></clipPath>
                          <clipPath id="nonForecastMaskt289044x"></clipPath>
                          <clipPath id="gridRectMarkerMaskt289044x">
                            <rect
                              id="SvgjsRect1237"
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
                          <filter
                            id="SvgjsFilter1251"
                            filterUnits="userSpaceOnUse"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                          >
                            <feComponentTransfer
                              id="SvgjsFeComponentTransfer1252"
                              result="SvgjsFeComponentTransfer1252Out"
                              in="SourceGraphic"
                            >
                              <feFuncR
                                id="SvgjsFeFuncR1253"
                                type="linear"
                                slope="0.5"
                              ></feFuncR>
                              <feFuncG
                                id="SvgjsFeFuncG1254"
                                type="linear"
                                slope="0.5"
                              ></feFuncG>
                              <feFuncB
                                id="SvgjsFeFuncB1255"
                                type="linear"
                                slope="0.5"
                              ></feFuncB>
                              <feFuncA
                                id="SvgjsFeFuncA1256"
                                type="identity"
                              ></feFuncA>
                            </feComponentTransfer>
                          </filter>
                        </defs>
                        <g id="SvgjsG1238" className="apexcharts-radialbar">
                          <g id="SvgjsG1239">
                            <g id="SvgjsG1240" className="apexcharts-tracks">
                              <g
                                id="SvgjsG1241"
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
                            <g id="SvgjsG1243">
                              <g
                                id="SvgjsG1248"
                                className="apexcharts-series apexcharts-radial-series"
                                seriesName="PositivexReviews"
                                rel="1"
                              >
                                <path
                                  id="SvgjsPath1249"
                                  d="M 59.88877155792923 173.25001328621235 A 88.44512195121953 88.44512195121953 0 0 1 202.1813380807027 77.27246528323411"
                                  fill="none"
                                  fill-opacity="0.85"
                                  stroke="rgba(255,69,69,0.85)"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="23.37804878048781"
                                  stroke-dasharray="0"
                                  className="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                  selected="true"
                                  filter="url(#SvgjsFilter1251)"
                                  index="0"
                                  j="0"
                                ></path>
                              </g>
                              <circle
                                id="SvgjsCircle1244"
                                r="72.92500000000001"
                                cx="143"
                                cy="143"
                                className="apexcharts-radialbar-hollow"
                                fill="transparent"
                              ></circle>
                              <g
                                id="SvgjsG1245"
                                className="apexcharts-datalabels-group"
                                transform="translate(0, 0) scale(1)"
                                style={{ opacity: "1" }}
                              >
                                <text
                                  id="SvgjsText1246"
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
                                  id="SvgjsText1247"
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
                          id="SvgjsLine1257"
                          x1="0"
                          y1="0"
                          x2="286"
                          y2="0"
                          stroke="#b6b6b6"
                          stroke-dasharray="0"
                          stroke-width="1"
                          stroke-linecap="butt"
                          className="apexcharts-ycrosshairs"
                        ></line>
                        <line
                          id="SvgjsLine1258"
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
                  <svg
                    className="me-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19.9613 2.40839C19.8714 2.33839 19.7668 2.28977 19.6554 2.26621C19.5439 2.24266 19.4286 2.24479 19.3181 2.27245L7.31813 5.27245C7.15587 5.31301 7.01183 5.40664 6.90889 5.53845C6.80596 5.67027 6.75003 5.83271 6.75 5.99995V16.32C6.12435 15.9019 5.37694 15.705 4.62652 15.7604C3.8761 15.8158 3.16571 16.1203 2.60823 16.6257C2.05075 17.1311 1.67814 17.8083 1.54961 18.5497C1.42108 19.2911 1.54399 20.0542 1.89883 20.7177C2.25366 21.3813 2.82007 21.9072 3.50805 22.212C4.19603 22.5167 4.96612 22.5829 5.69598 22.3998C6.42584 22.2168 7.0736 21.7951 7.53635 21.2017C7.99909 20.6084 8.25028 19.8774 8.25 19.125V11.0859L18.75 8.46089V13.32C18.1243 12.9019 17.3769 12.705 16.6265 12.7604C15.8761 12.8158 15.1657 13.1203 14.6082 13.6257C14.0507 14.1311 13.6781 14.8083 13.5496 15.5497C13.4211 16.2911 13.544 17.0542 13.8988 17.7177C14.2537 18.3813 14.8201 18.9072 15.508 19.212C16.196 19.5167 16.9661 19.5829 17.696 19.3998C18.4258 19.2168 19.0736 18.7951 19.5363 18.2017C19.9991 17.6084 20.2503 16.8774 20.25 16.125V2.99995C20.25 2.88588 20.224 2.77331 20.174 2.6708C20.124 2.56829 20.0512 2.47855 19.9613 2.40839ZM4.875 21C4.50416 21 4.14165 20.89 3.83331 20.684C3.52497 20.4779 3.28464 20.1851 3.14273 19.8425C3.00082 19.4999 2.96368 19.1229 3.03603 18.7592C3.10838 18.3954 3.28696 18.0614 3.54918 17.7991C3.8114 17.5369 4.1455 17.3583 4.50921 17.286C4.87292 17.2136 5.24992 17.2508 5.59254 17.3927C5.93515 17.5346 6.22798 17.7749 6.43401 18.0833C6.64004 18.3916 6.75 18.7541 6.75 19.125C6.75 19.6222 6.55246 20.0991 6.20083 20.4508C5.8492 20.8024 5.37229 21 4.875 21ZM8.25 9.53902V6.58589L18.75 3.96089V6.91402L8.25 9.53902ZM16.875 18C16.5042 18 16.1417 17.89 15.8333 17.684C15.525 17.4779 15.2846 17.1851 15.1427 16.8425C15.0008 16.4999 14.9637 16.1229 15.036 15.7592C15.1084 15.3954 15.287 15.0614 15.5492 14.7991C15.8114 14.5369 16.1455 14.3583 16.5092 14.286C16.8729 14.2136 17.2499 14.2508 17.5925 14.3927C17.9351 14.5346 18.228 14.7749 18.434 15.0833C18.64 15.3916 18.75 15.7541 18.75 16.125C18.75 16.3712 18.7015 16.615 18.6073 16.8425C18.5131 17.07 18.3749 17.2767 18.2008 17.4508C18.0267 17.6249 17.82 17.763 17.5925 17.8572C17.3651 17.9515 17.1212 18 16.875 18Z"
                      fill="#547AFF"
                    ></path>
                  </svg>
                  <div style={{ width: "100%" }}>
                    <div className="d-flex justify-content-between  ">
                      <h6 className="mb-2">Songs</h6>
                      <h6 className="text-body">5,674</h6>
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
                  <svg
                    className="me-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM16 27C13.8244 27 11.6977 26.3549 9.88873 25.1462C8.07979 23.9375 6.66989 22.2195 5.83733 20.2095C5.00477 18.1995 4.78693 15.9878 5.21137 13.854C5.63581 11.7202 6.68345 9.7602 8.22183 8.22183C9.76021 6.68345 11.7202 5.6358 13.854 5.21136C15.9878 4.78692 18.1995 5.00476 20.2095 5.83733C22.2195 6.66989 23.9375 8.07979 25.1462 9.88873C26.3549 11.6977 27 13.8244 27 16C26.9967 18.9164 25.8367 21.7123 23.7745 23.7745C21.7123 25.8367 18.9164 26.9967 16 27ZM16 9C14.1441 9.00199 12.3648 9.74012 11.0525 11.0524C9.74013 12.3648 9.00199 14.1441 9.00001 16C9.00001 16.2652 8.89465 16.5196 8.70711 16.7071C8.51958 16.8946 8.26522 17 8.00001 17C7.73479 17 7.48044 16.8946 7.2929 16.7071C7.10536 16.5196 7.00001 16.2652 7.00001 16C7.00265 13.6139 7.95171 11.3262 9.63897 9.63896C11.3262 7.95171 13.6139 7.00265 16 7C16.2652 7 16.5196 7.10536 16.7071 7.29289C16.8946 7.48043 17 7.73478 17 8C17 8.26522 16.8946 8.51957 16.7071 8.70711C16.5196 8.89464 16.2652 9 16 9ZM25 16C24.9974 18.3861 24.0483 20.6738 22.361 22.361C20.6738 24.0483 18.3861 24.9974 16 25C15.7348 25 15.4804 24.8946 15.2929 24.7071C15.1054 24.5196 15 24.2652 15 24C15 23.7348 15.1054 23.4804 15.2929 23.2929C15.4804 23.1054 15.7348 23 16 23C17.8559 22.998 19.6352 22.2599 20.9476 20.9476C22.2599 19.6352 22.998 17.8559 23 16C23 15.7348 23.1054 15.4804 23.2929 15.2929C23.4804 15.1054 23.7348 15 24 15C24.2652 15 24.5196 15.1054 24.7071 15.2929C24.8946 15.4804 25 15.7348 25 16ZM20 16C20 15.2089 19.7654 14.4355 19.3259 13.7777C18.8864 13.1199 18.2616 12.6072 17.5307 12.3045C16.7998 12.0017 15.9956 11.9225 15.2196 12.0769C14.4437 12.2312 13.731 12.6122 13.1716 13.1716C12.6122 13.731 12.2312 14.4437 12.0769 15.2196C11.9225 15.9956 12.0017 16.7998 12.3045 17.5307C12.6072 18.2616 13.1199 18.8864 13.7777 19.3259C14.4355 19.7654 15.2089 20 16 20C17.0609 20 18.0783 19.5786 18.8284 18.8284C19.5786 18.0783 20 17.0609 20 16ZM14 16C14 15.6044 14.1173 15.2178 14.3371 14.8889C14.5568 14.56 14.8692 14.3036 15.2346 14.1522C15.6001 14.0009 16.0022 13.9613 16.3902 14.0384C16.7781 14.1156 17.1345 14.3061 17.4142 14.5858C17.6939 14.8655 17.8844 15.2219 17.9616 15.6098C18.0387 15.9978 17.9991 16.3999 17.8478 16.7654C17.6964 17.1308 17.44 17.4432 17.1111 17.6629C16.7822 17.8827 16.3956 18 16 18C15.4696 18 14.9609 17.7893 14.5858 17.4142C14.2107 17.0391 14 16.5304 14 16Z"
                      fill="#FFC554"
                    ></path>
                  </svg>
                  <div style={{ width: "100%" }}>
                    <div className="d-flex justify-content-between  ">
                      <h6 className="mb-2">Albums</h6>
                      <h6 className="text-body">1,624</h6>
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
                  <svg
                    className="me-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M4 8C4 7.73478 4.10536 7.48043 4.29289 7.29289C4.48043 7.10536 4.73478 7 5 7H27C27.2652 7 27.5196 7.10536 27.7071 7.29289C27.8946 7.48043 28 7.73478 28 8C28 8.26522 27.8946 8.51957 27.7071 8.70711C27.5196 8.89464 27.2652 9 27 9H5C4.73478 9 4.48043 8.89464 4.29289 8.70711C4.10536 8.51957 4 8.26522 4 8ZM5 17H20C20.2652 17 20.5196 16.8946 20.7071 16.7071C20.8946 16.5196 21 16.2652 21 16C21 15.7348 20.8946 15.4804 20.7071 15.2929C20.5196 15.1054 20.2652 15 20 15H5C4.73478 15 4.48043 15.1054 4.29289 15.2929C4.10536 15.4804 4 15.7348 4 16C4 16.2652 4.10536 16.5196 4.29289 16.7071C4.48043 16.8946 4.73478 17 5 17ZM14 23H5C4.73478 23 4.48043 23.1054 4.29289 23.2929C4.10536 23.4804 4 23.7348 4 24C4 24.2652 4.10536 24.5196 4.29289 24.7071C4.48043 24.8946 4.73478 25 5 25H14C14.2652 25 14.5196 24.8946 14.7071 24.7071C14.8946 24.5196 15 24.2652 15 24C15 23.7348 14.8946 23.4804 14.7071 23.2929C14.5196 23.1054 14.2652 23 14 23ZM30.9575 15.7875C30.9198 15.9138 30.8574 16.0313 30.7741 16.1334C30.6907 16.2355 30.588 16.3202 30.4718 16.3824C30.3557 16.4447 30.2283 16.4834 30.0972 16.4963C29.966 16.5091 29.8336 16.496 29.7075 16.4575L26 15.3438V24C26.0014 24.8823 25.7115 25.7405 25.1753 26.4412C24.6391 27.1419 23.8865 27.646 23.0345 27.8752C22.1824 28.1044 21.2785 28.0459 20.4631 27.7088C19.6477 27.3717 18.9664 26.7748 18.525 26.0108C18.0835 25.2468 17.9066 24.3585 18.0218 23.4837C18.1369 22.6089 18.5376 21.7966 19.1617 21.1728C19.7858 20.5491 20.5983 20.1488 21.4732 20.0342C22.348 19.9195 23.2363 20.0969 24 20.5387V14C24 13.8441 24.0365 13.6904 24.1065 13.5511C24.1766 13.4119 24.2782 13.2909 24.4032 13.1979C24.5283 13.1048 24.6734 13.0423 24.827 13.0154C24.9805 12.9884 25.1382 12.9977 25.2875 13.0425L30.2875 14.5425C30.5414 14.6188 30.7546 14.7928 30.8803 15.0263C31.0059 15.2598 31.0337 15.5336 30.9575 15.7875ZM24 24C24 23.6044 23.8827 23.2178 23.6629 22.8889C23.4432 22.56 23.1308 22.3036 22.7654 22.1522C22.3999 22.0009 21.9978 21.9613 21.6098 22.0384C21.2219 22.1156 20.8655 22.3061 20.5858 22.5858C20.3061 22.8655 20.1156 23.2219 20.0384 23.6098C19.9613 23.9978 20.0009 24.3999 20.1522 24.7654C20.3036 25.1308 20.56 25.4432 20.8889 25.6629C21.2178 25.8827 21.6044 26 22 26C22.5304 26 23.0391 25.7893 23.4142 25.4142C23.7893 25.0391 24 24.5304 24 24Z"
                      fill="#00E52E"
                    ></path>
                  </svg>

                  <div style={{ width: "100%" }}>
                    <div className="d-flex justify-content-between  ">
                      <h6 className="mb-2">Playlist</h6>
                      <h6 className="text-body">5,515</h6>
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
            <div className="card">
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
                          src="../../assets/images/dashboard/50.png"
                          id="01"
                          className="img-fluid rounded-3  avatar-52"
                          alt="user-img"
                        />
                        <div className="ms-4">
                          <h6 className="text-capitalize">Jane Cooper</h6>
                          <small className="text-capitalize">
                            janecooper@gmail.com
                          </small>
                        </div>
                      </div>
                      <p className="mb-0 custom-icon">12 hours ago</p>
                    </div>{" "}
                  </li>
                  <li className="mb-4">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <div className="d-flex align-items-center">
                        <img
                          src="../../assets/images/dashboard/51.png"
                          id="02"
                          className="img-fluid rounded-3  avatar-52"
                          alt="user-img"
                        />
                        <div className="ms-4">
                          <h6 className="text-capitalize">wade warren</h6>
                          <small className="text-capitalize">
                            wadewarren@gmail.com
                          </small>
                        </div>
                      </div>
                      <p className="mb-0 custom-icon">18 hours ago</p>
                    </div>{" "}
                  </li>
                  <li className="mb-4">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <div className="d-flex align-items-center">
                        <img
                          src="../../assets/images/dashboard/52.png"
                          id="03"
                          className="img-fluid rounded-3  avatar-52"
                          alt="user-img"
                        />
                        <div className="ms-4">
                          <h6 className="text-capitalize">Jacob jones</h6>
                          <small className="text-capitalize">
                            jacobjones@gmail.com
                          </small>
                        </div>
                      </div>
                      <p className="mb-0 custom-icon">24 hours ago</p>
                    </div>{" "}
                  </li>
                  <li className="mb-4">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <div className="d-flex align-items-center">
                        <img
                          src="../../assets/images/dashboard/53.png"
                          id="04"
                          className="img-fluid rounded-3  avatar-52"
                          alt="user-img"
                        />
                        <div className="ms-4">
                          <h6 className="text-capitalize">Cody fisher</h6>
                          <small className="text-capitalize">
                            codyfisher@gmail.com
                          </small>
                        </div>
                      </div>
                      <p className="mb-0 custom-icon">28 hours ago</p>
                    </div>{" "}
                  </li>
                  <li className="mb-4">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <div className="d-flex align-items-center">
                        <img
                          src="../../assets/images/dashboard/54.png"
                          id="05"
                          className="img-fluid rounded-3  avatar-52"
                          alt="user-img"
                        />
                        <div className="ms-4">
                          <h6 className="text-capitalize">Dianne Russell</h6>
                          <small className="text-capitalize">
                            diannerussell@gmail.com
                          </small>
                        </div>
                      </div>
                      <p className="mb-0 custom-icon">36 hours ago</p>
                    </div>{" "}
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <div className="d-flex align-items-center">
                        <img
                          src="../../assets/images/dashboard/55.png"
                          id="06"
                          className="img-fluid rounded-3  avatar-52"
                          alt="user-img"
                        />
                        <div className="ms-4">
                          <h6 className="text-capitalize">loreal kinas</h6>
                          <small className="text-capitalize">
                            lorealkinas@gmail.com
                          </small>
                        </div>
                      </div>
                      <p className="mb-0 custom-icon">48 hours ago</p>
                    </div>{" "}
                  </li>
                </ui>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
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
                        src="../../assets/images/dashboard/56.png"
                        id="07"
                        className="img-fluid rounded-3  avatar-52"
                        alt="review-img"
                      />
                      <div className="ms-4">
                        <h6 className="text-capitalize mb-2">
                          This song captures my emotions and paints my world
                          with its beautiful melody and heartfelt lyrics. It's
                          truly special.
                        </h6>
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                          <small className="text-capitalize">
                            by Alexa Jonas
                          </small>
                          <small className="text-capitalize custom-icon">
                            02 hours ago
                          </small>
                        </div>
                      </div>
                    </div>{" "}
                  </li>
                  <li className="mb-4">
                    <div className="d-flex">
                      <img
                        src="../../assets/images/dashboard/57.png"
                        id="08"
                        className="img-fluid rounded-3  avatar-52"
                        alt="review-img"
                      />
                      <div className="ms-4">
                        <h6 className="text-capitalize mb-2">
                          This song captures my emotions and paints my world
                          with its beautiful melody and heartfelt lyrics. It's
                          truly special.
                        </h6>
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                          <small className="text-capitalize">
                            by alex Williams
                          </small>
                          <small className="text-capitalize custom-icon">
                            06 hours ago
                          </small>
                        </div>
                      </div>
                    </div>{" "}
                  </li>
                  <li className="mb-4">
                    <div className="d-flex">
                      <img
                        src="../../assets/images/dashboard/58.png"
                        id="09"
                        className="img-fluid rounded-3  avatar-52"
                        alt="review-img"
                      />
                      <div className="ms-4">
                        <h6 className="text-capitalize mb-2">
                          This song captures my emotions and paints my world
                          with its beautiful melody and heartfelt lyrics. It's
                          truly special.
                        </h6>
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                          <small className="text-capitalize">
                            by vibrat sharia
                          </small>
                          <small className="text-capitalize custom-icon">
                            08 hours ago
                          </small>
                        </div>
                      </div>
                    </div>{" "}
                  </li>
                  <li className="mb-4">
                    <div className="d-flex">
                      <img
                        src="../../assets/images/dashboard/59.png"
                        id="10"
                        className="img-fluid rounded-3  avatar-52"
                        alt="review-img"
                      />
                      <div className="ms-4">
                        <h6 className="text-capitalize mb-2">
                          This song captures my emotions and paints my world
                          with its beautiful melody and heartfelt lyrics. It's
                          truly special.
                        </h6>
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                          <small className="text-capitalize">
                            by angle pate
                          </small>
                          <small className="text-capitalize custom-icon">
                            12 hours ago
                          </small>
                        </div>
                      </div>
                    </div>{" "}
                  </li>
                  <li className="">
                    <div className="d-flex">
                      <img
                        src="../../assets/images/dashboard/53.png"
                        id="10"
                        className="img-fluid rounded-3  avatar-52"
                        alt="review-img"
                      />
                      <div className="ms-4">
                        <h6 className="text-capitalize mb-2">
                          This song captures my emotions and paints my world
                          with its beautiful melody and heartfelt lyrics. It's
                          truly special.
                        </h6>
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                          <small className="text-capitalize">
                            by vibrat sharia
                          </small>
                          <small className="text-capitalize custom-icon">
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
